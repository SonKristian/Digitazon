const obj = { name: 'Riccardo', lastname: 'Degni',
  skills: {
    frontEnd: ['html', 'css', 'js', 'react', { x: { colors: ['blue', 'green'], fn: function() { console.log('hai chiamato fn!') } } }],
    backEnd: ['node', 'java', 'py', 'php']
  }
}

console.log( obj.skills.frontEnd[4].x.colors[1] )
obj.skills.frontEnd[4].x.fn()