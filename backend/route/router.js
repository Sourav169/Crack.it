const router = require('express').Router();
const User = require('../model/Usermodel');
const { regValidation, logValidation } = require('../validation');
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')






router.post('/register', async (req, res) => {

    const { error } = regValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("email exist")
    //hash
    const salt = await bycrypt.genSalt(10);
    const hashPassword = await bycrypt.hash(req.body.password, salt);


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,

    });
    try {
        const saveuser = await user.save();
        res.send(saveuser);

    } catch (err) {
        res.status(400).send(err)
    }
})
router.post('/login', async (req, res) => {
    const { error } = logValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("email or password not exist")
    const validpass = await bycrypt.compare(req.body.password, user.password);
    if (!validpass) return res.status(400).send("password incorrect");

    const token=jwt.sign({_id:user._id},process.env.TOKEN)
    res.header('auth-token',token).send(token)

    


})
module.exports = router;