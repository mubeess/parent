import {
    SET_LOADING,
    SET_ISLOGED,
    SET_USER,
    SET_RECIEPT,
    SET_STUDENT_RESULT,
    SET_ATTENDANCE,
    SET_DOSIER,
    SET_EDIT
}from '../types'


const AppReducer= (state,action)=>{
    switch(action.type){
        case SET_LOADING:
            let prevLoad=state.loading
            return {
                ...state,
                loading:!prevLoad
            }
            case SET_ISLOGED:
                let prevLogged=state.isLogged
                return {
                    ...state,
                    isLogged:!prevLogged
                }
            case SET_USER:
                    return {
                        ...state,
                        user:action.payload
                    }
            case SET_STUDENT_RESULT:
                    return {
                        ...state,
                        studentsResult:action.payload
                    }
            case SET_RECIEPT:
                    return {
                        ...state,
                        reciept:action.payload
                    }
        case SET_ATTENDANCE:
                        return {
                            ...state,
                            attendance:action.payload
                        }
        case SET_DOSIER:
                        return {
                            ...state,
                            dosier:action.payload
                        }
        case SET_EDIT:
                            return {
                                ...state,
                                editValue:action.payload
                            }
        
        default:
        return state;
    }
    
    }
    export default AppReducer;