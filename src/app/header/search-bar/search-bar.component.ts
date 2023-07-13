import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  faBars=faBars;
  searchQuery:string="";
  expanded:boolean=false;
  imagePath="/assets/logos/turn-logo-full-black-450x191.png";

  constructor(private router:Router,
              private route: ActivatedRoute){}

  onSubmit(){
    this.router.navigate(['/search'],{queryParams: {searchQuery:this.searchQuery}})
  }
}
