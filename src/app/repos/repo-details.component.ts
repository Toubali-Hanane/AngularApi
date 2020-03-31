import { Repo } from './../models/repo.model';
import { Component, OnInit } from '@angular/core';
import { ReposService } from './../services/repos.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo:Repo;
  private sub: any;

  constructor(private _reposService :ReposService) {}

  ngOnInit() {
    //subscribe to data and return  repo 
    this.sub=this._reposService.newRepoSubject.subscribe(
      (data) => this.repo=data,
      (error) => console.error(error),
      
    );
    //unsubscribe
    setTimeout(() => this.sub.unsubscribe(), 10000);
  
  }
 

}
