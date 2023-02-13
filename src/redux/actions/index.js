
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE="REMOVE_FROM_FAVOURITE"
export const SET_USERNAME ="SET-USERNAME"
export const GET_JOBS="GET_JOBS"

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
   //Tey are the same thing


//THi sis the better way to make the actions retrun funcs notobjects
//    export const addToCartActionAsync=()=>{
//      return async(dispacth,getState)=>{
 //If redux sees a function is being returned it automatically injects two
 //args in the func dispacth() and getstate
//      }
//    }

export const setUsername = (name) => {
    return {
      type: SET_USERNAME,
      payload: name,
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
                type:GET_JOBS,
                payload:jobs
   
              })
  
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }
        }
}