import React, { useEffect, useState, DetailedHTMLProps, FunctionComponent, HTMLAttributes, MouseEventHandler } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MyCard from './components/MyCard';
import './style.css'

interface MyCardProps {
    style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    title?: null | string;
    action?: MouseEventHandler<HTMLHeadingElement> | undefined;
}

const MyCard: FunctionComponent<MyCardProps> = (props) => {
    return (
        <h1 style={props.style} onClick={props.action}>{props.title ?? 'No content'}</h1>
    )
}

const Home = () => {
  return (
    <MyCard title={"Home"} />
  )
}

const About = () => {
  return (
    <MyCard title={"About Us"} />
  )
}

const Contact = () => {
  return (
    <MyCard title={"Contact Us"} />
  )
}


const App = () => {
  return (
    <Router>
      <div>

        <Link to="/">Home</Link>
{" | "}
        <Link to="/about">About Us</Link>
{" | "}
        <Link to="/contact">Contact Us</Link>


        <Switch>
          <Route path={"/"} exact={true}>
            <Home />
          </Route>

          <Route path={"/about"}>
            <About />
          </Route>

          <Route path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

// function App() {
//   const [name, setName] = useState<null | string>(null)
//   const [count, setCount] = useState<number>(1)
//   const [isRefresh, setRefresh] = useState(false)

//   const clickMe = () => {
//     //setCount(count+1);
//     setName(1 + "");
//     setRefresh(!isRefresh)
//   }

//   useEffect(() => {
//     console.log("I'm in....")

//     return () => {
//       console.log("I'm out...")
//     }
//   }, [isRefresh])

//   return (
//     <div className="App">
//       <header className="App-header">

//         <MyCard
//           title={'Hello World 1'}
//           style={{
//             color: 'red'
//           }}
//           action={clickMe}
//         />

//         <MyCard
//           title={'Hello World 2'}
//           style={{
//             color: 'white'
//           }}
//         />


//         <MyCard
//           title={name}
//           style={{
//             color: 'green'
//           }}
//         />

//       </header>
//     </div>
//   );
// }

// export default App;
