import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilCoalition1Page } from './profil-coalition1.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilCoalition1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilCoalition1Page]
})
export class ProfilCoalition1PageModule {}
