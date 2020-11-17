import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { NewsApiResponseModel } from '../models/newsApiResponseModel';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent implements OnInit {

  response: Array<any>;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Eventually get country by IP Address
    this.dataService.getNewsArticlesByTopHeadlines('us').subscribe(data => this.response = data['articles']
                                                                   ,(err: any) => console.log(err)
                                                                   ,() => console.log('complete')
                                                                  );
    console.log(this.response);

  }

}
