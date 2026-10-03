import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})

export class Zodiaco {
  nombre: string = '';
  Apaterno: string = '';
  Amaterno: string = '';

  dia: number = 0;
  mes: number = 0;
  anio: number = 0;

  Rmes: string = '';
  Redad: number = 0;
  imagen: string = '';

  Aanio: number = 2026;
  Adia: number = 3;
  Ames: number = 10;
  edad: number = 0;

  Rata: number[] = [1996, 2008, 2020]
  Buey: number[] = [1997, 2009, 2021]
  Tigre: number[] = [1998, 2010, 2022]
  Conejo: number[] = [1999, 2011, 2023]
  Dragon: number[] = [2000, 2012, 2024]
  Serpiente: number[] = [2001, 2013, 2025]
  Caballo: number[] = [2002, 2014, 2026]
  Cabra: number[] = [2003, 2015, 2027]
  Mono: number[] = [2004, 2016, 2028]
  Gallo: number[] = [2005, 2017, 2029]
  Perro: number[] = [2006, 2018, 2030]
  Cerdo: number[] = [2007, 2019, 2031]




  imprimir(): void {

    if (this.anio === this.Buey[0] || this.anio === this.Buey[1] || this.anio === this.Buey[2] ) { 
      this.Rmes = "Buey"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg"; }
    if (this.anio === this.Tigre[0] || this.anio === this.Tigre[1] || this.anio === this.Tigre[2]) { 
      this.Rmes = "Tigre"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg"; }
    if (this.anio === this.Conejo[0] || this.anio === this.Conejo[1] || this.anio === this.Conejo[2]) { 
      this.Rmes = "Conejo"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg"; }
    if (this.anio === this.Dragon[0] || this.anio === this.Dragon[1] || this.anio === this.Dragon[2]) { 
      this.Rmes = "Dragón"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg"; }
    if (this.anio === this.Serpiente[0] || this.anio === this.Serpiente[1] || this.anio === this.Serpiente[2]) { 
      this.Rmes = "Serpiente"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg"; }
    if (this.anio === this.Caballo[0] || this.anio === this.Caballo[1] || this.anio === this.Caballo[2]) { 
      this.Rmes = "Caballo"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg"; }
    if (this.anio === this.Cabra[0] || this.anio === this.Cabra[1] || this.anio === this.Cabra[2]) { 
      this.Rmes = "Cabra"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg"; }
    if (this.anio === this.Mono[0] || this.anio === this.Mono[1] || this.anio === this.Mono[2]) { 
      this.Rmes = "Mono"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg"; }
    if (this.anio === this.Gallo[0] || this.anio === this.Gallo[1] || this.anio === this.Gallo[2]) { 
      this.Rmes = "Gallo"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg"; }
    if (this.anio === this.Perro[0] || this.anio === this.Perro[1] || this.anio === this.Perro[2]) { 
      this.Rmes = "Perro"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg"; }
    if (this.anio === this.Cerdo[0] || this.anio === this.Cerdo[1] || this.anio === this.Cerdo[2]) { 
      this.Rmes = "Cerdo"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg"; }
    if (this.anio === this.Rata[0] || this.anio === this.Rata[1] || this.anio === this.Rata[2]) { 
      this.Rmes = "Rata"; this.imagen = "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg"; }


    this.edad = this.Aanio - this.anio;

    if (this.Ames < this.mes) {
      this.Redad = this.edad - 1;
    }
    else if (this.Ames === this.mes) {
      if (this.Adia < this.dia) {
        this.Redad = this.edad - 1;
      } else {
        this.Redad = this.edad;
      }
    }
    else {
      this.Redad = this.edad;
    }



  }
}
