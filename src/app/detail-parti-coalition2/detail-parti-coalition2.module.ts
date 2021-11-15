import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPartiCoalition2Page } from './detail-parti-coalition2.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPartiCoalition2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPartiCoalition2Page]
})
export class DetailPartiCoalition2PageModule {}
