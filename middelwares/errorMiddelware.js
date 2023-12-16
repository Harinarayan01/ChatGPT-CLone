const  errorResponsive= require("../utils/errroResponse");
const errorHandler=(err,req,res,next)=>{
    let error={...err}
    error.message=err.message

    // mongoose cast error
   if(err.name=='castError'){
    const message='resourace not found'
    error=new errorResponsive(message,404)
   }
//   duplicate key error 
  if(err.code==11000){
    const message='duplicate fied value enterd'
    error=new errorResponsive(message,400)
  }
//   mongoose validation 
if(err.name=='validationError'){
    const message=object.values(err.error).map(val=> val.message)
    error =new errorResponsive(message,404);
    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message ||'server Error'
    });
  
}
}

module.exports=errorHandler;