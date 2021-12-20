import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/user';
@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  public cadastraNovoUsuario(
    novoUsuario: NovoUsuario
  ): Observable<NovoUsuario> {
    return this.httpClient.post<NovoUsuario>(`${url}/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${url}/exists/${nomeUsuario}`);
  }
}
