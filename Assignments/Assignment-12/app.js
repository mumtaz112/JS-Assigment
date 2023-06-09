var inputt=prompt('Enter Value')
if(typeof input=="number")
{
    document.write('The given input is number') 
}
else if(typeof inputt === 'string'  && inputt == inputt.toUpperCase())
{
    document.write('The given input is string'+'<br>'+ 'The given number is uppercase')
}
else if( inputt == inputt.toLowerCase()){
    document.write('The given input is string'+'<br>'+'The given input is lower string')
}


