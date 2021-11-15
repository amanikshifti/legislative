import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  facebook = null ;
  twitter = null;
  linkedin = null;
  email ;
  telephone = null;
  fax = null;
  instagram = null;

  constructor(private navParams: NavParams, private modalController: ModalController, private alertController:AlertController) { }

  ngOnInit() {
    this.facebook = this.navParams.get('facebook');
    this.telephone = this.navParams.get('telephone');
    this.fax = this.navParams.get('fax');
    this.email = this.navParams.get('email');
    this.instagram = this.navParams.get('instagram');
    this.linkedin = this.navParams.get('linkedin');
    this.twitter = this.navParams.get('twitter');
  }

  closeManif() {
    this.modalController.dismiss();
  }

  async  message(){
      const alert = await this.alertController.create({
        message: '<p style="font-size:5vmin;color:primary;">الرابط غير متوفر حاليا </p>',
        buttons: ['رجوع']
      });
      await alert.present();
    }
  }