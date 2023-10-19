import { Injectable } from '@angular/core';
import { Component, OnInit, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../auth/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasService {
  private firestore: Firestore = inject(Firestore);
  public instanciaFirestore = collection(this.firestore, 'estadisticas_juegos');
  private UserAuthService: UserAuthService = inject(UserAuthService);
  public queryInstancia: any | undefined;

  constructor() {}

  alta(data: any): Promise<any> {
    return addDoc(this.instanciaFirestore, data)
      .then(() => {
        console.log('Datos guardados exitosamente');
      })
      .catch((error) => {
        console.error('Error al guardar datos:', error);
      });
  }

  public traerTodos(usuario:string): Observable<any> {
    this.queryInstancia = query(
      this.instanciaFirestore,
      where('usuario', '==', usuario)
    );
  
    return collectionData(this.queryInstancia);
  }
  
}
