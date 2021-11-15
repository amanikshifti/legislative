import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPartiCoalition4Page } from './detail-parti-coalition4.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPartiCoalition4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPartiCoalition4Page]
})
export class DetailPartiCoalition4PageModule {}
