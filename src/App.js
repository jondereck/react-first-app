import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Apples from './PropsChildren/Apples';
import Pears from './PropsChildren/Pears';
import Bag from './PropsChildren/Bags';
import Example from './Example';
import avatar from './avatar.png';
import Avatar from './Avatar';
import Card from './Examples/Card';
import Btn from './Button/Btn';
import ModeToggler from './Button/ModeToggler'
import PromoHeading from './ParentChildDataFlow/Promo';
import Dog from './ParentChildDataFlow/Dog';
import InputComponent from './Examples/Form';
import MealsList from './ContextAPI/components/MealList';
import Counter from './ContextAPI/components/Counter';
import MealProvider from './ContextAPI/providers/MealsProvider';
import MealForm from './ContextAPI/components/MealForm';
import Fruits from './ContextAPI/components/Fruits';
import FruitCounter from './ContextAPI/components/FruitCounter';
import ReservationForm from './HomeStay/ReservationForm';
import AvailabilityCalendar from './HomeStay/AvailabiltyCalendar';
import BookingConfirmation from './HomeStay/BookingConfirmation';
import ReservationList from './HomeStay/ReservationList';
import AccommodationCard from './HomeStay/AccommodationCard';
import Footer from './HomeStay/Footer';
import Navbar from './HomeStay/Navbar';
import {Routes, Route, Link} from 'react-router-dom'
import Contact from './Examples/Contact';
import LogInOutButton from './Button/LogInOutButton';
import Images from './Examples/Images';
import Video from './Examples/Video';
import Bird from './Examples/Bird';

// // Sample syntax for props children
// function App() {
//     return (
//       <div className="App">
//        <Bag>
//           <Apples color="yellow" number="5" />
//       </Bag>  
//       <Bag>
//          <Pears friend="Peter" />
//       </Bag>
//       </div>
//     );
//   }

// // example bool
// const bool = true;
// const str1 = "Hello this is jon";
// const str2 = " , Hai im next "
// function App() {
//   return (
//     <div>
//       <Example
//                 toggleBoolean={!bool}
//                 math={(10 + 20) / 3}
//                 str={str1 + str2 + 'string'}
//             />
//     </div>

//   )
// }
// Simple
function Logo() {
  const userPic = <img src={avatar} />
  return userPic;

}


// // Card 

// function App() {

//   return (
//     <div >
//       <h1>Task: Add three Card elements</h1>
//       <Card h2="First card's h2" h3="First card's h3"/>
//       <Card h2="Second card's h2" h3="Second card's h3"/>
//       <Card h2="Third card's h2" h3="Third card's h3"/>


//     </div>
//   );
// }

// /**PARENT CHILD DATA FLOW e.g. SALES */
// const data = {
//   heading: "99% off all items!",
//   callToAction: "Everything must go!"

// }
// function App() {
//   return (
//     <div>
//     <PromoHeading 
//       heading={data.heading}
//       callToAction={data.callToAction}
//     />

//     </div>
//   );
// }

/**Fruit counter */

// function App() {

//   const [fruits, setFruits] = React.useState([
//     {fruitName: 'apple', id: 1},
//     {fruitName: 'apple', id: 2},
//     {fruitName: 'plum', id: 3},
//   ]);
  
//   return (
//     <div className="App">
//      <Fruits fruits = {fruits}/>
//      <FruitCounter fruits = {fruits}/>
   
//     </div>
//   );
// }

/** Using Routes, Route, and Links */
// function App() {
//   return (
//    <div className='App'><nav className='nav'>
//       <Link to="/" className='nav-item'>Homepage</Link>
//       <Link to="footer" className='nav-item'>Footer</Link>
//    </nav>

//     <Routes>
//         <Route path='/' element={<Navbar/>}/>
//         <Route path='/footer' element={<Footer/>}/>
//     </Routes>
//    </div>
//   );
// }

/**LogInOutButton using tenary condition */
// function App() {

//   return (
//     <div className='App'>
//      <LogInOutButton isLoggedIn={false}/>
//     </div>
//   );
// }

function App() {

  return (
    <div className='App'>
     <Images/>
     <Video/>
     <Bird/>
    </div>
  );
}
export default App;
