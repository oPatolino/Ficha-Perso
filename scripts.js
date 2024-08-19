// Função para salvar os dados no localStorage
function saveData() {
    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        localStorage.setItem(field.id, field.value);
    });
}

// Função para carregar os dados do localStorage
function loadData() {
    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        if (localStorage.getItem(field.id)) {
            field.value = localStorage.getItem(field.id);
        }
    });
    updateSG();
}

// Função para limpar os dados do localStorage e os campos
function clearData() {
    localStorage.clear();
    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        field.value = '';
    });
    updateSG();
}

// Função para atualizar o valor de SG
function updateSG() {
    const touch = parseInt(document.getElementById('touch-current').value) || 0;
    const vision = parseInt(document.getElementById('vision-current').value) || 0;
    const hearing = parseInt(document.getElementById('hearing-current').value) || 0;

    const sg = Math.floor((touch + vision + hearing) / 3);
    document.getElementById('luck-current').value = sg;
}

// Função para rolar dados
function rollDice(sides) {
    const quantity = parseInt(document.getElementById(`d${sides}-quantity`).value) || 1;
    const results = [];
    for (let i = 0; i < quantity; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }
    document.getElementById(`d${sides}-results`).innerHTML = results.join(', ');
}

// Atualiza o valor de SG quando os campos são alterados
document.getElementById('touch-current').addEventListener('input', updateSG);
document.getElementById('vision-current').addEventListener('input', updateSG);
document.getElementById('hearing-current').addEventListener('input', updateSG);

// Carrega os dados ao iniciar a página
window.onload = loadData;

// Salva os dados ao sair da página
window.onbeforeunload = saveData;