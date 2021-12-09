import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {

  public courses = [
    { status: "In progress", name: "Cloud Computing", description: "Cloud Computing Plan" },
    { status: "Not started" , name: "Web Development", description: "Web Development Path" },
    { status: "In progress", name: "Software Engineering", description: "Software Engineering Path" }
  ];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.changeObject(this.courses);
  }

  

}
