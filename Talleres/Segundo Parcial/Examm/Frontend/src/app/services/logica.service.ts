import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icliente, Iclientes } from '../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class LogicaService {

  private baseURL = `http://localhost:2500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAllData(): Observable<Iclientes > {
    return this.http.get<Iclientes >(`${this.baseURL}/pagos`)
  }
  
  getActivos(): Observable<Iclientes > {
    return this.http.get<Iclientes >(`${this.baseURL}/pagos/activos`)
  }

    
  getInactivos(): Observable<Iclientes > {
    return this.http.get<Iclientes >(`${this.baseURL}/pagos/inactivos`)
  }
  postData(data: any): Observable<Icliente> {
    return this.http.post<Icliente>(`${this.baseURL}/pagos`, data)
  }
  updateData(data: any, id: string): Observable<Icliente> {
    return this.http.put<Icliente>(`${this.baseURL}/pagos/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/pagos/${id}`)
}
}

