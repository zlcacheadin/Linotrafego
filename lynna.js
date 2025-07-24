
function enviarMensagem() {
    const input = document.getElementById('input').value.trim();
    const resposta = document.getElementById('resposta');
    if (!input) {
        resposta.innerHTML = '<em>Por favor, digite algo para enviar.</em>';
        return;
    }
    // Simulação básica de resposta da IA Lynna
    resposta.innerHTML = '<strong>Lynna:</strong> ' + responder(input);
    document.getElementById('input').value = '';
}

function responder(texto) {
    // Aqui pode ser substituído pela lógica real da IA Lynna
    const respostas = {
        'oi': 'Olá! Como posso ajudar você hoje?',
        'como você está?': 'Estou sempre pronta para ajudar!',
        'tchau': 'Até logo! Volte sempre.',
    };
    const textoMinusculo = texto.toLowerCase();
    return respostas[textoMinusculo] || 'Desculpe, não entendi. Pode reformular?';
}
