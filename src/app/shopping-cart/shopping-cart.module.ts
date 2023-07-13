import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";



@NgModule({
    declarations: [
        ShoppingCartComponent,
        ShoppingEditComponent
    ],
    imports:[
        RouterModule.forChild([{ path: '', component: ShoppingCartComponent }]),
        FormsModule,
        ReactiveFormsModule,
        CommonModule

    ]

})

export class ShoppingCartModule{
}