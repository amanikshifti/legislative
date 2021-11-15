import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-profil-comi1',
  templateUrl: './profil-comi1.page.html',
  styleUrls: ['./profil-comi1.page.scss'],
})
export class ProfilComi1Page implements OnInit {
  id_elu: any;
  nom: any;
  email: any;
  age: any;
  telephone: any;
  instagram: any;
  facebook: any;
  twitter: any;
  circonscription: any;
  linkedin: any;
  liste: any;
  typeListe: any;
  commission: any;
  commissionSP: any;
  commissionSPT: any;
  manifeste: any;
  photo: any;
  bloc: any;
  fax: any;
  id_b: any;

  constructor(private route: ActivatedRoute , private router: Router, private modalController: ModalController) { 
    this.route.queryParams.subscribe(params => {
      this.id_elu = params [ 'id_elu' ] ;
      this.nom = params ['nom'] ;
      this.email = params['email'];
      this.age = params['age'];
      this.telephone = params ['telephone'] ;
      this.instagram = params['instagram'];
      this.facebook = params['facebook'];
      this.twitter = params['twitter'];
      this.linkedin = params['linkedin'];
      this.circonscription = params['circonscription'];
      this.liste = params['liste'];
      this.typeListe = params['typeListe'];
      this.commission = params['commission'];
      this.commissionSP = params['commissionSP'];
      this.commissionSPT = params['commissionSPT'];
      this.manifeste = params['manifeste'];
      this.photo = params['photo'];
      this.bloc = params['bloc'];
      this.fax = params['fax'];
   
    });
    if (this.router.getCurrentNavigation().extras.state) {
   
      this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
      this.nom = this.router.getCurrentNavigation().extras.state.nom;
    }
  }

  ngOnInit() {

    return this.nom,
    this.id_elu;
  }


  buttonretour() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
      
        id_elu : this.id_elu,
        nom : this.nom,
      },
      state: {
     
        id_elu : this.id_elu,
        nom : this.nom,
      }
    }
    this.router.navigate(['/poste'], navigationExtras);
  }


  async OpenManif() {
    const modal = await this.modalController.create({
      component : ManifModalPage,
      componentProps : {
        manifeste : this. manifeste
      }
    });
    modal.present();
  }
  async OpenCnx() {
    const modal = await this.modalController.create({
      component : ConnexionPage ,
      componentProps : {
        facebook : this. facebook,
        telephone : this.telephone,
        fax :this.fax,
        email :this.email,
        instagram : this.instagram,
        linkedin : this.linkedin,
      twitter : this.twitter,
      }
    });
    modal.present();
  }


}
