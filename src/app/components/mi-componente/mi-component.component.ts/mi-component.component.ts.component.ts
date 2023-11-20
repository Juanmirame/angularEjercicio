import { Component, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-component.component.ts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-component.component.ts.component.html',
  styleUrl: './mi-component.component.ts.component.css'
})
export class MiComponentComponentTsComponent {

}

import { Component } from '@angular/core'; 

//Decorador, propiedades y datos
@Component({
  selector: 'mi-componente',
  template: `
<h1>{{titulo}}</h1>
<h2>{{year}}</h2>
<P>{{comentario}}</P>

`

})
export class MiComponente{

  public titulo: string;
  public comentario: String; 
  public year: number;

  constructor(){
    this.titulo = "Este es mí primer componente";
    this.comentario = "Este es mi primer componente";
    this.year = 2023;

    console.log("Componente mi-componente cargado!!");
    console.log(this.titulo, this.comentario, this.year;
      
  }
}
