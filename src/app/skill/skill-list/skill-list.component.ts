import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ACTIONS, ISkill, MyAppState } from '../skill.reducer';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills: Observable<Array<ISkill>>
  constructor(private store: Store<MyAppState>) { 
    this.skills = store.select('skills')
  }

  ngOnInit(): void {
    this.store.dispatch({type: ACTIONS.GET_SKILLS})
  }

  deleteSkill(skill: ISkill) {
    this.store.dispatch({type: ACTIONS.REMOVE_SKILL, payload: {id: skill.id}})
  }

}
