/**
 * O padrão Template Method pode ser aplicado a uma classe de partitura musical da seguinte forma: A classe base "Partitura" possui um método template chamado "tocarMusica()" que define a estrutura geral para tocar uma música. Dentro desse método, são chamados métodos abstratos como "tocarNota()" e "tocarRitmo()". As subclasses como "InstrumentoDeCorda" e "InstrumentoDeSopro" herdam da classe "Partitura" e implementam esses métodos abstratos de acordo com as peculiaridades de cada instrumento. Dessa forma, a estrutura do algoritmo é reutilizada, mas cada instrumento pode tocar a música com sua própria lógica específica para notas e ritmos.
 */

// Classe base - Partitura
export class Partitura {
    // Template Method - tocarMusica
    tocarMusica(notas = [], bpm = 0) {
        // Verifica se o valor de bpm é válido
        if (bpm === 0) throw new Error("BPM inválido!");

        // Verifica se há notas para tocar
        if (!notas.length) throw new Error("Notas inválidas!");

        // Itera sobre as notas e as toca em sequência
        notas.forEach(async (n, index) => {
            setTimeout(() => {
                console.log(`${this.constructor.name} tocando nota: ${n}`);
            }, bpm * index);
        });
    }
}

// Subclasse - Guitarra
export class Guitarra extends Partitura {
    // Implementação do método abstrato - tocarNota
    tocarNota(nota) {
        console.log(`Guitarra tocando nota: ${nota}`);
    }
}

// Subclasse - Saxofone
export class Saxofone extends Partitura {
    // Implementação do método abstrato - tocarNota
    tocarNota(nota) {
        console.log(`Saxofone tocando nota: ${nota}`);
    }
}

// Criando instâncias das subclasses e chamando o método tocarMusica
const guitarra = new Guitarra();
guitarra.tocarMusica(["do", "re", "mi"], 900);

const saxofone = new Saxofone();
saxofone.tocarMusica(["mi", "do", "re"], 500);
