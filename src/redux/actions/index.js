
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE="REMOVE_FROM_FAVOURITE"
export const SET_USERNAME ="SET_USERNAME"
export const GET_JOBS="GET_JOBS"
export const LOG_OUT="LOG_OUT"
export const GET_JOBS_LOADING="GET_JOBS_LOADING"
export const BOOKS_ERROR="ERROR"
export const START="START"


export const start=()=>({
  type:START,
  payload:""
})



export const addToFavouritesAction=(fav)=>({

           type:ADD_TO_FAVOURITE,
            payload:fav,
            //Payload is the name of the prop holding any ohter neccesary piece
           //  of info to make the action work
       
         
   })
   export const removeFromFavouritesAction=(fav)=>(
    {
        type: REMOVE_FROM_FAVOURITE,
        payload: fav,
      }
   )

export const setUsername = (name) => {
  return {
    type: SET_USERNAME,
    payload: name,
  }
}
export const logOut =()=>{
  return{
    type:LOG_OUT,
    payload:null
  }
}
export const fetchJobsAction=( query,dispatch)=>{
 
    return async() =>{
          
        try {
            const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=' + query + '&limit=20')
            if (response.ok) {
                
              let { data } = await response.json()
             console.log("succes")
             console.log(query)
             let jobs=data

             dispatch({
              type:GET_JOBS_LOADING,
              payload:true
            })
         
              dispatch({
                type:GET_JOBS,
                payload:jobs
   
              })
              
              dispatch({
                type:GET_JOBS_LOADING,
                payload:false
              })
              dispatch({
                type:BOOKS_ERROR,
                payload:false
              })

            } else {

              dispatch({
                type:GET_JOBS_LOADING,
                payload:false
              })
              dispatch({
                type:BOOKS_ERROR,
                payload:true
              })
              
            }
          } catch (error) {
            dispatch({
              type:GET_JOBS_LOADING,
              payload:false
            })
            dispatch({
              type:BOOKS_ERROR,
              payload:true
            })
          }
        }
}