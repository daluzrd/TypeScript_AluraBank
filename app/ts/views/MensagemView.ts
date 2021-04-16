import { View } from "./View";

export class MensagemView extends View<string> {
	update(model: string, classTag: string = "alert alert-info"): void {
		let template = this.template(model, classTag);

		if (this._escape)
			template = template.replace(/<script>[/s/S]*?<\/script>/g, "");

		this._elemento.innerHTML = template;
	}

	template(model: string, classTag: string = ""): string {
		return `<p class="${classTag}">${model}</p>`;
	}
}
