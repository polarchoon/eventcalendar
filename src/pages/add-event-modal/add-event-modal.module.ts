import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventModalPage } from './add-event-modal';

@NgModule({
  declarations: [
    AddEventModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventModalPage),
  ],
})
export class AddEventModalPageModule {}
