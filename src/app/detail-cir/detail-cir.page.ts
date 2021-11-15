import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from './../services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detail-cir',
  templateUrl: './detail-cir.page.html',
  styleUrls: ['./detail-cir.page.scss'],
})
export class DetailCirPage implements OnInit {
  nomCc;
  idCc;
  circonscription;
  eluC;
  eluCc;
  newUrl: string;
  NombreSiegesCc: any;
  NombreListesCc: any;
  id_elu: any;
  nom: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private httpClient: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.idCc = params["id_Cc"];
      this.nomCc = params["nomCc"];
      this.NombreSiegesCc = params["NombreSiegesCc"];
      this.NombreListesCc = params["NombreListesCc"];
    
      if(this.router.getCurrentNavigation().extras.state) {
        this.nomCc = this.router.getCurrentNavigation().extras.state.nomCc;
        this.idCc = this.router.getCurrentNavigation().extras.state.idCc;
        this.id_elu = this.router.getCurrentNavigation().extras.state.id_elu;
        this.nom = this.router.getCurrentNavigation().extras.state.nom;   
        }
      console.log(this.nomCc);
    });
  }

  ngOnInit() {
      this.apiService.getEluParCir(this.nomCc).subscribe((data) => {
        console.log(this.nomCc);
        this.eluC = data;
        this.eluCc = data;
        console.log(this.eluC);
        return this.eluCc = data;
    
      });
    

    // creation nouveau url var url = http://legislative-2019.tnapiEluParCir/'+ this.nomCc
    // use the http client to call the api using the new url

    this.newUrl = 'http://legislative-2019.tn/apiEluParCir/' + this.nomCc;
    console.log(this.newUrl);
    this.httpClient.get(this.newUrl).subscribe((data) => {
      console.log(this.nomCc);
      this.eluC = data;
      this.eluCc = data;
      console.log(this.eluCc);
    });

    return this.nomCc,
    this.idCc;

  
  }

  onContextChange(ctxt: string): void {
    console.log(this.eluC);
    this.eluCc = this.eluC.filter( (NewElu) => {
      if ( NewElu.Type === ctxt ) {
        console.log(NewElu);
        return this.eluCc = NewElu;
    }
  });
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
     'id_Cc' : this.idCc,
     'nomCc' : this.nomCc,
    
    }
    ,
    state: {
      id_Cc : this.idCc,
      nomCc : this.nomCc,
      id : this.id,
      nom : this.nom,
    
    }
  }

  this.router.navigate(['/profil'], navigationExtras);
}


  all(){
    this.apiService.getEluParCir(this.nomCc).subscribe((data) => {
      console.log(this.nomCc);
      this.eluC = data;
      this.eluCc = data;
      console.log(this.eluC);
      return this.eluCc = data;
  
    });
  }

 


}