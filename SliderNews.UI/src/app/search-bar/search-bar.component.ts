import { Component, OnInit } from '@angular/core';
import { Search } from '../models/search';
import { DataService } from '../core/data.service'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchModel = new Search('');

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchModel.searchTerm);
    this.searchModel.searchTerm === "" ? 
      this.dataService.getNewsArticlesByTopHeadlines('us') : this.dataService.getNewsArticlesByTopic(this.searchModel.searchTerm)
  }
}
