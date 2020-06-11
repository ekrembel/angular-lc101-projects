import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  rocketHeight = 0;
  marginBottom  = 0;
  marginLeft = 0;
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  constructor() {}
  ngOnInit() {}

  takeOff() {
    this.height = 10000;
    confirm("Confirm that the shuttle is ready for takeoff!");
    this.message = "Shuttle in flight.";
    this.color = 'blue';
    this.takeOffEnabled = false;
  }
  land(rocket) {
    rocket.style.bottom = '0px';
    this.height = 0;
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "Shuttle has landed.";
    this.color = "green";
    this.takeOffEnabled = true;
  }
  abortMission(rocket) {
    rocket.style.bottom = '0px';
    this.height = 0;
    confirm("Are you sure to abort the mission?");  
    this.message = "Mission aborted.";
    this.color = "red";
    this.takeOffEnabled = true;
  }
  moveRocket(rocket, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocket.style.left) + 10 + "px";
      rocket.style.left = movement;
      this.width = this.width + 10000;
      if (parseInt(rocket.style.left) > 430) {
        this.takeOffEnabled = false;
        this.color = 'red';
      } 
      else {
        this.color = 'blue';
      }         
    }
    if (direction === 'left') {
      let movement = parseInt(rocket.style.left) - 10 + "px";
      rocket.style.left = movement;
      this.width = this.width + 10000;
      if (parseInt(rocket.style.left) < 10) {
        this.color = 'red';
      }
      else {
        this.color = 'blue';
      }            
    }
    if (direction === 'up') {
      let movement = parseInt(rocket.style.bottom) + 10 + "px";
      rocket.style.bottom = movement;
      this.height += 10000;
      if (parseInt(rocket.style.bottom) > 300) {
        this.color = 'red';
      } 
      else {
        this.color = 'blue';
      }     
    }
    if (direction === 'down') {
      let movement = parseInt(rocket.style.bottom) - 10 + "px";
      rocket.style.bottom = movement;
      this.height += 10000;
      if (parseInt(rocket.style.bottom) < 20) {
        this.color = 'red';
      }  
      else {
        this.color = 'blue';
      }           
    }
  }
}

