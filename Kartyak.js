import Kartya from "./Kartya.js"

export default class Kartyak{
    #lista = []

constructor(lista,szuloElem){
    this.#lista=lista
    this.szuloElem=szuloElem
    this.#kartyaKiir()

}

#kartyaKiir(){
    this.#lista.forEach((kutya) => {
        // kutyaAdatKiir(elem)
        new Kartya(kutya,this.szuloElem)//létrehoztunk egy példányt az osztályból 
         
     });

}



}