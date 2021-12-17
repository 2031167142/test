<template>
  <div>
    <van-nav-bar title="牛马头条 - 登录" placeholder />
    <van-form @submit="login">
      <van-field
        v-model="form.mobile"
        type="tel"
        label="手机号码"
        placeholder="手机号码"
        required
        :rules="rules.mobile"
      ></van-field>
      <van-field
        v-model="form.code"
        type="password"
        label="登录密码"
        placeholder="登录密码"
        required
        :rules="rules.code"
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { NavBar, Form, Field, Button } from 'vant'
import { loginAPI } from '../../api/userAPI'
export default {
  name: 'Login',
  components: {
    [NavBar.name]: NavBar,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {
      // 登录表单的数据，最终要双向绑定到 form 这个数据对象上
      form: {
        // 用户的手机号
        mobile: '13888888123',
        // 登录的密码
        code: '246810',
      },

      // 表单的校验规则对象
      rules: {
        // 手机号的校验规则
        mobile: [
          {
            pattern: /^1\d{10}$/,
            required: true,
            message: '请填写您的手机号',
            trigger: 'onBlur',
          },
        ],
        // 密码的校验规则
        code: [
          { required: true, message: '请填写您的密码', trigger: 'onBlur' },
        ],
      },
    }
  },
  methods: {
    async login() {
      // 只有当表单数据校验通过之后，才会调用此 login 函数
      const { data: res } = await loginAPI(this.form)
      console.log(res)

      // 判断是否登录成功了
      if (res.message === 'OK') {
        // TODO1：把登录成功的结果，存储到 vuex 中
        // TODO2：登录成功后，跳转到主页
      }
    },
  },
}
</script>

<style lang="less" scoped></style>
