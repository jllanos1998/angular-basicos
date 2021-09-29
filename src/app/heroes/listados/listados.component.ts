import { Component } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'

})
export class ListadosComponent  {
 
  heroes: string[] = ["Spiderman","Iroman","Hulk","Thor","Capitan America"]
  heroeBorrado: string = "";
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
