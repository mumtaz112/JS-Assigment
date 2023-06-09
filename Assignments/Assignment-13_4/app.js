var favcolor=prompt('EntEr favorite Color')
var color=['green','red','yellow']
var index=color.indexOf('green')
if(index!==-1)
{
color[index]=favcolor
document.write(color+'<br>'+'Selected Color:'+' '+ color[index])
}