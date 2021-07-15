import React,{Children, useReducer,useEffect} from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import {
SET_LOADING,
SET_ISLOGED,
SET_USER,
SET_STUDENT_RESULT,
SET_RECIEPT,
SET_ATTENDANCE,
SET_DOSIER,
SET_EDIT
} from '../types'


export default function AppState(props){
    const initState={
        user:{role:[]},
        loading:false,
        records:[],
        isLogged:false,
        reciept:[],
        studentsResult:[],
        attendance:[],
        dosier:[],
        editValue:{}
     
        
    }
const [state,dispatch]=useReducer(appReducer,initState)

const setLoading=()=>dispatch({type:SET_LOADING})
const setIslogged=()=>dispatch({type:SET_ISLOGED})
const setUser=(user)=>dispatch({type:SET_USER,payload:user})
const setStudentsResults=(results)=>dispatch({type:SET_STUDENT_RESULT,payload:results})
const setReCiept=(student)=>dispatch({type:SET_RECIEPT,payload:student})
const setAttendance=(students)=>dispatch({type:SET_ATTENDANCE,payload:students})
const setDosier=(dosier)=>dispatch({type:SET_DOSIER,payload:dosier})
const setEdit=(user)=>dispatch({type:SET_EDIT,payload:user})

return <AppContext.Provider
value={{
    user:state.user,
    loading:state.loading,
    records:state.records,
    isLogged:state.isLogged,
    setLoading,
    setIslogged,
    setUser,
    setStudentsResults,
    studentsResult:state.studentsResult,
    setReCiept,
    reciept:state.reciept,
    setAttendance,
    attendance:state.attendance,
    setDosier,
    dosier:state.dosier,
    editValue:state.editValue,
    setEdit
}}
>

    {props.children}
</AppContext.Provider>

}
