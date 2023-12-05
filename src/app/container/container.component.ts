import { Component, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SearchBarComponent } from '../header/search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProducDetailComponent } from './product-detail/produc-detail.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    NgFor,
    ProductListComponent,
    ProducDetailComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Durofoot', 'Matheus', 'Fornazzari'];
  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
  // name = 'Matheus Dorigon';
  // addToCart: number = 0;
  // product = {
  //   name: 'iPhone',
  //   price: 789,
  //   color: 'red',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: '/assets/images/iphone.png',
  // };

  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }
  // decrementCartValue() {
  //   if (this.addToCart - 1 < 0) this.addToCart = 0;
  //   else this.addToCart--;
  // }
  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) this.addToCart++;
  // }
  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }
}
