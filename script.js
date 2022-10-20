  const resultado = document.querySelector('#resultado')

function calcular () {

    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const imc = (peso / (altura*altura)).toFixed(2)

    if (nome == '' || altura == '' ||  peso == '') {
        alert('[ERRO] Preencha todos os campos')
    } 
    
    else if(imc < 18.5) {
        resultado.innerHTML = `<p>Olá ${nome}, seu IMC é de ${imc}.<br>
                               <p>Você está <mark style="background-color: green;">Abaixo do Peso</mark></p>`
    }
    else if (imc <= 24.9) {
        resultado.innerHTML = `<p>Olá ${nome}, seu IMC é de ${imc}.<br>
                                <p>Você está com o <mark style="background-color: white;">Peso Normal</mark></p>`
    }
    else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML = `<p>Olá ${nome}, seu IMC é de ${imc}.<br>
                                <p>Você está com <mark style="background-color: yellow;">Sobre Peso</mark></p>`
    }
    else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<p>Olá ${nome}, seu IMC é de ${imc}.<br>
                                <p>Você está com <mark style="background-color: red;">Obesidade Grau 1 </mark></p>`
    }
    else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<p>Olá ${nome}, seu IMC é de ${imc}.<br>
                                <p>Você está com <mark style="background-color: red;">Obesidade Grau 2 </mark></p>`
    } else {
        resultado.innerHTML = `<p>Olá ${nome}, seu IMC é de ${imc}.<br>
                                <p><mark style="background-color: red;">Obesidade Grau 3 ou Mórbida </mark></p>`
    }
    
}