import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form : FormGroup
  


  constructor(
    private snack : MatSnackBar,
    public dialogRef: MatDialogRef<FormComponent>,
    private fb : FormBuilder,
    @Inject (MAT_DIALOG_DATA) private data:DialogData,){}

       
    ngOnInit(): void {
      this.form=this.fb.group({
        name:['',[Validators.required]],
        sobreNome: ['', [Validators.required]],
        userName:['',[Validators.required]],
        cpf:['',[Validators.required]],
        telefone:['',[Validators.required]],
        endereço:['',[Validators.required]],
        complemento:['',[Validators.required]],
        senha1:['',[Validators.required]],
        senha2:['',[Validators.required]],
        
      })
    }
   
  
  add():void{
    if(this.form.controls['senha1'].value != this.form.controls['senha2'].value || this.form.invalid ){
      this.snack.open('Preencha o formulário corretamente', 'Fechar')
    }else {
      this.snack.open('Cadastro realizado com sucesso!', 'Fechar')
    };    
    this.form.reset()
  }

  cancel(): void {
    this.dialogRef.close(this.snack.open('Não me abandone por favor!!', ':('));
    this.form.reset()
  }}


