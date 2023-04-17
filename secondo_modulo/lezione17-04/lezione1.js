/**
  getPost
  parametri: string, string
  return: object
/
// function getPost(title / string /, text / string */) {
//     return {
//         'title': title, 
//         'text': text
//       }
//     }
    
    const m1 = new Map()
    m1.set( 'prop2', 'ciao')
    m1.set( 'prop1', getPost('titolo dell articolo', 'testo dell articolo') )
    
    console.log( m1.get('prop1').title )
    console.clear()
    
    const person1 = new Map([
        ['name', 'Mario'],
        ['lastname', 'Rossi']
    ])
    
    console.log( person1.get('name') )
    
    function iterate(v, k) {
        console.log( ${k}: ${v} )
    }
    
    person1.forEach(iterate)
    
    const a1 = [10, 20, 30, 40]
    
    a1.forEach(function(el, i) {
        console.log( `${i}: ${el} `)
    })
    
    
    function getPost(title, text) {
        return {title: title, text: text}
    }
    
    // const a2 = [
    //     getPost( 'Linguaggio Javascript', 'Il testo dell articolo...' ),
    //     getPost( 'L importanza delle richieste HTTP', 'Il testo dell articolo sulle richieste HTTP...' ),
    //     getPost('Interpolare le stringhe', 'Per interpolare le stringhe...')
    // ]
    
    // const elPosts = document.getElementById('posts')
    // a2.forEach(    function(post) {
    
    //     const el = document.createElement('article')
    //     el.innerHTML = 
    //         <h1>${post.title}</h1>
    //         <div>Testo: ${post.text} </div>
        
    //     elPosts.appendChild( el )

    // }) 