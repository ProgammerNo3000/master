// import styles from "./App.module.css"
import './App.css';
// function App() {
//   const name = "Fellow members"
//   const age = 17
//   const email = "me@gmail.com"
//   const array = [1 , 2 ,3]
//   return (
//     <div className="App">
//      <h1>Hello {name}</h1>
//      <h2>my age is {age}</h2>
//      <h3>my email is {email}</h3>
//      <p>{array} </p>
    
//     </div>
//   );
// }
// export default App;



// function App() {
//   return (
//     <div className="App">
//     <h1>ReDI</h1>
//     <h1>ReDI</h1>
//     <h1>ReDI</h1>
//     <h1>ReDI</h1>
//     </div>
//   );
// }

// function App () {
//   const name = "ReDI is cool";
//   return (
//     <div className="App">
//     <h1>{name}</h1>
//     <h1>.</h1>
//     <h1>{name}</h1>
//     <h1>ReDI</h1>

//     </div>
//   );
// }

// function App() {
//   const header = <h1>ReDI Home Website</h1>;
//   return (
//     <div className="App">
//     {header}
//     </div>
//   );
// }


// function App() {
//   const name = <h1>student</h1>;
//   const age = <h2>23</h2>;
//   const email = <h1>me@student.com</h1>;
//   return (
//     <div className="App">
//     {name}
//     {age}
//     {email}
//     </div>
//   );
// }

// function App() {
//   const name = <h1>student</h1>;
//   const age = <h1>23</h1>;
//   const email = <h1>me@student.com</h1>;
//   return (
//     <div className="App">
//       <div>
//         {name}
//         {age}
//         {email}
//       </div>
//       <div>
//         {name}
//         {age}
//         {email}
//       </div>
//       <div>
//         {name}
//         {age}
//         {email}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const name = <h1>student</h1>;
//   const age = <h1>23</h1>;
//   const email = <h1>me@student.com</h1>;
//   const user = (
//     <div>
//       {name}
//       {age}
//       {email}
//     </div>
//   );
//   return <div className="App">
//     {user}
//     {user}
//     {user}
//     </div>;
// }
// => better now to introduce "components"

// const GetName = () => {
//   return "ReDI";
// }
// // // components start with capital letter!
// const GetNameComponent = () => {
//   return <h1>"ReDI"</h1>;
// }

// ###########################################

// function App() {
//   return (
//     <div className="App">
//      <User />
//      <User />
//     </div>
//   );
// }

// const User = () => {
//   return (
//     <div>
//       <h1>student</h1>
//       <h1>23</h1>
//       <h1>me@student.com</h1>
//     </div>
//   );
// };

// => better now to introduce "props" to reflect data (different names) inside the component

// function App(props) {
//   return (
//     <div className="App">
//      <User name="student" age = {50} email ="oldgeneration@student.com"/>
//      <User name="teacher" age = {63} email ="old@school.com"/>
//     </div>
//   );
// }

// props object looks like....and are put into the component "User"
// const props = {
//   name: "student",
//   age: 23,
//   email: "me@student.com"
// }

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// Exercise: Display this on screen
// function App() {
//   return (
//     <div className="App">
//       <Job salary={90000} position="Senior SDE" company="Amazon" />  <br/>
//       <Job salary={12000} position="Junior SDE" company="Google" />  <br/>
//       <Job salary={10000} position="Project Manager" company="Netflix" /> <br/>
//       <Job salary={20000} position="Director" company="Microsoft" /> <br/>
//       <Job salary={100000} position="SME"  company="Bmw" />
//     </div>
//   );
// }
// const Job = (props) => {
//   return (
// <div>
//   <h1>{props.salary}</h1>
//   <h1>{props.positon}</h1>
//   <h1>{props.company}</h1>
// </div>

//   );
// }
// ############ SOLUTION   ##################
// 

// function App(max) {
//   return names [Math.floor(Math.random()*names.length)];
// }
// const names = ['Anja', 'Simon', 'Max', 'Omar', 'Roman']




// export default App;

// import React from "react";

// function App() {
//   const [isRedColor, setRedColor] = React.useState(false);

//   const toggleColor = () => setRedColor((prev) => !prev);

//   return (
//     <button
//       onClick={toggleColor}
//       style={{
//         background: isRedColor ? "red" : "black",
//         color: "white",
//       }}
//     >
//       Button is {isRedColor ? "red" : "not red"}
//     </button>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   const name = "Reed";
//   const bio = {
//     age: 28,
//     isEnglishSpeaker: true,
//   };

//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>I am {bio.age} years old</h2>
//       <p>Speaks English: {bio.isEnglishSpeaker}</p>
//     </>
//   );
// }

//  export default App;
 import React from "react";

const App = () => {
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    /* 
      The first .then() lets us get JSON data from the response.
      The second .then() gets the url to my avatar and puts it in state. 
    */
    fetch("https://api.github.com/users/ProgammerNo3000")
      .then((response) => response.json())
      .then((data) => setAvatar(data.avatar_url))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return <img src={avatar} alt="Omar" />;
};

export default App;


// export default function App() {
//   return (
//  <div className={styles.App}>
//   <h1 className={styles.titlesText}>reDI München</h1>
//   <p className={styles.descriptionText}> This is a description of the redi
//   </p>
//  </div>

//   )
// }


