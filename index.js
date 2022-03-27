var namesList;
var pokeName;
var indice = 0;
const retrieveAllPokemons = () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1126';
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        namesList = data.results;
    })
}

retrieveAllPokemons();

const retievePokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    fetchPokemon(pokeNameInput.value);
}


const retievePokemonByList = (flag) => {
    if (flag == 0){
        if(indice>0){
            indice--;
        }
    }
    else{
        if(indice<1126){
            indice++;
        }
    }
    let pokeN = namesList[indice].name;
    fetchPokemon(pokeN);
}

const fetchPokemon = (name) => {
    let pokeName = name.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            setName(data.name);
            pokeType(data.types[0].type.name);
            pokeStatistics(data.stats)
            pokeMoves(data.moves);

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const setName = (name) => {
    const pokeName = document.getElementById("name");
    pokeName.innerHTML = name;
}

const pokeType= (type) => {
    const pokeType = document.getElementById("type");
    pokeType.innerHTML = type;
    console.log(pokeType.value);
}

const pokeStatistics= (statistics) => {
    for (let o in statistics){
        document.getElementById('bs' + o).innerHTML= statistics[o].base_stat;
        document.getElementById('eff' + o).innerHTML= statistics[o].effort;
    }
}

const pokeMoves= (moves) => {
    const pokeMoves = document.getElementById("moves");
    var movesList = '';
    for ( let m in moves ) {
        movesList += m + '.-' + moves[m].move.name + '<br>';
    }
    pokeMoves.innerHTML = movesList;
    console.log(movesList);
}

