import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const values = form.value;
    const payload ={
      username : values.username,
      password: values.password
    }
   
    this.apiService.post('authenticate', payload)
    .subscribe(data =>{
      this.auth.setToken(data.token);
      this.router.navigate(['/contacts']);
    })


  }

}
