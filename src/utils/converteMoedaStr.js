/**
 * Converte um valor numérico em um string de moeda (real brasileiro)
 * @param {number} num o valor monetário em formato numérico
 * @returns {string} o valor monetário localizando para Real brasileiro em formato de string 
 */
export default function converteMoedaStr(num) {
	return num.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})
}
