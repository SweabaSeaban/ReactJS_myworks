import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo';
import WelcomePage from './WelcomePage';
import Profile from './Profile';
import List from './List';




function App() {
  // useEffect(()=>fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then(json => console.log(json)),[])

  // const products=[
  // {name:'Mango',isFruit:true,id:1},
  // {name:'Carrot',isFruit:false,id:2},
  // {name:'Orange',isFruit:true,id:3}];
  // const listitems=products.map(product=>
  //   <li key={product.id} style={{color:product.isFruit?'green':'red'}}>
  //     {product.name} {product.isFruit && 'fruit'}
  //   </li>
  //   );
  return (
    // <div className="App">
    //   {/* <Demo/> */}
    //   <WelcomePage/>
    // </div>
    <div>
      {/* {listitems} */}
      <List/>
    </div>
  );
}

export default App
