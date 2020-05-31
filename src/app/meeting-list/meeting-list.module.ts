import { NgModule } from "@angular/core";
//import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MeetingListRoutingModule } from "./meeting-list-routing.module";
import { MeetingListComponent } from "./meeting-list.component";


@NgModule({
  imports: [
  //  CommonModule,
    SharedModule,
    MeetingListRoutingModule
  ],
  declarations: [MeetingListComponent],
  providers: []
})
export class MeetingListModule {}
