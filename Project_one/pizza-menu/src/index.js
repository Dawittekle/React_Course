import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false
  }
]

function App () {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header () {
  // const style={color:'red',fontSize:'48px'};
  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu () {
  const pizzas = pizzaData;
   const pizzaSize=pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <>
      <p>Welcome to React Pizza!! We have some amazing Italian Pizzas come visit us</p>
      {
        pizzaSize>0 ? (<div className='pizzas'>
        {pizzas.map(pizza => {
          return <Pizza pizzaObj={pizza} key={pizza.name} />
        })}
      </div>) : <p>We still working on our menu. Comeback later</p>
      }</>
      
      
      {/*
      <Pizza
        name='Pizza Margherita'
        image='../pizzas/margherita.jpg'
        ingredient='Tomato, mozarella, spinach, and ricotta cheese'
        price={10}
      />
      <Pizza
        name='Focaccia'
        image='../pizzas/focaccia.jpg'
        ingredient='Bread with italian olive oil and rosemary'
        price={6}
      />*/}
    </main>
  )
}

function Footer () {
  const now = new Date()
  const hour = now.getHours()
  const openhour = 8
  const closehour = 22
  const isOpen = openhour >= 8 && hour <= closehour
  console.log(hour)

  return (
    <footer className='footer'>
      {isOpen && <Order closehour={closehour} openhour={openhour}/>}
    </footer>
  )
  //return React.createElement("footer",null,'yeah we are open know, come visit us!!')
}

function Order({openhour,closehour}){
  return <div className='order'>
          <p>We are Open from {openhour}:00 to {closehour}:00 come visit us or order online.</p>
          <button className='btn'>Order</button>
        </div>
}

function Pizza ({pizzaObj}) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? 'sold-out':''}`}>
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      </div>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut?"SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  )
}

//react 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//before v18
//React.render(<App/>);
