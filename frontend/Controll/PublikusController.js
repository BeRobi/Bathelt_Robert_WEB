import DataService from "../Model/DataService.js";
import HibaView from "../View/HibaView.js";
import PublikusView from "../View/PubikusView.js";
import UrlapView from "../View/UrlapView.js";

class PublikusController {
    loader;
    constructor() {
        this.init();
    }

    init() {

        this.dataService = new DataService();

        this.dataService.getData("api/szavak",this.urlapMegjelenit,this.hibaMegjelenit);

        $(window).on("urlapKuld", (event) => {
            console.log(event.detail);
            this.dataService.postData("api/szavak", event.detail);
        });
    }
    urlapMegjelenit(lista) {
        new UrlapView(lista, $("#urlap"));
    }
    megjelenit(lista) {
        new PublikusView(lista, $("#publikus"));
    }

    hibaMegjelenit(error) {
        new HibaView(error, $("#publikus"));
    }
}
export default PublikusController;
