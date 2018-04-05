import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import moment from 'moment'
import * as moment from 'moment';
import { of } from "rxjs/observable/of";
import { EventProvider } from '../../providers/event/event';
/**
 * Generated class for the AddEventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event-modal',
  templateUrl: 'add-event-modal.html',
})
export class AddEventModalPage {

  event = {
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false,
    room : {}
  };

  minDate = new Date().toISOString();

  rooms$ = of([
    { id: "room1", name: "room1" }, 
    { id: "room2", name: "room2" }, 
    { id: "room3", name: "room3" }
  ]);

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public eventProvider: EventProvider) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventModalPage');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  // save() {
  //   this.viewCtrl.dismiss(this.event);
  //   console.log("saved");
  // }

  addEvent(
    eventTitle: string,
    eventNote: string,
    eventDate: string,
    eventStart: string,
    eventEnd: string,
    eventRoom: string
    ): void {
        this.eventProvider
          .addEvent(eventTitle, eventNote, eventDate, eventStart, eventEnd, eventRoom)
          .then(newEvent => {
        this.navCtrl.pop();
        console.log("added")
      });
    }


  //block checkbox
  blockDay($event) {
    //true/false by check box
    console.log("blocked " + $event);
  }


  //select room option
  optionSelected($event) {
    console.log("room selected");
    console.log($event);
    this.event.room = $event;
  }

}
