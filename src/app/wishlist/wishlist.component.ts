import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent{

  // wishlist = [
  //   {
  //     image:
  //     "https://s3-alpha-sig.figma.com/img/0d3f/b87b/5305b4c470aa0fa5703c24440ccb1468?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hlubcucMfQJooOb~6sEeIG5HMYfdzr7TDhoRxzJ~eYRuWTkhZwtnfj~Fns70R~qr3AnLSYW0H-K6ebinkt2d6HBV-tYJcJrSKEdqL4S5ZfSmN1YUG3c9lA6KtOJ7Duf~CSLhLbRSubT5lcoM~AntewQw1EROYI7n6EMsQuKfSQsKT02CZj6hMNimc-eMwuH7~FId6kw8nhWz9R-aRPES57XnSlEHg5L5kbIXLCSwrmn3n0xr~JBloNQ3Nlo9hlsqKIwYijEsLC8B4s8QvF5Oz5HhL6pXuYABW0CbtN05LTYpJTF15XFKS8hRFXl8ldwu5F31q53xLgXqyJLGXBDk8A__",
  //     name:"bicycle",
  //     price:1200,
  //     loc:"cairo",
  //     since:"2 week ago"
  //   },
  //   {
  //     image:
  //     "https://s3-alpha-sig.figma.com/img/484e/8f08/d0349799dc78a139cc8a537a61d43cbd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b39M3uxCR8sPu4yJ~QAcCGTnnRhmQJ5V5qdh4NOHr4J3qp-eAKjEevx8oINdMWebQjniP1FCigJuAnr86CpCJ6KaxQfj7FTWfd5geZG7Y7bG0QF54bXNzqclp9qTX-Z01HWGduMvymunK-cHcqHFVugdg~UV7gZa9oLS7xRXEnqk6P8BtrSO0-hKSAHLWWhvl-8v5F4wLZhPVwtFB3guwIoOFUaAMtEr8u40w-7xTmdLYjUoiJax-Vul6shTjB20Yd0pzghQaARyg110t4pyRcMlJbhb1~5Mj6aiiKCOhR1KpzRtwRxDSFwVM~WXAtK5~W2ND8m0T8i7lRmeaeQ7FA__",
  //     name:"bicycle",
  //     price:1200,
  //     loc:"cairo",
  //     since:"2 week ago"
  //   },
  //   {
  //     image:
  //     "https://s3-alpha-sig.figma.com/img/2ed4/da4c/234de3153b0adb3840eb3cdca7f88138?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENOHL3yaxPXmeKZc9FXwEfIhqjFokj2xtPxX8TeskpmMvAWJlU57yzuM6RN-nQDdsh2qTUNy~~ToKw6G8AenuX5HGL15-of-bmtJB6HFxDcfcx8YGtHnsAepgNoLvbijIh~JnsLAAzJEpMxJhOIUPSLS9gKfopGMdfnsaV8KbZ2dToomiTAj-jmGOGKMrXRYLYw2Px6ZNPUIZq3oTwvsisEU9VQ~DZXceZk80jHCo9SvMDGsPu7NSkdoAmjaP9UOia7VaD~KQVuK-xpOl3W4VCOotGkZwgE~moYxlTwGQjEuuGMglAsOJKjlkxjR9QA7cF2QMWzR-JS0usHk4ix1AA__",
  //     name:"bicycle",
  //     price:1200,
  //     loc:"cairo",
  //     since:"2 week ago"
  //   },
  //   {
  //     productimage:
  //     "https://s3-alpha-sig.figma.com/img/5972/66ac/450c9412aa3e223ae5bbd85c0bd4956a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8kkppy-khQt0whNH28ai774d3qwVOV6pSmZ2L7a5bVHNrIJanfN8Cw1SrMPz1bIkQKEExaSZw-cfRBYYNZeVQ41Yvk3zhuW4y6hj2WAkSd3YcUL~3bVhdkvPSw8hiiAboQHaQmadq9fAJscncR4I1QyRDOI-3VBhKBcigR8DHduxb5~~bcWvTi4clZDhIFwR~MfiqY4EyaaOIsV9zxShwENKAuHzKjlyZ88r0A8jxcoeailH9T8WYvAOTeoTogQej7fJjf3uTHHBPU-2UuaZb14BOrQEKXzZ8jTY67aDx5tHUDTMOMClrr-iECFvrlyzkyjorWFu0Pi8UEn5ynq5Q__",
  //     name:"bicycle",
  //     price:1200,
  //     loc:"cairo",
  //     since:"2 week ago"
  //   }
  // ];

    wishlist: Product[] | undefined;
    productsSubscription: Subscription | undefined;

    
    constructor(private productService: ProductsService){}

    ngOnInit(){
      this.productsSubscription = this.productService.getProducts().subscribe(products => {
        this.wishlist = products;
        console.log(this.wishlist[0].name);
      });
    }
    
    ngOnDestroy() {
      if (this.productsSubscription) {
        this.productsSubscription.unsubscribe();
      }
    }

    // getImageUrl(file: File[] | null): string | undefined {
    //   if (file && file.length > 0) {
    //       const imageUrl = URL.createObjectURL(file[0]);
    //       return imageUrl;
    //   }
    //   return undefined;
    // }
  
}
