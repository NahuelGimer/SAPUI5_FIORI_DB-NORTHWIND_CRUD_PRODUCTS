sap.ui.define ([], function(){
    "use strict";
    return {
        statusText:function (nInputValue, sUnitsStock){
            let nUnitsStock = Number(sUnitsStock)
            if(nUnitsStock > nInputValue){
                let res="Bajo"
                return(res)
            }
            else if(nUnitsStock < nInputValue && nUnitsStock > 0){
                let res="Alto"
                return(res)} else{
                    return "Null"
                }
        },
        categoryType:function (nCategoryName){
            if(nCategoryName > 9){
                return "Piso 10";

            } else if (nCategoryName > 8) {
                return "Piso 9";
            }
            else if (nCategoryName > 7) {
                return "Piso 8";
            }
            else if (nCategoryName > 6) {
                return "Piso 7";
            }
            else if (nCategoryName > 5) {
                return "Piso 6";
            }
            else if (nCategoryName > 4) {
                return "Piso 5";
            }
            else if (nCategoryName > 3) {
                return "Piso 4";
            }
            else if (nCategoryName > 2) {
                return "Piso 3";
            }
            else if (nCategoryName > 1) {
                return "Piso 2";
            }
            else if (nCategoryName > 0) {
                return "Piso 1";
            }
            else {
                return "Piso 0";
            }
        }
}})