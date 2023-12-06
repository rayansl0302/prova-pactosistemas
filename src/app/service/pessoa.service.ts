import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../shared/models/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {

  constructor(private http: HttpClient) {
  }

  getPessoa() {
    return this.http.get('http://localhost:3000/pessoa')
  }

  postPessoa(pessoa: Pessoa) {
    return this.http.post('http://localhost:3000/pessoa', pessoa)
  }

  editPessoa(pessoa: Pessoa) {
    return this.http.put(`http://localhost:3000/pessoa/${pessoa.id}`,pessoa)
  }

  deletePessoa(id: number) {
    return this.http.delete(`http://localhost:3000/pessoa/${id}`)
  }

}
