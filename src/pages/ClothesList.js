

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import {DataProvider} from '../components/Context'
import Products from '../components/Products';


class ClothesList extends React.Component{
  render(){
    return(
        <div >
          
      <DataProvider>
      
     
            
          <Products/>
        
        
     
      </DataProvider>
      </div>
    );
  }
}
export default ClothesList;
