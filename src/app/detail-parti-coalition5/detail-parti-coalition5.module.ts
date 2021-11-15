import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPartiCoalition5Page } from './detail-parti-coalition5.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPartiCoalition5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPartiCoalition5Page]
})
export class DetailPartiCoalition5PageModule {}
