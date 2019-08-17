
let output=""

function mirrortext(){
	
	let str = prompt("Plese enter text here")
	
for (let i=str.length-1; i>=0;i--){

output = output+ str.charAt(i)

}
document.getElementById("mirror").innerHTML=output
}
