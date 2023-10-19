import { Injectable } from '@angular/core';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, orderBy, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private firestore: Firestore = inject(Firestore);
  public instanciaFirestore = collection(this.firestore, 'encuestas');
  public queryInstancia:any | undefined;

  constructor() { }

  
  todos():Observable<any>{
    return collectionData(this.instanciaFirestore);
  }

  alta(data:any):Promise<any>{
    return addDoc(this.instanciaFirestore, data)
      .then(() => {
        console.log("Datos guardados exitosamente");
      })
      .catch((error) => {
        console.error("Error al guardar datos:", error);
      });
  }


}
