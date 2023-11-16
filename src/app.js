var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count) {

  if (count <= 0) { return "Number cannot be zero/negative" }

  for (let i = 0; i < count; i++) {
    chocolates.unshift(color)
  }

}
//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  if (number <= 0) return "Number cannot be zero/negative";
  // splice will return an array of removed chocolates
  if (number > chocolates.length) { return "Insufficient chocolates in the dispenser" }

  let remArr = chocolates.splice(0, number)
  // console.log(remArr)
  return remArr;
}

//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates, number) {
  if (number <= 0) return "Number cannot be zero/negative";

  if (number > chocolates.length) { return "Insufficient chocolates in the dispenser" }

  // Can be done using splice also 
  // let remArr = chocolates.splice(chocolates.length()-number,number)
  // return remArr;

  let resArr = [];
  for (let i = 0; i < number; i++) {
    resArr.push(chocolates.pop())
  }
  return resArr;
}
//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number <= 0) return "Number cannot be zero/negative";


  if (number > chocolates.length) { return "Insufficient chocolates in the dispenser" }

  let temp = chocolates.filter((currColor) => {
    return currColor == color;
  })


  return dispenseChocolates(temp, number);
}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  let colorArr = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]

  let result = []

  colorArr.forEach((currColor) => {
    let count = 0;
    chocolates.forEach((currChoco) => {
      if (currColor == currChoco) count++;
    })
    count > 0 ? result.push(count) : null;
  })
  return result;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  let colorMap = {}

  // count the occurrence of each color in chocolates and store it in countMap
  // for (let i = 0; i < chocolates.length; i++) {
  //   let color = chocolates[i];

  //   if (countMap[color]) {
  //     colorMap[color] += 1     // if countMap already has a key of the color , then the value of key will be increased by 1

  //   } else {
  //     colorMap[color] = 1;      // else if countMap doesn't has a key of the color , then create one key for that chocolate and assign the value as 1 

  //   }
  // }

  chocolates.forEach((currChoco)=>{
    colorMap[currChoco] = (colorMap[currChoco]||0)+1 ;
  })

  let sortedColor = Object.keys(colorMap).sort().sort((a,b)=> colorMap[b]-colorMap[a])
 
  let sortedChocos = []
  sortedColor.forEach((currColor)=>{
    for(let i=0;i<colorMap[currColor];i++){ // iterating till the value of key(color ) in colorMap object
      sortedChocos.push(currColor)
    }
  })

  return sortedChocos;
}
//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates,number, color, finalColor){
  if(number<=0) return "Number cannot be zero/negative";

  if(color==finalColor) return "Can't replace the same chocolates" 

 let result = chocolates.map((currChoco)=>{
  if(currChoco==color && number>0){
    currChoco=finalColor;
    number--;
    return currChoco;
  }else {
    return currChoco;
  } 
 })

 return result;
}
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor){
  if(color==finalColor) return "Can't replace the same chocolates"

  let modifiedChocolates = chocolates.map((currChoco) =>currChoco==color?finalColor : currChoco)

  let count=modifiedChocolates.filter(currChoco => currChoco==finalColor).length
  return [count,modifiedChocolates]
}
//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates , color){
  let index = chocolates.indexOf(color)
  chocolates.splice(index,1)
  return chocolates;
}
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates){

  let colorMap = [];
  chocolates.forEach((currChoco)=>{
    colorMap[currChoco] = (colorMap[currChoco]||0)+1 ;
  });
  let countOfEachChocolates = Object.values(colorMap);
  let total = 0;
  countOfEachChocolates.forEach((count)=>{
    if(count>=3){
      total+=count/3;
    }
  })

  return total;
}