//用于连接数据库
let mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/jsk1205',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
mongoose.connection.once('open',err=>{
  if(err){
    console.log('数据库连接失败')
    console.log(err)
  }else{
    console.log('数据库连接成功')
  }
})