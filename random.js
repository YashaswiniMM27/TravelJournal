//1
function squaredArray(){
    const arr =[1,2,3,4,5];
    console.log(arr);

    const squares = arr.map((num) => {
        return num * num;
    })
    console.log(squares);
}

squaredArray();

//2
function capitalized(){
    const names = ["alex", "bob", "charlie", "max"];
    console.log(names);

    const caps = names.map((name) => {
        return name[0].toUpperCase() + name.slice(1);
    })
    console.log(caps);
}

capitalized();

//3
function wrapParagraph(){
    const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];
    console.log(pokemons);


    const par = pokemons.map((pokemon) => {
        return `<p>${pokemon}</p>`
    })

    console.log(par);
}

wrapParagraph();