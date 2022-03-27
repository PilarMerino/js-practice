const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    document.getElementById("")
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
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
    movesList = [];
    pokeMoves.value = moves;
    for ( let m in moves ) {
        movesList.push(m + '.-' + moves[m].move.name + '<br>');
    }
    pokeMoves.innerHTML = movesList;
    console.log(movesList);
}

