const router = require("express").Router();
const { response } = require("express");
let Shedulle = require("../models/Shedulle");

http://Localhost:8070/Shedulle/add

router.route("/add").post((req,res)=>{


    const Sctact = req.body.Sctact;
    const Sadres = req.body.Sadres;
    const Scity = req.body.Scity;
    const Sdate = req.body.Sdate;

    const newShedulle = new Shedulle({

        Sctact,
        Sadres,
        Scity,
        Sdate,
   
       

    })

    newShedulle.save().then(()=>{

        res.json("Shedulle Success Addes")
    }).catch((err)=>{

        console.log(err);
    })
})    


http://localhost:8070/Shedulle

router.route("/").get((req,res)=>{

    Shedulle.find().then((Shedulle)=>{
        res.json(Shedulle)

    }).catch((err)=>{

        console.log(err);
    })

})




http://localhost:8070/Shedulle/update/5ffffffhf

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;
    const {Sctact,Sadres,Scity,Sdate
            
     } = req.body;

    const upadatepdetails = {

        Sctact,
        Sadres,
        Scity,
        Sdate,
   
            
     
    }

    const update = await Shedulle.findByIdAndUpdate(userId, upadatepdetails).then(() =>{

        res.status(200).send({status: "user updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with updating date", error:err.message})
    })


   })

   http://localhost:8070/delete/5ffffffhf

   router.route("/delete/:id").delete(async (req,res) => {

    let userId = req.params.id;

    await Shedulle.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "user deleted"});

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with Delete user", error:err.message})
    })

   })



router.route("/get/:id").get(async (req,res) => {

    let userId = req.params.id;
    const user = await Shedulle.findById(userId).then( (Shedulle) =>{

        res.status(200).send({status: "user fetched", user : Shedulle})

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message})
    })

})






module.exports = router;