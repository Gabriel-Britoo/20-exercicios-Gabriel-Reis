// Gabriel Reis de Brito
function dificuldade(){
    const select = prompt(`Escolha a dificuldade (fácil, médio ou difícil)`);

    if(select == "Fácil"){
        document.write(`Você escolheu o nível fácil!`);
    }
    else if(select == "Médio"){
        document.write(`Você escolheu o nível médio!`);
    }
    else if(select == "Difícil"){
        document.write(`Você escolheu o nível difícil!`);
    }
    else{
        document.write(`Inválido! Certifique-se de escrever a dificuldade com maiúscula na primeira letra e acento onde necessário.`);
    }
}