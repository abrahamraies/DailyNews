import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList_p: any[] = [];
  title = 'DailyNews';
  loadingSpinner = false;

  constructor(private _newsService: NewsService){

  }

  newsSearch(params: any){
    this.loadingSpinner = true;
    this.newsList_p = [];

    this._newsService.getNews(params)
    .pipe(
      tap(() => {
        this.loadingSpinner = false;
      }),
      catchError((error) => {
        this.loadingSpinner = false;
        console.log(error);
        return error;
      })
    )
    .subscribe((data) => {
      this.newsList_p = data.articles;
    });
  }
}
