
#takes in a file as an argument and prints the number of nonblank non commented out lines

import sys,string


filename=open(sys.argv[1],'r')

linecount=0

for line in filename.readlines():
    line = line.strip()
    if not line.strip():
        continue
    elif not line.startswith("#"):
        linecount+=1

print linecount     
