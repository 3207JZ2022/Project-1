import { EventEmitter, Injectable } from "@angular/core";
import { Product } from '../shared/product.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface Filter{
    freeShipping:boolean,
    onSale:boolean,
    internationalShipping:boolean,
    inStock:boolean
}
@Injectable({
    providedIn: 'root'
})
export class SearchService{
    
    product: Product[] 
    productChanged = new EventEmitter<Product[]>();

    constructor(private http: HttpClient){
    }

    getSearchResult(query:string){
        let url = environment.baseUrl+environment.productPath
        // +'?orderBy="name"&startAt="'+query+'"&endAt="'+query+'\uf8ff"'
        // Firebase Realtime Database does not have queries for substrings. 
        // we obtain the data to local first
        this.http
          .get<{[key:string]:Product} >(
            url,
            {
              observe: 'response'
            }
          )
          .subscribe(
            response => {
              let temp:Product[]=[];
              let responseData=response.body
              for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                    temp.push({...responseData[key], id:key});
                }
              }
              this.product=temp.filter((item:Product) =>{
                    return (item.name.indexOf(query)>-1);
              })
              this.productChanged.emit(this.product);
            },
            error => {
              console.log(error.message);
            }
          );
      }



    
    getSearchResultFilter(filter:Filter){

    }
}