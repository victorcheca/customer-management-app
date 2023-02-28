import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';

/* export interface ICustomerRecord {
  id: number,
  nombre: string,
  apellidos: string,
  nif_cif: string,
  nombre_fiscal: string,
  direccion: string,
  codigo_postal: number,
  poblacion: string,
  provincia: string,
  telefono: string
}
@Injectable({
  providedIn: 'root'
}) */

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers: any;

  public cus = {
    id: 0,
    nombre: '',
    apellidos: '',
    nif_cif: '',
    nombre_fiscal: '',
    direccion: '',
    codigo_postal: 0,
    poblacion: '',
    provincia: '',
    telefono: ''

  }

  /*   private _customer_list: ICustomerRecord[] = [];
  
    public displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'nif_cif', 'nombre_fiscal', 'direccion', 'codigo_postal', 'poblacion', 'provincia', 'telefono'];
  
    public dataSource = this._CustomerS;
   */

  constructor(private _CustomerS: CustomersService) {

  }

  ngOnInit() {
    this.recuperarTodos();

  }

  recuperarTodos() {
    this._CustomerS.recuperarTodos().subscribe((result: any) => this.customers = result);
  }

  public alta() {
    this._CustomerS.alta(this.cus).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  public baja(id: number) {
    this._CustomerS.baja(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  public modificacion() {
    this._CustomerS.modificacion(this.cus).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  public seleccionar(id: number) {
    this._CustomerS.seleccionar(id).subscribe((result: any) => this.cus = result[0]);
  }

  public hayRegistros() {
    return true;
  }

  /*  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.customersService.filter = filterValue.trim().toLowerCase();
   } */

}
