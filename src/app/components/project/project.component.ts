import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { SetDataService } from 'src/app/services/set-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectList!:Array<Project>;

  constructor(private projects:SetDataService) { 
    
  }

  ngOnInit(): void {
    this.projectList = this.projects.projectList();
  }

}

