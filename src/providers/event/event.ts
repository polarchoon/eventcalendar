//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  public eventListRef: firebase.database.Reference;

  constructor() {
    console.log('Hello EventProvider Provider');
    this.eventListRef = firebase
    .database()
    .ref(`/event/eventList`);
  }


  addEvent(
    eventTitle: string,
    eventNote: string,
    eventDate: string,
    eventStart: string,
    eventEnd: string,
    eventRoom: string
  ):
    firebase.database.ThenableReference {
    return this.eventListRef.push({
      title: eventTitle,
      note: eventNote,
      evdate:eventDate,
      startTime: eventStart,
      endTime: eventEnd,
      room:eventRoom
    });
  }


  getEventList(): firebase.database.Reference {
    return this.eventListRef;
  }

 getEventDetail(eventId: string): firebase.database.Reference {
    return this.eventListRef.child(eventId);
  }

  // addEvent(guestName: string, eventId: string, eventPrice: number, guestPicture: string = null
  // ): PromiseLike<any> {
  //   return this.eventListRef
  //     .child(`${eventId}/guestList`)
  //     .push({ guestName })
  //     .then(newGuest => {
  //       this.eventListRef.child(eventId).transaction(event => {
  //         event.revenue += eventPrice;
  //         return event;
  //       });
  //     });

      
  }

















