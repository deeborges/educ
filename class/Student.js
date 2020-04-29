import Address from './Address';
import Contact from './Contact';
import PersonalData from './PersonalData';

export default class Student {
  constructor() {
    this.dados_pessoais = new PersonalData();
    this.endereco = new Address();
    this.contato = new Contact();
  }
}