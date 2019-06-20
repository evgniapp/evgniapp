
function concatenation() {
/* Input  */
 let name= document.getElementById("Name").value;

//PROCESSING 
let scripture = "Hearken unto the voice of the Lord your God, while I speak unto you, " + name + "; for verily I say unto you, all those who areceive my gospel are sons and daughters in my kingdom."

//OUTPUT 
document.getElementById("output").innerHTML= scripture;	
}