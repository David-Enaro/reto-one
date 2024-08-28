function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDesencriptado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}