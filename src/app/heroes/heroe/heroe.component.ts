import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})



 
export class HeroeComponent{
    nombre: string = "Iroman";
    edad  : number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    set newHeroe(newValor:string){
         this.nombre = newValor;
    }
    set newEdad(newValue:number){
         this.edad = newValue;
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }
 }

