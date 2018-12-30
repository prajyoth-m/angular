import { QuizMenuComponent } from './quiz-menu/quiz-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

const routes: Routes = [ { path: '', redirectTo: '/quizs', pathMatch: 'full' },
{ path: 'quizs', component: QuizMenuComponent },
{ path: 'create', component: CreateQuizComponent },
{ path: 'settings', component: SettingsComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
