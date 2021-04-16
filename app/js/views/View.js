System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escape = false) {
                    this._elemento = document.querySelector(seletor);
                    this._escape = escape;
                }
                update(model, classTag = "") {
                    let template = this.template(model);
                    if (this._escape)
                        template = template.replace(/<script>[/s/S]*?<\/script>/g, "");
                    this._elemento.innerHTML = this.template(model);
                }
            };
            exports_1("View", View);
        }
    };
});
