import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from "./components/MyProfile";
import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";
import AddBlog from "./components/AddBlog";
import SoloBlog from "./components/SoloBlog";
import EditBlog from "./components/EditBlog";
import EditProfile from "./components/EditProfile";

function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route element={<PrivateRoute />}>

          <Route path='/' exact element={<Feed />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/addblog' element={<AddBlog />} />
          <Route path='/userprofile/:id' element={<UserProfile />} />
          <Route path='/soloblog/:id' element={<SoloBlog />} />
          <Route path='/editblog/:id' element={<EditBlog />} />
          <Route path='/editprofile' element={<EditProfile />} />

        </Route>

        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
