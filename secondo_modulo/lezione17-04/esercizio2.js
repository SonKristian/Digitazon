/*
  Ex 2

  creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Panda', maxSpeed: 250, price: 1000

  creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Audi', maxSpeed: 200, price: 5000

  tramite due foreach, stampare le singole caratteristiche delle due automobile.
  DOPO, stampare in output il modello della macchina con la velocità massima più elevata

*/

const map1 = new Map([
['model', 'Panda'],
['maxSpeed', 250],
['price', 1000]
])

const map2 = new Map([
    ['model', 'Audi'],
    ['maxSpeed', 200],
    ['price', 5000]
])

map1.forEach(function(v){
    console.log(`${v}`)
})

map2.forEach(function(v){
    console.log(`${v}`)
})

if(map1.get("maxSpeed") > map2.get("maxSpeed")){
    console.log(map1.get("model"))
}else{
    console.log(map2.get("model"))
}