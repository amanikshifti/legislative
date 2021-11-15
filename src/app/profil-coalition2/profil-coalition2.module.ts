import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilCoalition2Page } from './profil-coalition2.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilCoalition2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilCoalition2Page]
})
export class ProfilCoalition2PageModule {}
