import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";
  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  takeOffEnabled: boolean = true;
  moveLeftEnabled: boolean = true;
  moveRightEnabled: boolean = true;
  moveUpEnabled: boolean = true;
  moveDownEnabled: boolean = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight";
      rocketImage.style.bottom = 10 + "px";
      this.takeOffEnabled = false;
    }
  }
  handleLand(rocketImage) {
    let result = window.alert("The shuttle is landing. Landing gear engaged.");
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed.";
    rocketImage.style.bottom = 0 + "px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = 0 + "px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    let height = parseInt(rocketImage.style.bottom);
    let leftAndRight = parseInt(rocketImage.style.left);
    if (direction === "right") {
      let movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.handleBounds(rocketImage);
    } else if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.handleBounds(rocketImage);
    } else if (direction === "up") {
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.handleBounds(rocketImage);
    } else if (direction === "down" && this.moveDownEnabled) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.handleBounds(rocketImage);
    }
  }

  handleBounds(rocketImage) {
    let height = parseInt(rocketImage.style.bottom);
    let leftAndRight = parseInt(rocketImage.style.left);

    if (
      height < 10 ||
      height > 320 ||
      leftAndRight < -19 ||
      leftAndRight > 460
    ) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }

    if (height < 10) {
      this.moveDownEnabled = false;
      this.height = 0;
    } else {
      this.moveDownEnabled = true;
    }

    if (height > 320) {
      this.moveUpEnabled = false;
    } else {
      this.moveUpEnabled = true;
    }

    if (leftAndRight < -19) {
      this.moveLeftEnabled = false;
    } else {
      this.moveLeftEnabled = true;
    }

    if (leftAndRight > 460) {
      this.moveRightEnabled = false;
    } else {
      this.moveRightEnabled = true;
    }
  }
}
