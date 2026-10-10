import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cine } from '../alumno';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  costo: number = 0;
  boletos: number = 12;
  formulario!: FormGroup;

  nuevaCompra: Cine = {
    nombre: 'sin asignar',
    compradores: 0,
    cantidad: 0,
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      cantidad: new FormControl(''),
      sino: new FormControl('si'),
    })
  }

  muestraCompra(): void {
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

    if (this.formulario.value.sino === 'si') {
      let desc10 = this.costo * 0.10;
      let totalAD = this.costo - desc10;
      this.costo = totalAD;
    }

    this.nuevaCompra.nombre = this.formulario.value.nombre;
    this.nuevaCompra.compradores = this.formulario.value.compradores;
    this.nuevaCompra.cantidad = this.formulario.value.cantidad;
  }
  
}
