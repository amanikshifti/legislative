import { Component, OnInit } from '@angular/core';
import { Icon } from 'ionicons/dist/types/icon/icon';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import {ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-profil-bloc',
  templateUrl: './profil-bloc.page.html',
  styleUrls: ['./profil-bloc.page.scss'],
})
export class ProfilBlocPage implements OnInit {
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
        this.id_b = params["id_b"];
        this.nomB = params["nomB"];
      });
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomB = this.router.getCurrentNavigation().extras.state.nomB;
        this.id_b = this.router.getCurrentNavigation().extras.state.id_b;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
    }
    ngOnInit() {
      return this.nomB,
      this.id_b;
    }
    buttonretour() {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          id_b : this.id_b,
          nomB : this.nomB,
          id : this.id,
          nom : this.nom,
        },
        state: {
          id_b : this.id_b,
          nomB : this.nomB,
         id : this.id,
          nom : this.nom,
        }
      }
      this.router.navigate(['/detail-bloc'], navigationExtras);
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
