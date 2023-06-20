# DESIGN PATTERNS

Design patterns são soluções recorrentes para problemas comuns encontrados na engenharia de software. Eles fornecem um conjunto de boas práticas e padrões para ajudar os desenvolvedores a projetar e construir aplicativos de forma mais eficiente e escalável.

## PATTERNS DE CRIAÇÃO DE OBJETOS
- Factory: Uma classe que instancia outras classes, fornecendo uma interface para criar objetos sem especificar suas classes concretas. Isso permite a fácil adição de novos tipos de objetos sem afetar as classes existentes.
- Factory abstrata: Um tipo de factory que cria um grupo de factories que compartilham algo em comum. Isso permite a criação de objetos de maneira organizada e consistente.
- Builder: Uma classe que cria um objeto complexo com base em diversos objetos simples. Isso permite a construção de objetos passo a passo e garante que eles sejam construídos de forma coerente.
- Prototype: Uma classe que possui uma função que retorna uma instância da própria classe. Isso permite a criação de novos objetos a partir de objetos existentes, sem precisar especificar suas classes concretas.
- Singleton: Uma classe cuja instância única é compartilhada por todas as classes que precisam dela. Isso garante que somente uma instância de um objeto seja criada, evitando desperdício de recursos e garantindo consistência de dados.

## PATTERNS DE CRIAÇÃO DE ESTRUTURA DE HERANÇA
- Adapter: Uma classe que ajuda a relacionar classes com interfaces incompatíveis, permitindo que elas trabalhem juntas.
- Bridge: Uma classe que separa a abstração da implementação, permitindo que elas possam ser alteradas independentemente.
- Composite: Uma classe que executa diversas instâncias de objetos em uma classe só, permitindo tratar objetos individuais e grupos de objetos de forma consistente.
- Decorator: Uma classe que adiciona funcionalidades a objetos existentes, sem precisar modificá-los.
- Facade: Uma classe que descomplica a execução de métodos, fornecendo uma interface simples e fácil de usar.
- Flyweight: Uma classe que compartilha objetos comuns entre várias instâncias, a fim de economizar recursos.
- Proxy: Uma classe que representa outra classe

## PATTERNS DE CRIAÇÃO DE COMUNICAÇÃO DE OBJETOS

- Chain of Responsibility: permite que vários objetos trabalhem em conjunto para processar uma solicitação.
- Command: executa métodos de uma classe como um menu.
- Iterator: permite percorrer uma coleção de objetos sem expor sua implementação.
- Mediator: salva diversos objetos em um array da classe mediadora e executa métodos dos objetos.
- Memento: permite salvar e restaurar o estado de um objeto.
- Observer: permite que vários objetos sejam notificados de alterações em outro objeto.
- Visitor: adiciona uma funcionalidade visitante na classe sem modificar a classe de verdade.
- Strategy: dá a possibilidade de escolhermos uma classe de acordo com a situação.
- State: a ideia é alterar estados de uma propriedade com classe que representem estados.
- Template: classe abstrata que contém métodos que serão usados em diversos objetos.

## TOP 7 PATTERNS MAIS USADAS

- Singleton
- Factory
- Facade
- Stategy
- Observer
- Builder
- Adapter
