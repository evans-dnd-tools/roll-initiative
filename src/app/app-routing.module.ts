import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RollInitiativeComponent } from './pages/roll-initiative/roll-initiative.component';

const routes: Routes = [
  { path: 'roll-initiative', component: RollInitiativeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
