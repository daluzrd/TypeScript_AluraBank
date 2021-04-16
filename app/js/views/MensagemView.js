System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                update(model, classTag = "alert alert-info") {
                    let template = this.template(model, classTag);
                    if (this._escape)
                        template = template.replace(/<script>[/s/S]*?<\/script>/g, "");
                    this._elemento.innerHTML = template;
                }
                template(model, classTag = "") {
                    return `<p class="${classTag}">${model}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
