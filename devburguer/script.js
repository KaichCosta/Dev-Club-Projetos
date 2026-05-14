const botaoForEach = document.querySelector('#foreach');
const botaoMap = document.querySelector('#map');
const botaoReduce = document.querySelector('#reduce');
const botaoFilter = document.querySelector('#filter');

cards = document.querySelector('main');
let lista = ''

opcoesMenu.forEach((produto) => {
    lista += `
        <div class="card">
            <img src="${produto.src}">
            <div class="descricao-card">
                <h2>${produto.nome}</h2>
                <p class="valor">R$ ${produto.preco.toFixed(2)}</p>
            </div>
        </div>
    `;
})

botaoForEach.addEventListener('click', () => {
    cards.innerHTML = lista
})

botaoMap.addEventListener('click', () => {
    const cardsComDesconto = opcoesMenu.map((produto) => {
        const calculoComDesconto = produto.preco * 0.9
        return `
            <div class="card">
                <img src="${produto.src}">
                <div class="descricao-card">
                    <h2>${produto.nome}</h2>
                    <p class="valor">R$ ${calculoComDesconto.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    cards.innerHTML = cardsComDesconto.join('');
});

botaoReduce.addEventListener('click', () => {
    const somarCards = opcoesMenu.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
    const somaCard = `
        <div class="soma-card">
            <h2> O Total da Soma de todos os Sanduíches é</h2>
            <p class="valor">R$ ${somarCards.toFixed(2)}</p>
        </div>
    `;
    cards.innerHTML = somaCard;
});

botaoFilter.addEventListener('click', () => {
    const veganoCards = opcoesMenu.filter(produto => produto.vegano === true).map((produto) => {
        return `
            <div class="card">
                <img src="${produto.src}">
                <div class="descricao-card">
                    <h2>${produto.nome}</h2>
                    <p class="valor">R$ ${produto.preco.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    cards.innerHTML = veganoCards.join('');
});
