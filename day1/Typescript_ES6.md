# Typescript + ES6

## Knowledge round-up

#### I. Typescript

​	**1. What is TypeScript and Why do we need it?**

+ Typescript is an open sourced programming language developed and being maintained by Microsoft. The developers just typescript, then on the compilation typescript produces javascript as it output.
+ It's a class-based object-oriented language, support class based inheritance, unreliable dynamic typing and lacks in compile time error checking that Javascript can't do.

  **2. How can you get TypeScript and install it?**

+ install using npm:

```bash
# install typescript for the lastest version
$ sudo npm install -g typescript
# check version
$ tsc -v
Version 2.4.1
```

​	**3. How do you compile TypeScript files?**

```bash
#  compile all the .ts files in the current directory
$ tsc [options] *.ts
# compile list .ts files in the current director
$ tsc [options] <listfile.ts>
```

- The options:

  - `-w, --watch ` : Watch input files.
  - `--out <file.js>`:concatinate all the specified files into a single JavaScript file.
  - `--outDir <dir>` : specify the output location or file for the new JavaScript files



  **4. Which Object Oriented terms are supported by TypeScript? Write an example.**

- Classes, interface

- Example:

```typescript
interface Animal {
	age: number;
	eat(food: String);
}

class Dog implements Animal{
	age: number;
	constructor(age: number){
		this.age = age;
	}
	eat(food: String){
		return `The dog eat ${food} has age is {this.age}`;
	}
}

class Pig extends Dog {
	constructor(age: number){
		super(age);
	}
	eat(food: String){
		return `The pig eat ${food} has age is {this.age}`;
	}
}


var dog = new Dog(1);
var pig = new Pig(2);

dog.eat("bone");
pig.eat("rice");
```
**How do you implement inheritance in TypeScript? Write an example.**

- Follow `#4` Example.

### II. ES6

**1. Block scope variable**
```typescript
{
    // any block scope
  var a = 1;
  let b = 2;
  console.log(a);       // 1
  console.log(b);       // 2
}
console.log(a);         // 1
console.log(b);         // Error: undefined


function useVarLet() {
  var c = 1;
  let d = 1;
  if (true) {
    var c = 2;
    let d = 2;
    console.log(c);         // 2
    console.log(d);         // 2
  }
  console.log(c);           // 2
  console.log(d);         // 1
}

useVarLet();
console.log(c);         // Error: undefined
console.log(d);         // Error: undefined
```
**2. Template Literals**
```typescript
var thing = 'phone';
var embededVar = `the ${thing}`; // the phone
var desc = 'very expensive !';
var embededMulti = `${thing} is ${desc.substr(0, 5)+ desc}`;
```
**3. Multi-line strings**
```typescript
var multiLine = `this is first line,
    this is second line`;
/*this is first line,
this is second line */
```
**4. Arrow functions**
```typescript
var arr = [1,2,3].double((num) => { return num * 2; })
//[2, 4, 6]
```
**5. For ... of**
```typescript
let numbers = [1, 2, 3, 'so 4';
 
for (let number of numbers) {
  console.log(number);
}
```
**6. Default parameter**
```typescript
function show (x, a = 1, b = "first") {
  console.log(x, a, b);
}
show("a", 0, "test"); 	//a 0 test
show("a", 0 ); 		// a 0 first
show("a");	//a 1 first

show();	//error , missing parameter x

show ("a", "d", "test")	
//error , parameter second must be number because it has default 1

show ("a", 2, 3)	
//error , parameter third must be string because it has default "first"



```
