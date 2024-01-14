function decimalToBinary(num) {
  // your code here
	if(num===0){
		return '0'
	}
	let bin = ''
	while (num) {
		bin = parseInt(num%2)+ bin 
		num =parseInt(num/2)
	}
	return bin
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
