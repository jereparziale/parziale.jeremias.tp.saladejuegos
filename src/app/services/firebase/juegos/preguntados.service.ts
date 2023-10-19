import { Injectable } from '@angular/core';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {
  private firestore: Firestore = inject(Firestore);
  public instanciaFirestore = collection(this.firestore, 'preguntados');

  constructor() { }
  public traerTodasPreguntas(): Observable<any> {
    return collectionData(this.instanciaFirestore);
  }



}
 