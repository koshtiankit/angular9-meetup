import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: AppComponent ,
    children: [
      { path: '', redirectTo: 'schedule-meeting', pathMatch: 'full' },    
      {
        path: "schedule-meeting",
      loadChildren: () => import('./schedule-meeting/schedule-meeting.module').then(s => s.ScheduleMeetingModule)
      },
      {
        path: "meetings",
        loadChildren: () => import('./meeting-list/meeting-list.module').then(m => m.MeetingListModule)
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
