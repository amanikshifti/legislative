import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})

export class ResultatPage implements OnInit {

  resultatIndependant;
  listeResultat;

  constructor(private apiService: ApiService,private loadingController:LoadingController ) { }

  ngOnInit() {

        // Resultat Independant
        this.apiService.getResultatCInd().subscribe( (data) => {
          this.resultatIndependant = data;
          console.log('Resultat independant : ', this.resultatIndependant);
          console.log(this.resultatIndependant);
        });
  }
  async alert() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: '....الرجاء الانتظار',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
