import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-comi2',
  templateUrl: './detail-comi2.page.html',
  styleUrls: ['./detail-comi2.page.scss'],
})
export class DetailComi2Page implements OnInit {

  commissionSPT;
  eluC;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

    this.apiService.getCommission().subscribe((data) => {
      this.commissionSPT = data;
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

    this.router.navigate(['/detail-com-x'], navigationExtras);
  }
}
