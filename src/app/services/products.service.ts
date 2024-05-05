  import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  import { Subject } from 'rxjs';
  import { TicketComponent } from '../ticket/ticket.component';

  import { Product } from '../model/product';
  import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
  import { AngularFireStorage } from '@angular/fire/compat/storage';


  @Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
    constructor(private fireStore: Firestore) {} //, private storage: AngularFireStorage) {}

    url = 'https://fakestoreapi.com/products'

    getProducts(): Observable<Product[]>{
      const productCollection = collection(this.fireStore, 'products');
      const products = collectionData(productCollection);
      return products as Observable<Product[]>;
    }

    addProduct(product: Product){
      console.log("===================Product=================")
      console.log(product);
      const productCollection = collection(this.fireStore, 'products');
      addDoc(productCollection, {...product});
    } 


    // uploadImage(file: File): Promise<string> {
    //   const filePath = `products/${Date.now()}_${file.name}`;
    //   const fileRef = this.storage.ref(filePath);
    //   return fileRef.put(file).then(() => {
    //     return fileRef.getDownloadURL().toPromise();
    //   });
    // }

    // addProduct()
  }
