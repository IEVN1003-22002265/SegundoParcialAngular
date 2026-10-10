import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-lista-escuela',
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela implements OnInit {
  formulario: FormGroup

  alumno: Alumno[] = []

  nuevoAlumno: Alumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: '',
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl(''),
    })
  }



  agregarAlumnos(): void {
    if (
      this.nuevoAlumno.matricula === '' ||
      this.nuevoAlumno.nombre === '' ||
      this.nuevoAlumno.correo === '' ||
      this.nuevoAlumno.materia === ''
    ) {
      alert('Todos los campos son oblogatorios')
      return
    }

    this.alumno.push({...this.nuevoAlumno})

    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumno)
    )
  }

  muestraAlumno(): void {
    this.nuevoAlumno.matricula = this.formulario.value.matricula
    this.nuevoAlumno.nombre = this.formulario.value.nombre
    this.nuevoAlumno.correo = this.formulario.value.correo
    this.nuevoAlumno.materia = this.formulario.value.materia
    this.agregarAlumnos()

  }

  cargarAlumnos(): void {
    const datos = localStorage.getItem('alumnos');

    if (datos) {
      this.alumno = JSON.parse(datos);
    }
  }

}

