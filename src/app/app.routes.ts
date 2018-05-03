import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarcabyComponent } from './pages/warcaby/warcaby.component';
import { GamesComponent } from './pages/games/games.component';

export const routes: Routes = [
  { path: '', component: GamesComponent, pathMatch: 'full' },
  { path: 'warcaby', component: WarcabyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
