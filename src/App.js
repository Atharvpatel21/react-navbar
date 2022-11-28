import React, { useEffect, useState } from "react";
 import NavMenu from "./components/Navmenu";
// import Navbar from "./navnar";
import Dropdown from "./pages/Dropdown";
// import Home from ".pages/home";
 import Popup from "./pages/popup";
 import ddlmenuNevigation from "./pages/ddlmenuNevigation";

//  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import './ddl.scss';
//  import Dropdown from "./pages/Dropdown";
// import "./pages/dropdown.css";
// import { StyleSheet, Text } from "react-native";
// import SimpleMenu from "./components/simplemenu";

const App = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const[open , setOpen] = useState(false);
  // const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
  setTimeout(() => {
    // setTimedPopup(true);
  },300);
  }, []);
 

// function app() {
// const options = [
//   {
//     value: "Change Name",
//     label: "Change Name"
//   },
//   {
    
//     value: "Email transcript",
//     label: "Email transcript"
//   },
//   {
    
//     value: "Sound On",
//     label: "Sound On"
//   },
// ];
//   };
  return(
      <>
      {/* <h1>Hello Atharv Sports family</h1> */}
       
      {/* <Navbar/> */}
      {/* <Home/> */}
      <div className="Home">
            <div class="main">
            <h1>React Popups</h1>
            <br/><br/>
            <button class="butpopup" onClick={() => setButtonPopup(true)}>Chat</button>
            </div>
         
            <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
          
               {/* <Dropdown placeHolder="Select..." options={options}/> */}
                {/* <Dropdown placeHolder="Select..." />  */}
              {/* <button><img src="icons8-top-menu-48.png" alt=""/></button> */}
                  {/* <NavMenu/> */}
                 <ddlmenuNevigation Dropdown open={open} setOpen={setOpen}/>
                 <Dropdown open={open} setOpen={setOpen}/>
                <div class="logo">
                        <img src="./images/eruKfiddeR.png"  alt='logo'/>
                      </div>  
                      
              <h3 class="label">We would like to  help!</h3>
              <input class="search-txt" type="text" placeholder="Search for answers" title="Search for answers" ></input><button class="search-btn" type="search">
                <img src="./images/google-web-search-icon-2-32.jpg" alt=""/></button>
                <div class="body-chat">
                  <div class="chat-panel">
                  <panel></panel>
                </div>
                <span></span>
                <span></span>
                {/* </div> */}
                <textarea placeholder="Write a reply...." required rows="5"></textarea> <button class="search-btn" type="search">like</button>             <input type="submit" value="upload" class="send-btn"></input>
                <button type="emoj-btn" >emoij</button> 
                <br/>
                  </div>
              {/* <p>This is my button triggered popup</p> */}
            </Popup>
        
             {/* <Popup trigger={timedPopup} setTrigger= {setTimedPopup}>
              
             {/* <Dropdown title="Select movie" items={items} multiSelect />  */}
              {/* <header><Navbar/></header> */}
              {/* <div> <DropDownMenu></DropDownMenu> </div> */}
              {/* <h3>My Timed Popup</h3>
              <p>This is my time button triggered popup</p>
            </Popup>  */} 
        </div>
       
      {/* <routes>
        <route path='/' exact components={Home} />
        <route path='/'
      </routes>

  </router>; */}
   </>
  );
};
export  default App;
// export default function App() {

//   return (
//        <view style={styles.container}>
//                 <SimpleMenu/>
//               </view>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },

//  });
