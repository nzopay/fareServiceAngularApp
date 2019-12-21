import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FareService } from '../fare.service';
import { Fare } from '../fare';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.css']
})
export class FareComponent implements OnInit {

  public myVariableInTypeScript = "testId";
  public isDisabled = false;

  public successClass = "text-success";

  public isSpecial = true;
  public hasError = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
 
  public styleClasses = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting;
  public displayName = false;

  public name="namrata";
  public color = "orange";
  public colors = ["red","blue","green","yellow"]
  
  @Input('parentData') public myName;
  @Output() public childEvent = new EventEmitter();
  public date = new Date();

  public fares = [];
  public person = { 
    "name" : "xxx",
    "lastname" : "xxx",
  }
  public errorMsg;
  public fare
  public fareData
  constructor(private _fareService: FareService) { }

  ngOnInit() {
    this._fareService.getFares()
      .subscribe((data) => this.fares = data,
        error => this.errorMsg = error);
        this.fare = new Fare();
  }

  onClick(fare:Fare){
    console.log("Welcome to angular code");
    this._fareService.addFare(fare);
  }
  onClickById(fare:Fare){
    console.log("Welcome to angular code");
    this._fareService.getFareById(fare.flightId)
    .subscribe((data) => this.fareData = data,
    error => this.errorMsg = error);

  }
  onClickByDelete(fare:Fare){
    console.log("Welcome to angular code");
    this._fareService.deleteFareById(fare.flightId)
    .subscribe((data) => this.fareData = data,
    error => this.errorMsg = error);

  }
  logMessage(value){
    console.log(value);
  }
  fireEvent(){
    this.childEvent.emit('Hey CodeEvolution');
  }
  
}
