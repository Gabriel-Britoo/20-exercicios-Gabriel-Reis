// Gabriel Reis de Brito
function funcao(){
    const texto = document.getElementById('box');
    const display = document.getElementById('textop')
    display.textContent = 'Preço total: R$ ' + texto.value;
}