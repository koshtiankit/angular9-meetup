import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleMeetingComponent } from './schedule-meeting.component';

const routes: Routes = [
    { path: '', component: ScheduleMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleMeetingRoutingModule { }
