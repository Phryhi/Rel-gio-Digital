function atualizarRelogio(){
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, 0);
    const minutos = data.getMinutes().toString().padStart(2, 0);
    const segundos = data.getSeconds().toString().padStart(2, 0);
    const timeString = `${horas}:${minutos}:${segundos}`;
    document.getElementById("clock").textContent = timeString; 
}

function dia(){
    const dataSemana = new Date();
    const dia = dataSemana.getDate().toString().padStart(2, 0);
    const mes = dataSemana.getMonth().toString().padEnd(2, 1);
    const ano = dataSemana.getFullYear();
    const ordem = `${dia}/${mes}/${ano}`;
    document.getElementById("date").textContent = ordem;
}

atualizarRelogio();
dia();
setInterval(atualizarRelogio, 1000);