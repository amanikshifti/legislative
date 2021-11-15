import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-parti',
  templateUrl: './parti.page.html',
  styleUrls: ['./parti.page.scss'],
})

export class PartiPage implements OnInit {
  @ViewChild('barChart', {
    static: false
  }) barChart;

  bars: any;
  colorArray: any;

  resultatTab;
  listeResultat;
  myChart;
  resultatPartis;
  resultatNonPartis;
  Allres;
  AllresL;
  resultatTotalInscrit;
  pourcentage;
  resultatCoa;
  resultatCoalition;
  resultatIndependant;
  nom: any;
  nbSieges: any;
  tab_nom = [];
  tab_nbSieges = [];
  tauxPart: any;
  refresh: boolean;
  listesResultat;
  dataTab: any;
  listeC;
  listeCc;
  visibility: boolean = true;
  bloc: Object;
  eluC: Object;
  eluCc: Object;
  newUrl: string;
  id_b: any;
  httpClient: any;
  constructor(private apiService: ApiService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
   
  

    this.apiService.getBloc().subscribe((data) => {
      this.bloc = data;
      this.eluC = data;
      console.log(this.eluC);
    });


  

    // Resultat tableau
    this.apiService.getResultatTab().subscribe((data) => {
      this.resultatTab = data;
    });

    // Resultat Partis
    this.apiService.getResultatPartis().subscribe((data) => {
      this.resultatPartis = data;
      console.log('Resultat partis : ', this.resultatPartis);
      this.listeResultat = data;


      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.resultatPartis.length; i++) {
        this.nom = this.resultatPartis[i]['nom'];
        this.nbSieges = this.resultatPartis[i]['nbSieges'];
        this.tab_nom.push(this.nom);
        this.tab_nbSieges.push(this.nbSieges);
      }

    });

    // Resultat Coalition
    this.apiService.getResultatCoa().subscribe((data) => {
      this.resultatCoalition = data;
      console.log('Resultat coalition : ', this.resultatCoalition);
      this.listeResultat = data;
    });

    // Resultat Independant
    this.apiService.getResultatCInd().subscribe((data) => {
      this.resultatIndependant = data;
      console.log('Resultat independant : ', this.resultatIndependant);
      this.listeResultat = data;

      this.tab_nom = this.tab_nom.concat(this.resultatCoalition[0]['nom']);
      this.tab_nbSieges = this.tab_nbSieges.concat(this.resultatCoalition[0]['nbSiege']);

      this.tab_nom = this.tab_nom.concat(this.resultatIndependant[0]['nom']);
      this.tab_nbSieges = this.tab_nbSieges.concat(this.resultatIndependant[0]['nbSiege']);
      console.log('tableau nom', this.tab_nom);
      console.log('tableau sieges', this.tab_nbSieges);

    });

    // Liste non partisanes + concat tableau contenant tous les listes
   
    this.apiService.getListes().subscribe((data) => {
      this.dataTab = [];
      this.listesResultat = data;
      console.log(this.listesResultat);
      for (let i = 0; i < this.listesResultat.length; i++) {
        if (this.listesResultat[i]['Type'] == "مستقلة" && this.listesResultat[i]['NombreSiege'] != 0) {
          this.dataTab.push(this.listesResultat[i]);
        }
        console.log('datatab', this.dataTab);
      }

      this.Allres = this.resultatPartis.concat(this.dataTab);
      this.AllresL = this.resultatPartis.concat(this.dataTab);
      console.log('Resultat tout', this.Allres);
      console.log('Resultat toutAll', this.AllresL);

      for (let i = 0; i < this.Allres.length; i++) {
        if (this.Allres.length === 0) {
          this.presentAlertConfirm();
        }
      }
    });


  }
 

  listeElu(AllresL) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'nomPL': AllresL.nom,
        'idPL': AllresL.id,

      }
    }
    this.router.navigate(['/detail-parti'], navigationExtras);
    console.log(AllresL);

  }


  onContextChange(ctxt: string): void {
    this.visibility = true;
    console.log(this.Allres);
    this.AllresL = this.Allres.filter((Newlistes) => {
      if (Newlistes.Type === ctxt) {
        console.log(Newlistes);
        if(ctxt == "مستقلة" || ctxt == "حزبية"){
        this.visibility = false;
        }
        
        return this.AllresL = Newlistes;
       
      }
    });
  }


  all() {
    this.apiService.getListes().subscribe((data) => {
      this.dataTab = [];
      this.listesResultat = data;
      console.log(this.listesResultat);
      for (let i = 0; i < this.listesResultat.length; i++) {
        if (this.listesResultat[i]['Type'] == "مستقلة" && this.listesResultat[i]['NombreSiege'] != 0) {
          this.dataTab.push(this.listesResultat[i]);
        }
        console.log('datatab', this.dataTab);
      }

      this.Allres = this.resultatPartis.concat(this.dataTab);
      this.AllresL = this.resultatPartis.concat(this.dataTab);
      console.log('Resultat tout', this.Allres);

      for (let i = 0; i < this.Allres.length; i++) {
        if (this.Allres.length === 0) {
          this.presentAlertConfirm();
        }
      }
      this.visibility = true;

    });
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Server error',
      message: 'Server error, refresh plz',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Refresh',
          handler: () => {
            window.location.href = '/resultat2';
            console.log('confirmed');

          }
        }
      ]
    });


  }


  DetailsBloc(eluC) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id_b' : eluC.id,
        'nomB' : eluC.nom,
      }
    }

    this.router.navigate(['/detail-parti'], navigationExtras);
  }












}