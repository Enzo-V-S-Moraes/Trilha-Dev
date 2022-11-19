// Calculo IMC:
console.log("Cálculo de IMC");

function divisao(peso: number, altura: number): void 
{
    let IMC: number = peso / (altura*altura)
    console.log(`IMC: ${IMC}`)
}
divisao(65.30, 1.60) 

// Tabuada:
console.log("Tabuada");

const error = (humm: number): string => `error`;

var inicial = 0

function tabuada(maximo: number, valor1: number, valor2: number): void
{
    for(inicial = 0; valor2 < maximo; valor2++)
    {
        let resultado: number = valor1 * valor2

        resultado % 2 == 0 ? resultado : error

        console.log(`${valor1} * ${valor2} = ${resultado}`)
        console.log(error)
    }
} 
tabuada(30, 2, 10)