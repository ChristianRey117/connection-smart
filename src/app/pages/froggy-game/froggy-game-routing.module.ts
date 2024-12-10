import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FroggyGameComponent } from './froggy-game.component';

const routes: Routes = [
  {
    path: '',
    component: FroggyGameComponent,
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FroggyGameRoutingModule {}
