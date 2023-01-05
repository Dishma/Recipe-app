import React, { Component } from "react";
import axios from "axios";

export default class CreateRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {

            rid: "",
            recipeName: "",
            ingredients: "",
            description: "",

            ridError: "",
            recipeNameError: "",
            ingredientsError: "",
            descriptionError: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    validate = () => {

        let ridError = "";
        let recipeNameError = "";
        let ingredientsError = "";
        let descriptionError = "";

        if (!this.state.rid) {
            ridError = 'Recipe ID cannot be Empty!';
        }
        if (!this.state.recipeName) {
            recipeNameError = 'Recipe Name cannot be Empty!';
        }
        if (!this.state.ingredients) {
            ingredientsError = 'Ingredients cannot be Empty!';
        }
        if (!this.state.description) {
            descriptionError = 'Description cannot be Empty!';
        }

        if (ridError || recipeNameError || ingredientsError || descriptionError) {
            this.setState({ ridError, recipeNameError, ingredientsError, descriptionError });
            return false;
        }
        return true;
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { rid, recipeName, ingredients, description } = this.state;

        const isValid = this.validate();
        if (isValid) {

            const data = {

                rid: rid,
                recipeName: recipeName,
                ingredients: ingredients,
                description: description
            }
            console.log(data)

            axios.post("/recipe/save", data).then((res) => {
                if (res.data.success) {
                    alert("Recipe Added!")
                    this.setState(
                        {

                            rid: "",
                            recipeName: "",
                            ingredients: "",
                            description: ""
                        }
                    )
                }
            })
        }
    }

    render() {
        return (

            <div className="recipeHome" >



                <div>

                    <a className="nav-link" href="/adminhome">Home</a>
                    <a className="nav-link" href="/homerecipe">All Recipes</a>

                </div>



                <div className="col-md-8 mt-4 mx-auto">


                <center>
          <div className="col-md-8 mt-4 mx-auto"><h1 className="text-danger">Create your Recipe</h1></div><br></br>
        </center>
                    

                    <form className="needs-validation" noValidate>



                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px',fontSize:'19px' }}>Recipe ID</label>
                            <input type="text"
                                className="form-control"
                                name="rid"
                                value={this.state.rid}
                                onChange={this.handleInputChange} ></input>
                            <div style={{ fontSize: 15, color: "red" }}>{this.state.ridError}</div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px',fontSize:'19px' }}>Recipe Name</label>
                            <input type="text"
                                className="form-control"
                                name="recipeName"
                                value={this.state.recipeName}
                                onChange={this.handleInputChange} ></input>
                            <div style={{ fontSize: 15, color: "red" }}>{this.state.recipeNameError}</div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px',fontSize:'19px' }}>Ingredients</label>
                            <textarea type="text"
                                className="form-control"
                                name="ingredients"
                                rows={7}
                                value={this.state.ingredients}
                                onChange={this.handleInputChange} ></textarea>
                            <div style={{ fontSize: 15, color: "red" }}>{this.state.ingredientsError}</div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px', fontSize:'19px'}}>Description</label>
                            <textarea type="text"
                                className="form-control"
                                name="description"
                                rows="15"
                                value={this.state.description}
                                onChange={this.handleInputChange} ></textarea>
                            <div style={{ fontSize: 15, color: "red" }}>{this.state.descriptionError}</div>
                        </div>

                        <button className="btn btn-success" type="submit"  style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-save"></i>&nbsp; Save
                        </button>


                    </form>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

        )
    }
}