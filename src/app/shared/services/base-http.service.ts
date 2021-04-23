import {Injectable} from '@angular/core';
import * as constant from '../../app.constant';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private api_url = constant.ACTIVE_ENVIRONMENT.api_url;

  constructor(public http: HttpClient) {
  }


}
