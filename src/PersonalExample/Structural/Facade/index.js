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