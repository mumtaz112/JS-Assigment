var favcolor1=prompt('EntEr favorite Color')
var favcolor2=prompt('EntEr favorite Color')
var color=['green','red','yellow']
var index=color.indexOf('green')
if(index!==-1)
{
color[index]=color.unshift((favcolor1),(favcolor2)) 
document.write(color+'<br>'+'Selected Color:'+' '+ color[index])
console.log(color[index])
}