//import "./UserProfile.css";
//import style from "./UserProfile.module.css";
//Traditionally===HTML page but in React===Component
//const App = () => {
//const element = <h1>Hello World</h1>;
//return element;

//   const name = "React Developer";
//   const element2 = (
//     <h1>
//       Hello {name} {2 + 2}
//     </h1>
//   );
// return element2;

//   const element3 = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   return element3;

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//inline style object for the container
//   const containerStyle = {
//     textAlign: "center",
//     margin: "20px",
//   };

//return (
// <div style={containerStyle}>
//   <img
//     src="https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_1440_2560.jpg"
//     alt="avatar"
//     //inline style applying directly
//     style={{
//       width: "150px",
//       height: "150px",
//       borderRadius: "50%",
//       objectFit: "cover",
//     }}
//   />
//   {/* <h2 style={{ color: "purple" }}>Deeksha Jat</h2> */}
//   <h2 className="name">Deeksha Jat</h2>
//   {/* <p>Full Stack Developer | React Developer</p> */}
//   <p className="bio">Full Stack Developer | React Developer</p>
//   <ul className={style.hobbies}>
//     <li className={style.hobby}>Coding</li>
//     <li className={style.hobby}>Cooking</li>
//     <li className={style.hobby}>Sports</li>
//   </ul>
// </div>
//<h1 class="text-3xl font-bold underline text-clifford">Hello world!</h1>
//     <div>
//       <div className="alert alert-primary" role="alert">
//         A simple primary alert—check it out!
//       </div>
//       <div className="alert alert-secondary" role="alert">
//         A simple secondary alert—check it out!
//       </div>
//       <div className="alert alert-success" role="alert">
//         A simple success alert—check it out!
//       </div>
//       <div className="alert alert-danger" role="alert">
//         A simple danger alert—check it out!
//       </div>
//       <div className="alert alert-warning" role="alert">
//         A simple warning alert—check it out!
//       </div>
//       <div className="alert alert-info" role="alert">
//         A simple info alert—check it out!
//       </div>
//       <div className="alert alert-light" role="alert">
//         A simple light alert—check it out!
//       </div>
//       <div className="alert alert-dark" role="alert">
//         A simple dark alert—check it out!
//       </div>
//     </div>
//   );
// };
//export default App;

//import UserProfile from "./components/UserProfile";
// import Counter from "./components/Counter";
//import Posts from "./components/Posts";
// import Tasks from "./components/Tasks";
import StudentRegistrationForm from "./components/StudentRegistrationForm";
const App = () => {
  return (
    <div>
      {/* <UserProfile
        name="Deeksha"
        email="deeksha@gmail.com"
        location="Hyderabad"
        about="scisbciwe iwdbvwbe bcuwibvc wdbcuwvb dbciwebv wbdcuwbe wbciweb vwbvrwi"
      /> */}
      {/* <Counter /> */}
      {/* <Tasks /> */}
      {/* <Posts /> */}
      <StudentRegistrationForm />
    </div>
  );
};
export default App;
