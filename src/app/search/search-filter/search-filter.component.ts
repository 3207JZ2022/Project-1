import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Filter } from '../search.service';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  filter:Filter

  constructor(private searchService: SearchService){}


  ngOnInit(){

  }

  onSubmit(){
    console.log('trigger filter sub')
    this.searchService.getSearchResultFilter(this.filter);
  }
}
