import { Component, OnInit } from '@angular/core';
import { LogicaService } from "../../services/logica.service";
import { Icliente, Iclientes } from "../../models/cliente.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  dataProducts:Iclientes = { sum:0, clientes:[] };

  ngOnInit(): void {
    this.logservice.getAllData()
    .subscribe(data => {
      this.dataProducts= data;
    })
    
  }
  constructor(
    private logservice: LogicaService
  ) { 
    
  }

}
