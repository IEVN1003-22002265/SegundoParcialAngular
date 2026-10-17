import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cine } from '../alumno';

@Component({
  selector: 'app-mostrar-ventas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './mostrar-ventas.css',
  templateUrl: './mostrar-ventas.html',
})
export class MostrarVentas implements OnInit {
  compras: Cine[] = [];

  mostrarModal: boolean = false;
  indiceEdition: number = -1;
  formulario!: FormGroup;
  boletos: number = 12;

  ngOnInit(): void {
    this.cargarDatos();

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(0),
      cantidad: new FormControl(0),
      sino: new FormControl('si'),
    });
  }

  cargarDatos(): void {
    const datos = localStorage.getItem('compras');
    if (datos) {
      this.compras = JSON.parse(datos);
    }
  }

  editarCompra(index: number): void {
    this.indiceEdition = index;
    const compra = this.compras[index];

    const tieneCineco = compra.sino === true;

    this.formulario.patchValue({
      nombre: compra.nombre,
      compradores: compra.compradores,
      cantidad: compra.cantidad,
      sino: tieneCineco,
    });

    this.mostrarModal = true;
  }

  guardarEdicion(): void {
    if (this.formulario.invalid) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const formValues = this.formulario.value;

    let boletoMax = formValues.compradores * 7;
    if (formValues.cantidad > boletoMax) {
      alert('No se pueden comprar más boletos de los permitidos.');
      return;
    }


    let precio = formValues.cantidad * this.boletos;
    let costoCalculado = precio;

    if (formValues.cantidad > 5) {
      costoCalculado = precio - (precio * 0.15);
    } else if (formValues.cantidad >= 3) {
      costoCalculado = precio - (precio * 0.10);
    }


    if (formValues.sino === 'si') {
      costoCalculado = costoCalculado - (costoCalculado * 0.10);
    }


    this.compras[this.indiceEdition] = {
      nombre: formValues.nombre,
      compradores: formValues.compradores,
      cantidad: formValues.cantidad,
      sino: formValues.sino,
      costo: costoCalculado
      
    } as any;

    localStorage.setItem('compras', JSON.stringify(this.compras));
    this.cerrarModal();
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.indiceEdition = -1;
    this.formulario.reset({
      nombre: '',
      sino: 'si',
      compradores: 0,
      cantidad: 0
    });
  }

  eliminarCompra(index: number): void {
    this.compras.splice(index, 1);
    localStorage.setItem('compras', JSON.stringify(this.compras));
  }
}