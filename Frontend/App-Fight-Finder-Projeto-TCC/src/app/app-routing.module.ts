import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './components/Telas unicas component/tela-login/tela-login.component';
import { TreinadorListComponent } from './components/Treinador component/treinador-list/treinador-list.component';
import { LutadorComponent } from './components/Lutador component/lutador/lutador.component';
import { LutadorListComponent } from './components/Lutador component/lutador-list/lutador-list.component';
import { AulasListComponent } from './components/Aula components/aulas-list/aulas-list.component';
import { MenuInicialComponent } from './components/Telas unicas component/menu-inicial/menu-inicial.component';
import { TreinadorEditComponent } from './components/Treinador component/treinador-edit/treinador-edit.component';
import { TreinadorFormComponent } from './components/Treinador component/treinador-form/treinador-form.component';
import { VisualizacaoTreinadorComponent } from './components/Treinador component/visualizacao-treinador/visualizacao-treinador.component';
import { LutadorEditComponent } from './components/Lutador component/lutador-edit/lutador-edit.component';
import { LutadorFormComponent } from './components/Lutador component/lutador-form/lutador-form.component';
import { LutadorFormCompleteComponent } from './components/Lutador component/lutador-form-complete/lutador-form-complete.component';
import { VisualizacaoLutadorComponent } from './components/Lutador component/visualizacao-lutador/visualizacao-lutador.component';
import { AulaFormComponent } from './components/Aula components/aula-form/aula-form.component';
import { AulaEditComponent } from './components/Aula components/aula-edit/aula-edit.component';
import { GerarLutaComponent } from './components/Lutas component/gerar-luta/gerar-luta.component';
import { ResultadoLutasComponent } from './components/Lutas component/resultado-lutas/resultado-lutas.component';
import { AjudaComponent } from './components/Telas unicas component/ajuda/ajuda.component';
import { EsqueciSenhaComponent } from './components/Telas unicas component/esqueci-senha/esqueci-senha.component';
import { MenuCriarContaComponent } from './components/Telas unicas component/menu-criar-conta/menu-criar-conta.component';
import { EscolaFormComponent } from './components/Escola component/escola-form/escola-form.component';
import { EscolaEditComponent } from './components/Escola component/escola-edit/escola-edit.component';
import { EscolaComponent } from './components/Escola component/escola/escola.component';
import { AdicionarComentarioComponent } from './components/Comentario-components/adicionar-comentario/adicionar-comentario.component';
import { EditarComentarioComponent } from './components/Comentario-components/editar-comentario/editar-comentario.component';
import { BoasVindasComponent } from './components/Telas unicas component/boas-vindas/boas-vindas.component';
import { AusentesAulasComponent } from './components/Aula components/ausentes-aulas/ausentes-aulas.component';
import { PresentesAulaComponent } from './components/Aula components/presentes-aula/presentes-aula.component';

const routes: Routes = [ 
  {path:"login", component: TelaLoginComponent},
  {path:"treinador", component: TreinadorListComponent},
  {path:"lutador", component: LutadorListComponent},
  {path:"aula", component: AulasListComponent},
  {path:"menuInicial", component: MenuInicialComponent},
  {path:"treinadorEditar/:id", component: TreinadorEditComponent},
  {path:"treinadorForm", component: TreinadorFormComponent},
  {path:"treinadorVisualizacao", component: VisualizacaoTreinadorComponent},
  {path:"lutadorForm", component: LutadorFormComponent},
  {path: "lutadorEditar/:id", component: LutadorFormCompleteComponent},
  {path:"lutadorVisualizacao", component: VisualizacaoLutadorComponent},
  {path:"aulaForm", component: AulaFormComponent},
  {path:"aulaEdit", component: AulaEditComponent},
  {path:"gerarLuta", component: GerarLutaComponent},
  {path:"resultadoLista", component: ResultadoLutasComponent},
  {path:"ajudaComponet", component: AjudaComponent},
  {path:"esqueciSenha", component: EsqueciSenhaComponent},
  {path:"menuCriarConta", component: MenuCriarContaComponent},
  {path:"escolaForm", component: EscolaFormComponent},
  {path:"escolaEdit", component: EscolaEditComponent},
  {path:"escola", component: EscolaComponent},
  {path:"adicionarComentario", component: AdicionarComentarioComponent},
  {path:"editarComentario", component: EditarComentarioComponent},
  {path:"boasVindas", component: BoasVindasComponent},
  {path:"ausentesAula", component: AusentesAulasComponent},
  {path:"presentesAula/:id", component: PresentesAulaComponent},



  {path:"", redirectTo:"boasVindas", pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
