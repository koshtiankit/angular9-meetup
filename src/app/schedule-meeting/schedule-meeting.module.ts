import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { ScheduleMeetingRoutingModule } from "./schedule-meeting-routing.module";
import {ScheduleMeetingComponent} from './schedule-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ScheduleMeetingRoutingModule
  ],
  declarations: [ScheduleMeetingComponent],
  providers: []
})
export class ScheduleMeetingModule {}
