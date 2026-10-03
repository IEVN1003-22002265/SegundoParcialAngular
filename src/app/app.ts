import { Component, signal } from '@angular/core';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import {  Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Zodiaco, Navbar],
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('SegundoParcialAngular');
}
