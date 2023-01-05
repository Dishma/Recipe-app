import React, { Component } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import "../styles/css/styles.css";



export default class homerecipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipe: []
    };
  }


  componentDidMount() {
    this.retrieveRecipes();
  }

  retrieveRecipes() {
    axios.get("recipe").then(res => {
      if (res.data.success) {
        this.setState({
          recipe: res.data.existingRecipes
        });
        console.log(this.state.recipe)
      }
    });
  }



  onDelete = (id) => {
    axios.delete(`/recipe/delete/${id}`).then((res) => {
      alert("Employee Deleted Successfully!")
      this.retrieveRecipes();
    })
  }


  filterData(recipe, searchKey) {
    const result = recipe.filter((recipe) =>
      recipe.rid.includes(searchKey)
    )

    this.setState({ recipe: result })
  }


  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("recipe").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingRecipes, searchKey)
      }
    })
  } 


  render() {
    return (

      <div className="recipeHome">

        <div>

          <a className="nav-link" href="/adminhome">Home</a>
          <a className="nav-link" href="/homerecipe">All Recipes</a>
          <a className="nav-link" href="/addrecipe">Add New Recipe</a>
          <a href="./Homerecipe" className="btn btn-success">Reload Page</a>


        </div>
        <center>
          <div className="col-md-8 mt-4 mx-auto"><h1 className="text-danger">Your Recipes</h1></div><br></br>
        </center>

        <div className="container-xl">

          <div className="col-lg-3 mt-2 mb-2">
            <input className="form-control" type="search" placeholder="Search by Recipe ID" name="searchQuery" onChange={this.handleSearchArea}></input>
          </div>
          <br />
          <br />

          <table className="table" style={{ backgroundColor: '#dddddd' }}>


            <tbody className="table table-striped"> <br />
              {this.state.recipe.map((recipe, index) => (
                <tr text-align="center" height="50px" key={index}>
                  <th scope="col">{index + 1}</th>


                  <tr> Recipe ID: {recipe.rid}</tr><br />
                  <tr>Recipe Name: {recipe.recipeName}</tr><br />
                  <tr>Ingredients: <br /> <textarea readOnly type="text" className="form-control" name="ingredients" rows={7} cols={100}>{recipe.ingredients}</textarea></tr><br />
                  <tr>Description: <br /> <textarea readOnly type="text"
                    className="form-control"
                    name="ingredients"
                    rows={7} cols={100}>{recipe.description}</textarea></tr><br/>

                  <a className="btn btn-outline-success" href={`/editrecipe/${recipe._id}`} role="button">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;

                  <a role="button" className="btn btn-outline-danger" href="#" onClick={() => window.confirm('Are you sure you want to delete this Recipe?',) && this.onDelete(recipe._id)} >
                    <i className="far fa-trash-alt" >&nbsp;</i>Delete
                  </a><br /><br />

                </tr>
              ))}
            </tbody>
          </table>

        </div>



      </div>
    )
  }
}

