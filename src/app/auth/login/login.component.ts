import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup|any;
  submitted = false;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^.+@[^\.].*\.[a-z]{2,}$/)]],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const email =this.loginForm.get('email').value;

      const password =this.loginForm.get('password').value;
      if (email == 'admin1234@gmail.com' && password == 'admin') {
        // this.messageService.add({ severity: 'success', detail: "Admin Logged In", key: 'success' });
        alert("Admin Logged In")
        setTimeout(() => {
          this.router.navigate(['/pages/dashboard']);
        }, 2000)
      }
      else{
        alert("Authentication Failed.")
      }
    }
  }

}
