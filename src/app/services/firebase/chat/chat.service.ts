import { Injectable } from '@angular/core';
import { Component, OnInit, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  limit,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private firestore: Firestore = inject(Firestore);
  public instanciaFirestore = collection(this.firestore, 'mensajes');
  public queryInstancia: any | undefined;
  constructor() {}

  public traerTodos(): Observable<any> {
    //EN SERVICIO DE CHAT/FIRESTORE
    this.queryInstancia = query(
      this.instanciaFirestore,
      orderBy('fecha', 'desc'),
      limit(20)
    );
    return collectionData(this.queryInstancia);
  }

  public agregarUno(data:any):Promise<any>{
    return addDoc(this.instanciaFirestore, data)
      .then(() => {
        console.log("Datos guardados exitosamente");
      })
      .catch((error) => {
        console.error("Error al guardar datos:", error);
      });
  }
}
