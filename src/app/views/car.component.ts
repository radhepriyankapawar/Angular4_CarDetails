import{Component}from '@angular/core';
import{CarsComponent}from '../shared/cars';
import{Car}from'../shared/car';
import{CarServices}from '../service/carservices';


@Component({
    
    templateUrl:'./car.component.html',
})

export class CarviewsComponent{
    Cars:Car[];
    constructor(private carservices:CarServices){
        this.Cars=this.carservices.cars;
    }
}