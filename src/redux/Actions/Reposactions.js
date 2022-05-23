import { REPOS_LIST_FAIL, REPOS_LIST_REQUEST, REPOS_LIST_SUCCESS } from "../Reposconstants"
import axios from 'axios'
export const listReposaction =  (date,page,keyword) => async(dispatch) => {
    try {
        // console.log(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`)
        console.log(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`)
        dispatch({ type: REPOS_LIST_REQUEST })
        //fetching the repos from github api

        // const { data }  = await axios.get(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}${keyword ? `&q=${keyword}` : ''}`)
        const { data }  = await axios.get(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}${keyword ? `&q=${keyword}` : ''}`)
        //setting the payload to data so it will be received by the component
        dispatch({type : REPOS_LIST_SUCCESS,
                  payload : data,
                 })
    } catch (error) {
        // in case the request failed, send te error to the component.
        dispatch({type: REPOS_LIST_FAIL,
                  payload: 
                  error.response && error.response.data.message
                  ? error.response.data.message 
                  : error.message,
                })
    }

}