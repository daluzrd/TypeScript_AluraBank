import { Negociacoes } from "../models/Negociacoes";
import { View } from "./View";

export class NegociacoesView extends View<Negociacoes> {
	update(model: Negociacoes): void {
		let template = this.template(model);

		if (this._escape) template.replace(/<script>[\s\S]*?<\/script>/g, "");

		this._elemento.innerHTML = this.template(model);
	}

	template(model: Negociacoes): string {
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
                    ${model
											.getNegociacoes()
											.map((negociacao) => {
												return `
                            <tr>
                                <td>${negociacao.data.getUTCDate()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `;
											})
											.join("")}
                </tbody>

                <tfoot>
                </tfoot>
            </table>   
            `;
	}
}
