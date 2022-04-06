import { ACTIONS, ISkill, skill_reducer, Action } from "./skill.reducer";

describe('Skill Reducer', () => {
    it('should add skill to new state', () => {
        let initialSate: Array<ISkill> =  [];
        let java: ISkill = {
            id:0,
            name: 'Java',
            description: 'langage de développement java',
            experience: 7
        }

        let addAction: Action = {
            type: ACTIONS.ADD_SKILL,
            payload: java
        }
        let newState = skill_reducer(initialSate, addAction)
        expect(initialSate.length).toBe(0)
        expect(newState.length).toBe(1)
        expect(newState[0].name).toContain('Java')
    })
    it('should remove skill from the state', () => {
        let initialSate: Array<ISkill> =  [];
        let java: ISkill = {
            id:0,
            name: 'Java',
            description: 'langage de développement java',
            experience: 7
        }
        let angular: ISkill = {
            id:1,
            name: 'Angular',
            description: 'framework de développement basé sur la notion de composants et sur le langage typescript',
            experience: 5
        }
        let addAction: Action = {
            type: ACTIONS.ADD_SKILL,
            payload: java
        }
        let addActionAngular: Action = {
            type: ACTIONS.ADD_SKILL,
            payload: angular
        }
        let newState = skill_reducer(initialSate, addAction)
        newState = skill_reducer(newState, addActionAngular)
        expect(newState.length).toBe(2)
        let removeAction: Action = {
            type: ACTIONS.REMOVE_SKILL,
            payload: {id:angular.id}
        }
        newState = skill_reducer(newState, removeAction)
        expect(newState.length).toBe(1)
    })
})