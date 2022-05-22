import React from 'react';
import BootstrapCarousel from "../components/BootstrapCarousel"
import './Home.css'
import flame from '../images/flame.jpg';
import cloth3 from '../images/cloth3.png'
import carousel5 from '../images/carousel5.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link}  from 'react-router-dom';


function Home() {
  return (
    <div

    >


      <div className="background">
        <div className="border1">
          <h4> No more loose fit clothes!    </h4>
        </div>
        <h5> Recommended product</h5>

        <BootstrapCarousel />

        <br></br>

        <div className="blueBar">

          <div className="row">
            <div className="col-4" >

              <h1>Zalo</h1>

            </div>
            <div className="col-4" >

              <img src={require('../images/tonton2.png')} />
              <img src={require('../images/tonton2.png')} />
              <img src={require('../images/tonton1.png')} />
            </div>
            <div className="col-4" >
              <img src={require('../images/zalo.jpg')} />
              <p><h5> 1:1  Customer Service 24hours</h5></p>
            </div>
          </div>


        </div>
        <br></br>

        <div className='middle'> <h2> Most Hot <img src={flame} /></h2></div>

        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-3' >
          
          <Link to='/clothes-detail'>
            <img src={cloth3} style={{ "height": 500, "width": 350 }} /></Link>
          
          </div>
          <div className='col-md-3' >
          
            <img src={carousel5} style={{ "height": 500, "width": 350 }} />
          </div>
        </div>



<br></br>

<br></br>
<br></br>


       








</div>



      </div >
      );
};

      export default Home;
