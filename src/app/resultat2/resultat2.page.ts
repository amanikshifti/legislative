import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat2',
  templateUrl: './resultat2.page.html',
  styleUrls: ['./resultat2.page.scss'],
})
export class Resultat2Page implements OnInit {
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

  constructor(private apiService: ApiService, private alertController: AlertController, private router: Router) {}

  ngOnInit() {

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
        this.nbSieges = this.resultatPartis[i]['NombreSiege'];
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
      this.tab_nbSieges = this.tab_nbSieges.concat(this.resultatCoalition[0]['NombreSiege']);

      this.tab_nom = this.tab_nom.concat(this.resultatIndependant[0]['nom']);
      this.tab_nbSieges = this.tab_nbSieges.concat(this.resultatIndependant[0]['NombreSiege']);
      console.log('tableau nom', this.tab_nom);
      console.log('tableau sieges', this.tab_nbSieges);

    });

    // Liste non partisanes + concat tableau contenant tous les listes
    this.apiService.getListes().subscribe((data) => {
      this.dataTab = [];
      this.listesResultat = data;
      console.log(this.listesResultat);
      for (let i = 0; i < this.listesResultat.length; i++) {
         if(this.listesResultat[i]['Type'] == "مستقلة"  && this.listesResultat[i]['NombreSiege'] != 0 ){
            this.dataTab.push(this.listesResultat[i]);
         }
         console.log('datatab', this.dataTab);
      }

      this.Allres = this.resultatPartis.concat(this.dataTab);
      console.log('Resultat tout', this.Allres);

      for (let i = 0; i < this.Allres.length; i++) {
        if (this.Allres.length === 0 ) {
          this.presentAlertConfirm();
        }
      }
    });


    // Resultat total inscrit
    this.apiService.getTotalInscrit().subscribe((data) => {
      this.resultatTotalInscrit = data;
      console.log('Total nb inscrits', this.resultatTotalInscrit);
      this.listeResultat = data;

      console.log(this.resultatTotalInscrit[0]["totalInscrits"]);
      this.tauxPart = ( this.resultatTab[0]["totalVotes"]/this.resultatTotalInscrit[0]["totalInscrits"]) * 10;
      this.tauxPart = Number(this.tauxPart).toFixed(2);
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

    await alert.present();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.createBarChart();
    }, 5000);
  }

  createBarChart() {

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      options: {
        legend: {
          display: false,
          labels: {}
        }
      },
  
      data: {
        labels: this.tab_nom,
        datasets: [{
          label: '# of Votes',
          data: this.tab_nbSieges,
          backgroundColor: [
            "rgb(237,80,58)",
            "rgb(25,173, 173)",
       "rgb(242,146,64)",
         "  rgb(251,238,66)",
            "rgb(0,161,132)",
            "  rgb(204, 50, 62)",

       " rgb(53,61,152)",
         " rgb(153,75,148)",
         "   rgb(251,238,66)",
              "rgb(42,173,74)  ",
       "  rgb(161,57,57)",
         " rgb(246, 188, 43)", 

       " rgb(53,61,152)",
       "  rgb(239, 91, 53)",
              "    rgb(246, 188, 43)",
              "rgb(42,173,74)  ",
              "rgb(52, 90,135)",
               "rgb(25, 173, 173)",

          ],
        }]
      },

    })

  }
}