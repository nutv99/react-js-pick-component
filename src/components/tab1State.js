import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as sIcon from '@fortawesome/free-solid-svg-icons';
import '../style.css';
// import ApiService from '../Apiservice';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tab1State() {
  // Section 2 **************** Start Declare Var  ********
  const [item2s, setItem2s] = useState([]);
  const [loading, setLoading] = useState(false);
  const count = 0;

  //***********************   Start Declare Function  **********************
  // const getDataAPI = async () => {
  //   try {
  //     setLoading(true);
  //     let endPoint = 'dataservice/clsItemMaster.php';
  //     const usersData = await ApiService.axiosGet(endPoint);
  //     setItem2s(usersData);
  //     console.log('user from main', usersData);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ****************************  Start Declare UseEfect    *******************************
  // useEffect(() => {
  //   //getDataAPI();
  // }, [count]);

  //******************************* Start Rendor  ********************
  return (
    <div>
      <div className="header99">sss</div>
    </div>
  );
}
export default Tab1State;
