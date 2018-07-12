import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public UserName;
  public Password;
  
  constructor() { }

  public sendData()
  {
      console.log(this.UserName);
      console.log(this.Password);
      
  }

  
  ngOnInit() {
  }

}
