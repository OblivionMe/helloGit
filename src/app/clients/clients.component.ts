import { Component, OnInit } from '@angular/core';
import{UserService} from "../user/user.service" 

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers :[UserService]
})
export class ClientsComponent implements OnInit {

  Mdata:any[]
  constructor( private _us:UserService) { }

  ngOnInit() 
  {
    this._us.GetMovieList().subscribe(da=>{this.Mdata =<any[]> da;},
      err=>{console.log(err);})
  }
   
  submit(rev:any){
    console.log(this.Mdata)
    console.log(rev)
  }
}
 