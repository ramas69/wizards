import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Wizard } from './entities';
import { catchError, filter, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private http:HttpClient) { }

  url = environment.apiURL


  fetchAll(): Observable<Wizard[]> {
    /* avec les observables gestion des erreurs */
    /*
   return this.http.get<Wizard[]>(this.url).pipe(
    catchError(this.handleError)
   )*/
    return this.http.get<Wizard[]>(this.url).pipe(
      map(wizards => wizards.filter(wizard=> wizard.yearOfBirth < 1970).slice(0,20)),
      filter(wizards => wizards.length > 0)
    )


  }

  /** gestion des erreurs avec les observables */
  private handleError(error:any){
    console.error('Une erreur trouvé', error);
    return throwError(" L'api ne marche plus")
  }

}
