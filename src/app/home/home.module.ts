import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MensagemModule],
  exports: [HomeComponent],
})
export class HomeModule {}
