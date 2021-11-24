##PRINCIPAIS TÓPICOS DA LINGUAGEM JAVASCRIPT

Para consulta

#Declaração de Variáveis:

    var     = "Variável global";       //Pode ser acessada de qualquer lugar do script
    let     = "Variável de escopo";    //Pode ser acessada apenas no escopo em que foi criada
    const   = "CONSTANTE";             //Não sofre modificaçao do valor
    
- Nota: A const não é "variável", é simplesmente uma "constante", ela possui sempre o mesmo valor que não pode ser modificado após ter sido atribuido.

Variáveis servem para armazenar valores em um espaço na memória do computador.

Exemplo:

    var numero = 10;

O valor 10 foi armazenado na variável "numero", e sempre que quisermos acessa-lo para realizar alguma operação com esse valor devemos utilizar "numero" para retornar o valor 10.

#Comentários:
Os comentários são uma forma de escrever dentro do script javascript sem que o mesmo tente interpretar essas informações. Os comentários são úteis para por exemplo acrescentar observações em trechos do código. Pode-se utilizar para esta finalidade "//" antes do comentários ou "/*" no início e a mesma barra com o "*/" 

##Exibindo valores das variáveis:

Abaixo há um exemplo da exibição dessa variável usando o comando alert();
Ao abrir o seu códifgo no navegador, o comando abre uma janela pop-up exibindo nela o valor da variavel inserida entre os parenteses, exemplo:

    var numero = 10;
    alert(numero);

##Operadores Aritimeticos:

Além de exibir valores na tela, as variáveis também podem ser usadas para realizar calculos com o uso dos Operadores Aritimeticos. Operadores: + (soma), - (subtração), * (multiplicação), / (divisão) % (resto da divisão), e ^ (potência).

Exemplo de operação matemática:

    var numero  = 10;
    var numero2 = 5;
    alert(10 + 5);

O código acima exibe o resultado da operação, ou seja: 15. É possível realizar as demais operações matemáticas com os respectivos operadores apresentados.

##Strings:

As variáveis não permitem armazenar exclusivamente valores numericos, mas também valores chamados de "string", sim, entre parentêses. Strings são textos e também podem ser exibidos com uso de comandos como alert().

Exemplo:

    var texto = "Bem vindo!";
    alert(texto);

##Concatenação:

Os textos também podem ser concatenados, isto é, unidos para formar uma frase, e esse procedimento também pode envolver números.

Exemplo:

    var texto   = "Número: ";
    var numero  = 10;
    alert(texto + numero);

##Outras funções de exibição de valores:

Há várias formas de exibir valores de operações ou de textos, por exemplo com uso do comando console.log().]

    var texto = "Número: ";
    var numero = 10;
    console.log(texto + numero);

O comando exibe as informações no console do seu navegador. Para acessar o console, basta clicar com o botão direito do mouse no meio do navegador, selecionar a opção "Inspecionar" e em seguida "console".

Outro comando que pode ser utilizado, mais especificamente para imprimir informações no navegador. O document.write()

    document.write("Valor");

##Operadores Lógicos:
Os operadores lógicos são extremamente importantes para a programação. São úteis para analisar 2 ou mais sentenças que caso verdadeira retorna tru e caso falsa retorna false.


    &&  E/And
    ||  Ou/or
    !   Not

##Operadores de comparação:
    >   Maior que
    <   Menor que
    >=  Maior ou igual a
    <=  Menor ou igual a
    ==  Igual a
    === Identico a
    !== Não identico a

São úteis principalmente para comparação de valores. Como resultado é retornado um valor booleano, isto é: true(verdadeiro) ou false(falso).


Exemplos:
Nota: Você pode executar os exemplos a baixo direto no console do seu navegador, basta escrever o código e pessionar enter.

Os operadores &&  (E/And) e || (Ou/or) e !.
- Uma operação com && só é verdadeira se os 2 intens forem true.
- Uma operação com || é verdadeira se um dos dois itens for verdadeiro.
- Uma operação com ! nega a sentença. Se verdadeira, pasa a ser falsa. Se falsa, passa a ser verdadeira.


    let a = 10;
    10 == a && 9 <= a

Retorna: true

    10 == a && 11 <= a

Retorna: false

    10 == a || 11 <= a
  
Retorna: true

- O ! nega qualquer das sentenças invertendo o retorno.


    !10 > 7;

Retorna: true.
    
    10 > 7;

Retorna: false,
    
    10 == "10";

Retorna: true. Retorna true já que por mais que um valor seja númerico e o outro string ambos possuem os mesmos caracteres.
    
    10 === "10";

Retorna: false. Já neste caso retorna falso, pois, o operador com 3 iguais compara, inclusive os tipos das variáveis, neste caso identifica que temos um texto e um número.



##Operadores condicionais:
Uma das formas onde mais se usa os operadores lógicos e de comparação é com condições onde verificamos se uma determinada expressão é verdadeira e executamos uma ação dependendo do resultado da verificação.

Operadores: if(se), else(senão), else if(senão se).

Exemplo:

    let idade = 17;
    if(idade == 17 || idade > <= 20){
        console.log("Faixa entre 17 e 20 anos");
    }else{
        console.log("Fora da faixa etária permitida");
    }

Também é possível utilizar a estruturar para verificar mais de uma condição em um mesmo bloco de códigos para executar caso ambas sejam atendidas. Isso se chama Estrutura Condicional Aninhada.
Exemplo:

    let idade = 17;
    if(idade == 17){
      if(idade > <= 20){
        console.log("Faixa entre 17 e 20 anos");
      }
    }else{
        console.log("Fora da faixa etária permitida");
    }
- Nota: Observe que nesse caso o else é colocado após a chave que determina o limite do primeiro if.

A outra forma de tratar condições, mais utilizada quando já se tem conhecimento das saídas possíveis. O swith.
Exemplo:

    let a = 30;
    switch (a){
      case 10 :
        document.write("O número é 10");
        break;
      case 30 :
        document.write("O número é 30");
        break;
      default :
        document.write("Não sei");
    }

- Observe que pode se determinado no switch uma saída padrão(declarado como default) para o caso de nenhuma das possibilidades estarem corretas.


##Tipos de dados:
A partir deste ponto é de extrema importância conhecer os tipos de dados. 2 tipos de dados foram usados até o momento, mas não explicados em detalhes. Foram usados:

- Númericos:  Números. NOta: um tipo númerico que não foi citado até o momento é o float. Este tipo de dado é basicamente um número com ponto flutuante, por exemplo o número 3,5 que declaramos no javascript como 3.5 .
- String:     Praticamente qualquer caractere colocado entre aspas duplas ou simples é lido no script como    uma string.
- Booleano:   true(verdadeiro) ou false(falso).

Tipos de dados não utilizados até o momento:

- Array:      É uma estrutura de dados que armazena uma coleção de elementos de vários tipos.
- Objeto:     Em Javascript um objeto é uma entidade com propriedades e tipos.
- Função:     Uma função é basicamente um conjunto de instruções que executa determinada tarefa contica dentro de seu bloco de instruções. 

   Os tipos de dados acima serão abordados em seguida.

##Arrays:
- Exemplo:


    let meuArray = ["João", "Maria", 25, 3.5, true, "Paulo"];

Como recuperar uma informação contida em um array:

    let retornaInformaçãoArray = meuArray[0];
    console.log(retornaInformaçãoArray);

O exemplo acima armazena uma posição do array na variável retornaInformaçãoArray e depois exibe através do comando console.

    Nota: O array organiza cada valor contando a partir da posição zero, por isso ao chamar meuArry para recuperar o valor, a posição inserida entre colchetes foi a 0, que se trata do primeiro valor contido no array. Contagem do Array: 0,1,2,3,4...

Exemplo de manipulação de informações no array com concatenação:

    let meuArray = ["João", "Maria", 25, 3.5, true, "Paulo"];
    let nomeCompleto = meuArray[0] + " " + meuArray[5];
    console.log(nomeCompleto);

Também é possível exibir qualquer informação no documento(no meio do navegador) usando:
    
    documento.write(nomeCompleto)

##Objetos
Como criar um objeto em Javascript?

Exemplo:

    let pessoa = {primeiroNome: "John", sobreNome: "Connor", idade: 50};

O objeto pessoa armazena caracteristicas(as propriedades do objeto) de uma pessoa, como o nome e sobrenome por 
exemplo. Essas informações podem ser recuperadas e tratadas no código seja qual for a finalidade.

 - Nota: Observe que um objeto pode armazenar qualquer tipo de dado como propriedade.

Exemplo de exibição de objeto no documento do navegador:

    document.write(pessoa.primeiroNome);

##Funções
Como criar uma função em Javascript?

Exemplo:

        function mostraNome() {
        
            let pessoa = {primeiroNome: "John", sobreNome: "Connor", idade: 50};
        
            document.write(pessoa.primeiroNome + " " + pessoa.sobreNome);
        
        }
        mostraNome();

A função acima concatena o nome + o sobrenome armazenado no objeto pessoa e exibe na tela.

As funções também podem conter parâmetros que devem ser passados no momento em que as mesmas sejam chamadas. 

Exemplo de função que soma 2 números solicitados como parâmetro e retorna o resultado:

        function funcaoSomar(x, y) {
        return x + y;
        }
        alert(funcaoSomar(2, 7));
        
A função requer valores para executar, e quando chamada precisa que esses sejam declarados dentro dos parenteses como codificado a cima.

O Javascript possui funções nativas como algumas que já utilizado até o momento: alert(), documento.write() e o 
console.log(). A baixo um exemplo de mais uma função do javasctipt + uma função criada com objetivo de receber um 
número de entrada digitado pelo usuário, realizar uma multiplicação e depois exibir as informações na tela 
concatenando com a string "resultado":

        function funcaoMultiplicar(x, y) {
        x = prompt("Digite o valor de X:");
        y = prompt("Digite o valor de y:");
        alert( "Resultado: " + x * y);
        }
        funcaoMultiplicar();

É possível interagir com o usuário para exibir informações de acordo com entradas inseridas por ele. Para isso vamos por exemplo utilizar a função prompt()

Executando o script a baixo salvo em um arquivo como index.html é possível receber por exemplo a idade do usuário e exibir uma saída dependendo dela.

    <!DOCTYPE html>
    <html lang="pt-BR">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
    <body>
    
        <script>
            //Código Javascript:
            let idade; //declara a variável
            idade = prompt("Digite sua idade: "); //Atribui a variável o valor inserido pelo usuário
    
            function verificaIdade(i) {
                if (i >= 18){
                    alert("Maior de idade");
                }else {
                    alert("Menor de idade");
                }
            }
            
            verificaIdade(idade);//Executa a função
    
        </script>
    
    </body>
    </html>
