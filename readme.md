# DESIGN PATTERNS

patterns são formas de lidar com problemas
recorrentes da engenharia de software

https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm

### PATTERNS DE CRIAÇÃO DE OBJETOS

- factory: uma classe que instancia outras
- factory abstrata: cria grupo de factories que tem algo em comum
- builder: cria um objeto complexo com base em diversos objetos simples
- prototype: Ter uma função que retorna uma instancia da propria classe
- singleton: usar a mesma instancia de objeto para tudo, uma alteração em um objeto é refletido nos outros

### PATTERNS DE CRIAÇÃO DE ESTRUTURA DE HERANÇA

- adapter: ajuda a relacionar classes com a interface nao compativel
- bridge: separa a abstração da implementação
- composite: executa diversas instancias de objeto em uma classe só
- decorator: ajuda a adicionar comportamentos na classe sem ter que mexer nas outras que dependem da principal
- facade: descomplicar a execução de metodos
- flyweight: diminui o consumo de memoria criando recriando objetos similares
- proxy: uma classe pode representar a funcionalidade de outra

### PATTERNS DE CRIAÇÃO DE COMUNICAÇÃO DE OBJETOS

- chain of responsibility: ...
- command: executa metodos de uma classe como um menu
- iterator: ...
- mediator: salva diversos objetos em um array da classe mediadora e executa metodos dos objetos
- memento: retorna um objeto a um estado antigo
- observer: salva/retira diversos objetos em um array da classe mediadora e executa metodos dos objetos
- visitor: adiciona uma funcionalidade visitante na classe ou seja sem modificar a classe de verdade
- strategy: da a possibilidade de escolhermos uma classe de acordo com a situação
- state: a ideia é alterar estados de uma propriedade com classe que representem estados
- template: classe abstrata que contém metodos que serão usados em diversos objetos