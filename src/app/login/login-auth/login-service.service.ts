import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceService {

  constructor(private http : Http) {

   }

   loginService(username,password){
     return this.http.post('http://localhost:80/loginCheck/login.php',{"username": username,"password":password}).map(
        res =>{
          const data = res.json();
          console.log(data);
          return data;     
          }
      );
   }
}
