import { EventEmitter, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {HttpClient, HttpParams} from '@angular/common/http';
import { Product } from "./product.model";
import { Review } from "../product/reviews/review.model";
import { User } from "../account/firebaseUser.model";
import { SearchService } from "../search/search.service";
import { lastValueFrom, map, tap } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class DataStorageService{

    product: Product;
    productChanged= new EventEmitter<Product>();
    constructor(
        private http: HttpClient,
        private searchService: SearchService,
      ) {}

    fetchSearchQuery(){

    }


     async getProductById(productId:string):Promise<Product>{
        let url = environment.baseUrl+environment.productPath
        +'?orderBy="id"&startAt="'+productId+'"&endAt="'+productId+'\uf8ff"'
        return await lastValueFrom(this.http
          .get<{[key:string]:Product} >(
            url,
            {
              observe: 'response'
            }
          ).pipe(
            tap((response)=>{
            }),
            map((response)=>{
                let temp:Product[]=[];
                let responseData=response.body
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                    temp.push({...responseData[key], id:key});
                    }
                }
                this.product=temp.filter((item:Product) =>{
                    return (item.id==productId);
                })[0]
                return this.product;
            })
          ));
    }

    getProductRatingById(productId:string){
        return 4;
    }
    getProductReviewsCountById(productId:string){
        return 3;
    }

    getProductReviewsById(productId:string){
        return [
            new Review(
                '41',
                4,
                'July-24-2011',
                'A decent product',
                'asdasidasoidugaosfaghsdiofguasdoifgaodgf',
                'Completed'
           ),
           new Review(
            '51',
            2,
            'July-21-2011',
            'A decent product',
            'asdasidasoidugaosfaghsdiofguasdoifgaodgf',
            'Returned'
       ),
       new Review(
        '51',
        5,
        'July-21-2011',
        'A decent product',
        "Just pull the hair out by hand. It's a small brush, I wish it was a little bigger.'I have two long hair German Shepards, the brush grabs the hair and almost feels like your pulling the hair and hurting the dogs. I stopped using it so it will not hurt them. Maybe on a dog that does not have such thick hair, it will probably work better. see less"
        ,'Returned'
   )


        ]

    }


    getUserById(customerId: string){
        return new User( 'test@gmail.com',
         'Customer 1',
         '123123123',
         '/assets/user/sample.jpg',
         'testToken',
         new Date()
        )
    }
}