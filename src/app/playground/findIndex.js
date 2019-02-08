var stringArray = ['James','Andrew','Hughes'];

var objectArray= [
  { name: 'James', surname: 'Hughes', age: 34, height, '5.9' },
  { name: 'James', surname: 'Goddard' },
  { name: 'Lewis', surname: 'Goddard' }
]

// [] = list
// {} = object

function callElement(element) {
  console.log(`His first name is ${objectArray[2].name} and his surname is ${objectArray[2].surname} `)
  console.log(`The 2nd element in stringArray is ${stringArray[1]}`);
}

callElement(0);

// function addCharacter(name) {
//     const pos = this.characters.findIndex((char) => {
//       return char.name === name;
//     });
//     console.log(pos);
//   }

//   console.log(characters.slice(1,2));


  // function test (name) {
  //   return  name === name;
  // }

  // function test2 (name) {
  //   if (name === name) {
  //     return true;
  //   }
  // }

  // console.log(test('james'));
  // console.log(test2('james'));



