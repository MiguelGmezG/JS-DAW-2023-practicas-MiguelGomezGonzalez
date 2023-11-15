// Crear aplicación Express
var express = require("express");
var app = express();
var db = require("./database");
var md5 = require("md5");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Puerto del servidor
var HTTP_PORT = 8000;
// Iniciar servidor
app.listen(HTTP_PORT, () => {
    console.log("Servidor corriendo en el puerto %PORT%".replace("%PORT%", HTTP_PORT));
});

// Ruta principal
app.get("/", (req, res, next) => {
    res.json({ "mensaje": "Ok" });
});

// Obtener todos los usuarios
app.get("/api/users/", (req, res, next) => {
    var sql = "SELECT * FROM user";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message });
            return;
        }
        res.json({
            "mensaje": "éxito",
            "data": rows
        });
    });
});

// Obtener un usuario por ID
app.get("/api/user/:id", (req, res, next) => {
    var sql = "SELECT * FROM user WHERE id = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(500).json({ "error": err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ "mensaje": "Usuario no encontrado" });
            return;
        }
        res.json({
            "mensaje": "éxito",
            "data": row
        });
    });
});

// Respuesta predeterminada para cualquier otra solicitud
app.use(function (req, res) {
    res.status(404).json({ "mensaje": "No encontrado" });
});

// Crear un nuevo usuario
app.post("/api/user/", (req, res, next) => {
    var errores = [];
    if (!req.body.password) {
        errores.push("No se especificó contraseña");
    }
    if (!req.body.email || !isValidEmail(req.body.email)) {
        errores.push("Correo electrónico no válido");
    }
    if (errores.length) {
        res.status(400).json({ "error": errores.join(", ") });
        return;
    }
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password)
    };
    var sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)';
    var params = [data.name, data.email, data.password];
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(500).json({ "error": err.message });
            return;
        }
        res.json({
            "mensaje": "éxito",
            "data": data,
            "id": this.lastID
        });
    });
});

// Actualizar un usuario por ID
app.patch("/api/user/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password ? md5(req.body.password) : null
    };
    db.run(
        `UPDATE user SET 
           name = COALESCE(?,name), 
           email = COALESCE(?,email), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
        [data.name, data.email, data.password, req.params.id],
        function (err, result) {
            if (err) {
                res.status(500).json({ "error": err.message });
                return;
            }
            if (this.changes === 0) {
                res.status(404).json({ "mensaje": "Usuario no encontrado" });
                return;
            }
            res.json({
                "mensaje": "éxito",
                "data": data,
                "changes": this.changes
            });
        });
});

// Eliminar un usuario por ID
app.delete("/api/user/:id", (req, res, next) => {
    db.run(
        'DELETE FROM user WHERE id = ?',
        [req.params.id],
        function (err, result) {
            if (err) {
                res.status(500).json({ "error": err.message });
                return;
            }
            if (this.changes === 0) {
                res.status(404).json({ "mensaje": "Usuario no encontrado" });
                return;
            }
            res.json({ "mensaje": "eliminado", "changes": this.changes });
        });
});
