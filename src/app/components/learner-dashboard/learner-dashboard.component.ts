import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {

  public courses = [
    { status: "In progress" },
    { status: "Not started" },
    { status: "In progress" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
