import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss']
})
export class ScheduleMeetingComponent implements OnInit {


 timeZones = [
    {key:'Pacific/Midway', value: '(GMT-11:00) Midway Island'},
    {key:'US/Samoa'            , value: '(GMT-11:00) Samoa'},
    {key:'US/Hawaii'           , value: '(GMT-10:00) Hawaii'},
    {key:'US/Alaska'           , value: '(GMT-09:00) Alaska'},
    {key:'US/Pacific'          , value: '(GMT-08:00) Pacific Time (US & Canada)'},
    {key:'America/Tijuana'     , value: '(GMT-08:00) Tijuana'},
    {key:'US/Arizona'          , value: '(GMT-07:00) Arizona'},
    {key:'US/Mountain'         , value: '(GMT-07:00) Mountain Time (US & Canada)'},
    {key:'America/Chihuahua'   , value: '(GMT-07:00) Chihuahua'},
    {key:'America/Mazatlan'    , value: '(GMT-07:00) Mazatlan'},
    {key:'America/Mexico_City' , value: '(GMT-06:00) Mexico City'},
    {key:'America/Monterrey'   , value: '(GMT-06:00) Monterrey'},
    {key:'Canada/Saskatchewan' , value: '(GMT-06:00) Saskatchewan'},
    {key:'US/Central'          , value: '(GMT-06:00) Central Time (US & Canada)'},
    {key:'US/Eastern'          , value: '(GMT-05:00) Eastern Time (US & Canada)'},
    {key:'US/East-Indiana'     , value: '(GMT-05:00) Indiana (East)'},
    {key:'America/Bogota'      , value: '(GMT-05:00) Bogota'},
    {key:'America/Lima'        , value: '(GMT-05:00) Lima'},
    {key:'America/Caracas'     , value: '(GMT-04:30) Caracas'},
    {key:'Canada/Atlantic'     , value: '(GMT-04:00) Atlantic Time (Canada)'},
    {key:'America/La_Paz'      , value: '(GMT-04:00) La Paz'},
    {key:'America/Santiago'    , value: '(GMT-04:00) Santiago'},
    {key:'Canada/Newfoundland' , value: '(GMT-03:30) Newfoundland'},
    {key:'America/Buenos_Aires', value: '(GMT-03:00) Buenos Aires'},
    {key:'Greenland'           , value: '(GMT-03:00) Greenland'},
    {key:'Atlantic/Stanley'    , value: '(GMT-02:00) Stanley'},
    {key:'Atlantic/Azores'     , value: '(GMT-01:00) Azores'},
    {key:'Atlantic/Cape_Verde' , value: '(GMT-01:00) Cape Verde Is.'},
    {key:'Africa/Casablanca'   , value: '(GMT) Casablanca'},
    {key:'Europe/Dublin'       , value: '(GMT) Dublin'},
    {key:'Europe/Lisbon'       , value: '(GMT) Lisbon'},
    {key:'Europe/London'       , value: '(GMT) London'},
    {key:'Africa/Monrovia'     , value: '(GMT) Monrovia'},
    {key:'Europe/Amsterdam'    , value: '(GMT+01:00) Amsterdam'},
    {key:'Europe/Belgrade'     , value: '(GMT+01:00) Belgrade'},
    {key:'Europe/Berlin'       , value: '(GMT+01:00) Berlin'},
    {key:'Europe/Bratislava'   , value: '(GMT+01:00) Bratislava'},
    {key:'Europe/Brussels'     , value: '(GMT+01:00) Brussels'},
    {key:'Europe/Budapest'     , value: '(GMT+01:00) Budapest'},
    {key:'Europe/Copenhagen'   , value: '(GMT+01:00) Copenhagen'},
    {key:'Europe/Ljubljana'    , value: '(GMT+01:00) Ljubljana'},
    {key:'Europe/Madrid'       , value: '(GMT+01:00) Madrid'},
    {key:'Europe/Paris'        , value: '(GMT+01:00) Paris'},
    {key:'Europe/Prague'       , value: '(GMT+01:00) Prague'},
    {key:'Europe/Rome'         , value: '(GMT+01:00) Rome'},
    {key:'Europe/Sarajevo'     , value: '(GMT+01:00) Sarajevo'},
    {key:'Europe/Skopje'       , value: '(GMT+01:00) Skopje'},
    {key:'Europe/Stockholm'    , value: '(GMT+01:00) Stockholm'},
    {key:'Europe/Vienna'       , value: '(GMT+01:00) Vienna'},
    {key:'Europe/Warsaw'       , value: '(GMT+01:00) Warsaw'},
    {key:'Europe/Zagreb'       , value: '(GMT+01:00) Zagreb'},
    {key:'Europe/Athens'       , value: '(GMT+02:00) Athens'},
    {key:'Europe/Bucharest'    , value: '(GMT+02:00) Bucharest'},
    {key:'Africa/Cairo'        , value: '(GMT+02:00) Cairo'},
    {key:'Africa/Harare'       , value: '(GMT+02:00) Harare'},
    {key:'Europe/Helsinki'     , value: '(GMT+02:00) Helsinki'},
    {key:'Europe/Istanbul'     , value: '(GMT+02:00) Istanbul'},
    {key:'Asia/Jerusalem'      , value: '(GMT+02:00) Jerusalem'},
    {key:'Europe/Kiev'         , value: '(GMT+02:00) Kyiv'},
    {key:'Europe/Minsk'        , value: '(GMT+02:00) Minsk'},
    {key:'Europe/Riga'         , value: '(GMT+02:00) Riga'},
    {key:'Europe/Sofia'        , value: '(GMT+02:00) Sofia'},
    {key:'Europe/Tallinn'      , value: '(GMT+02:00) Tallinn'},
    {key:'Europe/Vilnius'      , value: '(GMT+02:00) Vilnius'},
    {key:'Asia/Baghdad'        , value: '(GMT+03:00) Baghdad'},
    {key:'Asia/Kuwait'         , value: '(GMT+03:00) Kuwait'},
    {key:'Asia/Karachi'        , value: '(GMT+05:00) Karachi'},
    {key:'Asia/Tashkent'       , value: '(GMT+05:00) Tashkent'},
    {key:'Asia/Kolkata'        , value: '(GMT+05:30) Kolkata'},
    {key:'Asia/Kathmandu'      , value: '(GMT+05:45) Kathmandu'},
    {key:'Asia/Yekaterinburg'  , value: '(GMT+06:00) Ekaterinburg'},
    {key:'Asia/Almaty'         , value: '(GMT+06:00) Almaty'},
    {key:'Asia/Dhaka'          , value: '(GMT+06:00) Dhaka'},
    {key:'Asia/Novosibirsk'    , value: '(GMT+07:00) Novosibirsk'},
    {key:'Asia/Bangkok'        , value: '(GMT+07:00) Bangkok'},
    {key:'Asia/Jakarta'        , value: '(GMT+07:00) Jakarta'},
      {key:'Pacific/Auckland'    , value: '(GMT+12:00) Auckland'},
    {key:'Pacific/Fiji'        , value: '(GMT+12:00) Fiji'},
    {key:'UTC'                 , value: 'UTC'},
 ];
  schduleMeetingForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createScheduleMeetingForm();
  }

  createScheduleMeetingForm() {
      this.schduleMeetingForm = this.formBuilder.group({
        timeZone: [
          "",
          [Validators.required]
        ],
        BirthDate: [null],
        fromTime: [null],
        toTime: [null],
              });
    }
  

}