import {Injectable} from '@angular/core';
import * as constant from '../../app.constant';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {WordModel} from '../../block/models/word-model';
import {map} from 'rxjs/operators';
import {MeaningModel} from '../../block/models/meaning-model';
import {ExampleModel} from '../../block/models/example-model';
import {CollocationModel} from '../../block/models/collocation-model';

@Injectable({
  providedIn: 'root'
})
export class WordApiService {
  private api_url = constant.ACTIVE_ENVIRONMENT.api_url;
  public deleteMeaning$ = new Subject<any>();
  public createExample$ = new Subject<any>();
  public deleteExample$ = new Subject<any>();
  public createCollocation$ = new Subject<any>();
  public deleteCollocation$ = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getWordById(id) {
    return this.http.get<WordModel>(`${this.api_url}/words/${id}`)
      .pipe(map((value: any) => value.data));
  }


  createWord(text, blockId): Observable<number> {
    const word: Partial<WordModel> = {
      blockId,
      text
    };
    return this.http.post<number>(`${this.api_url}/words`, word)
      .pipe(map((value: any) => value.id));
  }

  deleteWord(id) {
    return this.http.delete<WordModel>(`${this.api_url}/words/${id}`);
  }

  createWordMeaning(partOfSpeech, text, wordId) {
    const meaning: Partial<MeaningModel> = {
      text,
      partOfSpeech,
      wordId
    };
    return this.http.post<{}>(`${this.api_url}/meanings`, meaning)
      .pipe(map((value: any) => value.id));
  }

  deleteMeaning(id) {
    return this.http.delete<WordModel>(`${this.api_url}/meanings/${id}`);
  }

  createExample(text, meaningId) {
    const item: Partial<ExampleModel> = {
      text,
      meaningId
    };
    return this.http.post<{}>(`${this.api_url}/examples`, item)
      .pipe(map((value: any) => value.id));
  }

  deleteExample(id) {
    return this.http.delete<WordModel>(`${this.api_url}/examples/${id}`);
  }

  createCollocations(text, meaningId) {
    const item: Partial<CollocationModel> = {
      text,
      meaningId
    };
    return this.http.post<{}>(`${this.api_url}/collocations`, item)
      .pipe(map((value: any) => value.id));
  }

  deleteCollocations(id) {
    return this.http.delete<WordModel>(`${this.api_url}/collocations/${id}`);
  }
}
