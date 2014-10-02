var shuffle = require('knuth-shuffle').knuthShuffle



//takes an amount an returns the amount of quarters dimes nickels and pennies
//in an array


exports.change=function (amount){
  if(amount<0){
    console.error("RangeError: amount cannot be negative")
    process.exit()
  }

   quarters=Math.floor(x/25)
   amount=amount % 25
   var dimes=Math.floor(x/10)
   amount= amount % 10
   var nickels=Math.floor(x/5)
   pennies=amount % 5
   return [quarters,dimes,nickels,pennies]

}

//removes quotes from a string

exports.stripQuotes=function (string){
	var quotes_removed= string.replace(/[\" \']/g,"")
    return quotes_removed
}


//scrambles a string so that each character has a random chance at being
//at any part of the string


exports.scramble=function(phrase){
   phrase=phrase.split("")
   phrase=shuffle(phrase)
   return phrase.reduce(function(a, b) {return a + b})
 }

//takes in a range and a function and gives exponents of 2 till the range is met

exports.powersOfTwo = function(range,print_function){
    var number =2
    var exponent=0
    var result= 0
    while (result<range){
      result=Math.pow(number,exponent)
      exponent++
      if (result>range){
        return
      }
      print_function(result)
    }
}


//takes in a string and a function then prints each character of the string
//one by one till the string is made

exports.prefixes=function(string, print_function){
     var adjusted_string=" "+string
     var result=adjusted_string.split("")
     var length=result.length
     var prefix_string=" "
     for(i=0;i<length;i++){
     print_function(prefix_string+=result[i])
     }

 }

//combines two arrays to make a new array that has the values of both the arrays
//in alternating order

exports.interleave= function(array1, array2){
  var array3= []
  if(array1.length>array2.length){
    length=array1.length
  }else if(array2.length>array1.length){
    length=array2.length
  }else{
    length=array1.length
  }

  for(i=0;i<length;i++){
    if(i<array1.length){
      array3.push(array1[i])
    }
    if(i<array2.length){
      array3.push(array2[i])
    }

  }

  
 return array3

}

//takes an array and interleaves it with itself


exports.stutter=function(array){
  return interleave(array,array)
