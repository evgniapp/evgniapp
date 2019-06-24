function Vol() {
    //input
    let r= parseFloat(document.getElementById("r").value);
    let h= parseFloat(document.getElementById("h").value);
    //processing
    let volumen= 3.14 * (r **2) * h;
    //output
    document.getElementById("output").innerHTML= volumen;	
    }