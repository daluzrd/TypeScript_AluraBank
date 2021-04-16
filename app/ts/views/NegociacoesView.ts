import { Negociacoes } from "../models/Negociacoes";

export class NegociacoesView {
	private _elemento: Element;

	constructor(seletor: string) {
		this._elemento = document.querySelector(seletor);
	}

	update(negociacoes: Negociacoes): void {
		this._elemento.innerHTML = this.template(negociacoes);
	}

	private template(negociacoes: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${negociacoes.getNegociacoes().map(negociacao => {
                        return `
                            <tr>
                                <td>${negociacao.data.getUTCDate()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>

                <tfoot>
                </tfoot>
            </table>   
            `;
	}
}
