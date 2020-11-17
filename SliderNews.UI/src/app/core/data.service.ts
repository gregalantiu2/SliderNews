import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { article } from '../models/article';
import { environment } from '../../environments/environment';
import { NewsApiResponseModel } from '../models/newsApiResponseModel';

@Injectable()
export class DataService{
    
    constructor(private http: HttpClient) { }
    
    getNewsArticlesByTopHeadlines(country: string) {
        console.log(environment.newsApiTopHeadlinesUrl + country);
        return this.http.get(environment.newsApiTopHeadlinesUrl + country);
    }

    getNewsArticlesByTopic(searchTerm: string) : Observable<article[]> {
        return this.http.get<article[]>(environment.newsApiEverythingUrl + searchTerm);
    }
}