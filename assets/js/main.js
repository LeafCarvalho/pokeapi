const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <div class="cards">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                         alt="${pokemon.name}">
                    <button onclick="More()" id="button">Saiba mais</button>
                </div>
            </li>
        </div>

        <div class="modal-container">
        <div class="modal">
        <span class="name">${pokemon.name}</span>
          <hr />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text
             ever since the 1500s, when an unknown printer took a galley of 
             type and scrambled it to make a type specimen book. 
          </span>
          <hr />
          <div class="btns">
            <button class="btnOK" onclick="closeMore()">OK</button>
            <button class="btnClose" onclick="closeMore()">Close</button>
          </div>
        </div>
      </div>

    `
}


const loadPokemonItens = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

/* Abrir o card de informações */

const More = () => {
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.classList.add('active')
}

/* Fechar o card de informações */

const closeMore = () => {
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.classList.remove('active')
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

const cards = () => {
    let cards = document.querySelector('.cards')
    cards.style.display = 'block'
}