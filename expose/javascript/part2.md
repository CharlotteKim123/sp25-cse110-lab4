# Answers

## 1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

Line 12 returns 3 because console.log(i) was returned after the loop was completed, and the loop counter would be 3 because prices.length was 3.

## 2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

Line 13 return 150. We start with prices = [100, 200, 300] and discount = 0.5. During the first iteration (i = 0), we calculate discountedPrice = 100 * (1 - 0.5) = 100 * 0.5 = 50. During the second iteration (i = 1), we calculate discountedPrice = 200 * (1 - 0.5) = 200 * 0.5 = 100. During the third iteration (i = 2), we calculate discountedPrice = 300 * (1 - 0.5) = 300 * 0.5 = 150. Because the next iteration is i = 3, which is not less than prices.length, the loop stops there, so discountedPrice = 150, hence why line 13 returns 150.

## 3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

Line 14 return 150. We start with prices = [100, 200, 300] and discount = 0.5. During the first iteration (i = 0), we calculate discountedPrice = 100 * (1 - 0.5) = 100 * 0.5 = 50. Then, we calculate finalPrice = Math.round(50 * 100) / 100 = 50. During the second iteration (i = 1), we calculate discountedPrice = 200 * (1 - 0.5) = 200 * 0.5 = 100. Then, we calculate finalPrice = Math.round(100 * 100) / 100 = 100. During the third iteration (i = 2), we calculate discountedPrice = 300 * (1 - 0.5) = 300 * 0.5 = 150. Then, we calculate finalPrice = Math.round(150 * 100) / 100 = 150. Because the next iteration is i = 3, which is not less than prices.length, the loop stops there, so finalPrice = 150, hence why line 14 returns 150.

## 4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^

This function returns [50, 100, 150], although nothing will return in the console. As explained above, in iteration 1 (i = 0), discountedPrice = 50 and finalPrice = 50. Then we push the final price into discounted, resulting in [50]. In iteration 2 (i = 1), discountedPrice = 100 and finalPrice = 100. Then we push the final price into discounted, resulting in [50, 100]. In iteration 3 (i = 2), discountedPrice = 150 and finalPrice = 150. Then we push the final price into discounted, resulting in [50, 100, 150]. Then, the program goes to return discounted, which returns the array [50, 100, 150].

## 5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

Line 12 will return an error because var has no block scope, so it was able to return i in the console even though it was not declared outside of the loop. However, let does not allow that, so it will return an error.

## 6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

Line 13 will return an error because var has no block scope, so it was able to return discountedPrice in the console even though it was not declared outside of the loop. However, let does not allow that, so it will return an error.

## 7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

Line 14 will return 150 because finalPrice was declared outside of the loop, so it was able to iterate through the loop and reassign finalPrice as 150 (explained in the previous questions).

## 8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

This function returns [50, 100, 150], although nothing will return in the console. As explained in question 4, in iteration 1 (i = 0), discountedPrice = 50, finalPrice = 50, and discounted = [50]. In iteration 2 (i = 1), discountedPrice = 100, finalPrice = 100, discounted = [50, 100]. In iteration 3 (i = 2), discountedPrice = 150, finalPrice = 150, discounted = [50, 100, 150]. Then, the program goes to return discounted, which returns the array [50, 100, 150].

## 9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^

Line 11 will return an error because i was not declared outside of the loop since i is a let variable, which does not allow that.

## 10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

Line 12 will return 3 becaause length is declared outside of the loop and the inputted array of the parameter prices has length 3. However, length is a constant variable, so it will always have the value 3, hence line 12 returning 3.

## 11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

This function returns [50, 100, 150], although nothing will return in the console. In iteration 1 (i = 0), discountedPrice = 50. Then we push discountedPrice into discounted, resulting in [50]. In iteration 2 (i = 1), discountedPrice = 100. Then we push discountedPrice into discounted, resulting in [50, 100]. In iteration 3 (i = 2), discountedPrice = 150. Then we push discountedPrice into discounted, resulting in [50, 100, 150]. Then, the program goes to return discounted, which returns the array [50, 100, 150]. We can do this because we can change the array inside the constant variable discounted, but not the value of the variable.

## 12. Given the above Object, write the notation for:  (These should be in your part2.md)
### A. Accessing the value of the name property in the student object
student.name
### B. Accessing the value of the Grad Year property in the student object
student['Grad Year']
### C. Calling the function for the greeting property in the student object
student.greeting()
### D. Accessing the name property of the object in the Favorite Teacher property in student
student['Favorite Year'].name
### E. Access index zero in the array of the courseLoad property of the student object
student.courseLoad[0]

## 13. Arithmetic
### '3' + 2
32
### '3' - 2
1
### 3 + null
3
### '3' + null
3null
### true + 3
4
### false + null
0
### '3' + undefined
3undefined
### '3' - undefined
NaN

## 14. Comparison
### '2' > 1
true
### '2' < '12'
false
### 2 == '2'
true
### 2 === '2'
false
### true == 2
false
### true === Boolean(2)
true

## 15. Explain the difference between the == and === operators.

While they both determine if both operands have the same value, == will convert the type the operands are in order to find that quality, while === does not do that, making it more accurate.

## 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

The result will be [2,4,6]. In iteration 1 (i = 0), callback goes to doSomething, where 1 * 2 = 2. Then 2 gets pushed to newArr, which is [2]. In iteration 2 (i = 1), callback goes to doSomething, where 1*2 = 2. Then 2 gets pushed to newArr, which is [2]. In iteration 2 (i = 1), callback goes to doSomething, where 2 * 2 = 4. Then 4 gets pushed to newArr, which is [2, 4]. In iteration 2 (i = 1), callback goes to doSomething, where 3 * 2 = 6. Then 6 gets pushed to newArr, which is [2, 4, 6]. Then we return newArr, which is [2, 4, 6].

## 19. What is the output of the above code? 

1432
