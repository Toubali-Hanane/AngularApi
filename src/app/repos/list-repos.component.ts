import { Repo } from './../models/repo.model';
import { Component, OnInit } from '@angular/core';
import { ReposService } from './../services/repos.service';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})
export class ListReposComponent implements OnInit {
  
  repos:Repo;


  constructor(private _reposService :ReposService) { }

  ngOnInit() {
    //GET All repos 
    this._reposService.getData().subscribe((repos) =>{
      //console.log(repos);
      this.repos=repos;
      
      });
  }

  //function send repo to rep-details component
  onClick(data:Repo){
    this._reposService.addRepo(data);

  }
}
