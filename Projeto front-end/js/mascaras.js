// 1. Elementos HTML através do DOM
const formulario = document.getElementById('meu-formulario');
const alertaSucesso = document.getElementById('toast-successo')
const alertaFalha = document.getElementById('toast-falha')
const inputs = formulario.querySelectorAll('input')

//2. evento "submit" (quando o botão enviar é acionado)
formulario.addEventListener('submit',function(evento){
    // Impede que a página recarregue sozinha (comportamento padrão do form)
    evento.preventDefault();

    // Remove marcações de erro anteriores da todos os inputs
    inputs.forEach(input => {
        input.classList.remove('campo-incorreto');
    });

    //Verifica se os campos do formulário são válidos 
    if (formulario.checkValidity()){
        // Se estiver tudo cert:
        alertaSucesso.style.display = 'block';
        alertaFalha.style.display = 'none';
        
        // Configura um temporizador para esconder o toast de sucesso apos 5s  (5000 milisegundos)
        setTimeout(function(){
            alertaSucesso.style.display = 'none'
        }, 5000);
    } else{
        // Se houver campos invalidos ou vazios :
        alertaFalha.style.display = 'block' ;
        alertaSucesso.style.display = 'none';

        //varre oc campos para achar os que estão invalidos e destaca
        inputs.forEach(input =>{
            if (!input.checkValidity()){
                input.classList.add('campo-incorreto');
            }
        });
        // Configura um temporizador para esconder o toast de falha apos 5s  (5000 milisegundos)
        setTimeout(function(){
            alertaFalha.style.display = 'none'
        }, 5000);
    }
});


