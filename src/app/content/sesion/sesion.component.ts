import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit{
  form={
    correo:"",
    contra:"",
  }

  constructor(private auth: AngularFireAuth, private router: Router){

  }
  ngOnInit(): void {
    this.auth.authState.subscribe(user =>{
      if (user) {
        this.router.navigate(['/inicio'])
      }
    })
  }
  iniciarsesion(){
    this.auth.signInWithEmailAndPassword(this.form.correo,this.form.contra).then((userCredential)=>{
      const user= userCredential.user;
      console.log(user)
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: '¡Bienvenido!',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage =error.message; 
    })
  }
}
