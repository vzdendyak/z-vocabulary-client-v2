import {Injectable} from '@angular/core';
import * as constant from '../../app.constant';
import {BlockModel} from '../models/block-model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {WordModel} from '../models/word-model';

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
  getBlockById(id): Observable<BlockModel> {
    return this.http.get<BlockModel>(`${this.api_url}/blocks/${id}`).pipe(map((value: any) => value.items));
  }
  getWordsByBlockId(id): Observable<WordModel[]> {
    return this.http.get<WordModel[]>(`${this.api_url}/blocks/${id}/words`).pipe(map((value: any) => value.items));
  }
  createBlock(name): Observable<number> {
    const block: Partial<BlockModel> = {
      name
    };
    return this.http.post<number>(`${this.api_url}/blocks`, block);
  }

}
