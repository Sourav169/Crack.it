const joi=require('@hapi/joi')

const regValidation=(data)=>{
    const Schema=joi.object({
        name:joi.string().min(6).required(),
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required(),
    });
    return Schema.validate(data)
}
const logValidation=(data)=>{
    const Schema=joi.object({
       
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required(),
    });
    return Schema.validate(data)
}
module.exports.regValidation=regValidation;
module.exports.logValidation=logValidation;
