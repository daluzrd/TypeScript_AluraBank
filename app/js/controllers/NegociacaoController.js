System.register(["../views/MensagemView", "../models/Negociacao", "../models/Negociacoes", "../views/NegociacoesView"], function (exports_1, context_1) {
    "use strict";
    var MensagemView_1, Negociacao_1, Negociacoes_1, NegociacoesView_1, NegociacaoController, weekDays;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                    this._inputData = document.querySelector("#data");
                    this._inputQuantidade = (document.querySelector("#quantidade"));
                    this._inputValor = document.querySelector("#valor");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.value.replace(/-/g, "/"));
                    if (this.isWeekDay(data)) {
                        this._negociacoes.adiciona(new Negociacao_1.Negociacao(new Date(this._inputData.value.replace(/-/g, "/")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value)));
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagemView.update("Negociação incluída com sucesso!");
                    }
                    else {
                        this._mensagemView.update("Só são permitidas negociações em dias úteis!", "alert alert-danger");
                    }
                }
                isWeekDay(data) {
                    return !(data.getDay() == weekDays.Domingo || data.getDay() == weekDays.Sabado);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (weekDays) {
                weekDays[weekDays["Domingo"] = 0] = "Domingo";
                weekDays[weekDays["Segunda"] = 1] = "Segunda";
                weekDays[weekDays["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                weekDays[weekDays["Quarta"] = 3] = "Quarta";
                weekDays[weekDays["Quinta"] = 4] = "Quinta";
                weekDays[weekDays["Sexta"] = 5] = "Sexta";
                weekDays[weekDays["Sabado"] = 6] = "Sabado";
            })(weekDays || (weekDays = {}));
        }
    };
});
