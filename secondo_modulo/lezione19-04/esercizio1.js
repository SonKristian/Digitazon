/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

const arr = [
  {
    base: 5,
    altezza: 3,
  },
    
  {
    base: 6,
    altezza: 6,
  },

  {
    base: 2,
    altezza: 4,
  }
];

arr.forEach(function(rectangle  ,i){
   console.log(`area del rettangolo ${i++} è : ${rectangle.base * rectangle.altezza}`)
})


for(let i=0; i < arr.length; i++){
const rectangle = arr[i]
console.log(`area del triangolo ${i+1} è: ${rectangle.base* rectangle.altezza} `)
}