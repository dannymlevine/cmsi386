//reads a file line by line ignoring the blank space and noted out lines
//and returns the number of lines




var lineReader=require('line-reader')

var lineCount=0


lineReader.eachLine(process.argv[2],function(line,last){

	line=line.trim()
	var result=line.split("")
	if(!line.trim()||result[0]==="/"){
		return
	}else{
		lineCount+=1
	}
	if (last)console.log(lineCount)	
})
