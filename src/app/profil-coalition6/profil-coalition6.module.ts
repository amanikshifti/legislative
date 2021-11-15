import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilCoalition6Page } from './profil-coalition6.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilCoalition6Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilCoalition6Page]
})
export class ProfilCoalition6PageModule {}
