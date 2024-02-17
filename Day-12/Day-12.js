
function checkIsUserValid()  {
    var age = document.getElementById("age").value;

    const pTag = document.getElementById("DisplayResult")

    if(age >18 && age <80){
      alert("Allow for DL")
      var div =document.createElement("div")
      div.style.color="blue"
      div.style.fontFamily="cursive"
      div.innerText="Allow for DL"
      pTag.appendChild(div)
    }else if( age == 18){
        var h1 = document.createElement("h1")
        h1.style.color="green"
        h1.style.fontsize="20"
        h1.innerText="Allow for LL"
        pTag.appendChild(h1)
         alert("Allow for LL")
    }else{
        alert("Not Allow for Dl")
        var h1 =document.createElement("h1")
        h1.style.color="red"
        h1.innerText="Not Allow for Dl"
        pTag.appendChild(h1)
        
    }
    document.getElementById("age").value=""
}