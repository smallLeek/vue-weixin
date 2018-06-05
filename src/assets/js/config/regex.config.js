export default{
  mobile:{
    name: '手机号',
    type: 0,//
    isMust: true,
    rules:[
      {
        rule:/^0?(1[3-9][0-9])[0-9]{8}$/,
        description:'请输入正确的手机号'
      }
    ]
  },
  reg_mobile:{
    name:'推荐人手机号',
    type:0,
    isMust: false,
    rules:[
      {
        rule:/^0?(1[3-9][0-9])[0-9]{8}$/,
        description:'推荐人手机号格式不正确'
      }
    ]
  },
  user_name:{
    name:'用户名',
    type:0,
    isMust:true,
    rules:[
      {
        rule:/[a-zA-Z0-9_@.]{6,20}$/,
        description:'用户名由6-20位数字或字母组成'
      }
    ]
  }
}
