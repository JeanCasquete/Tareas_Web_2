import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPago, IPagos} from '../models/pagos.model';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private baseURL = `http://localhost:2500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAllData(): Observable<IPagos > {
    return this.http.get<IPagos >(`${this.baseURL}/pagos`)
  }
  postData(data: any): Observable<IPago> {
    return this.http.post<IPago>(`${this.baseURL}/pagos`, data)
  }
  updateData(data: any, id: string): Observable<IPago> {
    return this.http.put<IPago>(`${this.baseURL}/pagos/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/pagos/${id}`)
}

getActivos(): Observable<IPagos > {
  return this.http.get<IPagos >(`${this.baseURL}/pagos/activos`)
}

  
getInactivos(): Observable<IPagos > {
  return this.http.get<IPagos >(`${this.baseURL}/pagos/inactivos`)
}
}