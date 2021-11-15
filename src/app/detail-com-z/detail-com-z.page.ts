import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-com-z',
  templateUrl: './detail-com-z.page.html',
  styleUrls: ['./detail-com-z.page.scss'],
})
export class DetailComZPage implements OnInit {

  id_c: any;
  nomc: any;
  eluC;
  eluCc;
  newUrl: string;
  id_elu: any;
  nom: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private httpClient: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.id_c = params["id_c"];
      this.nomc = params["nomc"];
      this.id_elu = params["id_elu"];
      this.nom = params["nom"];
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomc = this.router.getCurrentNavigation().extras.state.nomc;
        this.id_c = this.router.getCurrentNavigation().extras.state.id_c;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
      console.log(this.nomc);
    });
  }

  ngOnInit() {

    this.apiService.getEluParCommissionSPT(this.nomc).subscribe((data) => {
      console.log(this.nomc);
      this.eluC = data;
      this.eluCc = data;
      console.log(this.eluC);
      return this.eluCc = data;

    });
    this.newUrl = 'http://legislative-2019.tn/apiEluParCommissionSPT/' + this.nomc;
    console.log(this.newUrl);
      this.httpClient.get(this.newUrl).subscribe((data) => {
      console.log(this.nomc);
      console.log(this.id_c);

      this.eluC = data;
      this.eluCc = data;
      console.log(this.eluCc);
    });

    return this.nomc,
    this.id_c;
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
       'age':eluCc.age,
       'id_c' : this.id_c,
       'nomc' : this.nomc,
      },
      
      state: {
        id_c : this.id_c,
        nomc : this.nomc,
        id_elu : this.id_elu,
        nom : this.nom, 
      }
    }
    this.router.navigate(['/profil-comi4'], navigationExtras);
  }

}
