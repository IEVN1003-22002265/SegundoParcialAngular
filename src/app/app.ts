import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import {  Navbar } from './navbar/navbar';
import {Distancia} from './formulario/distancia/distancia';
import { ListaEscuela } from './escuela/lista-escuela/lista-escuela';
import { Cinepolis } from './escuela/cinepolis/cinepolis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Zodiaco, Navbar, Distancia, ListaEscuela, Cinepolis],
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('SegundoParcialAngular');
}
