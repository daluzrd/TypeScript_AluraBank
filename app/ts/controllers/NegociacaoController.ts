import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { NegociacoesView } from "../views/NegociacoesView";

export class NegociacaoController {
	private _inputData: HTMLInputElement;
	private _inputQuantidade: HTMLInputElement;
	private _inputValor: HTMLInputElement;
	private _negociacoes: Negociacoes;
	private _negociacoesView: NegociacoesView;

	constructor() {
		this._negociacoes = new Negociacoes();
		this._negociacoesView = new NegociacoesView("#negociacoesView");

		this._inputData = <HTMLInputElement>document.querySelector("#data");
		this._inputQuantidade = <HTMLInputElement>(
			document.querySelector("#quantidade")
		);
		this._inputValor = <HTMLInputElement>document.querySelector("#valor");

		this._negociacoesView.update(this._negociacoes);
	}

	adiciona(event: Event) {
		event.preventDefault();

		this._negociacoes.adiciona(
			new Negociacao(
				new Date(this._inputData.value.replace(/-/g, "/")),
				parseInt(this._inputQuantidade.value),
				parseFloat(this._inputValor.value)
			)
		);

		this._negociacoesView.update(this._negociacoes);
	}
}
