const Address = require('./Address');
const Contact = require('./Contact');
const PersonalData = require('./PersonalData') ;

module.exports = class Student {
  constructor() {
    this.dados_pessoais = new PersonalData();
    this.endereco = new Address();
    this.contato = new Contact();
  }
}