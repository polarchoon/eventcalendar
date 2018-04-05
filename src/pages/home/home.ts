import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController } from 'ionic-angular';
//import { NavController, ActionSheetController } from 'ionic-angular';
//import { AddEventModalPage } from '../add-event-modal/add-event-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedDay = new Date()
  selectedObject
  eventSource = []
  viewTitle;
  isToday: boolean;
  calendarModes = [
    { key: 'month', value: 'Month' },
    { key: 'week', value: 'Week' },
    { key: 'day', value: 'Day' },
  ]
  calendar = {
    mode: this.calendarModes[0].key,
    currentDate: new Date()
  };
  
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {

  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log(event);
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  changeMode(mode) {
    console.log("change mode")
    console.log(mode);
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
    console.log('1Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedObject = ev;
    console.log(ev);
    // this.openActionSheet(ev)
  }

  //when date is changed
  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();

    this.selectedDay = event
    console.log("current date changed")
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return (date < current);
  };

  // openActionSheet(event) {
  //   console.log('opening');
  //   let actionsheet = this.actionSheetCtrl.create({
  //     title: "Choose Option",
  //     buttons: [
  //       {
  //         text: 'Block Date',
  //         handler: () => {
  //           console.log("Block Date Clicked: ", event);
  //           let d = event.selectedTime;
  //           //d.setHours(0, 0, 0);
  //           setTimeout(() => {
  //             this.blockDayEvent(d)
  //           }, 2);
  //         }
  //       },
  //       {
  //         text: 'Meet Up With',
  //         handler: function () {
  //           console.log("Meet Up With Clicked");
  //         }
  //       }
  //     ]
  //   }); actionsheet.present();
  // }

  // blockDayEvent(date) {
  //   let startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

  //   let endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

  //   let events = this.eventSource;
  //   events.push({
  //     title: 'All Day ',
  //     startTime: startTime,
  //     endTime: endTime,
  //     allDay: true
  //   });
  //   this.eventSource = [];
  //   setTimeout(() => {
  //     this.eventSource = events;
  //   });
  // }

  addEvent() {
    this.navCtrl.push("AddEventModalPage");
    // let modal = this.modalCtrl.create(AddEventModalPage, { selectedDay: this.selectedDay });
    // modal.present();
    // modal.onDidDismiss(data => {
    //   if (data) {
    //     let eventData = data;

    //     eventData.startTime = new Date(data.startTime);
    //     eventData.endTime = new Date(data.endTime);

    //     let events = this.eventSource;
    //     events.push(eventData);
    //     this.eventSource = [];
    //     setTimeout(() => {
    //       this.eventSource = events;
    //     });
    //   }
    // });
  }

  onOptionSelected($event: any) {
    console.log($event)
    this.calendar.mode = $event
  }
















}
