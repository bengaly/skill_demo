import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS, ISkill, MyAppState } from '../skill.reducer';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  skill: ISkill;
  constructor(private store: Store<MyAppState>) {
    this.skill = {
      id: 0,
      name: '',
      description: '',
      experience: 0
    }
  }

  ngOnInit(): void {
    
  }

  addSkill(skill: ISkill) {
    this.store.dispatch({type: ACTIONS.ADD_SKILL, payload: Object.assign({}, skill)})
  }
}
