const texto = document.querySelector('#texto');
const mensaje = document.querySelector('#mensaje');

let llavesCifrados = [ ['e','enter'], ['i','imes'],  ['a','ai'], ['o','ober'], ['u','ufat'] ];
let sinAcentos = [ ['á','a'], ['é','e'],  ['í','i'], ['ó','o'], ['ú','u'] ];
//console.table(llavesCifrados);

function btnCifrar(){
    const textoCifrado = cifrar(texto.value.toLowerCase());
        
    texto.value = "";
    mensaje.style.backgroundImage = 'none';
    mensaje.value = textoCifrado;
    validarTextoImagen();
}

function btnDesCifrar(){
    const textoDescifrado = descifrar(texto.value);
    texto.value = "";
    mensaje.style.backgroundImage = 'none';
    mensaje.value = textoDescifrado;
    validarTextoImagen();
}

function cifrar(textoC){
    textoC = quitarAcentos(textoC);

    for( let i = 0; i < llavesCifrados.length; i++){
        if( textoC.includes(llavesCifrados[i][0]) ){
            textoC = textoC.replaceAll(llavesCifrados[i][0], llavesCifrados[i][1]);
        }
    }

    return textoC;

}

function descifrar(textoD){
    textoD = quitarAcentos(textoD);
    for( let i = 0; i < llavesCifrados.length; i++){
        if( textoD.includes(llavesCifrados[i][1]) ){
            textoD = textoD.replaceAll(llavesCifrados[i][1], llavesCifrados[i][0]);
        }
    }

    return textoD;

}

function quitarAcentos(textoA){
    for( let i = 0; i < sinAcentos.length; i++){
        if( textoA.includes(sinAcentos[i][0]) ){
            textoA = textoA.replaceAll(sinAcentos[i][0], sinAcentos[i][1]);
        }
    }

    return textoA;
} 

function btnCopiar(){
    console.log
    if(mensaje.value.length > 0 ){
        mensaje.select();
        document.execCommand('copy');
    }
    
}

function validarTextoImagen(){
    
    if( mensaje.value.length == 0 ){
        mensaje.style.backgroundImage = "url('images/Muneco.png')";
    }else{
        mensaje.style.backgroundImage = 'none';    
    }
}