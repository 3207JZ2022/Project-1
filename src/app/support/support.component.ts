import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Product } from '../shared/product.model';
import { Deals } from '../home/deals/deals.model';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {



  constructor(private http: HttpClient){}

  products: Product[]=[];
  product: Product;

  submit(){
    console.log('place product');
    // let product =[ new Product("Laptop",
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // ,"assets/products-imgs/istockphoto-1024x1024.jpg", 1, 249.99
    // ),
    // new Product("Laptop E",
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // ,"assets/products-imgs/istockphoto-1024x1024.jpg", 2, 449.99
    // )
    // ];

    // let product = new Product("Laptop",
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // ,"assets/products-imgs/istockphoto-1024x1024.jpg", 1, 249.99
    // )
    // ;

    let comproducts: Product[]=[
      {
        name: "Grilled Oysters",
        description: "Grilled oysters are a popular seafood dish that is often served as an appetizer. They are typically prepared by grilling oysters in the half shell over an open flame until they are cooked through. The oysters are then topped with a variety of ingredients such as garlic butter, cheese, or hot sauce. The result is a delicious and savory dish that is perfect for any seafood lover",
        imgSrc: "/assets/crop1/Grilled Oysters.jpeg",
        id: '1',
        price: 17,
      },
      {
        name: "Lobster Thermidor",
        description: "Lobster Thermidor is a French dish of lobster meat cooked in a rich wine sauce, stuffed back into a lobster shell, and browned. The sauce is often a mixture of egg yolks and brandy (such as Cognac), served with an oven-browned cheese crust, typically Gruyère1. It’s a classic dish that’s perfect for special occasions or when you want to impress your guests. ",
        imgSrc: "/assets/crop1/Lobster Thermidor.jpg",
        id: '2',
        price: 22,

      },
      {
        name: "Fried Shrimp Rolls",
        description: "Fried shrimp rolls are a delicious combination of shrimp wrapped in a thin starch wrap (like a spring roll wrap) that’s commonly served as an appetizer or “small chops” as we Nigerians like to call it in our parties. The rolls are then fried in oil until golden brown and crispy. They can be served alone or with a dip1.",
        imgSrc: "/assets/crop1/Fried Shrimp Rolls.jpeg",
        id: '3',
        price: 10,

      },
      {
        name: "Calamar Bagna Cauda",
        description: "Bagna Cauda is a flavorsome, Italian dipping sauce that is served warm. A robust combination of garlic and anchovies. With grilled squid, the dish is served and consumed in a manner similar to fondue, sometimes as an appetizer.",
        imgSrc: "/assets/crop1/crop1.jpeg",
        id: '4',
        price: 18,

      },
      {
        name: "Lobster Claw with Scallop",
        description: " Steamed lobster claw seared hokkaido scallop Thai herbs cured salmon kaffir lime infused tapioca coconut foam with choo chee red curry",
        imgSrc: "/assets/crop1/crop2.jpg",
        id: '5',
        price: 26,

      },
      {
        name: "Oursins Jus Orange Carotte Coco",
        description: "Fresh sea urchin served with a sauce made of orange, carrot, and coconut is a unique and flavorful dish. The sweet and tangy flavor of the orange complements the rich and creamy taste of the sea urchin. The carrot adds a subtle sweetness to the dish while the coconut provides a nutty flavor that balances out the other flavors. This dish is perfect for those who want to try something new and exciting.",
        imgSrc: "/assets/crop1/crop8.jpeg",
        id: '6',
      price: 24,

      },
      {
        name: "Loup de Mer",
        description: "Grilled sea bass with special sauce is a delicious and healthy dish that’s perfect for any occasion. The sea bass is grilled to perfection, giving it a smoky flavor that’s enhanced by the special sauce.",
        imgSrc: "/assets/crop1/crop9.jpeg",
        id: '7',
        price: 16,

      }
    ]
    for(let i =0; i <comproducts.length;i++){
      let product = comproducts[i];
      this.product = product
      this.http.post(environment.baseUrl + environment.productPath,
        this.product,
                {
                  observe: 'response'
                }
        ).subscribe(
          responseData => {
            console.log(responseData);
          },
          error => {
            console.log(error.message);
          }
        )


    }


      
  }

  submitDeals(){

    /*
            public dealId: number,
        public title:string,
        public period:string,
        public products: Product[],
        public discount:string[] */

    let comproducts: Product[]=[
      {
        name: "Grilled Oysters",
        description: "Grilled oysters are a popular seafood dish that is often served as an appetizer. They are typically prepared by grilling oysters in the half shell over an open flame until they are cooked through. The oysters are then topped with a variety of ingredients such as garlic butter, cheese, or hot sauce. The result is a delicious and savory dish that is perfect for any seafood lover",
        imgSrc: "/assets/crop1/Grilled Oysters.jpeg",
        id: '1',
        price: 17,
      },
      {
        name: "Lobster Thermidor",
        description: "Lobster Thermidor is a French dish of lobster meat cooked in a rich wine sauce, stuffed back into a lobster shell, and browned. The sauce is often a mixture of egg yolks and brandy (such as Cognac), served with an oven-browned cheese crust, typically Gruyère1. It’s a classic dish that’s perfect for special occasions or when you want to impress your guests. ",
        imgSrc: "/assets/crop1/Lobster Thermidor.jpg",
        id: '2',
        price: 22,

      },
      {
        name: "Fried Shrimp Rolls",
        description: "Fried shrimp rolls are a delicious combination of shrimp wrapped in a thin starch wrap (like a spring roll wrap) that’s commonly served as an appetizer or “small chops” as we Nigerians like to call it in our parties. The rolls are then fried in oil until golden brown and crispy. They can be served alone or with a dip1.",
        imgSrc: "/assets/crop1/Fried Shrimp Rolls.jpeg",
        id: '3',
        price: 10,

      },
      {
        name: "Calamar Bagna Cauda",
        description: "Bagna Cauda is a flavorsome, Italian dipping sauce that is served warm. A robust combination of garlic and anchovies. With grilled squid, the dish is served and consumed in a manner similar to fondue, sometimes as an appetizer.",
        imgSrc: "/assets/crop1/crop1.jpeg",
        id: '4',
        price: 18,

      },
      {
        name: "Lobster Claw with Scallop",
        description: " Steamed lobster claw seared hokkaido scallop Thai herbs cured salmon kaffir lime infused tapioca coconut foam with choo chee red curry",
        imgSrc: "/assets/crop1/crop11.jpeg",
        id: '5',
        price: 26,

      },
      {
        name: "Oursins Jus Orange Carotte Coco",
        description: "Fresh sea urchin served with a sauce made of orange, carrot, and coconut is a unique and flavorful dish. The sweet and tangy flavor of the orange complements the rich and creamy taste of the sea urchin. The carrot adds a subtle sweetness to the dish while the coconut provides a nutty flavor that balances out the other flavors. This dish is perfect for those who want to try something new and exciting.",
        imgSrc: "/assets/crop1/crop8.jpeg",
        id: '6',
      price: 24,

      },
      {
        name: "Loup de Mer",
        description: "Grilled sea bass with special sauce is a delicious and healthy dish that’s perfect for any occasion. The sea bass is grilled to perfection, giving it a smoky flavor that’s enhanced by the special sauce.",
        imgSrc: "/assets/crop1/crop9.jpeg",
        id: '7',
        price: 16,

      }
    ]
    let deals: Deals={
      title: "A day worth celebrating" ,
      dealId: "0",
      period: "3 days",
      products: comproducts,
      discount: ["20%","30%","10%","15%","20%","20","10"]
}


    this.http.post(environment.baseUrl + environment.dealsPath,
      deals,
              {
                observe: 'response'
              }
      ).subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          console.log(error.message);
        }
      )


    
  }


  getData(){
    this.http.get<Product[]>(environment.baseUrl + environment.productPath,
          {
            observe: 'response'
          }
    ).subscribe(
    responseData => {
      console.log("get reponse",responseData.body);

    },
    error => {
      console.log(error.message);
    }
    )
  }

  
}
