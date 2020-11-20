import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Article } from '../models/article';
import { environment } from '../../environments/environment';
import { NewsApiResponseModel } from '../models/newsApiResponseModel';

@Injectable()
export class DataService{
    
    constructor(private http: HttpClient) { }
    
    getNewsArticlesByTopHeadlines(country: string) : Observable<NewsApiResponseModel> {
        console.log(environment.newsApiTopHeadlinesUrl + country);
        return this.http.get<NewsApiResponseModel>(environment.newsApiTopHeadlinesUrl + country);
    }

    getNewsArticlesByTopic(searchTerm: string) : Observable<NewsApiResponseModel> {
        return this.http.get<NewsApiResponseModel>(environment.newsApiEverythingUrl + searchTerm);
    }
}