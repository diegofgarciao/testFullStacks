import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockResponse } from 'src/models/block.model';

@Injectable({
  providedIn: 'root'
})
export class BlockStoreService {

  constructor(private http: HttpClient) {
   }

   getBlocksHttp(url): Observable<BlockResponse>{
     return this.http.get<BlockResponse>(`${url}/api/v1/blocks`);
   }

}
