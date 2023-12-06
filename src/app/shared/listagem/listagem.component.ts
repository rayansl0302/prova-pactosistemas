import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../models/pessoa.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  pessoas: Pessoa[] = [];
  pessoaSelecionada!: Pessoa | null;
  form: FormGroup;


  constructor(private pessoaService: PessoaService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      classificacao: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getPessoa();

  }
  getPessoa() {
    this.pessoaService.getPessoa().subscribe((res) => {
      this.pessoas = res as Pessoa[]
    })
  }

  deletePessoas(id: number) {
    this.pessoaService.deletePessoa(id).subscribe((res) => {
      this._snackBar.open('Deletado com sucesso!', 'Ok');
      this.getPessoa()
    })
  }


  editarPessoa(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
    this.form.controls['nome'].setValue(pessoa.nome);
    this.form.controls['data'].setValue(pessoa.data);
    this.form.controls['classificacao'].setValue(pessoa.classificacao);
    this.form.controls['id'].setValue(pessoa.id);

  }

  salvarEdicao() {
    this.pessoaService.editPessoa(this.form.value).subscribe((res) => {
      this._snackBar.open('Edição realizada com sucesso!', 'Ok');

      this.getPessoa()
      this.pessoaSelecionada = null
    },
      error => console.log(error)
    );
  }

}
