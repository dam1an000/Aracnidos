import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'

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
        alert("Las contraseñas no coinciden")
      }
      else{
        this.adduser(this.form).then((result)=>{
          if (result) {
            alert("¡Registrado correctamente!")
            this.ngOnInit()
          }
          else{
            alert("Error. intente nuevamente.")
          }
        })
      }
    }
    else{
      alert("Favor de completar los datos")
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
          alert("Ingresa un correo electronico valido.") 
        }
        if (error.code == 'auth/email-already-in-use') {
          alert("Ese correo ya se encuentra registrado.")
        }
        if (error.code == 'auth/weak-password') {
          alert("La contraseña debe tener almenos 6 caracteres.")
        }
      })
    })
    return promise;
  }
}
