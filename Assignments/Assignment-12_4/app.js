var pasword=prompt('Enter Password')
varpass='abc123'
if(pasword==""){

  document.write('Please Enter Password')
}
else if(pasword==varpass)
{
  document.write('Correct! The password you entered matches the original password')
}
else{
  document.write('Incorrect password')
}