// stampare una scacchiera

// per stampare una riga:
// ricevo in ingresso l, che e' la lunghezza della riga
// inizio con il cancelletto e lo memorizzo in RIGA
// ULTIMO e' true
// ciclo da 0 a l escluso
//   metto dentro RIGA un cerchio se ULTIMO e' true
//   oppure metto dentro RIGA un cancelletto se ULTIMO e' false
//   inverto ULTIMO
// ho finito

function row(l, toggle) {
    let riga = ''
    for (let i = 0; i < l; i++) {
      if (toggle) {
        riga += 'o'
      } else {
        riga += '#'
      }
      toggle = !toggle
    }
    return riga
  }
  
  // disegnare la scacchiera
  // utilizzo row chiamandolo l volte
  // detto in altro modo: ciclo l volte e ad ogni iterazione chiamo row passandogli l e stampo il risultato
  
  function chessboard(l) {
    let toggle = false
    for (let i = 0; i < l; i++) {
      console.log(row(l, toggle))
      toggle = !toggle
    }
  }
  
  chessboard(6)