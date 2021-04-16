import { NegociacaoController } from "./controllers/NegociacaoController";

const controller: NegociacaoController = new NegociacaoController();

const form: Element = <Element>document.querySelector(".form");
form.addEventListener("submit", controller.adiciona.bind(controller));
