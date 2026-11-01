import { MaestrosUtl } from '../maestrosUTL';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../maestrosapi.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MaestrosFilterPipe } from '../maestros-filter.pipe';
import { CommonModule } from '@angular/common';
 
@Component({
  imports: [FormsModule, RouterLink, MaestrosFilterPipe, CommonModule],
  selector: 'app-maestros',
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {
 
  listFilter:string=''
  maestroTitle:string
  dataSource:MaestrosUtl[]=[];
 
  constructor(public maestrosUtl:ProyectoapiService, private router: Router){}
 
  maestrosIric:MaestrosUtl[]=[{
 
    idmaestro:1234,
    nombre:'pedro',
    apaterno:'lopez',
    amaterno:'muñoz',
    correo: 'pedro@gmail.com',
 
  }
 
  ]
  ngOnInit(): void {
    this.cargarMaestros();
  }
 
 
  cargarMaestros(): void {
 
    this.maestrosUtl.getMaestros().subscribe({
      next: (response: any) => {
 
        console.log('Datos recibidos del API: ', response);
 
        this.dataSource = response.alumnos;
      },
 
      error: (error) => {
 
        console.error('Error al consultar el API:', error);
 
      },
 
      complete: () => {
 
        console.log('Carga de maestros finalizada');
 
      }
 
    });
 
  }
 
 
}