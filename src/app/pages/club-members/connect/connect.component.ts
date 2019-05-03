import { Component, OnInit } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { PostService } from "src/app/services/post.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-connect",
  templateUrl: "./connect.component.html",
  styleUrls: ["./connect.component.scss"]
})
export class ConnectComponent implements OnInit {
  constructor(private service: PostService, private router: Router, private routes: ActivatedRoute) {}
  id;
  status;
  members;
  tokenRes = false;
  cToken;
  ngOnInit() {
    // ======= MESSAGE =====
    // this.cToken = localStorage.getItem("token");
    // if (this.cToken == localStorage.getItem("token")) {
    //   this.tokenRes = true;
    // }

    const id = +this.routes.snapshot.paramMap.get('id');
    this.service.getRootID(id).subscribe(res => {
      let getInfo = res.json();
      this.members = [getInfo];
      console.log("info user",res.json());
    });
    this.onConnect();
  }
  onConnect() {
    // const idTit = new HttpParams();

    const id = +this.routes.snapshot.paramMap.get('id')
    // id.set("toMember", JSON.stringify(id));
    let data = {'toMember': '/individual_members/'+id};
    this.service.uConnect(JSON.stringify(data)).subscribe(response => {
      console.log('connect-member',response.json());
      
    });
  }
  toClubMem(){
    this.router.navigate(['club-members']);
  }
}
