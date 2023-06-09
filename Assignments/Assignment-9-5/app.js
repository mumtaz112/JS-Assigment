var markobt=parseFloat(prompt('Enter Marks Obtained'))
var totalmarks=prompt('Enter Total Marks')
var percent=parseFloat((markobt/totalmarks)*100)
document.write('Totals Marks:' +' '+ totalmarks+'<br>'+'Marks Obtained:'+ ' '+ markobt+'<br>' + 'Percentage:'+ ' '+ percent +'<br>'+'')
if(percent >=80)
{
    document.write('Grade:A-One')
    document.write('Remarks:A-One')
}
else if(percent >=70)
{
    document.write( 'Grade:A'+ '<br>'+ 'Remarks:Good')
}
else if(percent >=60)
{
    document.write( 'Grade:B'+'<br> '+ 'Remarks:You Need To Improve')
}
else if(percent < 60)
{
    document.write( 'Grade:Fail' + '<br>'+ 'Remarks:Sorry') 
}
