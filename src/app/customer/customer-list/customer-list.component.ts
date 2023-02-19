import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: any;

  cus = {
    id: 0,
    nombre: "",
    apellidos: ""
    /*  nombre_fiscal: '',
     nif_cif: '',
     direccion: '',
     direccion_fiscal: '',
     codigo_postal: 0,
     poblacion: '',
     provincia: '',
     email: '',
     pagina_web: '',
     cuenta_corriente: '',
     telefono: '',
     telefono_2: '',
     telefono_3: '',
     contacto: '',
     contacto_2: '' */
  }

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.customersService.recuperarTodos().subscribe((result: any) => this.customers = result);
  }

  public alta() {
    this.customersService.alta(this.cus).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  public baja(id: number) {
    this.customersService.baja(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  public modificacion() {
    this.customersService.modificacion(this.cus).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  public seleccionar(id: number) {
    this.customersService.seleccionar(id).subscribe((result: any) => this.cus = result[0]);
  }

  public hayRegistros() {
    return true;
  }

}
