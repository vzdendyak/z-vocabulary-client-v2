import {Injectable} from '@angular/core';
import * as constant from '../../app.constant';
import {BlockModel} from '../models/block-model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlockApiService {
  private api_url = constant.ACTIVE_ENVIRONMENT.api_url;

  constructor(private http: HttpClient) {
  }

  getBlocks(): Observable<BlockModel[]> {
    return this.http.get<BlockModel[]>(`${this.api_url}/blocks`).pipe(map((value: any) => value.items));
  }
}
