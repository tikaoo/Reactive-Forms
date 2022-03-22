import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

export interface DialogData {
  name: string;
  sobreNome: string;
  userName:string;
  cpf:string;
  telefone:any;
  endereço:string;
  complemento:string;
  senha1:string;
  senha2:string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;
  sobreNome: string;
  userName:string;
  cpf:string;
  telefone:any;
  endereço:string;
  complemento:string;
  senha1:string;
  senha2:string

  constructor( private dialog:MatDialog) {
    
  }

  open():void{
    const dialogRef = this.dialog.open(FormComponent,
      {
        minWidth: '400px',
        height:'550px',
        data:{name: this.name, sobreNome: this.sobreNome,userName:this.userName,cpf:this.cpf,telefone:this.telefone, endereço:this.endereço,complemento:this.complemento,senha1:this.senha1,senha2: this.senha2 
        
        }
        } );
        
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          
        });
      }
      


    }
