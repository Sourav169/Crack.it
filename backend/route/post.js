const router = require('express').Router();

router.get('/',(req,res)=>{
    res.json({post:{title:"my first post",desc:"hi password"}})
})
module.exports=router;