import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  apiURL(){
    return "http://localhost/responsi-api";
  }

  getCatatan(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }
}
