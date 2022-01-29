const router=require('express').Router();
const Bus=require('../schema/busSchema')
router.route('/')
.get((req,res)=>{

    Bus.find({}).select('busNumber -_id')
    .exec((err,value)=>{
     if(err) console.log(err)
     else {
        // console.log(value)
         res.json(value)
     }
    })

})

module.exports=router;