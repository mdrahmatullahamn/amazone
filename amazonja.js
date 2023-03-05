window.onload=function(){
    // alert("warning")
    var vewier = JSON.parse(localStorage.getItem("amoProduct"));
    var atdataLS = document.getElementById("m3right");


    
    var array = []
    for (var i = 0; i < vewier.length; i++) {
        array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><div class="vip23"><h1>${vewier[i].name}</h1><span>${vewier[i].deatls}</span><p>${vewier[i].price}</p> </div></div>`

    }

    atdataLS.innerHTML = array
    
}