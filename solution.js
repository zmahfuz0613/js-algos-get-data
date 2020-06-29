//WORD INCLUDES 
//all letters of first word are in second
const wordIncludes = arr => {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    for (let letter of secondWord) {
      // console.log(letter)
      if (!firstWord.includes(letter)) return false;
    }
    return true;
  };
  console.log(wordIncludes(["hello", "helo"]));