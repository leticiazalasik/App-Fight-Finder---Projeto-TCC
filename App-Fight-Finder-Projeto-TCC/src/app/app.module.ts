import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LutadorComponent } from './components/lutador/lutador.component';
import { LutadorFormComponent } from './components/lutador-form/lutador-form.component';
import { LutadorListComponent } from './components/lutador-list/lutador-list.component';
import { LutadorEditComponent } from './components/lutador-edit/lutador-edit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { MenuLutadoresComponent } from './components/menu-lutadores/menu-lutadores.component';
import { MenuListaLutadoresComponent } from './components/menu-lista-lutadores/menu-lista-lutadores.component';
import { TelaLutadoresComponent } from './components/tela-lutadores/tela-lutadores.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { AdicionarComentarioComponent } from './adicionar-comentario/adicionar-comentario.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { EscolaComponent } from './escola/escola.component';
import { EscolaFormComponent } from './escola-form/escola-form.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { MenuCriarContaComponent } from './menu-criar-conta/menu-criar-conta.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { EscolaEditComponent } from './escola-edit/escola-edit.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    LutadorComponent,
    LutadorFormComponent, 
    LutadorListComponent, 
    LutadorEditComponent, FooterComponent, HeaderComponent, MenunavComponent, MenuInicialComponent, MenuLutadoresComponent, MenuListaLutadoresComponent, TelaLutadoresComponent, SplashScreenComponent, ComentarioComponent, AdicionarComentarioComponent, TelaLoginComponent, EscolaComponent, EscolaFormComponent, BoasVindasComponent, MenuCriarContaComponent, AjudaComponent, EscolaEditComponent
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

