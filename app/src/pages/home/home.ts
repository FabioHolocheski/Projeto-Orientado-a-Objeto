import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../providers/auth/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName: string;
  imgUrl: string;

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private afAuth: AngularFireAuth) {

      const authObserver = afAuth.authState.subscribe(user =>{
        this.displayName = '';
        this.imgUrl = '';

        if (user){
          this.displayName = user.displayName;
          this.imgUrl = user.photoURL;

          authObserver.unsubscribe();
        }
      })
    }

  signOut(){
    this.authService.SignOut()
      .then(()=>{
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error)=>{
        console.error(error);
      })
  }

}
