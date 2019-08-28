import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { InicioComponent } from './pages/home/inicio/inicio.component';

const appRoutes: Routes = [
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
