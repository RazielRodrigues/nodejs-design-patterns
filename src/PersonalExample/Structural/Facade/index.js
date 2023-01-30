import { GithubApiFacade } from "./GithubApiFacade.js";

let informacoes = [];
let usuarios = [
    "RazielRodrigues",
    "nodejs"
]

let facade;
usuarios.forEach((u) => {
    facade = new GithubApiFacade(u);
    informacoes.push(
        facade.callAPI()
    );
})

console.log(informacoes);