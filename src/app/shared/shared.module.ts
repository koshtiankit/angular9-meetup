import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonMaterialModule } from "./common-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MAT_DATE_LOCALE } from "@angular/material";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule
  ],
  declarations: [
    
  ],
  exports: [
    CommonModule,
    CommonMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ],
  entryComponents: [
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" }
  ]
})
export class SharedModule {
  
}
