import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(params: any): Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines?country='
              + params.country +'&category='+ params.category +'&apiKey=15da07e608df4db2ab2a0600406463d1';

    return this.http.get(url);
  }
}
