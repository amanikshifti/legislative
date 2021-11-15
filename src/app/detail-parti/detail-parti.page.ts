import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from './../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-parti',
  templateUrl: './detail-parti.page.html',
  styleUrls: ['./detail-parti.page.scss'],
})
export class DetailPartiPage implements OnInit {

  eluC;
  eluCc;
  idCc;
  nomCc;
  nomPL;
  idPL;
  newUrl: string;
  id_elu: any;
  nom: any;
  id: any;
  nomB: any;
  id_b: any;
  elub: Object;
  elubb: Object;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private httpClient: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.nomPL = params["nomPL"];
      this.idPL = params["idPL"];
      this.id_elu = params["id_elu"];
      this.nom = params["nom"];
      this.id_b = params["id_b"];
      this.nomB = params["nomB"];
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomPL = this.router.getCurrentNavigation().extras.state.nomPL;
        this.idPL = this.router.getCurrentNavigation().extras.state.idPL;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }

      console.log(this.nomPL);
    });
  }

  ngOnInit() {



    this.apiService.getEluParBloc(this.nomB).subscribe((data) => {
      console.log(this.nomB);
      this.elub = data;
      this.elubb = data;
      console.log(this.elub);
      return this.elubb = data;
    });

  // creation nouveau url var url = http://legislative-2019.tn/apiListeParCir/'+ this.nomCc
  // use the http client to call the api using the new url

  this.newUrl = 'http://legislative-2019.tn/apiEluParBloc/' + this.nomB;
  console.log(this.newUrl);
    this.httpClient.get(this.newUrl).subscribe((data) => {
    console.log(this.nomB);
    console.log(this.id_b);
    this.elub = data;
    this.elubb = data;
    console.log(this.elubb);
  });

    if (this.nomPL != null) {

      this.apiService.getEluParListe(this.nomPL).subscribe((data) => {
        console.log(this.nomPL);
        this.eluC = data;
        this.eluCc = data;
        console.log(this.eluC);
        return this.eluCc = data;

      });



      this.newUrl = 'https://legislative-2019.tn/apiEluParListe/' + this.nomPL;
      console.log(this.newUrl);
      this.httpClient.get(this.newUrl).subscribe((data) => {
        console.log(this.nomPL);
        this.eluC = data;
        this.eluCc = data;
        console.log(this.eluCc);
      });

    }


    else {
      this.apiService.getEluParListeNonP(this.nomPL).subscribe((data) => {
        console.log(this.nomPL);
        this.eluC = data;
        this.eluCc = data;
        console.log(this.eluC);
        return this.eluCc = data;

      });


      this.newUrl = 'https://legislative-2019.tn/apiEluParListeNonP/' + this.nomPL;
      console.log(this.newUrl);
      this.httpClient.get(this.newUrl).subscribe((data) => {
        console.log(this.nomPL);
        this.eluC = data;
        this.eluCc = data;
        console.log(this.eluCc);
      });
    }

    return this.nomPL,
      this.idPL;

  }
  DetailsElu(eluCc) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id_elu': eluCc.id,
        'nom': eluCc.nom,
        'email': eluCc.email,
        'telephone': eluCc.telephone,
        'fax': eluCc.fax,
        'instagram': eluCc.instagram,
        'facebook': eluCc.facebook,
        'linkedin': eluCc.linkedin,
        'twitter': eluCc.twitter,
        'liste': eluCc.liste,
        'circonscription': eluCc.circonscription,
        'typeListe': eluCc.typeListe,
        'bloc': eluCc.bloc,
        'commission': eluCc.commission,
        'commissionSP': eluCc.commissionSP,
        'commissionSPT': eluCc.commissionSPT,
        'photo': eluCc.photo,
        'manifeste': eluCc.manifeste,
        'age': eluCc.age,
        'idPL': this.idPL,
        'nomPL': this.nomPL,
      }
      ,
      state: {
        idPL: this.idPL,
        nomPL: this.nomPL,
        id_elu: this.id_elu,
        nom: this.nom,

      }
    }
    this.router.navigate(['/profil-parti'], navigationExtras);
  }

  DetailsElub(elubb) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id_elu': elubb.id,
        'nom': elubb.nom,
        'email': elubb.email,
        'telephone': elubb.telephone,
        'fax': elubb.fax,
        'instagram': elubb.instagram,
        'facebook': elubb.facebook,
        'linkedin': elubb.linkedin,
        'twitter': elubb.twitter,
        'liste': elubb.liste,
        'circonscription': elubb.circonscription,
        'typeListe': elubb.typeListe,
        'bloc': elubb.bloc,
        'commission': elubb.commission,
        'commissionSP': elubb.commissionSP,
        'commissionSPT': elubb.commissionSPT,
        'photo': elubb.photo,
        'manifeste': elubb.manifeste,
        'age': elubb.age,
        'idPL': this.idPL,
        'nomPL': this.nomPL,
      }
     
    }
    this.router.navigate(['/profil-parti'], navigationExtras);
  }

}