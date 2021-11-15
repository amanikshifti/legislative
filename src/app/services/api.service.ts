import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getCirconscription() {
    return this.httpClient.get('https://legislative-2019.tn/apiCc');
  }

  public getListes() {
    return this.httpClient.get('https://legislative-2019.tn/apiListeValide');
  }


  public getResultatTab() {
    return this.httpClient.get('https://legislative-2019.tn/apiResAllAffichage');
  }


  public getResultatNonPartis() {
    return this.httpClient.get('https://legislative-2019.tn/apiListeNonPartisane');
  }
 
  // public getListesIndep() {
  //   return this.httpClient.get('https://legislative-2019.tn/apiListe/i');
  // }

  // public getListesCoa() {
  //   return this.httpClient.get('https://legislative-2019.tn/apiListe/c');
  // }

  public getTotalInscrit() {
    return this.httpClient.get('https://legislative-2019.tn/apiSendNumber');
  }

  public getResultatCoa() {
    return this.httpClient.get('https://legislative-2019.tn/apiResultatCoalition');
  }

  public getResultatCInd() {
    return this.httpClient.get('https://legislative-2019.tn/apiResultatIndependant');
  }

  public getResultatPartis() {
    return this.httpClient.get('https://legislative-2019.tn/apiresParti');
  }

  public getBloc() {
    return this.httpClient.get('https://legislative-2019.tn/apiBloc');
  }

  public getElu() {
    return this.httpClient.get('https://legislative-2019.tn/apiElu');
  }

  public getBureau() {
    return this.httpClient.get('https://legislative-2019.tn/apiBureau');
  }

  public getCommission() {
    return this.httpClient.get('https://legislative-2019.tn/apiCommission');
  }

  public getCommissionSP() {
    return this.httpClient.get('https://legislative-2019.tn/apiCommissionSP');
  }

  public getCommissionSPT() {
    return this.httpClient.get('https://legislative-2019.tn/apiCommissionSPT');
  }
  public getListesParCir(circonscription) {
    return this.httpClient.get('https://legislative-2019.tn/apiListeParCir/' + circonscription);
  }

  public getEluParCir(circonscription) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParCir/' + circonscription);
  }

  public getEluParBloc(bloc) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParBloc/' + bloc);
  }

  public getEluParBureau(bureau) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParBureau/' + bureau);
  }

  public getEluParCommission(commission) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParCommission/' + commission);
  }

  public getEluParCommissionSP(commissionSP) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParCommissionSP/' + commissionSP);
  }

  public getEluParCommissionSPT(commissionSPT) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParCommissionSPT/' + commissionSPT);
  }
  public getEluParListeNonP(liste) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParListeNonP/'  +  liste);
  }
  public getEluParListe(liste) {
    return this.httpClient.get('https://legislative-2019.tn/apiEluParListe/'  +  liste);
  }
  
}