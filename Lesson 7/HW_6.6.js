const include=(arr, item) => arr.includes(item)

const check = (a,x) => a.includes(x);

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }


  function fixTheMeerkat(arr) {
    return arr.reverse()
   }

   function digitize(n) {
    return n.toString().split('').reverse().map(i=>Number(i))
  }

  const solve = arr => arr.find(e=>!arr.includes(-e));

  //----------------------------------

  function getEvenNumbers(numbersArray){
    return numbersArray.filter(el => !(el % 2))
  }

  function arrayDiff(a, b) {
    let res =[];
  a.forEach(function(item){
             !this.includes(item) ? res.push(item) : res}, b)
    return res;
  }

  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  const one = (arr, fun) => !(arr.filter(fun).length - 1);

  //-------------------------------------

  function divisibleBy(numbers, divisor){
    return numbers.filter(el => !(el % divisor))
 }

 function removeEveryOther(arr){
    return arr.filter((el, i) => !(i % 2) )
   }

   function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(el => !geese.includes(el))
  };


  function well(x){
    let check = x.filter(el => el == 'good').length;
      return check == 0 ? 'Fail!' : check <= 2 ? 'Publish!' : 'I smell a series!';
    }

    var filterLucky=x=>{
        return x.filter(el => String(el).includes('7'));
      }

      function filterEvenLengthWords(words) {
        return words.filter(el => !(el.length % 2) )
      }

      function all( arr, fun ){
        return arr.every(fun)
      }


// ----------------------------------------------------------

function anyArrows(arrows){
    return arrows.length==0 ? false
        : arrows.every(el => el.damaged) ? false
        : true;
  }


  function twoOldestAges(ages){
    return ages.sort((a,b) => b-a).slice(0,2).reverse();
}
//------------------------------------------------

function largestPairSum(numbers)
{
  return numbers.sort((a,b)=>b-a).slice(0,2).reduce((a,b)=>a+b)
}

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b)
  }

  var min = function(list){
    list.sort((a,b)=>a-b).slice(0)
    return list[0];
}

var max = function(list){
    list.sort((a,b)=>b-a).slice(0)
    return list[0];
}

function sortByLength (array) {
    return array.sort((a,b)=>a.length -b.length)
  };

  function solution(nums){
    return nums == null || nums == [] ? [] : nums.sort((a,b)=>a-b)
  }


  function sumOfDifferences(arr) {
    return arr.length <= 1 ? 0 : arr.sort((a,b)=>b-a)[0] - arr.sort((a,b)=>a-b)[0]
  }


  // Smash Words
function smash (words) {
   
    return words.join(' ')
      
  };

  function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

  function printArray(array){
    return array.join(',')
  }

  function toCsvText(array) {
    return array.join('\n')
 }

 function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }

  function withoutLast(arr) {
    // Fix it
     // removes the last element
    
    return arr.slice(0,-1)
  }

//-------------------------------------------------------------------

function take(arr, n) {
    return arr.slice(0,n)
  }

  function getAge(inputString){
    // return correct age (int). Happy coding :) 
      return +inputString.split('')[0]
    }


    function binToDec(bin){
        let res = 0;
        
        bin.split('')
        .map(a=>Number(a))
        .forEach(function(el, ind, bin){
        
        res += el*Math.pow(2,bin.length-ind-1)
        
      });
        return res;
      }

      function hexToDec(hexString){
        //your code here
        return parseInt(hexString, 16);
      }









































