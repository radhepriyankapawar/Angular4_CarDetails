import{Component}from '@angular/core';
import {Car} from '../shared/car';
import {CarsComponent} from '../shared/cars';
import {CarServices} from '../service/carservices'
import {Router} from '@angular/router'


@Component({
    templateUrl:'car-form.component.html',
    styleUrls:['./form.css']
})
export class CarFormComponent{
car:Car;

constructor(private carservices:CarServices, private router:Router){
    this.car=new Car();

}
submitForm(){
    console.log(this.car);
    this.carservices.cars.push(this.car);
    this.router.navigate(["/car"]);
}
}