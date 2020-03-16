const express =require('express');
const Posts =require('../models/fetchdata.model')
const router= express.Router();
//In Results.js for finding specific router
router.get('/:country/:city/:location/:unit',async (req,res)=>{
    try{
        const country = req.params.country
        const city=req.params.city
        const location=req.params.location
        const unit=req.params.unit
        const posts=await Posts.find({"country":country,"city":city,"location":location,"unit":unit});
            // const ligv=posts.map(res=>{
            //    return res.description
            // })
            res.json(posts);

    }
    catch(err){
        res.json({message:err})
    }
});
//In otherresults.js in else condition for specific units
router.get('/:units',async (req,res)=>{
    try{
        const data=req.params.units
        const posts=await Posts.find({"country":"INDIA","city":"BANGALORE","location":"Koramangala","unit":data});
            const ligv=posts.map(res=>{
               return res.description
            })
            res.json(posts);

    }
    catch(err){
        res.json({message:err})
    }
});

// router.get('/post',async (req,res)=>{
//     try{
    
//          const posts=await Posts.find({"country":"INDIA","city":"BANGALORE","location":"Koramangala","unit":"BLR-3"});
         
//         res.json(posts);

//     }
//     catch(err){
//         res.json({message:err})
//     }

// });

router.get('/post/:location/:unit',async(req,res)=>{
    try{
        const locations=req.params.location;
        const unitss=req.params.unit;
       
        //  const units=await Posts.distinct("unit",{ $or:[ {"location":"Koramangala"}, {"location":"Andheri"}] })
        const units=await Posts.distinct("unit",{ $and:[ {unit:{$ne:unitss}},{location:locations} ] } )
            res.json(units);

    }
    catch(err){
        res.json({message:err})
    }
})
router.get('/locations/:locations',async(req,res)=>{
    try{
        const locations=req.params.locations;
       
       
        //  const units=await Posts.distinct("unit",{ $or:[ {"location":"Koramangala"}, {"location":"Andheri"}] })
        const units=await Posts.find({location:locations} )
            res.json(units);

    }
    catch(err){
        res.json({message:err})
    }
})
router.get('/roomname/:name',async(req,res)=>{
    try{
    const name=req.params.name
    var re = new RegExp("^" +name,"i");


    const regwrx=await  Posts.find({"roomname" : re})
    console.log(regwrx)
    res.json(regwrx)
    }
    catch(err){
        res.json("Datas not found")
    }

})


module.exports=router;
