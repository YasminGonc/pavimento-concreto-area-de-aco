
function calcular(){
    var aco = Number(document.getElementById("aco").value);
    var compPlaca = Number(document.querySelector("#comp-placa").value);
    var largPlaca = Number(document.querySelector("#larg-placa").value);
    var espPlaca = Number(document.querySelector("#esp-placa").value);
    var diamBarra = Number(document.querySelector("#diam-barra").value);

    document.querySelector("#acoVerif").innerHTML = " ";
    document.querySelector("#compVerif").innerHTML = " ";
    document.querySelector("#largVerif").innerHTML = " ";
    document.querySelector("#espVerif").innerHTML = " ";
    document.querySelector("#diamVerif").innerHTML = " ";

    /*IFs para validar as entradas*/ 
    if((aco != 25) && (aco != 50) && (aco != 60)){
        acoVerif.innerHTML = 'Digite um valor válido!';
    } 
    if(compPlaca <= 0){
        compVerif.innerHTML = 'Digite um valor válido!';
    }
    if(largPlaca <= 0){
        largVerif.innerHTML = 'Digite um valor válido!';
    }
    if(espPlaca <= 0){
        espVerif.innerHTML = 'Digite um valor válido!';
    }
    if(diamBarra <= 0){
        diamVerif.innerHTML = 'Digite um valor válido!';
    }

    var areaTelaComp = (25459 * 0.0868 * (espPlaca * 0.0254) * (compPlaca * 0.0254) * 1.5) / (aco*10*145*2);
    var areaTelaLarg = (25459 * 0.0868 * (espPlaca * 0.0254) * (largPlaca * 0.0254) * 1.5) / (aco*10*145*2);

    /*Vai apresentar na tela o maior resultado entre as áreas*/
    if( areaTelaComp > areaTelaLarg){
        document.querySelector("#resTela").innerHTML = areaTelaComp.toFixed(2);
    } else{
        document.querySelector("#resTela").innerHTML = areaTelaLarg.toFixed(2);
    }
   
    var areaBar = (25459 * 0.0868 * (espPlaca * 0.0254) * (largPlaca * 0.5 * 0.0254) * 1.5) / 72500;
    var espaBar =  (Math.PI * (diamBarra ** 2) / 4) / areaBar;
    var compBar = ((0.5 * 72500 * (diamBarra / 25.4) / 350) + 3) * 0.0254;
    
    document.querySelector("#esp-bar-lig").innerHTML = espaBar.toFixed(2);
    document.querySelector("#comp-bar-lig").innerHTML = compBar.toFixed(2);
    
}
function limpar(){
    document.querySelector("#acoVerif").innerHTML = " ";
    document.querySelector("#compVerif").innerHTML = " ";
    document.querySelector("#largVerif").innerHTML = " ";
    document.querySelector("#espVerif").innerHTML = " ";
    document.querySelector("#diamVerif").innerHTML = " ";

    document.querySelector("#resTela").innerHTML = "0,0";
    document.querySelector("#esp-bar-lig").innerHTML = "0,0";
    document.querySelector("#comp-bar-lig").innerHTML = "0,0";
    
}