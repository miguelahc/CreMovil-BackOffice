import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { servicioautenticacion } from '../../../../../app/services/servicioautenticacion';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent  implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: servicioautenticacion
  ) { 
      // redirect to home if already logged in
      console.log(this.authenticationService.userValue);
      if (this.authenticationService.userValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.f.username.value);
    console.log(this.f.password.value);
      this.submitted = true;
      console.log("entro");

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          console.log("entro falso directo");
          return;
      }

      this.loading = true;
      console.log(this.f.username.value);
      console.log(this.f.password.value);
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          if (this.authenticationService.user!=null){
                  this.router.navigate([this.returnUrl]);
              }
              else{
                  this.loading=false;
                  return;
              }
              
  }
}
