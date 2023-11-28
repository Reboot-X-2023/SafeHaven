import React
 from "react";

const API_URL = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:team16server.database.windows.net,1433;Database=Team16DB;Uid=sqladmin;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
 
const odbc = require('odbc');

const connection = odbc.connect(API_URL, (err) => {
    if (err) {
      console.error('Error connecting to Azure MySQL:', err);
      return;
    }
})
  

// const App = () => {


//     const searchListings = async (title) => {
//         const response = await fetch(`${API_URL}`);
//         const data = await response.json();
    
//         setListings(data.Search);
//       };
//  }