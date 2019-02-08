characters = ['James','Andrew','Hughes'];

function addCharacter(name) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    console.log(pos);
  }

  console.log(characters.slice(1,2));


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
