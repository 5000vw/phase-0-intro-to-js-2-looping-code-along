// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names,events){
  let thankyouMessage =[];
  for (let i = 0; i <names.length; i++){  
    let name = names[i]; 
      const message=`Thank you, ${name}, for the wonderful ${events} gift!`
      thankyouMessage.push(message)
    } 
  return thankyouMessage
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
function countDown(number){
  for(let i = number; i>=0; i--){
    console.log(i)
  }
  return number;
}
countDown(5)