System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView;
    return {
        setters: [],
        execute: function () {
            NegociacoesView = class NegociacoesView {
                constructor(seletor) {
                    this._elemento = document.querySelector(seletor);
                }
                update(negociacoes) {
                    this._elemento.innerHTML = this.template(negociacoes);
                }
                template(negociacoes) {
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
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
