import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { ImageGalleryComponent } from './layout/image-gallery/image-gallery.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CardComponent } from './layout/card/card.component';
import { ListGroupComponent } from './layout/list-group/list-group.component';
import { FormComponent } from './layout/form/form.component';
import { PageControlComponent } from './layout/page-control/page-control.component';
import { RatingStarComponent } from './layout/rating-star/rating-star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DecimalPlacePipe } from './pipe/decimal-place.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    CarouselComponent,
    ImageGalleryComponent,
    CardComponent,
    ListGroupComponent,
    FormComponent,
    PageControlComponent,
    RatingStarComponent,
    DecimalPlacePipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
],
  exports: [
    CarouselComponent,
    LoadingSpinnerComponent,
    ImageGalleryComponent,
    CardComponent,
    FormComponent,
    PageControlComponent,
    RatingStarComponent,
    DecimalPlacePipe,
    CommonModule
  ]
})
export class SharedModule {}
