const a = [
    {name: 'mario', lastname: 'rossi'}, 
    {name: 'luigi', lastname: 'verdi'}, 
    {name: 'peach', lastname: 'pink'}
  ]
  
  a.forEach(function(el, i) {
     console.log( 'iterazione ' + i + ' ' + (el.name + ' ' + el.lastname).toUpperCase() )
  })