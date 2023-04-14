const obj = {
    name: 'Riccardo',
    lastname: 'Degni'
  }
  
  const livelloDiFormalità = 'house'
  function checkLivelloDiFormalità() {
    if( livelloDiFormalità == 'work' ) return 'lastname'
    if( livelloDiFormalità == 'house' ) return 'name'
  }
  
  console.log( 'Ciao ' + obj[ checkLivelloDiFormalità() ] )
  /*
  <?php
  
     $values = [
      'name' => 'Riccardo',
      'lastname' => 'Degni',
       0 => 'ciao',
       22 => 'xyz'
      ];
  
      echo $values['lastname'] . ' ' . $values[22];
  ?>
  */