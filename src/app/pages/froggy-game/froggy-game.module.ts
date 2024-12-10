import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FroggyGameRoutingModule } from './froggy-game-routing.module';
import { FroggyGameComponent } from './froggy-game.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FroggyGameComponent],
  imports: [CommonModule, FroggyGameRoutingModule, IonicModule],
})
export class FroggyGameModule {}
