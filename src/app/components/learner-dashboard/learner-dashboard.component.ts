import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
