
import { kutya1 } from "./script.js"
import { kutyaLista } from "./adatok.js"

export function cimKiiras() {

    const header = document.querySelector ('header')
    console.log(header)
    //header.innerHTML += `<p>${cim}</p>`
    

}


export function kutyaAdatKiir(elem) {

    console.log(kutyaLista)//elérem a listát

    const divElem = $(".tartalom");
    //console.log(divElem)
    divElem.append(`<div class = "col-lg-4 col-md-6 card">
                        <div class = "card-body">
                            <h3>${elem.nev}</h3>
                            <p>kor: ${elem.kora}</p>
                            <p>nem: ${elem.nem}</p>
                            <button class = "kivalaszt btn btn-primary">Kiválaszt</button>
                        </div>
                     </div>`)


    
}