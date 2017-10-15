import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarServices} from '../service/carservices';
import 'rxjs/add/operator/switchMap'
@Component({
    template:'',
    providers:[CarServices]
})
export class ContactComponent{
    constructor(private route:ActivatedRoute,private carservice:CarServices){

        this.route.params.switchMap(p=>this.carservice.getParticularContact(p.contact_id)).subscribe(p=>{
            console.log(p.json()) 
        })
    }
}