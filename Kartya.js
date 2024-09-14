export default class Kartya{

#kutya={}//privát lett
    constructor(kutya,szuloElem){
        //inicializálja az adattagokat
        //privát adattagok
        //publikussá is teheted a metódust, de csak akkor fog lefutni a metódus ha meghívos a konstruktorban
        //ha publikus  ametódus akkor példányosítás után meghívhatod mert publikus
        //ebben az esetben privát a metódus
        //osztály általános séma
        //objektum egy konkrét egyed
        this.#kutya=kutya//this konkrét példányra mutat
        this.szuloElem=szuloElem
        this.#kutyaAdatKiir()
        this.gombok = $(".kivalaszt:last")//csak az aktuálus gombot jelenítse meg amire kattintunk
        this.#esemenyKezelo()



    }

    #esemenyKezelo(){


        this.gombok.on("click",() => {//nyílfgvteljes példányt jelenti
            //console.log(event.target)//az elem ami kiváltotta az eseményt
            console.log(this)//teljes objektumot kapom
            //a nyílfüggv és function közötti különbség az, hogy a this nyilfgv esetén a konkrét osztálypéldányra mutat
            //a function végtelen fgv esetén pedig arra  a html elemre amelyik kiváltotta az eseményt
        })
        
    }


    #kutyaAdatKiir() {//# jelenti h privát

        //console.log(kutyaLista)//elérem a listát
    
        //console.log(divElem)
        this.szuloElem.append(`<div class = "col-lg-4 col-md-6 card">
                            <div class = "card-body">
                                <h3>${this.#kutya.nev}</h3>
                                <p>kor: ${this.#kutya.kora}</p>
                                <p>nem: ${this.#kutya.nem}</p>
                                <button class = "kivalaszt btn btn-primary">Kiválaszt</button>
                            </div>
                         </div>`)
    
    
        
    }

}