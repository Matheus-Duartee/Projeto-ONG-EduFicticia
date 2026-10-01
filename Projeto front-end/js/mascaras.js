// 1. Elementos HTML através do DOM
const formulario = document.getElementById('meu-formulario');
const alertaSucesso = document.getElementById('toast-successo');
const alertaFalha = document.getElementById('toast-falha');
const inputs = formulario ? formulario.querySelectorAll('input') : [];
const botaoTema = document.getElementById('tema-toggle');
const inputCpf = document.getElementById('cpf');
const inputDataNascimento = document.getElementById('data-nascimento');

// =====================================================
// MÁSCARAS E VALIDAÇÕES (Biblioteca Terceirizada: Vanilla Masker)
// =====================================================
if (typeof VMasker !== 'undefined') {
    // Máscara de CPF
    if (inputCpf) {
        VMasker(inputCpf).maskPattern('999.999.999-99');
    }
    // Máscara de Data de Nascimento (DD/MM/AAAA)
    if (inputDataNascimento) {
        VMasker(inputDataNascimento).maskPattern('99/99/9999');
    }
}

// Função para validar formato e coerência da data (DD/MM/AAAA)
function validarDataNascimento(dataStr) {
    // Verifica o formato básico com expressão regular
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(dataStr)) return false;

    const partes = dataStr.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    // Validações básicas de limites de meses e anos
    if (ano < 1900 || ano > new Date().getFullYear() || mes < 1 || mes > 12) {
        return false;
    }

    // Validação de dias por mês (incluindo ano bissexto para fevereiro)
    const diasNoMes = new Date(ano, mes, 0).getDate();
    if (dia < 1 || dia > diasNoMes) {
        return false;
    }

    // Opcional: Impedir datas no futuro
    const dataInformada = new Date(ano, mes - 1, dia);
    if (dataInformada > new Date()) {
        return false;
    }

    return true;
}

// Função auxiliar simples para validar CPF
function validarCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let soma = 0;
    let resto;
    for (let i=1; i<=9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// =====================================================
// MODO ESCURO (Escopo Global)
// =====================================================

function ativarTemaEscuro() {
    document.body.classList.add('tema-escuro');
    if (botaoTema) {
        botaoTema.textContent = '☀️ Modo claro';
        botaoTema.setAttribute('aria-label', 'Desativar modo escuro');
        botaoTema.setAttribute('aria-pressed', 'true');
    }
    localStorage.setItem('temaEduFicticia', 'escuro');
}

function desativarTemaEscuro() {
    document.body.classList.remove('tema-escuro');
    if (botaoTema) {
        botaoTema.textContent = '🌙 Modo escuro';
        botaoTema.setAttribute('aria-label', 'Ativar modo escuro');
        botaoTema.setAttribute('aria-pressed', 'false');
    }
    localStorage.setItem('temaEduFicticia', 'claro');
}

if (botaoTema) {
    botaoTema.addEventListener('click', function () {
        const escuroAtivo = document.body.classList.contains('tema-escuro');
        if (escuroAtivo) {
            desativarTemaEscuro();
        } else {
            ativarTemaEscuro();
        }
    });
}

const temaSalvo = localStorage.getItem('temaEduFicticia');
if (temaSalvo === 'escuro') {
    ativarTemaEscuro();
} else {
    desativarTemaEscuro();
}

// =====================================================
// EVENTO SUBMIT COM JSON, LOCALSTORAGE E VALIDAÇÕES EXTRAS
// =====================================================
if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        inputs.forEach(input => {
            input.classList.remove('campo-incorreto');
        });

        // Validações específicas
        let cpfValido = true;
        if (inputCpf) {
            cpfValido = validarCpf(inputCpf.value);
            if (!cpfValido) {
                inputCpf.classList.add('campo-incorreto');
            }
        }

        let dataValida = true;
        if (inputDataNascimento) {
            dataValida = validarDataNascimento(inputDataNascimento.value);
            if (!dataValida) {
                inputDataNascimento.classList.add('campo-incorreto');
            }
        }

        // Se o HTML5 considerar válido E as nossas validações manuais passarem
        if (formulario.checkValidity() && cpfValido && dataValida){
            const novoCadastro = {
                id: Date.now(),
                dataRegistro: new Date().toISOString()
            };

            inputs.forEach(input => {
                if (input.name) {
                    novoCadastro[input.name] = input.value;
                }
            });

            let cadastrosSalvos = JSON.parse(localStorage.getItem('cadastrosEduFicticia')) || [];
            cadastrosSalvos.push(novoCadastro);
            localStorage.setItem('cadastrosEduFicticia', JSON.stringify(cadastrosSalvos));

            alertaSucesso.style.display = 'block';
            alertaFalha.style.display = 'none';
            
            formulario.reset();

            setTimeout(function(){
                alertaSucesso.style.display = 'none';
            }, 5000);
        } else {
            alertaFalha.style.display = 'block';
            alertaSucesso.style.display = 'none';

            inputs.forEach(input => {
                if (!input.checkValidity()){
                    input.classList.add('campo-incorreto');
                }
            });

            setTimeout(function(){
                alertaFalha.style.display = 'none';
            }, 5000);
        }
    });
}
