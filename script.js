const btnCalc = document.querySelector('#btn-calc');
const btnReset = document.querySelector('#reset');
const tela = document.querySelector("#resTela");
const espBarLig = document.querySelector("#esp-bar-lig");
const compBarLig = document.querySelector("#comp-bar-lig");

btnCalc.addEventListener('click', () => {
    const aco = Number(document.getElementById("aco").value);
    const compPlaca = Number(document.querySelector("#comp-placa").value);
    const largPlaca = Number(document.querySelector("#larg-placa").value);
    const espPlaca = Number(document.querySelector("#esp-placa").value);
    const diamBarra = Number(document.querySelector("#diam-barra").value);

    document.querySelector("#acoVerif").innerHTML = " ";
    document.querySelector("#compVerif").innerHTML = " ";
    document.querySelector("#largVerif").innerHTML = " ";
    document.querySelector("#espVerif").innerHTML = " ";
    document.querySelector("#diamVerif").innerHTML = " ";

    if ((aco != 25) && (aco != 50) && (aco != 60)) {
        acoVerif.innerHTML = 'Digite um valor válido!';
    }
    else if (compPlaca <= 0) {
        compVerif.innerHTML = 'Digite um valor válido!';
    }
    else if (largPlaca <= 0) {
        largVerif.innerHTML = 'Digite um valor válido!';
    }
    else if (espPlaca <= 0) {
        espVerif.innerHTML = 'Digite um valor válido!';
    }
    else if (diamBarra <= 0) {
        diamVerif.innerHTML = 'Digite um valor válido!';
    } else {
        let areaTelaComp = (25459 * 0.0868 * (espPlaca * 39.3701) * (compPlaca * 39.3701) * 1.5) / (aco * 10 * 145 * 2);
        let areaTelaLarg = (25459 * 0.0868 * (espPlaca * 39.3701) * (largPlaca * 39.3701) * 1.5) / (aco * 10 * 145 * 2);

        /*Vai apresentar na tela o maior resultado entre as áreas*/
        if (areaTelaComp > areaTelaLarg) {
            tela.innerHTML = areaTelaComp.toFixed(2);
        } else {
            tela.innerHTML = areaTelaLarg.toFixed(2);
        }

        var areaBar = (25459 * 0.0868 * (espPlaca * 39.3701) * (largPlaca * 0.5 * 39.3701) * 1.5) / 72500;
        var diam = (Math.PI * ((diamBarra / 10) * (diamBarra / 10))) / 4;
        var espaBar = diam / (areaBar / 100);
        var compBar = ((0.5 * 72500 * (diamBarra / 25.4) / 350) + 3) * 0.0254;

        espBarLig.innerHTML = espaBar.toFixed(2);
        compBarLig.innerHTML = compBar.toFixed(2);
    }

});

btnReset.addEventListener('click', () => {
    document.querySelector("#aco").value = " ";
    document.querySelector("#comp-placa").value = " ";
    document.querySelector("#larg-placa").value = " ";
    document.querySelector("#esp-placa").value = " ";
    document.querySelector("#diam-barra").value = " ";

    tela.innerHTML = "0.0";
    espBarLig.innerHTML = "0.0";
    compBarLig.innerHTML = "0.0";
});
