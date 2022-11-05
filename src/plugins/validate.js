import Vue from "vue";
import VeeValidate, { Field } from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_CN.messages,
        is:(field)=>`${field}必须与密码相同`
    },
    attributes:{
        phone:'手机号',
        code:"验证码",
        password:'密码',
        password1:'确认密码',
        agree:"协议"
    }
})

VeeValidate.Validator.extend('tongyi',{
    validate:value=>{
        return value
    },
    getMessage:filed=>filed+"必须同意"
})