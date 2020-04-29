module.exports = class Address {
  constructor(
    logradouro,
    complemento,
    numero_residencia,
    bairro,
    cidade_residencia,
    estado_residencia
  ) {
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.numero_residencia = numero_residencia;
    this.bairro = bairro;
    this.cidade_residencia = cidade_residencia;
    this.estado_residencia = estado_residencia;
  }
}