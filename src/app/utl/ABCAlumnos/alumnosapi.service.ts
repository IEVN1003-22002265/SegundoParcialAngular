import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnosUtl } from './alumnosUTL';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProyectoapiService {
    constructor(private http: HttpClient) { }

    public getAlumnos(): Observable<AlumnosUtl[]> {
        return this.http.get<AlumnosUtl[]>
            ('http://127.0.0.1:5000/api/alumnos')
    }
    agregarNuevoAlumno(datos: AlumnosUtl[]){
        return this.http.post<AlumnosUtl[]>
            ('http://127.0.0.1:5000/api/alumnos', datos)
    }
}