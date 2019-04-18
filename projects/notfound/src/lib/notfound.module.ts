import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound.component';
import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundService } from './notfound.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ],
  providers: [
    NotfoundService
  ],
  exports: [NotfoundComponent]
})
export class NotfoundModule {}
