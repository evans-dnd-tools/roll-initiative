import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RollInitiativeComponent } from './pages/roll-initiative/roll-initiative.component';
import { WorldIndexComponent } from './pages/world-index/world-index.component';
import { SpectateComponent } from './pages/spectate/spectate.component';

const routes: Routes = [
  { path: 'roll-initiative', component: RollInitiativeComponent },
  { path: 'world-index', component: WorldIndexComponent },
  { path: 'spectate', component: SpectateComponent },
  { path: '', redirectTo: '/world-index', pathMatch: 'full' },
  { path: '**', redirectTo: '/world-index', pathMatch: 'full' },
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
