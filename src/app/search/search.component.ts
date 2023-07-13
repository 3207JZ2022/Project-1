import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SearchService } from './search.service';
import { Product } from '../shared/product.model';
import { Subscription } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    search: string;
    resultCount:number=0;
    searchSub: Subscription;
    routeSub: Subscription;
    isFetching: boolean=false;
    faBars=faBars

    expanded:boolean=false;

    products:Product[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private searchService: SearchService
                ){}

    ngOnInit() {
        this.search = this.route.snapshot.queryParams['searchQuery']

        this.searchSub= this.searchService.productChanged.subscribe(products=>{
            this.products=products;
            this.resultCount=this.products.length;
            this.isFetching=false;
        })

        this.routeSub=this.route.queryParams.subscribe((params: Params)=>{
          this.search = this.route.snapshot.queryParams['searchQuery']
          this.isFetching=true;
          this.searchService.getSearchResult(this.search);
        })



    }

    ngOnDestroy() {
      this.searchSub.unsubscribe();
      this.routeSub.unsubscribe();
    }



}
