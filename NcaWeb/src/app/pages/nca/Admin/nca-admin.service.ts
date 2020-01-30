import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import{Clients_Data}from '../modal/Clients_Data';
import { clientDto } from '../modal/clientDto';
@Injectable({
  providedIn: 'root'
})
export class NcaAdminService {

  constructor(private http:HttpClient,private route:Router) { }

  public userValidation(strUserId,strUserPwd,strIPAddr):Observable<any>{
    return this.http.get<any>(environment.API_URL+'checkvalidation/'+strUserId+'/'+strIPAddr+'/'+strUserPwd)
   }
 
   public checkLoginData(strUserId,strIPAddr,strUserPwd):Observable<any>{
     return this.http.get<any>(environment.API_URL+'Checklogindetials/'+strUserId+'/'+strUserPwd+'/'+strIPAddr)
   }

   public getVisitedClients(strUserId,Dscid):Observable<any>{
     return this.http.get<any>(environment.API_URL+'GetVisitedClients/'+strUserId+'/'+Dscid);
   }
    
   public getAllClients(_clientDto:clientDto):Observable<clientDto>{
     return this.http.post<clientDto>(environment.API_URL+'GetClientList',_clientDto)
   }
}
