
import { cimKiiras } from "./fuggvenyek.js"
//import {kutyaAdatKiir} from "./fuggvenyek.js"
import { kutyaLista } from "./adatok.js"
//import {kutyaLista}
import Kartya from "./Kartya.js"
import Kartyak from "./Kartyak.js"

let nev = "Dézi"
const cim = "Kutyák minden mennyiségben"

export const kutya1 = {
    nev: "Loki",
    kora: 12,
    nem: "kan"

}
const kutya2 = {
    nev: "Luna",
    kora: 12,
    nem: "nőstény"

}

//objektumban a tulajdonságot változtathatod de csak a tulajdonságát
//constal hozzuk létre az objektumot

//  console.log(kutya1)
//  console.log(cim)


//lista csak azonos típusú adatok lehetnek

//const-al hozzuk létre


//header h1 tagbe fűzzük hozzá a cim változót


// cimKiiras(cim)
const divElem = $(".tartalom");
new Kartyak(kutyaLista,divElem)










