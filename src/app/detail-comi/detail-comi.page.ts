import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-comi',
  templateUrl: './detail-comi.page.html',
  styleUrls: ['./detail-comi.page.scss'],
})
export class DetailComiPage implements OnInit {

  commission;
  eluC;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

    this.apiService.getCommissionSPT().subscribe((data) => {
      this.commission = data;
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

    this.router.navigate(['/detail-com-z'], navigationExtras);
  }

}