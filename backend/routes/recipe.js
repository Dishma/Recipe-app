const router = require("express").Router();
let recipe = require("../models/recipe");


    //create
router.post('/recipe/save', (req,res)=>{
    let newRecipe = new recipe(req.body);

    newRecipe.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Employee saved Successfully!"
        });
    });
});


    //read
router.get('/recipe', (req,res)=>{
    recipe.find().exec((err,recipe)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRecipes:recipe
        });
    });
});


    //get a specific post
router.get("/recipe/:id",(req,res)=>{
    let recipeID = req.params.id;

    recipe.findById(recipeID,(err,recipe)=>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            recipe
        });
    });
})


    //update
router.put('/recipe/update/:id', (req,res)=>{
    recipe.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,recipe)=> {
            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json   ({
                success:"Update successfully!"
            })   ;  
        }
    )
});


    //delete
router.delete('/recipe/delete/:id', (req,res)=>{
    recipe.findByIdAndDelete(req.params.id).exec((err,deletedRecipe)=>{
        if(err) return res.status(400).json({
            massage:"delete unsuccessful", err
        });

        return res.json({
            massage:"delete successful", deletedRecipe
        });
    });
});


module.exports = router;