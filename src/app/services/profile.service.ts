import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Profile } from '../model/profile';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private fireStore: Firestore) { }

  getData(): Observable<Profile[]>{
    const userCollection = collection(this.fireStore, 'users'); // collection(this.fireStore, 'products');
    const user = collectionData(userCollection);
    return user as Observable<Profile[]>;
  }

  addProfile(profile: Profile){
    const userCollection = collection(this.fireStore, 'products');
    addDoc(userCollection, {...profile});
  }


  // getProfileByUsernameAndPassword(username: string, password: string): Observable<Profile | undefined> {
  //   const query: QueryFn<DocumentData> = ref => ref.where('username', '==', username).where('password', '==', password).limit(1);
  //   const userCollection: AngularFirestoreCollection<Profile> = this.firestore.collection('users', query);
  //   const users: Observable<Profile[]> = userCollection.valueChanges();
  //   return users.map(profiles => profiles.length ? profiles[0] : undefined);
  // }

}
