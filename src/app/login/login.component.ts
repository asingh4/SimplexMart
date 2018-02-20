import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-auth/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginServiceService]
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  status ;
  errorMessage = '';
  constructor(private lss : LoginServiceService,private router : Router) { }

  ngOnInit() {
    
  }

  invokeLoginProc(){
    this.lss.loginService(this.username,this.password).subscribe(
      res => {
        this.status = res;
        if(this.status && this.status[0].status_code == 2){
          this.errorMessage = 'Incorrect Credentials';
        }else{
          this.errorMessage = 'Verified';
          this.router.navigate(['homepage']);
        }
      }
    );
  }


}
