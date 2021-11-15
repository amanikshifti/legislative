import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilCoalition5Page } from './profil-coalition5.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilCoalition5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilCoalition5Page]
})
export class ProfilCoalition5PageModule {}
