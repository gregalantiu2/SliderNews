import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Article } from '../models/article';
import { NewsApiResponseModel } from '../models/newsApiResponseModel';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent implements OnInit {

  response: NewsApiResponseModel;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Eventually get country by IP Address
    this.dataService.getNewsArticlesByTopHeadlines('us').subscribe((data: NewsApiResponseModel) => this.response = data
                                                                   ,(err: any) => console.log(err)
                                                                   ,() => console.log('complete')
                                                                  );
    console.log(this.response);
  }

}
