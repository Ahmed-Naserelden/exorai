import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { FooterComponent } from './footer/footer.component';
import { NotifyComponent } from './notify/notify.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SellComponent } from './sell/sell.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat'

@NgModule({
  declarations: [
    AppComponent,
    EnvelopeComponent,
    FooterComponent,
    NotifyComponent,
    ProductdetailsComponent,
    ProductInfoComponent,
    SearchBarComponent,
    SellComponent,
    SidebarComponent,
    TicketComponent,
    UserprofileComponent,
    UsersComponent,
    WishlistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
