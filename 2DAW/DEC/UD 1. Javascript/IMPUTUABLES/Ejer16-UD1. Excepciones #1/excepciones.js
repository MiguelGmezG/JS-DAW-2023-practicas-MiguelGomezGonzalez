var commit= new Array(10);
var comitsCorrectos=0;
var comitsIncorrectos=0;
function esCorrecto() {
    if (Math.random()>0.3) {
        return true;
    }else{
throw new Error();

    }
}
for (let index = 0; index < commit.length; index++) {
    try {
        comitsCorrectos++;
        console.log("El commit "+index+" es correcto");
    } catch (error) {
        comitsIncorrectos++;
        console.log("El commit "+index+" es incorrecto");
    }
    
}
console.log("Commits totales= "+commit);
console.log("Commits correctos= "+comitsCorrectos);
console.log("Commits incorrectos= "+comitsIncorrectos);