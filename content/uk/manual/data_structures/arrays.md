---
title: "Масиви"
date: 2019-08-23T12:52:36+06:00
type: "manual"
tags: ["Data Structure", "Arrays", "Development"]
image: images/manual/arrays.jpg
description : "Arrays"
---
### Arrays
Arrays a kind of data structure that can store a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

Instead of declaring individual variables, such as number0, number1, ..., and number99, you declare one array variable such as numbers and use numbers[0], numbers[1], and ..., numbers[99] to represent individual variables. A specific element in an array is accessed by an index.

All arrays consist of contiguous memory locations. The lowest address corresponds to the first element and the highest address to the last element.

#### [IMAGE:]

### Declaring Arrays
To declare an array in C, a programmer specifies the type of the elements and the number of elements required by an array as follows −
```C
type arrayName [ arraySize ];
```
This is called a single-dimensional array. The arraySize must be an integer constant greater than zero and type can be any valid C data type. For example, to declare a 10-element array called balance of type double, use this statement −

```C
double balance[10];
```

Here balance is a variable array which is sufficient to hold up to 10 double numbers.

### Initializing Arrays
You can initialize an array in C either one by one or using a single statement as follows −
```C
double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};
```
The number of values between braces { } cannot be larger than the number of elements that we declare for the array between square brackets [ ].

If you omit the size of the array, an array just big enough to hold the initialization is created. Therefore, if you write −
```C
double balance[] = {1000.0, 2.0, 3.4, 7.0, 50.0};
```
You will create exactly the same array as you did in the previous example. Following is an example to assign a single element of the array −
```C
balance[4] = 50.0;
```
The above statement assigns the 5th element in the array with a value of 50.0. All arrays have 0 as the index of their first element which is also called the base index and the last index of an array will be total size of the array minus 1. Shown below is the pictorial representation of the array we discussed above −

#### [IMAGE:Array Presentation]
Accessing Array Elements
An element is accessed by indexing the array name. This is done by placing the index of the element within square brackets after the name of the array. For example −

```C
double salary = balance[9];
```

The above statement will take the 10th element from the array and assign the value to salary variable. The following example Shows how to use all the three above mentioned concepts viz. declaration, assignment, and accessing arrays −

<script src="//onlinegdb.com/embed/js/H1UTbctrr?theme=dark"></script>

### Arrays in Detail
Arrays are important to C and should need a lot more attention. The following important concepts related to array should be clear to a C programmer.

### Multi-dimensional Arrays in C

C programming language allows multidimensional arrays. Here is the general form of a multidimensional array declaration −
```C
type name[size1][size2]...[sizeN];
```
For example, the following declaration creates a three dimensional integer array −
```C
int threedim[5][10][4];
```
### Two-dimensional Arrays

The simplest form of multidimensional array is the two-dimensional array. A two-dimensional array is, in essence, a list of one-dimensional arrays. To declare a two-dimensional integer array of size [x][y], you would write something as follows −
```C
type arrayName [ x ][ y ];
```
Where type can be any valid C data type and arrayName will be a valid C identifier. A two-dimensional array can be considered as a table which will have x number of rows and y number of columns. A two-dimensional array a, which contains three rows and four columns can be shown as follows:

<script src="//onlinegdb.com/embed/js/BkC7U5KBH?theme=dark"></script>

As explained above, you can have arrays with any number of dimensions, although it is likely that most of the arrays you create will be of one or two dimensions.

### Passing Arrays as Function Arguments in C

If you want to pass a single-dimension array as an argument in a function, you would have to declare a formal parameter in one of following three ways and all three declaration methods produce similar results because each tells the compiler that an integer pointer is going to be received. Similarly, you can pass multi-dimensional arrays as formal parameters.

#### Way-1
Formal parameters as a pointer:
```C
void myFunction(int *param) {
   .
   .
   .
}
```
#### Way-2
Formal parameters as a sized array:
```C
void myFunction(int param[10]) {
   .
   .
   .
}
```

#### Way-3
Formal parameters as an unsized array:
```C
void myFunction(int param[]) {
   .
   .
   .
}
```
#### Example
Now, consider the following function, which takes an array as an argument along with another argument and based on the passed arguments, it returns the average of the numbers passed through the array as follows
```C
double getAverage(int arr[], int size) {

   int i;
   double avg;
   double sum = 0;

   for (i = 0; i < size; ++i) {
      sum += arr[i];
   }

   avg = sum / size;

   return avg;
}
```
Now, let us call the above function as follow:

<script src="//onlinegdb.com/embed/js/SJUz_9FHr?theme=dark"></script>

As you can see, the length of the array doesn't matter as far as the function is concerned because C performs no bounds checking for formal parameters.