import { ActionReducer } from "@ngrx/store";

export interface Action {
    type: string
    payload?: any
}
export const ACTIONS = {
    ADD_SKILL: 'ADD_SKILL',
    REMOVE_SKILL: 'REMOVE_SKILL',
    GET_SKILLS: 'GET_SKILLS',
    GET_SKILLS_SUCCESS: 'GET_SKILLS_SUCCESS',
    GET_SKILLS_FAILED: 'GET_SKILLS_FAILED'
}
export interface ISkill {
    id: number
    name?: string
    description?: string
    experience: number
}
export interface MyAppState {
    skills: Array<ISkill>
}
export function skill_reducer( state: Array<ISkill> = [], action: Action){
    switch(action.type) {
        case ACTIONS.ADD_SKILL:
            return [...state, action.payload]
        case ACTIONS.REMOVE_SKILL:
            return state.filter( skill => skill.id !== action.payload.id)
        case ACTIONS.GET_SKILLS_SUCCESS:
            return state.length > 0 ? [...state, ...action.payload] : action.payload
        default:
            return state
    }
}