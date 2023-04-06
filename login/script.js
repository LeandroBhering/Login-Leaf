'use strict'
const logintxt = document.getElementById('login')
const senhatxt = document.getElementById('senha')

var login = 'admin'
var senha = 'admin'

function entrar(){
    if ((logintxt.value === login) && (senhatxt.value === senha)){
        window.location.href = "segunda.html"
    } else {
        window.alert('Login e(ou) senha inválido.')
    }
}