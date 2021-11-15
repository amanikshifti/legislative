import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-profil-parti',
  templateUrl: './profil-parti.page.html',
  styleUrls: ['./profil-parti.page.scss'],
})
export class ProfilPartiPage implements OnInit {

  age;
  buttons;
  id_elu;
  nom;
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
  idCc: any;
  nomCc: any;
  id: any;
  idPL;
  nomPL;
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
        this.idPL = params["idPL"];
        this.nomPL = params["nomPL"];
      });

   
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomPL = this.router.getCurrentNavigation().extras.state.nomPL;
        this.idPL = this.router.getCurrentNavigation().extras.state.idPL;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
    }
    ngOnInit() {
      return this.nomPL,
      this.idPL;
  
    }

    all(eluC) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
        'id_elu': eluC.id,
        'nom' : eluC.nom,
        'email' : eluC.email,
        'telephone' : eluC.telephone,
        'fax' : eluC.fax,
        'age' : eluC.age,
        'instagram' : eluC.instagram,
        'facebook' : eluC.facebook,
        'linkedin' : eluC.linkedin,
        'twitter' : eluC.twitter,
        'liste' : eluC.liste,
        'circonscription' : eluC.circonscription,
        'typeListe' : eluC.typeListe,
        'bloc' : eluC.bloc,
        'commission' : eluC.commission,
        'commissionSP' : eluC.commissionSP,
        'commissionSPT' : eluC.commissionSPT,
        'photo' : eluC.photo,
        'manifeste' : eluC.manifeste,
        }
      }
      this.router.navigate(['/detail-parti'], navigationExtras);
    }

   
    buttonretour() {
 
      let navigationExtras: NavigationExtras = {
        queryParams: {
          idPL : this.idPL,
          nomPL : this.nomPL,
          id_elu : this.id_elu,
          nom : this.nom
        },
        state: {
          idPL : this.idPL,
          nomPL : this.nomPL,
          id : this.id,
          nom : this.nom,
        }
      }
      this.router.navigate(['/detail-parti'], navigationExtras);
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