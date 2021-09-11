import { Component, OnInit } from '@angular/core';
import { Write } from 'src/app/models/Write';
import { SetDataService } from 'src/app/services/set-data.service';

@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.css']
})
export class WritingsComponent implements OnInit {

  constructor(private writings:SetDataService) { }

  sourceList!:Array<Write>;

  ngOnInit(): void {
    this.sourceList = this.writings.writeList();
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}