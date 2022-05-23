import 'antd/dist/antd.css';
import styles from './Github.module.css';
import React, { useEffect, useState } from "react";
import { Input } from 'antd';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {listReposaction} from './redux/Actions/Reposactions'
import Cardrepo from './components/cardrepo/Cardrepo';
import { Skeleton } from 'antd';
import { Result } from 'antd';



function Github() {
  const [todayDate, setTodayDate] = useState("")
  const [page, setPage] = useState(1)
  const [keyword, setkeyword] = useState("")
  const { Search } = Input;
  const dispatch = useDispatch()
  const listRepos = useSelector((state) => state.listRepos)
  const {loading,repos,error} = listRepos
  function setDate() {
    // this function sets the date of todayday in the last month.
    const date = new Date()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    // in the month field we are gonna put the last month so we will get just the repos that were created in the last 30 days
    const month = (date.getMonth() + 1 ) < 10 ? (date.getMonth()) === 0  ? `12` : `0${date.getMonth()}` : date.getMonth() 
    const year = date.getFullYear()
    const today = [year, month, day].join("-")
    setTodayDate(today)
    }
  useEffect(() => {
    setDate()
    //this condition just for making sure that the date is set.
    if (todayDate) {
          dispatch(listReposaction(todayDate, page,keyword))
    }
    return () => {
      //just a regular cleaner function
    }
    //refetching the data the moment some of this next dependecies changed.
  }, [dispatch,todayDate,page,keyword])

    function handleBack() {
          setPage(page => page - 1 <= 0 ? page : page - 1);
    }
    function handleNext() {
          setPage(page => page + 1);
    }
  return (
    <div className={styles.github}>
      <nav className={styles.nav}>
            <h3>Trending Repos</h3>
            <div className={styles.control}>
              <div className={styles.right_buttons} >
                <div className = {styles.navigateBtns}>
                        <MdNavigateBefore  className ={styles.prev_btn} onClick ={handleBack} size = '35' />
                        <MdNavigateNext  className = {styles.next_btn} onClick = {handleNext} size = '35'/>
                </div>
                <AiFillHome size='30' className={styles.home_btn} onClick = {() => setPage(1)}/>
              </div>
              <Search     placeholder="input search text"
                          allowClear
                          enterButton
                          size="large" 
                          onChange = {(e)=> setkeyword(e.target.value)}/>
            </div>
            
      </nav>
      <>
        <div className = {styles.searchkeyword}>
          {keyword ? `results for : ${keyword}` : ''}
        </div>

        {loading ? <Skeleton active /> : error ? 
          <Result status="warning" title="We are having a problem making the request." />
          :

          <div className={styles.cards}>
            {repos.items.map((repo,index) => (
                         <Cardrepo key = {index} repo = {repo} />
            ))}
 

          </div>
        }
        <div className = {styles.pagenumber}>
          Page {page}
        </div>


      </>
      

    </div>
  );
}

export default Github;
