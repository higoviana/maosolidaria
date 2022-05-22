
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url='http://localhost:3000/download'
  constructor (private http: HttpClient) {}

  downloadPDF() {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', './aplication/pdf')
    return this.http.get(this.url, { headers: headers, responseType: 'blob'})
  }

}
