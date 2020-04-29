export default class PersonalData {
  constructor(
    nome_completo,
    cpf,
    rg,
    data_nascimento,
    cidade_naturalidade,
    estado_naturalidade
  ) {
    this.nome_completo = nome_completo;
    this.cpf = cpf;
    this.rg = rg;
    this.data_nascimento = data_nascimento ;
    this.cidade_naturalidade = cidade_naturalidade;
    this.estado_naturalidade = estado_naturalidade;
  }
}