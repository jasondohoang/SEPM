import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';
import Cloth3 from './image/cloth3.png';
import Cloth4 from './image/cloth4.png';
import Cloth5 from './image/cloth5.png';
import Cloth6 from './image/cloth6.png';
import Cloth7 from './image/cloth7.png';


class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Lin cool long sleeve cloth(Functional)",
        "src": [
            Cloth3,
            Cloth4,
            Cloth5,
            Cloth6,
          ],
        "description": "size L-XL-2XL,3XL,4XL-5XL",
        "content": "Free Shipping on Subscription",
        "sale": "New signup benefits 20.000d discount for new customers ",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div>
       <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
              <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                
                <div className="content1">
                
                <p>{item.content}</p>
                </div>
                <div className='promotion'>
                  <p className='sale'>{item.sale}</p>
                </div>
                

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <select className="cart2">
                  <option value="">Choose cloth</option>
                  <option value="">black_L</option>
                  <option value="">black_XL</option>
                  <option value="">black_XXL</option>
                  <option value="">black_XXXL</option>
                  <option value="">Navy_soldout</option>

                </select>
                <pre></pre>
                <button className="cart">Buy now</button>
                
                <p> </p>
                <button className="cart1">shopping basket</button>

              </div>
              
            </div>
            
          ))
        }
        
        
       </div>
       <div className='Cloth5'>
         <img src={Cloth3} width="620" height="800" alt='cloth' /> 
         <img src={Cloth7} width="620" height="800" alt='cloth' />
         <img src={Cloth3} width="620" height="800" alt='cloth' />
         
       </div>
       <div className='detail'>
         <div className='item1'>
           <div className='item-title'>size : L </div>
           
          <p> </p>
          
          <p>chest :  100</p>
          <p>in Vietnam,the size is xL</p>
         </div>
         <div className='item2'>
          <div className='item-title'>size : XL </div>
           <p> </p>
          
          <p>chest :  110</p>
          <p>in Vietnam,the size is xxL</p>
         
         </div>
         <div className='item3'>
          <div className='item-title'>size : XXL </div>
           <p> </p>
          
          <p>chest :  120</p>
          <p>in Vietnam,the size is xxxL</p>
           </div>
       </div>
       <div className="border-bottom">
         <p className='MD'>MD comment</p>
         <pre></pre>
           It's a short-sleeved T-shirt that shows off a casual look.
           I put a big lettering on the front and flip it over
           It makes it look like you're wearing it and it's unique
           We recommend it to our customers. It's an oversized fit
           You can feel the relaxed fit.
         
         
       </div>
       <div ClassName="picture">
         
        <img src={Cloth4}  style={{width: 300, height: 300, borderRadius: 400/ 2}} />
        <img src={Cloth5}  style={{width: 300, height: 300, borderRadius: 400/ 2}} />
        <img src={Cloth6}  style={{width: 300, height: 300, borderRadius: 400/ 2}} />
        <img src={Cloth4}  style={{width: 300, height: 300, borderRadius: 400/ 2}} />
        <img src={Cloth5}  style={{width: 300, height: 300, borderRadius: 400/ 2}} />
        <img src={Cloth6}  style={{width: 300, height: 300, borderRadius: 400/ 2}} />
       </div>
      </div>
      
    );
  
  };
 
}

export default App;
