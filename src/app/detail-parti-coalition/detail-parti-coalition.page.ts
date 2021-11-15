import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-parti-coalition',
  templateUrl: './detail-parti-coalition.page.html',
  styleUrls: ['./detail-parti-coalition.page.scss'],
})
export class DetailPartiCoalitionPage implements OnInit {

  id_b;
  nomB;
  eluC;
  eluCc;
  newUrl: string;
  id_elu: any;
  nom: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private httpClient: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.id_b = params["id_b"];
      this.nomB = params["nomB"];
      this.id_elu = params["id_elu"];
      this.nom = params["nom"];
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomB = this.router.getCurrentNavigation().extras.state.nomB;
        this.id_b = this.router.getCurrentNavigation().extras.state.id_b;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
    //  console.log(this.nomB);
    });
  }
  ngOnInit() {
       this.apiService.getEluParBloc(this.nomB).subscribe((data) => {
        console.log(this.nomB);
        this.eluC = data;
        this.eluCc = data;
        console.log(this.eluC);
        return this.eluCc = data;
      });

    // creation nouveau url var url = http://legislative-2019.tn/apiListeParCir/'+ this.nomCc
    // use the http client to call the api using the new url

    this.newUrl = 'http://legislative-2019.tn/apiEluParBloc/' + this.nomB;
    console.log(this.newUrl);
      this.httpClient.get(this.newUrl).subscribe((data) => {
      console.log(this.nomB);
      console.log(this.id_b);
      this.eluC = data;
      this.eluCc = data;
      console.log(this.eluCc);
    });

    return this.nomB,
    this.id_b;
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
      'id_b' : this.id_b,
      'nomB' : this.nomB,
      },
      state: {
        id_b : this.id_b,
        nomB : this.nomB,
        id_elu : this.id_elu,
        nom : this.nom, 
      }

    }
    this.router.navigate(['/profil-coalition'], navigationExtras);
  }


}
