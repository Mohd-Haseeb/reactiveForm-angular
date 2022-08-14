import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { PasswordValidator } from './custom-validators/password-validator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive-form';

  registerForm: FormGroup = this.formbuilder.group({});
  submitted = false;


  constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {
      this.registerForm = this.formbuilder.group({
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required, Validators.minLength(6)]],
        confirmPassword : ['',Validators.required],
        acceptTerms : [false,Validators.requiredTrue]
      },{
        validators : PasswordValidator('password','confirmPassword')
      })
  }

  get h(){
    return this.registerForm.controls;
  }


  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Finished!!" + JSON.stringify(this.registerForm.value))

  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

}
