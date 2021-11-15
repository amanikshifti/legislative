import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import { ConnexionPage } from '../connexion/connexion.page';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-parti-coalition2',
  templateUrl: './detail-parti-coalition2.page.html',
  styleUrls: ['./detail-parti-coalition2.page.scss'],
})
export class DetailPartiCoalition2Page implements OnInit {
  
  eluCc;
newUrl:string;
bureau;
id_b;
eluC;
elu;
  id_elu: any;
  nom: any;
    constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, private httpClient: HttpClient) {
      this.route.queryParams.subscribe(params => {
    
        this.id_elu = params["id_elu"];
        this.nom = params["nom"];
        if (this.router.getCurrentNavigation().extras.state) {
        
          this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
          this.nom = this.router.getCurrentNavigation().extras.state.nom;
        }
      //  console.log(this.nomB);
      });
    
    
    
    }
    ngOnInit() {
      this.apiService.getElu().subscribe((data) => {
       this.eluCc = data;
        console.log(this.eluCc);
      });

      return this.nom,
      this.id_elu;
    }


    DetailsElu(eluCc) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
        'id_elu': eluCc.id,
        'nom' : eluCc.nom,
        'email' : eluCc.email,
        'telephone' : eluCc.telephone,
        'fax' : eluCc.fax,
        'instagram' : eluCc.instagram,
        'facebook' : eluCc.facebook,
        'linkedin' : eluCc.linkedin,
        'twitter' : eluCc.twitter,
        'liste' : eluCc.liste,
        'circonscription' : eluCc.circonscription,
        'typeListe' : eluCc.typeListe,
        'bloc' : eluCc.bloc,
        'commission' : eluCc.commission,
        'commissionSP' : eluCc.commissionSP,
        'commissionSPT' : eluCc.commissionSPT,
        'photo' : eluCc.photo,
        'manifeste' : eluCc.manifeste,
        'age':eluCc.age
    
        },
        state: {
     
          id_elu : this.id_elu,
          nom : this.nom, 
        }
      }
      this.router.navigate(['/profil-coalition2'], navigationExtras);
    }


}
