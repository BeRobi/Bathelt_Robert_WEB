import SorView from "./SorView.js";

class PublikusView {
    #visszajelzes = ["helyes, helytelen"];
    #lista = [];
    #szuloElem;
    #adatok = {};
    constructor(lista, szuloElem) {
        this.#szuloElem = szuloElem;
        this.#lista = lista;

        szuloElem.append(`<form class="my-3">`);
        this.urlapElem = szuloElem.children("form");
        this.urlapElem.append(`<select class="form-select" id="visszajelzes" name="visszajelzes">`);
        this.visszajelzesElem = this.urlapElem.children("select:first-child");
        this.urlapElem.append(`<select class="form-select" id="tema" name="tema">`);
        this.temaElem = this.urlapElem.children("select:last-child");
        this.megjelenit();
        this.submitGomb = $("#submit");
        this.submitGomb.on("click", (event) => {
            //Űrlapadatok küldése
            event.preventDefault();
            //  ide jön a  validáció
            if (
                !(
                    this.temaElem.val() == "valassz" ||
                    this.visszajelzesElem.val() == "valassz"
                )
            ) {
                this.#adatok = {
                    tema_id: this.temaElem.val(),
                    visszajelzes_id: this.visszajelzesElem.val(),
                    allapot: 0,
                };
                console.log(this.#adatok);
                this.trigger("urlapKuld");
            } else {
                console.log("hibás adatok");
            }
        });
    }

    megjelenit() {
        this.visszajelzesElem.append(
            `<option value="valassz" >Válassz témát!</option>`
        );
        this.#visszajelzes.forEach((element) => {
            this.visszajelzesElem.append(
                `<option value="${element}" >${element}</option>`
            );
        });
        this.temaElem.append(
            `<option value="valassz">Válassz</option>`
        );
        this.#lista.forEach((element, index) => {
            this.temaElem.append(
                `<option value="${element.id}">${element.temanev}</option>`
            );
        });
        this.urlapElem.append("<input type='submit' class='btn btn-success' value='Küld' id='submit'>");
    }
    trigger(esemenynev) {
        const e = new CustomEvent(esemenynev, { detail: this.#adatok });
        window.dispatchEvent(e);
    }
}
export default PublikusView;
