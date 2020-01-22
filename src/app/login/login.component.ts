import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:string;
  Password:string;
  loginValue:boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  // loginClick(){
  //   if(this.Username==="abc" &&this.Password==="123"){
  //     console.log("yeah!");
  //       this.loginValue = true;
  //   }
  // }

  loginUser(event){
     event.preventDefault()
     const target = event.target
     const username = target.querySelector('#username').value
     const password = target.querySelector('#password').value;
     //this.auth.getUserDetails(username,password);
     console.log(username, password);
  }

  onSubmit(){
    if(this.Username==='admin'&&this.Password==='12345'){
      this.router.navigate(['connect']);
      //this.router.navigate(['your-route']);
    }
  }

}
