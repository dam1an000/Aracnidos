import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form={
    nombre: "",
    correo: "",
    contra: ""
  }
  ccontra:any



  constructor(private auth: AngularFireAuth){

  }
  ngOnInit(): void{
     
  }

  registrar(){
    if (this.form.nombre != "" && this.form.correo != "" && this.form.contra != "" && this.ccontra != "") 
    {
      if (this.form.contra != this.ccontra) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
        })
      }
      else{
        this.adduser(this.form).then((result)=>{
          if (result) {
            Swal.fire({
              icon: 'success',
              title: '¡Registrado correctamente!',
              showConfirmButton: false,
              timer: 1500
            })
            this.ngOnInit()
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Error. Intente nuevamente.',
            })
          }
        })
      }
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Favor de completar los datos',
      })
    }
  }
  
  adduser(form:any){
    var promise = new Promise((resolve,reject)=>{
      this.auth.createUserWithEmailAndPassword(form.correo,form.contra)
      .then((result)=>{
        resolve(result)
      })
      .catch(function(error){
        if (error.code == "auth/invalid-email") {
          Swal.fire({
            icon: 'warning',
            title: 'Ingresa un correo electrónico válido.',
          })
        }
        if (error.code == 'auth/email-already-in-use') {
          Swal.fire({
            icon: 'warning',
            title: 'Ese correo ya se encuentra registrado.',
          })
        }
        if (error.code == 'auth/weak-password') {
          Swal.fire({
            icon: 'warning',
            title: 'La contraseña debe tener al menos 6 caracteres.',
          })
        }
      })
    })
    return promise;
  }
}
