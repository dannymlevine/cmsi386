from random import shuffle
import operator
from itertools import izip_longest,repeat


#a fuction uses divmod to find the amount of quarters,dimes,nickels and pennies in a specified amount

def change(amount):
    if amount < 0: raise ValueError, "amount cannot be negative"
    quarters,amount=divmod(amount,25)
    dimes,amount=divmod(amount,10)
    nickels,amount=divmod(amount,5)
    pennies=amount
    return (quarters,dimes,nickels,pennies)


#function that takes in a string and removes all quotes then returns a string surrounded by qoutes
def strip_quotes(string):
	string=string.replace("'","").replace('"','')
	return "'" + string +"'"

#function that takes a phrase and shuffles the characters around in a random order

def scramble(phrase):
	phrase_list=list(phrase)
	shuffle(phrase_list)
	new_phrase=''.join(phrase_list)
	return new_phrase


#a generator that takes in a number to be the range and finds exponents of 2 up to the range
def powers_of_two(number):
    for exponent in range(number):
       if 2**exponent>number:
          return
       else:
          yield 2**exponent


#a generator that takes in a string and produces an identical string letter by letter using the old string  
def prefixes(string):
    new_string=" "
    print new_string
    for elements in range(len(string)):
       new_string+=string[elements]
       yield new_string

#takes two lists and combines them through interleaving
def interleave(list1,list2):
  list3=reduce(operator.__add__, list(izip_longest(list1,list2,fillvalue="")))
  return [element for element in list3 if not element == '']
	
  
#takes in a list and duplicates each element of the list
def stutter(list_to_double):
   return reduce(operator.__add__,[list(repeat(element,2)) for element in list_to_double])
