<!-- 结构 -->
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录表单区域-->
      <!-- :model 数据绑定 和行为区的一起把数据传到后端-->
      <!-- :model 写完之后需要定义-->
      <!--添加一个引用ref-->
      <el-form label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!--用户名-->
        <!--验证规则是加给item才能生效-->
        <!--加入prop 值是行为中定义好的规则 此时的验证规则才能生效-->
        <el-form-item prop="username">
          <!-- v-model 双向绑定-->
          <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!--按钮区域-->
        <el-form-item class="btns">
          
          <el-button type="primary" @click="login">登录</el-button>
          <!--绑定一个单击事件-->
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<!-- 行为 -->
<script>
export default {
  // 定义一个data数据
  data () {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          // required:必填项 message:提示信息 tirgger:储发时机(blur表示焦点离开输入框)
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          // min：最小输入长度 max：最大输入长度
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  // 点了重置之后相当于又回到了登录表单的数据绑定对象的默认值 双向绑定
  methods: {
    // 点击重置按钮 重置登录表单
    resetLoginForm () {
      // 打印出这个实例
      // console.log(this)
      // 不能加分号
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.requestGet('/user/login',this.loginForm).then(res=>{
        console.log(1111)
      })
    }
  }
}
</script>
<!-- 样式  less语法格式  scopes只在此文件生效样式  -->
<!-- 使用less语法需要在vue中导入“开发”依赖 less loder 还有开发依赖less  less-loader内部依赖less -->
<style lang="less" scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}

.login_box{
  width: 450px;
  height: 300px;
  background-color: #FFF;
  border-radius: 3px;
  position: absolute;
  /* 通过top、left和transform的translate可以使一个item达到中间的效果 */
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  /* less语法 */
  .avatar_box{
    height: 130px;
    width: 130px;
    border:1px solid #eee;
    border-radius:50%;
    /* 阴影 */
    box-shadow: 0 0 10px #ddd;
    padding: 10px;
    /* 头像框的位置移动 */
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff ;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  /*盒子溢出处理*/
  // box-sizing: border-box;
}

.btns{
  /*弹性盒子模型*/
  display: flex;
  /*横轴上尾部对齐*/
  justify-content: flex-end;

}
</style>
