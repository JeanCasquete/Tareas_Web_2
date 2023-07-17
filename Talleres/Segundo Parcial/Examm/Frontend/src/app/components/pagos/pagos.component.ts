import { Component, OnInit } from '@angular/core';
import { PagosService } from "../../services/pagos.service";
import { IPago, IPagos } from "../../models/pagos.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  dataProducts:IPagos = { sum:0, pagos:[] };

  ngOnInit(): void {
    this.logservice.getAllData()
    .subscribe(data => {
      this.dataProducts= data;
    })
    
  }
  constructor(
    private logservice: PagosService ) { 
    
  }


  mostraractivos() {
    this.logservice.getActivos()
    .subscribe(data => {
      this.dataProducts= data;
    })

  }

  mostrarInactivo() {
    this.logservice.getInactivos()
    .subscribe(data => {
      this.dataProducts= data;
    })

  }

  actualizarEstadoPago(id: string | undefined) {
    if (id) {
      const status = false;
      this.logservice.updateData({ status }, id)
        .subscribe(updatedPago => {
          // Actualización exitosa, puedes manejar la respuesta si es necesario
          console.log('Pago actualizado:', updatedPago);
          // Volver a cargar los datos para reflejar los cambios
          this.mostrarInactivo()
        }, error => {
          // Manejo de errores en caso de que la actualización falle
          console.error('Error al actualizar el estado del pago:', error);
        });
    }
  }

  RestaurarEstadoPago(id: string | undefined) {
    if (id) {
      const status = true;
      this.logservice.updateData({ status }, id)
        .subscribe(updatedPago => {
          // Actualización exitosa, puedes manejar la respuesta si es necesario
          console.log('Pago actualizado:', updatedPago);
          // Volver a cargar los datos para reflejar los cambios
          this.mostraractivos()
        }, error => {
          // Manejo de errores en caso de que la actualización falle
          console.error('Error al actualizar el estado del pago:', error);
        });
    }
  }
}


