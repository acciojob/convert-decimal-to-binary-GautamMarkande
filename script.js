function decimalToBinary(num) {
  // your code here
	let bin = ''
	while (num) {
		bin = bin + num%2.toString()
		num = num/2
	}
	return bin
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
