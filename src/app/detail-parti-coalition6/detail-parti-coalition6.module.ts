import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPartiCoalition6Page } from './detail-parti-coalition6.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPartiCoalition6Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPartiCoalition6Page]
})
export class DetailPartiCoalition6PageModule {}
