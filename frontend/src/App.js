import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Chamod
import Header from './components/Header';
import Footer from './components/Footer';



//Dishma
import Getstart from "./components/Getstart";

import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";
import Homerecipe from "./components/Homerecipe";

import Adminhome from "./components/Adminhome";



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        {/*Dishma*/}
        <main className="page-body-content">
          <Route path="/" exact component={Getstart}></Route>

          <Route path="/homerecipe" component={Header} />
          <Route path="/homerecipe" exact component={Homerecipe}></Route><br/>
          <Route path="/homerecipe" component={Footer} />
          <Route path="/addrecipe" component={Header} />
          <Route path="/addrecipe" component={CreateRecipe}></Route>
          <Route path="/addrecipe" component={Footer} />
          <Route path="/editrecipe" component={Header} />
          <Route path="/editrecipe/:id" component={EditRecipe}></Route>
          <Route path="/editrecipe" component={Footer} />

          <Route path="/adminhome" component={Header} />
          <Route path="/adminhome" component={Adminhome}></Route>
          <Route path="/adminhome" component={Footer} />
        </main>

        

      </BrowserRouter>
    )
  }
}