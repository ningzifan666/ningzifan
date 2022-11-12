$(function(){
    /* 点击去注册账号的JavaScript的链接 */
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    /* 点击去登录的链接 */
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //从layui中获取对象
    var form = layui.form
    //通过from.verify()函数自定义效验规则
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位,且不能出现空格'
          ], 
        repwd:function(value) {
            /* 通过形参拿到的是确认密码框中的内容
            还需要拿到密码框中的内容
            然后进行一次等于的判断
            如果判断失败,则return一个提示消息即可 */
           var pwd= $('.reg-box [name=password]')
           .val()
           if(pwd !== value){
            return"两次密码不一致！"
           }
        } 
    })
})