import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"

@Injectable()

export class UserService
{
   constructor(private _httpC:HttpClient)
   {

   } 
  GetMovieList()
  {
   return this._httpC.get("http://www.omdbapi.com/?i=tt3896198&apikey=73061423")
  }
}