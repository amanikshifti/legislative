import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-blocs',
  templateUrl: './blocs.page.html',
  styleUrls: ['./blocs.page.scss'],
})
export class BlocsPage implements OnInit {
  bloc;
  eluC;
    constructor(private apiService: ApiService, private router: Router) { }
    ngOnInit() {
      this.apiService.getBloc().subscribe((data) => {
        this.bloc = data;
        this.eluC = data;
        console.log(this.eluC);
      });
    }
  DetailsBloc(eluC) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          'id_b' : eluC.id,
          'nomB' : eluC.nom,
        }
      }
  
      this.router.navigate(['/detail-bloc'], navigationExtras);
    }
  
  }