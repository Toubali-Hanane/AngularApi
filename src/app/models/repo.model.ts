export class Repo {

    id:number;
    name:string;
    owner:{
            login:string;
            avatar_url:string
          };
     description:string;
     stargazers_count:number;
     open_issues_count:number;
     pushed_at:Date     


}