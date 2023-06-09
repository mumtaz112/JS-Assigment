var input1=prompt('Enter Number 1')
var input2=prompt('Enter Number 2')
if (input1 == input2) {
    document.write(input1 + " is equal to " + input2);
} else if (input1 > input2) {
    document.write(input1 + " is larger than " + input2);
} else {
    console.log(input1 + " is lesser than " + input2);
}