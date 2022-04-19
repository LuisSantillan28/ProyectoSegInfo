import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    }) 
   }

  
  ngOnInit(): void {
  }

  iSesion(){
    console.log(this.form); 
    const user= this.form.value.user;
    const password= this.form.value.password;

    if(user == 'felipe' && password == '1111'){
//Redirecciona al dashboard
this.fakeLoading();
    }else{
      this.error(); 
      this.form.reset();
      //Mostramos un mensaje de error
    }

  }
  error(){
    this._snackBar.open('Usuario o Contraseña que ingresaron son invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  //
  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{

      this.router.navigate(['dashboard'])
    },1500);

    
  }

}
