import { AlumnosUtl } from '../alumnosUTL';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../alumnosapi.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
 
@Component({
  imports: [FormsModule, RouterLink, AlumnosFilterPipe, CommonModule],
  selector: 'app-alumnos',
  templateUrl: './alumnos.html',
})
export class Alumnos implements OnInit {
 
  listFilter:string=''
  alumnoTitle:string
  dataSource:AlumnosUtl[]=[];
 
  constructor(public alumnosUtl:ProyectoapiService, private router: Router){}
 
  alumnosIric:AlumnosUtl[]=[{
 
    matricula:1234,
    nombre:'pedro',
    apaterno:'lopez',
    amaterno:'muñoz',
    correo: 'pedro@gmail.com',
 
  }
 
  ]
 
  ngOnInit(): void {
    this.cargarAlumnos();
  }
 
 
  cargarAlumnos(): void {
 
    this.alumnosUtl.getAlumnos().subscribe({
      next: (response: any) => {
 
        console.log('Datos recibidos del API: ', response);
 
        this.dataSource = response.alumnos;
      },
 
      error: (error) => {
 
        console.error('Error al consultar el API:', error);
 
      },
 
      complete: () => {
 
        console.log('Carga de alumnos finalizada');
 
      }
 
    });
 
  }
 
 
}