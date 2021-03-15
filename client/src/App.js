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
import { Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import {
  destroyCheese,
  getAllCheeses,
  postCheese,
  putCheese,
} from "./services/cheeses";
import {
  verifyUser,
  loginUser,
  registerUser,
  removeToken,
} from "./services/auth";
import { getAllComments } from "./services/comments";
import Cheeses from "./screens/Cheeses";

import CheeseCreate from "./screens/CheeseCreate";
import CheeseEdit from "./screens/CheeseEdit";
import CheeseDetail from "./screens/CheeseDetail";
import Login from "./screens/Login";
import Register from "./screens/Register";

export default function App(props) {
  const [cheeses, setCheeses] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    try {
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser);
      setError(null);
      history.push("/");
    } catch (e) {
      setError("invalid login credentials");
    }
  };

  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData);
      setCurrentUser(currentUser);
      history.push("/");
    } catch (e) {
      setError("invalid sign up info");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  useEffect(() => {
    const fetchCheeses = async () => {
      const cheeseList = await getAllCheeses();
      setCheeses(cheeseList);
    };
    fetchCheeses();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsList = await getAllComments();
      setComments(commentsList);
    };
    fetchComments();
  }, []);

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

      <Route path="/login">
        <Login handleLogin={handleLogin} error={error} />
      </Route>
      <Route path="/register">
        <Register handleRegister={handleRegister} />
      </Route>
      <Route path="/cheeses/new">
        <CheeseCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/cheeses/:id/edit">
        <CheeseEdit cheeses={cheeses} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/cheeses/:id">
        <CheeseDetail cheeses={cheeses} comments={comments} />
      </Route>
      <Route path="/">
        <Cheeses
          cheeses={cheeses}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
    </Switch>
  );
}
