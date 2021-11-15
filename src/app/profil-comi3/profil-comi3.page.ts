import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-profil-comi3',
  templateUrl: './profil-comi3.page.html',
  styleUrls: ['./profil-comi3.page.scss'],
})
export class ProfilComi3Page implements OnInit {

  age;
  buttons;
  id_elu:any;
  nom:any;
  email;
  telephone;
  facebook;
  twitter;
  instagram;
  linkedin;
  liste;
  typeListe;
  circonscription;
  bloc;
  fax;
  commission;
  commissionSP;
  commissionSPT;
  manifeste;
  photo;
  eluC;
  eluCc;
  id_b: any;
  nomB;
  id: any;
  nomc: any;
  id_c: any;
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
        this.id_b = params["id_c"];
        this.nomB = params["nomc"];
      });
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomc = this.router.getCurrentNavigation().extras.state.nomc;
        this.id_c = this.router.getCurrentNavigation().extras.state.id_c;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
    }
  ngOnInit() {
    return this.nomc,
    this.id_c

  }



  buttonretour() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id_c : this.id_c,
        nomc : this.nomc,
        id_elu : this.id_elu,
        nom : this.nom,
      },
      state: {
        id_c : this.id_c,
        nomc : this.nomc,
        id_elu : this.id_elu,
        nom : this.nom,
      }
    }
    this.router.navigate(['/detail-com-y'], navigationExtras);
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
