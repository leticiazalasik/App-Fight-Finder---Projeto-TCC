import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LutadorComponent } from './components/Lutador component/lutador/lutador.component';
import { LutadorFormComponent } from './components/Lutador component/lutador-form/lutador-form.component';
import { LutadorListComponent } from './components/Lutador component/lutador-list/lutador-list.component';
import { LutadorEditComponent } from './components/Lutador component/lutador-edit/lutador-edit.component';
import { FooterComponent } from './components/Compartilhados component/footer/footer.component';
import { HeaderComponent } from './components/Compartilhados component/header/header.component';
import { MenunavComponent } from './components/Compartilhados component/menunav/menunav.component';
import { MenuInicialComponent } from './components/Telas unicas component/menu-inicial/menu-inicial.component';
import { MenuLutadoresComponent } from './components/Lutador component/menu-lutadores/menu-lutadores.component';
import { SplashScreenComponent } from './components/Telas unicas component/splash-screen/splash-screen.component';
import { ComentarioComponent } from './components/Comentario-components/comentario/comentario.component';
import { AdicionarComentarioComponent } from './components/Comentario-components/adicionar-comentario/adicionar-comentario.component';
import { TelaLoginComponent } from './components/Telas unicas component/tela-login/tela-login.component';
import { EscolaComponent } from './components/Escola component/escola/escola.component';
import { EscolaFormComponent } from './components/Escola component/escola-form/escola-form.component';
import { BoasVindasComponent } from './components/Telas unicas component/boas-vindas/boas-vindas.component';
import { MenuCriarContaComponent } from './components/Telas unicas component/menu-criar-conta/menu-criar-conta.component';
import { AjudaComponent } from './components/Telas unicas component/ajuda/ajuda.component';
import { EscolaEditComponent } from './components/Escola component/escola-edit/escola-edit.component';
import { AulaComponent } from './components/Aula components/aula/aula.component';
import { AulaFormComponent } from './components/Aula components/aula-form/aula-form.component';
import { PresencaLutadoresManualComponent } from './components/Aula components/presenca-lutadores-manual/presenca-lutadores-manual.component';
import { PresencaTreinadoresManualComponent } from './components/Aula components/presenca-treinadores-manual/presenca-treinadores-manual.component';
import { TreinadorComponent } from './components/Treinador component/treinador/treinador.component';
import { TreinadorListComponent } from './components/Treinador component/treinador-list/treinador-list.component';
import { TreinadorFormComponent } from './components/Treinador component/treinador-form/treinador-form.component';
import { TreinadorEditComponent } from './components/Treinador component/treinador-edit/treinador-edit.component';
import { AulaListComponent } from './components/Aula components/aula-list/aula-list.component';
import { MenuListaAulasComponent } from './components/Aula components/menu-lista-aulas/menu-lista-aulas.component';
import { AulaEditComponent } from './components/Aula components/aula-edit/aula-edit.component';
import { VisualizacaoLutadorComponent } from './components/Lutador component/visualizacao-lutador/visualizacao-lutador.component';
import { LutadorFormCompleteComponent } from './components/Lutador component/lutador-form-complete/lutador-form-complete.component';
import { EsqueciSenhaComponent } from './components/Telas unicas component/esqueci-senha/esqueci-senha.component';
import { GerarLutaComponent } from './components/Lutas component/gerar-luta/gerar-luta.component';
import { ResultadoLutasComponent } from './components/Lutas component/resultado-lutas/resultado-lutas.component';
import { VisualizacaoTreinadorComponent } from './components/Treinador component/visualizacao-treinador/visualizacao-treinador.component';
import { AulasListComponent } from './components/Aula components/aulas-list/aulas-list.component';
import { PresentesAulaComponent } from './components/Aula components/presentes-aula/presentes-aula.component';
import { AusentesAulasComponent } from './components/Aula components/ausentes-aulas/ausentes-aulas.component';
import { EditarComentarioComponent } from './components/Comentario-components/editar-comentario/editar-comentario.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    LutadorComponent,
    LutadorFormComponent, 
    LutadorListComponent, 
    LutadorEditComponent, FooterComponent, HeaderComponent, MenunavComponent, MenuInicialComponent, MenuLutadoresComponent, SplashScreenComponent, ComentarioComponent, AdicionarComentarioComponent, TelaLoginComponent, EscolaComponent, EscolaFormComponent, BoasVindasComponent, MenuCriarContaComponent, AjudaComponent, EscolaEditComponent, AulaComponent, AulaFormComponent, PresencaLutadoresManualComponent, PresencaTreinadoresManualComponent, TreinadorComponent, TreinadorListComponent, TreinadorFormComponent, TreinadorEditComponent, AulaListComponent, MenuListaAulasComponent, AulaEditComponent, VisualizacaoLutadorComponent, LutadorFormCompleteComponent, EsqueciSenhaComponent, GerarLutaComponent, ResultadoLutasComponent, VisualizacaoTreinadorComponent, AulasListComponent, PresentesAulaComponent, AusentesAulasComponent, EditarComentarioComponent
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

