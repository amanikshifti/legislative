import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilCoalition3Page } from './profil-coalition3.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilCoalition3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilCoalition3Page]
})
export class ProfilCoalition3PageModule {}
