//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const doadorSchema = mongoose.Schema ({
name: {type: String, required: true},
endereco: {type: String, required: true},
email: {type: String, required: true},
numeroCasa: {type: String, required: true},
complemento: {type: String, required: true},
phone: {type: String, required: true},
informacoes: {type: String, required: false, default: '00000000'},
observacao: {type: String, required: true},

//submit: {type: String, required: true},


});
//criamos o modelo associado ao nome Doador e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Doador', doadorSchema);
