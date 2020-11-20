import { Component, OnInit } from '@angular/core';
import { Search } from '../models/search';
import { DataService } from '../core/data.service'
import { NewsApiResponseModel } from '../models/newsApiResponseModel';
import { Article } from '../models/article';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchModel = new Search('');
  response: NewsApiResponseModel;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsArticlesByTopHeadlines('us').subscribe((data: NewsApiResponseModel) => this.response = data
                                                                   ,(err: any) => console.log(err)
                                                                   ,() => console.log('complete')
                                                                  );
  }

  onSubmit(){
    if(!this.searchModel.searchTerm){
      this.dataService.getNewsArticlesByTopHeadlines('us').subscribe((data: NewsApiResponseModel) => this.response = data
                                                                   ,(err: any) => console.log(err)
                                                                   ,() => console.log('complete')
                                                                  );
    } else{
      this.dataService.getNewsArticlesByTopic(this.searchModel.searchTerm).subscribe((data: NewsApiResponseModel) => this.response = data
                                                                   ,(err: any) => console.log(err)
                                                                   ,() => console.log('complete')
                                                                  );
    }
  }
}
