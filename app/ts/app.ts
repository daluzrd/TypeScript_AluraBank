import { NegociacaoController } from "./controllers/NegociacaoController";

const controller: NegociacaoController = new NegociacaoController();

document
	.querySelector(".form")
	.addEventListener("submit", controller.adiciona.bind(controller));
