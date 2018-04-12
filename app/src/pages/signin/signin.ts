import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';



@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  resetPassword(){
    this.navCtrl.push(ResetpasswordPage);
  }

  signIn(){
    if (this.form.form.valid) {
      this.authService.signIn(this.user)
        .then(() =>{
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) =>{
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
          if(error.code =='auth/invalid-email'){
            toast.setMessage('Email invalido');
          } else  if(error.code =='auth/user-disabled'){
            toast.setMessage('Usuario desativado');
          } else  if(error.code =='auth/user-not-found'){
            toast.setMessage('Usuario não encontrado');
          } else  if(error.code =='auth/wrong-password'){
            toast.setMessage('Senha invalida');
          }
          toast.present();
        });
    }
  }

  signInWithGoogle(){
    this.authService.signInWithGoogle()
    .then(() =>{
      this.navCtrl.setRoot(HomePage);
    })
    .catch((error)=>{
      this.toastCtrl.create({ duration:3000, position: 'bottom', message: 'Erro ao efetuar login'})
      .present();
    })
  }

}