import React, { Component } from "react";
import axios from "axios";


export default class EditRecipe extends Component {


    constructor(props) {
        super(props);
        this.state = {

            rid: "",
            recipeName: "",
            ingredients: "",
            descriptioidn: "",

            ridError: "",
            recipeNameError: "",
            ageError: "",
            DescriptionError: ""
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
        let ageError = "";
        let descriptionError = "";


        if (!this.state.rid) {
            ridError = 'First Name cannot be Empty!';
        }
        if (!this.state.recipeName) {
            recipeNameError = 'Last Name cannot be Empty!';
        }
        if (!this.state.ingredients) {
            ageError = 'Age cannot be Empty!';
        }
        if (!this.state.description) {
            descriptionError = 'Address cannot be Empty!';
        }

        if (ridError || recipeNameError || ageError || descriptionError) {
            this.setState({ ridError, recipeNameError, ageError, descriptionError });
            return false;
        }
        return true;
    };

    onSubmit = (e) => {

        e.preventDefault();
        const id = this.props.match.params.id;

        const { rid, recipeName, ingredients, description } = this.state;

        const isValid = this.validate();
        if (isValid) {

            const data = {

                rid: rid,
                recipeName: recipeName,
                ingredients: ingredients,
                description: description,

            }
            console.log(data)

            axios.put(`/recipe/update/${id}`, data).then((res) => {
                if (res.data.success) {
                    alert("Your Recipe Updated!")
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





    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/recipe/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({

                    rid: res.data.recipe.rid,
                    recipeName: res.data.recipe.recipeName,
                    ingredients: res.data.recipe.ingredients,
                    description: res.data.recipe.description
                });

                console.log(this.state.recipe);
            }
        });
    }





    render() {
        return (

            <div className="editrecipe">


                <div>

                    <a className="nav-link" href="/adminhome">Home</a>
                    <a className="nav-link" href="/homerecipe">All Recipes</a>

                </div>


                <div className="col-md-8 mt-4 mx-auto">
                    <center>
                        <div className="col-md-8 mt-4 mx-auto"><h1 className="text-danger">Edit Your Recipe</h1></div><br></br>
                    </center>
                    <form className="needs-validation" noValidate>



                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Recipe ID</label>
                            <input type="text"
                                className="form-control"
                                name="rid"
                                value={this.state.rid}
                                onChange={this.handleInputChange} ></input>
                            <div style={{ fontSize: 20, color: "red" }}>{this.state.ridError}</div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Recipe Name</label>
                            <input type="text"
                                className="form-control"
                                name="recipeName"
                                value={this.state.recipeName}
                                onChange={this.handleInputChange} ></input>
                            <div style={{ fontSize: 20, color: "red" }}>{this.state.recipeNameError}</div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Ingredients</label>
                            <textarea type="text"
                                className="form-control"
                                name="ingredients"
                                rows={7}
                                value={this.state.ingredients}
                                onChange={this.handleInputChange} ></textarea>
                            <div style={{ fontSize: 20, color: "red" }}>{this.state.ageError}</div>
                        </div>



                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Description</label>
                            <textarea type="text"
                                className="form-control"
                                name="description"
                                rows={10}
                                value={this.state.description}
                                onChange={this.handleInputChange} ></textarea>
                            <div style={{ fontSize: 20, color: "red" }}>{this.state.descriptionError}</div>
                        </div>



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-save"></i>&nbsp; Update
                        </button>

                    </form>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        )
    }
}