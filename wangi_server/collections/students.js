let mongoose =require('mongoose')
//创建Schema对象,对集合进行约束
const StudentsSchema =new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password: Number,
  isDeleted: {
    type: Boolean,
    default: false // 用来表示数据是否被删除
  }
})
//创建model对象
const StudentsModel = mongoose.model('students', StudentsSchema)

module.exports = StudentsModel
