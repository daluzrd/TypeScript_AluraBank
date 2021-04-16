import { MensagemView } from "../views/MensagemView";
import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { NegociacoesView } from "../views/NegociacoesView";

export class NegociacaoController {
	private _inputData: HTMLInputElement;
	private _inputQuantidade: HTMLInputElement;
	private _inputValor: HTMLInputElement;
	private _negociacoes: Negociacoes;
	private _negociacoesView: NegociacoesView;
	private _mensagemView: MensagemView;

	constructor() {
		this._negociacoes = new Negociacoes();
		this._negociacoesView = new NegociacoesView("#negociacoesView");
		this._mensagemView = new MensagemView("#mensagemView");

		this._inputData = <HTMLInputElement>document.querySelector("#data");
		this._inputQuantidade = <HTMLInputElement>(
			document.querySelector("#quantidade")
		);
		this._inputValor = <HTMLInputElement>document.querySelector("#valor");

		this._negociacoesView.update(this._negociacoes);
	}

	adiciona(event: Event): void {
		event.preventDefault();
		let data = new Date(this._inputData.value.replace(/-/g, "/"));

		if (this.isWeekDay(data)) {
			this._negociacoes.adiciona(
				new Negociacao(
					new Date(this._inputData.value.replace(/-/g, "/")),
					parseInt(this._inputQuantidade.value),
					parseFloat(this._inputValor.value)
				)
			);
			this._negociacoesView.update(this._negociacoes);
			this._mensagemView.update("Negociação incluída com sucesso!");
		} else {
			this._mensagemView.update(
				"Só são permitidas negociações em dias úteis!",
				"alert alert-danger"
			);
		}
	}

	private isWeekDay(data: Date): boolean {
		return !(
			data.getDay() == weekDays.Domingo || data.getDay() == weekDays.Sabado
		);
	}
}

enum weekDays {
	Domingo,
	Segunda,
	Terça,
	Quarta,
	Quinta,
	Sexta,
	Sabado,
}
