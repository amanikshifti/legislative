import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'client', loadChildren: './client/client.module#ClientPageModule' },
  { path: 'resultat', loadChildren: './resultat/resultat.module#ResultatPageModule' },
  { path: 'liste', loadChildren: './liste/liste.module#ListePageModule' },
  { path: 'resultat1', loadChildren: './resultat1/resultat1.module#Resultat1PageModule' },
  { path: 'resultat2', loadChildren: './resultat2/resultat2.module#Resultat2PageModule' },
  { path: 'detail-circonscription', loadChildren:  './detail-circonscription/detail-circonscription.module#DetailCirconscriptionPageModule' },
  { path: 'detail-liste', loadChildren: './detail-liste/detail-liste.module#DetailListePageModule' },
  { path: 'res-cir-modal', loadChildren: './res-cir-modal/res-cir-modal.module#ResCirModalPageModule' },
  { path: 'manif-modal', loadChildren: './manif-modal/manif-modal.module#ManifModalPageModule' },
  { path: 'membres-modal', loadChildren: './membres-modal/membres-modal.module#MembresModalPageModule' },
  { path: 'res-liste-modal', loadChildren: './res-liste-modal/res-liste-modal.module#ResListeModalPageModule' },
  { path: 'circonscription', loadChildren: './circonscription/circonscription.module#CirconscriptionPageModule' },
  { path: 'parti', loadChildren: './parti/parti.module#PartiPageModule' },
  { path: 'blocs', loadChildren: './blocs/blocs.module#BlocsPageModule' },
  { path: 'commissions', loadChildren: './commissions/commissions.module#CommissionsPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'detail-cir', loadChildren: './detail-cir/detail-cir.module#DetailCirPageModule' },
  { path: 'detail-parti', loadChildren: './detail-parti/detail-parti.module#DetailPartiPageModule' },
  { path: 'detail-bloc', loadChildren: './detail-bloc/detail-bloc.module#DetailBlocPageModule' },
  { path: 'detail-comi', loadChildren: './detail-comi/detail-comi.module#DetailComiPageModule' },
  { path: 'detail-comi1', loadChildren: './detail-comi1/detail-comi1.module#DetailComi1PageModule' },
  { path: 'detail-comi2', loadChildren: './detail-comi2/detail-comi2.module#DetailComi2PageModule' },
  { path: 'poste', loadChildren: './poste/poste.module#PostePageModule' },
  { path: 'detail-com-x', loadChildren: './detail-com-x/detail-com-x.module#DetailComXPageModule' },
  { path: 'detail-com-y', loadChildren: './detail-com-y/detail-com-y.module#DetailComYPageModule' },
  { path: 'detail-com-z', loadChildren: './detail-com-z/detail-com-z.module#DetailComZPageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' },
  { path: 'profil-bloc', loadChildren: './profil-bloc/profil-bloc.module#ProfilBlocPageModule' },
  { path: 'profil-parti', loadChildren: './profil-parti/profil-parti.module#ProfilPartiPageModule' },
  { path: 'profil-comi1', loadChildren: './profil-comi1/profil-comi1.module#ProfilComi1PageModule' },
  { path: 'profil-comi2', loadChildren: './profil-comi2/profil-comi2.module#ProfilComi2PageModule' },
  { path: 'profil-comi3', loadChildren: './profil-comi3/profil-comi3.module#ProfilComi3PageModule' },
  { path: 'profil-comi4', loadChildren: './profil-comi4/profil-comi4.module#ProfilComi4PageModule' },
  { path: 'detail-parti-coalition', loadChildren: './detail-parti-coalition/detail-parti-coalition.module#DetailPartiCoalitionPageModule' },
  { path: 'profil-coalition', loadChildren: './profil-coalition/profil-coalition.module#ProfilCoalitionPageModule' },
  { path: 'detail-parti-coalition1', loadChildren: './detail-parti-coalition1/detail-parti-coalition1.module#DetailPartiCoalition1PageModule' },
  { path: 'detail-parti-coalition2', loadChildren: './detail-parti-coalition2/detail-parti-coalition2.module#DetailPartiCoalition2PageModule' },
  { path: 'detail-parti-coalition3', loadChildren: './detail-parti-coalition3/detail-parti-coalition3.module#DetailPartiCoalition3PageModule' },
  { path: 'detail-parti-coalition4', loadChildren: './detail-parti-coalition4/detail-parti-coalition4.module#DetailPartiCoalition4PageModule' },
  { path: 'detail-parti-coalition5', loadChildren: './detail-parti-coalition5/detail-parti-coalition5.module#DetailPartiCoalition5PageModule' },
  { path: 'profil-coalition1', loadChildren: './profil-coalition1/profil-coalition1.module#ProfilCoalition1PageModule' },
  { path: 'profil-coalition2', loadChildren: './profil-coalition2/profil-coalition2.module#ProfilCoalition2PageModule' },
  { path: 'profil-coalition3', loadChildren: './profil-coalition3/profil-coalition3.module#ProfilCoalition3PageModule' },
  { path: 'profil-coalition4', loadChildren: './profil-coalition4/profil-coalition4.module#ProfilCoalition4PageModule' },
  { path: 'profil-coalition5', loadChildren: './profil-coalition5/profil-coalition5.module#ProfilCoalition5PageModule' },
  { path: 'profil-coalition6', loadChildren: './profil-coalition6/profil-coalition6.module#ProfilCoalition6PageModule' },
  { path: 'detail-parti-coalition6', loadChildren: './detail-parti-coalition6/detail-parti-coalition6.module#DetailPartiCoalition6PageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
