// PADRE
class Usuario {
    constructor(){
        
    }

    saludo(){
    }

    login (email,password){
        
    }
    
}

// HIJO alumnos de DAW
class AlumnoASIR { 
    constructor(nombre, email, password){
        this.cursos = []; // aÃ±adimos cursos
        this.activo = false;
    }    
    
    activar (){
    }

    login(email,password){ // sobreescribimos el login
        
    }
    
    AgregarCurso(curso) {
        this.cursos.push(curso);
    }   
}    

class AlumnoDaw { 
        constructor(nombre, email, password){
        this.cursos = []; // aÃ±adimos cursos
        this.activo = false;
     
    }
    activar (){
        
    }

    login(email,password){ 
    }
    
    AgregarCurso(curso) {
        this.cursos.push(curso);
    }  
} 
// INSTANCIAMOS 