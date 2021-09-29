import { Component } from "@angular/core"

@Component({
    selector:"app-contador",
    template: `
            <h1>Hola Aprendiendo Angular con Fernando Torres</h1>

            <h3>la base es: <strong>55</strong></h3>

            <button (click)= " acumular(+1) " >+1</button>
            <span>{{numero}}</span>
            <button (click) = "acumular(-1)">-1</button>

            <button (click)= " sumarCinco(+5) " >+5</button>
            <span>{{base}}</span>
            <button (click) = "sumarCinco(-5)">-5</button>
    `
})
export class ContadorComponent{
    title = 'bases';
    numero = 0;
    base:number = 5;
    acumular(valor:number){
    this.numero +=valor;
  }

    sumarCinco(numero:number){
    this.base += numero
  }
}