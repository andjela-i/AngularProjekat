import * as Actions from './movies.action';
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";


const adapterUsers = createEntityAdapter<User>()
export interface UsersState extends EntityState<User>{

}

export const initialState:UsersState = adapterUsers.getInitialState();

export const usersReducer = createReducer(
    initialState,
    on(Actions.loadAllUsersSuccess,(state, { users })=>
        adapterUsers.setAll(users,state)
    
    ), 
    on(Actions.updateUserSuccess,(state,{user})=>{
        return adapterUsers.updateOne({id:user.id,changes:{role:user.role}},state);
    }
    )
)