import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Repo } from './../models/repo.model';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ReposService{
    repo:Repo;

    public newRepoSubject = new BehaviorSubject<Repo>(new Repo());
    data = this.newRepoSubject.asObservable();

    private _reposUrl = '/api';

    constructor(private _httpClient: HttpClient){}


    //holds the value (repo) and shared with repo-details component
    addRepo(data:Repo){
        this.newRepoSubject.next(data);
    }

    //Function Get Api data with http 
    getData():Observable<Repo>{
        return  this._httpClient.get<Repo>(this._reposUrl).pipe(
            map(res => res['items']),
            catchError(this.handleError)
            );
        
    }
   

  
    //Function Errors
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error : ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
      }
    
}