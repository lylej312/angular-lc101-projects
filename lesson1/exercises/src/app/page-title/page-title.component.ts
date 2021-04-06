import { Component, OnInit } from "@angular/core";

@Component({
  selector: "page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.css"],
})
export class PageTitleComponent implements OnInit {
  title = "My Lists of Stuff";
  gif = "https://media3.giphy.com/media/26tn33aiTi1jkl6H6/200.gif";

  constructor() {}

  ngOnInit() {}
}
