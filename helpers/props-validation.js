/**
 * @tips
 * Para criar um helper de validação das propriedades,
 * por favor, verificar conteúdo logo abaixo.
 * https://alligator.io/vuejs/property-validation/
 */

module.exports = (
	type, 
	bool
) => {
	return {
		type: `${type}`,
		required: `${bool}`,
	};
};
