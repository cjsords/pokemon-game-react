const axios = require('axios');

let bench = [];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
export async function getPokemon() {
    let count = 6;

    while (count > 0) {
        const randomId = randomIntFromInterval(1, 151)        
        let path = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
        let response = await axios.get(path);
        let data = response.data;
        bench.push(data);
        count -= 1;
    }

    console.log(bench);
};


