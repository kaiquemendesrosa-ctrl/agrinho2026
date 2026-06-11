// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnDestaque');
    const itensLista = document.querySelectorAll('#listaPraticas li');

    // Adiciona o evento de clique no botão
    botao.addEventListener('click', () => {
        itensLista.forEach(item => {
            // Liga/Desliga a classe de destaque nos itens da lista
            item.classList.toggle('classe-destaque');
        });

        // Altera o texto do botão para interatividade
        if (botao.textContent === 'Destacar Tecnologias') {
            botao.textContent = 'Remover Destaque';
        } else {
            botao.textContent = 'Destacar Tecnologias';
        }
    });
});