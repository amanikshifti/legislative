import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-comi1',
  templateUrl: './detail-comi1.page.html',
  styleUrls: ['./detail-comi1.page.scss'],
})
export class DetailComi1Page implements OnInit {

  commissionSP;
  eluC;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

    this.apiService.getCommissionSP().subscribe((data) => {
      this.commissionSP = data;
      this.eluC = data;
      console.log(this.eluC);
    });
  }

  DetailsComm(eluC) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id_c' : eluC.id,
        'nomc' : eluC.nom,
     
      }
    }

    this.router.navigate(['/detail-com-y'], navigationExtras);
  }

}

