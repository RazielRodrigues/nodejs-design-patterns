/**
 * O padrão de projeto Facade é um padrão de arquitetura que fornece uma interface única e simplificada para um conjunto complexo de classes, bibliotecas ou sistemas. Ele esconde a complexidade dos componentes subjacentes e oferece ao cliente uma forma mais fácil de interagir com eles, sem se preocupar com os detalhes técnicos. Em outras palavras, o Facade é como uma fachada ou entrada única para uma estrutura complexa, tornando-a mais fácil de usar e compreender.

Podemos comparar o facade a quase tudo, por exemplo, uma tomada uma tomada voce apenas pluga
o fio do eletrodomestico e ele funciona, mas voce não sabe a complexidade que existe por tras.


 */

import { GithubApiFacade } from "./GithubApiFacade.js";

let informacoes = [];
let usuarios = [
    "RazielRodrigues",
    "nodejs"
]

let facade;
usuarios.forEach(async (u) => {
    facade = new GithubApiFacade(u);
    informacoes.push(
        facade.callAPI()
    );
})

const resposta = await Promise.all(informacoes);
console.log(resposta);