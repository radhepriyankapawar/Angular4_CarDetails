import{Component,Input}from '@angular/core';


@Component({
    selector:'app-car-detail',
    templateUrl:'./car-detail.component.html',
})

export class CardetailComponent{

    @Input()    //decorator
    Car; 

    displayedDetail;
    constructor(){
        this.showCar().then(res=>{
            console.log(res);
        },rej=>{
            console.log(rej);
        });
    }
    hideCar()
{
}
    showCar(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                this.displayedDetail=this.Car;
                resolve('successfully called');
            },1000);
        });
    }
  
  
}
