import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Favorite Photos";
  image1 =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";
  image2 =
    "https://instoremag.com/wp-content/uploads/2020/01/doing-a-bit-of-everything-photo-u1.jpg";
  image3 = "https://www.nme.com/wp-content/uploads/2019/12/2AA3JDC.jpg";

  constructor() {}

  ngOnInit() {}
}
