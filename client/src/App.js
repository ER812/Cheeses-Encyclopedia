// import logo from './logo.svg';
// import './App.css';
// import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  destroyCheese,
  getAllCheeses,
  postCheese,
  putCheese,
} from "./services/cheeses";
// import { getAllFlavors } from "./services/flavors";
import Cheeses from "./screens/Cheeses";
import Flavors from "./screens/Flavors";
import CheeseCreate from "./screens/CheeseCreate";
import CheeseEdit from "./screens/CheeseEdit";
import CheeseDetail from "./screens/CheeseDetail";

export default function App(props) {
  const [cheeses, setCheeses] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchCheeses = async () => {
      const cheeseList = await getAllCheeses();
      setCheeses(cheeseList);
    };
    fetchCheeses();
  }, []);

  // useEffect(() => {
  //   const fetchFlavors = async () => {
  //     // const flavorsList = await getAllFlavors();
  //     setFlavors(flavorsList);
  //   };
  //   fetchFlavors();
  // }, []);

  const handleCreate = async (formData) => {
    const newCheese = await postCheese(formData);
    setCheeses((prevState) => [...prevState, newCheese]);
    history.push("/cheeses");
  };

  const handleDelete = async (id) => {
    await destroyCheese(id);
    setCheeses((prevState) => prevState.filter((cheese) => cheese.id !== id));
  };

  const handleUpdate = async (id, formData) => {
    const updatedCheese = await putCheese(id, formData);
    setCheeses((prevState) =>
      prevState.map((cheese) => {
        return cheese.id === Number(id) ? updatedCheese : cheese;
      })
    );
    history.push("/cheeses");
  };

  return (
    <Switch>
      {/* {!currentUser && <Redirect to="/" />} */}
      <Route path="/cheeses/new">
        <CheeseCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/cheeses/:id/edit">
        <CheeseEdit cheeses={cheeses} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/cheeses/:id">
        <CheeseDetail flavors={flavors} />
      </Route>
      <Route path="/cheeses">
        <Cheeses
          cheeses={cheeses}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/flavors">
        <Flavors flavors={flavors} />
      </Route>
    </Switch>
  );
}
