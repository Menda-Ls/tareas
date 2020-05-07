
var listaDeNumeros = [1, 2, 3, 4, 5]
var duplicados = duplicarNumeros (listaDeNumeros)

function duplicarNumeros (listaDeNumeros) {
	var ListaDuplicada = listaDeNumeros.slice(0)
	return ListaDuplicada
	}
console.log (duplicados)



var resultado = multiplicar (listaDeNumeros)
function multiplicar (listaDeNumeros) {
	var multiplicados = listaDeNumeros.reduce((p,c)=>p*c)

	return multiplicados
}

console.log (resultado)