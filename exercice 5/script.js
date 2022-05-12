// function getStringLength(string){
//     let stringLength;
//     if(string.length === 1){
//       stringLength = 'La chaîne contient qu\'un seul caractère';
//     } else {
//       stringLength = `La chaîne contient ${string.length} caractères`;
//     }
//     return stringLength;
//   }

  let getStringLength =  (string) =>
  {
      if (string.length === 1){alert('il y a un seul caractère')}
      else {alert(`il y a ${string.length} caractères`)};
  }

  getStringLength ('7');