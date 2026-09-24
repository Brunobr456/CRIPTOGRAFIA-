// ======================================
// CRIPTOGRAFIA
// ======================================

function criptografar() {

    const mensagem = document.getElementById("mensagem").value;

    if (mensagem.trim() === "") {
        mostrarStatus("⚠️ Digite uma mensagem primeiro.");
        return;
    }

    // Converte cada caractere para seu código
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {

        const codigo = mensagem.charCodeAt(i);

        resultado += String.fromCharCode(codigo + 3);
    }

    document.getElementById("resultado").value = resultado;

    mostrarStatus("✅ Mensagem criptografada!");
}


// ======================================
// DESCRIPTOGRAFIA
// ======================================

function descriptografar() {

    const mensagem = document.getElementById("mensagem").value;

    if (mensagem.trim() === "") {
        mostrarStatus("⚠️ Digite a mensagem criptografada.");
        return;
    }

    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {

        const codigo = mensagem.charCodeAt(i);

        resultado += String.fromCharCode(codigo - 3);
    }

    document.getElementById("resultado").value = resultado;

    mostrarStatus("✅ Mensagem descriptografada!");
}


// ======================================
// HASH SHA-256
// ======================================

async function gerarHash() {

    const mensagem = document.getElementById("mensagem").value;

    if (mensagem.trim() === "") {
        mostrarStatus("⚠️ Digite uma mensagem primeiro.");
        return;
    }

    const dados = new TextEncoder().encode(mensagem);

    const hashBuffer =
        await crypto.subtle.digest("SHA-256", dados);

    const hashArray =
        Array.from(new Uint8Array(hashBuffer));

    const hashHex =
        hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    document.getElementById("resultado").value = hashHex;

    mostrarStatus("✅ Hash SHA-256 gerado!");
}


// ======================================
// COPIAR RESULTADO
// ======================================

function copiarResultado() {

    const resultado =
        document.getElementById("resultado").value;

    if (resultado === "") {
        mostrarStatus("⚠️ Não existe resultado para copiar.");
        return;
    }

    navigator.clipboard.writeText(resultado);

    mostrarStatus("📋 Resultado copiado!");
}


// ======================================
// MENSAGEM DE STATUS
// ======================================

function mostrarStatus(texto) {

    document.getElementById("status").textContent = texto;
}
