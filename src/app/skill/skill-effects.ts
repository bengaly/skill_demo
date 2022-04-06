import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of, Observable } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SkillEffects {
    
    getKill$ = createEffect(() : Observable<Action> => {
        return this.action$.pipe(
            ofType('GET_SKILLS'),
            mergeMap( () =>
                this.httpClient.get("http://localhost:3000/skills").pipe(
                    map( data => ({ type: 'GET_SKILLS_SUCCESS', payload: data})),
                    catchError( () => of({ type: 'GET_SKILLS_FAILED' }))
                )
            )
        )
    })

    constructor(private httpClient: HttpClient, private action$: Actions){} // $action$: stream of all actions dispatched by application
}