import {Component} from '@angular/core';
import {CarServices} from '../service/carservices';
@Component({
    templateUrl:'./contacts.component.html',
    providers:[CarServices]
})
export class ContactsComponent{
    contacts;
    constructor(private contactService:CarServices){
       this.contactService.getAllContacts().subscribe(x=>{
           this.contacts=x.json().contacts;
       })
    }
}