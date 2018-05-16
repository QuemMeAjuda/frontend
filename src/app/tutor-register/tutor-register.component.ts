import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.css']
})
export class TutorRegisterComponent implements OnInit {

  protected skills: any;
  private out: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  public becameTutor() {
    this.skills = this.skills.split(" ");
    this.skills = this.removeSpacesFromSkillsArray(this.skills);
  }

  private removeSpacesFromSkillsArray(skillsArray) {
    this.out = [];
    skillsArray.forEach((element) => {
      if (element !== "") {
        this.out.push(element);
      }
    });
    return this.out;
  }

  isLargerScreen(): boolean {
    return window.screen.width >= 960;
  }
  isVerySmallScreen(): boolean {
    return window.screen.width <= 420;
  }


}
