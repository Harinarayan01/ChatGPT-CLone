class errorResponsive  extends Error{
    constructor(message,statusCode){
         super(message)
         this.statusCode=statusCode
    }
}
module.exports=errorResponsive
