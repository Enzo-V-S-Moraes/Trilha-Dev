/* Note: 
* A ideia é que sejam feitos dois arquivos, um pra cada atividade, ou seja,
* um pra atividade de Cálculo IMC, e outro pra atividade de tabuada. 
* Pra fazer isso tem que fazer mudança no arquivo de package.json, na área de scripts,
* onde tu vai colocar outro comando pra rodar o outro arquivo da atividade.
* Dessa forma a gente não precisa rodar as atividades juntas no mesmo arquivo,
* atrapalhando a visibilidade.
*/ 

// Calculo IMC:
console.log("Cálculo de IMC");

/* 
* Para um código mais limpo, é interessante escolher um nome melhor pra função 
* que seja condizente com o que ela faz, "divisão" pode ser qualquer coisa
* e quem ler o teu código pode não entender o que essa função faz.
* Além disso, eu acho mais interessante criar uma função que retorne o valor do IMC
* Porque aí a gente poderia usar ela em outras situações também.
*/

function divisao(peso: number, altura: number): void 
{
    let IMC: number = peso / (altura*altura)
    console.log(`IMC: ${IMC}`)
}
divisao(65.30, 1.60) 

// Tabuada:
console.log("Tabuada");

// Não entendi o uso dessa função, acho completamente desnecessário !
const error = (humm: number): string => `error`;

// Se essa variável só tem uso dentro da função da tabuada, não faz sentido declarar ela globalmente
var inicial = 0

/* 
* Aqui eu faço a mesma objeção da outra atividade,
* a questão do código limpo é muito importante pra entender como ele funciona
* e poder ficar manutenível. Eu não entendi essa função da tabuada, os parâmetros
* não fazem sentido pra mim e não sei o que eles fazem, é difícil entender.
* Minha sugestão é só que tu mude os nomes dos parâmetros. 
*/

function tabuada(maximo: number, valor1: number, valor2: number): void
{
    // A variável "inicial" sempre fica em 0, não tem sentido utilizar ela. Percebe?
    for(inicial = 0; valor2 < maximo; valor2++)
    {
        let resultado: number = valor1 * valor2

        // Não entendi essa linha, o que era pra ela fazer?????
        resultado % 2 == 0 ? resultado : error

        console.log(`${valor1} * ${valor2} = ${resultado}`)

        // Pq tem que printar sempre essa função de erro??? Não faz sentido !
        console.log(error)
    }
} 
tabuada(30, 2, 10)