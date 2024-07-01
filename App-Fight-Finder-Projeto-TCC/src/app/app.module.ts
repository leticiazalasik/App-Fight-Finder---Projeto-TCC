import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LutadorComponent } from './components/lutador/lutador.component';
import { LutadorFormComponent } from './components/lutador-form/lutador-form.component';
import { LutadorListComponent } from './components/lutador-list/lutador-list.component';
import { LutadorEditComponent } from './components/lutador-edit/lutador-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { MenuLutadoresComponent } from './components/menu-lutadores/menu-lutadores.component';
import { MenuListaLutadoresComponent } from './components/menu-lista-lutadores/menu-lista-lutadores.component';
import { TelaLutadoresComponent } from './components/tela-lutadores/tela-lutadores.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { AdicionarComentarioComponent } from './components/adicionar-comentario/adicionar-comentario.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { EscolaComponent } from './components/escola/escola.component';
import { EscolaFormComponent } from './components/escola-form/escola-form.component';
import { BoasVindasComponent } from './components/boas-vindas/boas-vindas.component';
import { MenuCriarContaComponent } from './components/menu-criar-conta/menu-criar-conta.component';
import { AjudaComponent } from './components/ajuda/ajuda.component';
import { EscolaEditComponent } from './components/escola-edit/escola-edit.component';
import { AulaComponent } from './components/aula/aula.component';
import { AulaFormComponent } from './components/aula-form/aula-form.component';
import { PresencaAlunosManualComponent } from './presenca-alunos-manual/presenca-alunos-manual.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    LutadorComponent,
    LutadorFormComponent, 
    LutadorListComponent, 
    LutadorEditComponent, FooterComponent, HeaderComponent, MenunavComponent, MenuInicialComponent, MenuLutadoresComponent, MenuListaLutadoresComponent, TelaLutadoresComponent, SplashScreenComponent, ComentarioComponent, AdicionarComentarioComponent, TelaLoginComponent, EscolaComponent, EscolaFormComponent, BoasVindasComponent, MenuCriarContaComponent, AjudaComponent, EscolaEditComponent, AulaComponent, AulaFormComponent, PresencaAlunosManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }

