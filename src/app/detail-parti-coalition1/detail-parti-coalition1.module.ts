import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPartiCoalition1Page } from './detail-parti-coalition1.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPartiCoalition1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPartiCoalition1Page]
})
export class DetailPartiCoalition1PageModule {}
