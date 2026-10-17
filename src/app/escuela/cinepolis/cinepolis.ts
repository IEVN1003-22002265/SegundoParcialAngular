import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cine } from '../alumno';


@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})

export class Cinepolis implements OnInit {
  indiceEdition: number = -1;
  costo: number = 0;
  boletos: number = 12;
  formulario!: FormGroup;

  private router = inject(Router);

  compras: Cine[] = []

  nuevaCompra: Cine = {
    nombre: 'sin asignar',
    compradores: 0,
    cantidad: 0,
    sino: true,
    costo: 0

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(0),
      cantidad: new FormControl(0),
      sino: new FormControl(true),
    })

    const datos = localStorage.getItem('compras');
    if (datos) {
      this.compras = JSON.parse(datos);
    }
  }

  muestraCompra(): void {

    this.nuevaCompra.nombre = this.formulario.value.nombre;
    this.nuevaCompra.compradores = this.formulario.value.compradores;
    this.nuevaCompra.cantidad = this.formulario.value.cantidad;
    this.nuevaCompra.sino = this.formulario.value.sino;

    let boletoMax = this.nuevaCompra.compradores * 7;

    if (this.nuevaCompra.cantidad > boletoMax) {
      alert('No se pueden comprar más boletos.');
      return;
    }

    let precio = this.nuevaCompra.cantidad * this.boletos;

    if (this.nuevaCompra.cantidad > 5) {
      let desc15 = precio * 0.15;
      let total = precio - desc15;
      this.costo = total;
    } else if (this.nuevaCompra.cantidad >= 3) {
      let desc10 = precio * 0.10;
      let total = precio - desc10;
      this.costo = total;
    } else {
      this.costo = precio;
    }

    if (this.formulario.value.sino === true) {
      let desc10 = this.costo * 0.10;
      let totalAD = this.costo - desc10;
      this.costo = totalAD;
    }

    this.nuevaCompra.costo = this.costo;

    this.agregarCompra()

  }

  agregarCompra(): void {

    if (
      this.nuevaCompra.nombre === '' ||
      this.nuevaCompra.compradores === 0 ||
      this.nuevaCompra.cantidad === 0
    ) {
      alert('Todos los campos son oblogatorios')
      return
    }
    if (this.indiceEdition !== -1) {
      this.compras[this.indiceEdition] = {
        ...this.nuevaCompra
      }
    } else {
      this.compras.push({ ...this.nuevaCompra })
    }

    localStorage.setItem(
      'compras',
      JSON.stringify(this.compras)
    )

  }

  cargarCompra(): void {
    const datos = localStorage.getItem('compras');

    if (datos) {
      this.compras = JSON.parse(datos);
      this.router.navigate(['escuela/mostrar-ventas']);
      this.limpiarCampos()
    }
  }

  eliminarCompra(index: number): void {
    this.compras.splice(index, 1)
    localStorage.setItem(
      'compras',
      JSON.stringify(this.compras)
    )
  }

  limpiarCampos(): void {
    this.nuevaCompra = {
      nombre: '',
      compradores: 0,
      cantidad: 0,
      sino: true,
      costo: 0,
    }
    this.formulario.patchValue({
      nombre: this.nuevaCompra.nombre,
      compradores: this.nuevaCompra.compradores,
      cantidad: this.nuevaCompra.cantidad,
      sino: this.nuevaCompra.sino,
    })
    this.indiceEdition = -1
  }

  editarCompra(index: number): void {
    this.nuevaCompra = {
      ...this.compras[index]
    }
    const compra = this.compras[index]
    this.formulario.patchValue({
      nombre: compra.nombre,
      compradores: compra.compradores,
      cantidad: compra.cantidad,
      sino: compra.sino,
    })
    this.indiceEdition = index
  }




}
