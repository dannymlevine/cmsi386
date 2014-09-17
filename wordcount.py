
#takes in a file through standard input and prints out the frequency of words in the file in alphabetical order

import sys,collections

dictionary={}

for line in sys.stdin.readlines():
    for word in line.lower().split():
    	word=word.strip(".,!-").decode('ascii','ignore')
    	if not word.strip(".,!-"):
           continue 
    	elif word in dictionary:
    		dictionary[word]+=1
    	else:
    		dictionary[word]=1
for values in sorted(dictionary.keys()):
        print values,dictionary[values]
