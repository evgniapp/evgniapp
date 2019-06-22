function address() {
    //INPUT
    let city= document.getElementById("city").value;
    let state= document.getElementById("state").value;
    let zip= document.getElementById("zip").value;
    //PROCESSING
    let direccion= city + ", " + state + " " + zip
    //OUTPUT
    document.getElementById("output").innerHTML= direccion;
    }