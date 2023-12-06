import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  @Input() pessoa!: Pessoa;
  @Output() salvarPessoa = new EventEmitter<Pessoa>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private pessoaService: PessoaService, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      data: ['', [Validators.required]],
      classificacao: ['', [Validators.required]],
    });
  }

  salvar() {
    const pessoaEditada: Pessoa = {
      id: this.pessoa.id,
      nome: this.form.value.nome,
      data: this.form.value.data,
      classificacao: this.form.value.classificacao,
    };

    this.salvarPessoa.emit(pessoaEditada);
  }

  submitForm() {
    this.pessoaService.postPessoa(this.form.value).subscribe((res) => {
      this._snackBar.open('Cadastro realizado com sucesso!', 'Ok');
    })
  }
  
   
  
}
