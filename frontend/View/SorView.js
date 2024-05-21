class SorView {
    #obj = {};
    #index;
    constructor(obj, szuloElem, index) {
        this.#obj = obj;
      
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
    }
    
    #sor() {
        
        let txt = `<tr>`;
        for (let x in this.#obj) {
            txt += `<td>${this.#obj.angol}</td>`;
          
        }
        txt += `</tr>`;
        
        this.szuloElem.append(txt);
    }

}
export default SorView;
