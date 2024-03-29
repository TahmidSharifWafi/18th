a = [1, 2, 34, 67, 3, 21, 1, 4, 6]
sum = 0
for (var i = 0; i < a.length; i++) {
	if (a[i]%2==0) {
		sum = sum + a[i]
	}
}
console.log("The sumation of the even numbers of the array named a is: "+sum)

/*------------------------------*/

b = [3, 4, 8, 2, 1, 98, 6, 5, 7, 6]
sum2 = 0
for (var i = 0; i < b.length; i++) {
	if (b[i]%2==1) {
		sum2 = sum2 + b[i]
	}
}
console.log("The sumation of the odd numbers of the array named b is: "+sum2)