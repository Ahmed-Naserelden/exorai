import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  {path: 'wishlist', component: WishlistComponent},
  {path: 'profile', component: UserprofileComponent},
  {path: 'productdetails', component: ProductdetailsComponent},
  {path: 'post', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
