#Homework 3#
####Daniel Levine  
####Ray Toal

## Problem 1

Give an abstract syntax tree for the following C expression:
(a = 3) >= m >= ! & 4 * ~ 6 || y %= 7 ^ 6 & p
####Answer:

![syntax tree](https://www.lucidchart.com/publicSegments/view/54615daa-c38c-4bbc-bbc2-4a870a00c2e5/image.png =500x)


## Problem 2
JavaScript's implicit semicolon insertion is often considered to be poorly designed because the following four cases aren't exactly intuitive:

```
function f() {
    return
       {x: 5}
}
```

```
var b = 8
var a = b + b
(4 + 5).toString(16)
```

```
var place = "mundo"
["Hola", "Ciao"].forEach(function (command) {
  alert(command + ", " + place)
})
```

```
var sayHello = function () {
    alert("Hello")
}
(function() {
    alert("Goodbye")
}())
```

What is being illustrated in each of the above? Please describe, for each case, what people might expect the code to be doing (given the way the code is formatted), and what the code actually does. In addition, note that Go, Python, Scala, and Ruby all allow line endings to end statements and you don't hear people complaining about those languages the way they do about JavaScript. Pick one of these four languages and show why they handle the four "problematic" cases of JavaScript.

###a)
One might expect the program when run to return an object of {x:5} ,however, because return and {x:5} are on separate lines the semicolon is inserted after the return leading to the function to return undefined.

```
def f():
	return
		{x:5}
print f()
```

Python handles this by returning a null object whereas with JavaScript it doesn't know what it is so it is undefined


###b)
In this problem we expect for b to be 8 and a to be b+b which would be 16 and finally the program should take the toString method of 4+5 and return 9 in hexadecimal. Because of the implicit semicolon problem in javaScript what really happens is b is set to 8 and then a semicolon is placed, but for the second assignment no semicolon is placed after the second b so we get a typeError that says a number is not a function.

```
b=8
a=b+b
hex(4+5)
‘0x9'
```

Python handles this problem by using line endings to to end the statements. This leads to the expected result.
###c)
 For this program we would expect the variable place to be assigned the string mundo then for each of the variables in the array run a function that alerts the user of each element of the array a comma then the value of the variable place. For instance in this program we would expect to see “Hola,mundo” and “Ciao,mundo”. What we actually see is a typeError because JavaScript doesn't place a semicolon after mundo so the first statement doesn't end leading to a typeError.

```
place=“mundo”
greeting=["Hola","Ciao"]
for x in greeting:
    print x+","+place
```

Python handles this issue by making a new line end the statement
###d)
In this program what we expect to happen is the the variable sayHello should be set to the function that alerts Hello  and the function that alerts Goodbye is should be called. What really happens though is that the since javaScript does not insert a semicolon after alert(“Hello”) end curly brace this causes the call after the alert(“Goodbye”) really calls both functions first the alert Goodbye then the alert Hello and sayHello is undefined.

```
def sayHello():
     print "Hello"
def function():
     print "Goodbye" 
function()
```

Python handles this issue by making 2 functions 

## Problem 3
Give an example of a program in C that would not work correctly if local variables were allocated in static storage as opposed to the stack. For the purposes of this question, local variables do not include parameters.
####Answer:

```
#include <iostream>
using namespace std;
void countdown() {
   int static y = 10;
   y-=1;
   cout<<y<<endl;
   if(y==0){
  	 return;
   };
   countdown();
 } 
int main(){
countdown();
countdown();
}
```
The first time the function f() is called it works fine displaying each number from 10 in descending order. When f() is called a second time the function it goes negative and fails because the y value is not re-initialized the second time the function is called because it is a static variable.

## Problem 4
Consider the following pseudocode:

```
var x = 100;
function setX(n) {x = n;}
function printX() {console.log(x);}
function first() {setX(1); printX();}
function second() {var x; setX(2); printX();}
setX(0);
first();
printX();
second();
printX();
```
What does this program print if the language uses static scoping? What does it print with dynamic scoping? Why?
####Answer:

In a statically scoped language the output of this program would be 1,1,2,2 when run the global variable is first set to 0 then the at first the global variable is set to 1 and printed then it is printed again then the function second is called setting the global variable to 2 and then printed then the global variable is printed again.
    
In a dynamically scoped language the output would be 1,1,2,1 in this program the global variable is set to 0 then it is set to 1 then printed then it is printed again. Then the local variable is set to 2 when second is called and it is printed then the global variable is printed.

## Problem 5

Translate the following expression into (a) postfix and (b) prefix notation, in both cases without using parentheses:

```
(-b + sqrt(4 × a × c)) / (2 × a)
```

Do you need a special symbol for unary negation? Why or why not?
####Answer:

```
Infix:(-b + sqrt(4 × a × c)) / (2 × a)
```
```
postfix:b~4a*c*sqrt+2a*/
```
```
prefix: /+~bsqrt**4ac*2a
```
Yes you need a special symbol for unary negation(represented by a ~) because if not the equation will not be evaluated correctly because when the unary negation is being processed it will think its a binary negative and try to minus it from another value.

## Problem 6
The expression a–f(b)–c*d can produce different values depending on how a compiler decides to order, or even parallelize operations. Give a small program in the language of your choice (or even one of your own design) that would produce different values for this expression for different evaluation orders. As you learned in class, "different evaluation orders" does not mean that the compiler can violate the precedence and associativity rules of the language. It simply means operands can be evaluated in any order before an operation is applied.
####Answer:

```
a=5
b=10
c=15
d=20

def f(b):
  global d
  d+=1
  return d
  
print a-f(b)-c*d
```

In this python program if the function is f(b) is evaluated first the problem answer is -331
However if the expression is evaluated in parallel with c*d happening at the same time as a-f(b) the equation would come out to -16-300 which evaluates to -316.

## Problem 7
Write the interleave function from the previous three assignments in C++, using C-style arrays.

####Answer:

```
template<typename T>
T *interleave(T ar1[],int length1,T ar2[],int length2){
	int length=length1+length2;
	T ar3[length];
	int loc=0;
	for(int i=0;i<length;i++){
		if(i<length1){
			ar3[loc]=ar1[i];
			loc++;
		}
		if(i<length2){
			ar3[loc]=ar2[i];
			loc++;
		}
	}
	T * interleavedArray=ar3;
	return interleavedArray;
}
```
## Problem 8
Write the interleave function from the previous three assignments in C++, using C++ vectors (from the Standard Library).

####Answer:

```
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
template<typename T>
vector<T> interleave(vector<T> a,vector<T> b){
	vector<T> combined_vectors;
	int length=max(a.size(),b.size());
	for(int i=0;i<length;i++){
		if(i<a.size()){
			combined_vectors.push_back(a[i]);
		}
		if(i<b.size()){
			combined_vectors.push_back(b[i]);
		}
	}
	return combined_vectors;
}
```


## Problem 9
Consider the problem of determining whether two trees have the same fringe: the same set of leaves in the same order, regardless of internal structure. An obvious way to solve this problem is to write a function fringe that takes a tree as argument and returns an ordered list of its leaves. Then we can say

```
def same_fringe(t1, t2):
    return fringe(t1) == fringe(t2)
```
Here's a Python tree class (a node, really), with a fringe method:

```
class Node(object):
    def __init__(self, data, children):
        self.data = data
        self.children = children
    def fringe(self):
        result = []
        if self.children == []:
            result.append(self.data)
        for node in self.children:
            result.extend(node.fringe())
        return result
```
        
How efficient is same_fringe when the trees differ in their first few leaves?  
If you answered part (a) correctly, you know that what you need for efficiency is laziness. Write an efficient (lazy) version of same_fringe in Python.  
Write an efficient (lazy) version of same_fringe in JavaScript.
####Answer:

#####a) 
same_fringe is inefficient because even if it encounter 2 leaves that don't match near the first few leaves it will continue to proceed through each tree even though it already knows the answer will be false.

#####b)
Worked on with Flanders Lorton.

```
def same_fringe(t1,t2):
	fringe1=t1.fringe()
	fringe2=t2.fringe()
	for x in (len(fringe1)):
		if fringe1[x]!=fringe2[x]:
			return False
	return True
```

#####c)
Worked on with Flanders Lorton

```
function same_fringe(t1,t2){
	var fringe1=t1.fringe();
	var fringe2=t2.fringe();
	for(var i=0;i<fringe1.length;i++){
		if (fringe1[i]!=fringe2[i]){
			return false;
     }
	return true;
   }
}
```






## Problem 10
One of the freshmen had trouble remembering the conditional operator in C so she tried to wrap it inside of a function with a readable name, so she wrote:

```
template <class T> bool if_then_else(bool x, T y, T z) {
    return x ? y : z;
}
```
Why is this wrong? Would a macro have helped? Why? Show the macro.
####Answer:

This is wrong because the if a function is passed into y or z it will be unnecessarily evaluated because functions have eager evaluation.  
yes. Because Macros are evaluate lazy so the function that is unnecessary would not be evaluated

```
#define IF_THEN_ELSE(x,y,z) (return (x)?(y):(z))
```

