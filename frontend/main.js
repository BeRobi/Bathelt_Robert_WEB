import PublikusController from "./Controll/PublikusController.js";


$(function () {
     new PublikusController();
    $("#pub").on("click", () => {
     $("#publikus").empty()
     $("#urlap").empty()
     new PublikusController();
    }); 
});
