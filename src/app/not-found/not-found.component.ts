import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>
      Error 404, ruta no encontrada!!
    </h2>
    <a class="button" routerLink="/home" >Ir a Inicio</a>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
