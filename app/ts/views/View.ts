export abstract class View<T> {
	protected _elemento: Element;
	protected _escape: boolean;

	public constructor(seletor: string, escape: boolean = false) {
		this._elemento = <Element>document.querySelector(seletor);
		this._escape = escape;
	}

	public update(model: T, classTag: string = ""): void {
		let template = this.template(model);

		if (this._escape)
			template = template.replace(/<script>[/s/S]*?<\/script>/g, "");

		this._elemento.innerHTML = this.template(model);
	}

	protected abstract template(model: T): string;
}
