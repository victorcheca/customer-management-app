import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = 'http://localhost:8888/customer_management_backend/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(cliente: any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(cliente));
  }

  baja(id: number) {
    return this.http.get(`${this.url}baja.php?id=${id}`);
  }

  seleccionar(id: number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }

  modificacion(cliente: any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(cliente));
  }
}
