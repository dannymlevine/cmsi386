//Reads a file from stdin counts the words in the file
//then returns the frequency in which each word appears


fs=require('fs');

var wordbank=[]
var file=fs.readFileSync('/dev/stdin').toString()
file=file.toLowerCase()
file=file.trim()
file=file.replace(/[^a-z\']/g," ")
words=file.split(" ")
words=words.filter(function(e){{return e}})
words=words.sort()
    for(i=0;i<words.length;i++){
    	if(wordbank.indexOf(words[i])<0){
    		wordbank.push(words[i])
    		wordbank[words[i]]=1
    	}else{
    		wordbank[words[i]]++
    	}
    }

for(i=0;i<wordbank.length;i++){
console.log(wordbank[i]+" "+wordbank[wordbank[i]])

}
