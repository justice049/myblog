---
title: JS综合案例
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fd3434c455cbabc95804a.jpg
tags: JS
categories: 前端
---
### 正则表达式

#### 介绍

正则表达式是用于匹配字符串中字符组合的模式，在JS中，正则表达式也是对象

通常用来查找，替换那些符合正则表达式的文本

就是筛选出符合条件的一类人

比如说

有人喜欢玩艾斯爱慕，那他喜欢的就是这一类人，而不是某个人

正则表达式在JS中的使用场景

验证表单：用户表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文匹配

可以过滤到页面中的一些敏感词（替换），或者从字符串中获取我们想要的特定部分

#### 语法

我们想要根据规则去查找，如果找到就返回

正则同样的规则：

定义规则、查找

```javascript
let str = 'S,M,艾斯爱慕'
```

JS中定义正则表达式的语法有两种，我们先学习其中比较简单的方法

```javascript
count 变量名 = /表达式/
```

//是正则表达式字面量

我们这样判断是否有符合规则的字符串

test()方法可以查看正则表达式与指定的字符串是否匹配

```javascript
regObj.test(被检测的字符串)
```

这是使用实例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const str = 'SM,S,M,艾斯爱慕'
        const reg = /M/
        console.log(reg.test(str))      //true
    </script>
</body>
</html>
```

还有一个方法：exec()方法在一个指定字符串中执行一个搜索匹配

语法：

```javascript
regObj.exec(被检测字符串)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const str = 'SM,S,M,艾斯爱慕'
        const reg = /M/
        console.log(reg.exec(str))      //true
    </script>
</body>
</html>
```

如果匹配成功，exec()方法返回一个数组，否则返回null

#### 元字符

什么是元字符？

使用元字符有什么好处？

大多数的字符仅能够描述它们本身，这些字符称作普通字符，比如所有的字母和数字

普通字符只能够匹配字符串中与他们相同的字符

元字符是一些有特殊含义的字符，提高了灵活性和强大的匹配功能

比如：规定用户只能输入英文26个字母

元字符写法：[a-z]

参考文档：

```html
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
```

正则测试工具：

[在线正则表达式测试**OSCHINA.NET在线工具,ostools为开发设计人员提供在线工具，提供jsbin在线 CSS、JS 调试，在线 Java API文档,在线 PHP API文档,在线 Node.js API文档,Less CSS编译器，MarkDown编译器等其他在线工具**http://tool.oschina.net/regex](http://tool.oschina.net/regex "在线正则表达式测试")


来看看边界符：是正则表达式中用来提示字符所处的位置，主要有两个字符

如果 ^ 和 \$ 在一起，表示必须是精确匹配（孩子们这不是makefile吗）

正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

这就是边界符，来看看量词：

量词是表示重复次数

用来设定某个模式出现的次数
逗号左右两侧千万不要出现空格

**字符类**

[ ]匹配字符集合

后面的字符串只要包含abc中任意一个字符都返回true

[ ] 里面加上 - 连字符，使用连字符 - 表示一个范围

综合示例：

来看看字符类的：

[ ] 里面加上 ^ 取反符号

比如：

[^a-z] 匹配除了小写字母以外的字符

注意要写到中括号里面

. 表示匹配除换行符之外的任何单个字符

##### 用户名验证案例

nextElementSibling是获取下一个兄弟元素（边学边忘）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            display: inline-block;
            width: 250px;
            height: 30px;
            vertical-align: middle;
            line-height: 30px;
            padding-left: 15px;
        }

        .error {
            color: red;
            background: url(./images/error1.png) no-repeat left center;
        }

        .right {
            color: green;
            background: url(./images/right.png) no-repeat left center;
        }
    </style>
</head>

<body>
    <input type="text">
    <span></span>
    <script>
        const reg = /^[a-zA-Z0-9-_]{6,16}$/
        const input = document.querySelector('input')
        const span = input.nextElementSibling
        input.addEventListener('blur',function(){
            if(reg.test(this.value))
        {
            span.innerHTML = '输入正确'
            span.className='right'
        }
        else{
            span.innerHTML = '请输入正确的格式'
            span.className = 'error'
        }
        })
    </script>
</body>

</html>
```

##### 昵称案例

我们需要要求用户只能输入中文：


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            display: inline-block;
            width: 250px;
            height: 30px;
            vertical-align: middle;
            line-height: 30px;
            padding-left: 15px;
        }

        .error {
            color: red;
            background: url(./images/error1.png) no-repeat left center;
        }

        .right {
            color: green;
            background: url(./images/right.png) no-repeat left center;
        }
    </style>
</head>

<body>
    <input type="text">
    <span></span>
    <script>
        const reg = /^[\u4e00-\u9fa5]{2,8}$/
        const input = document.querySelector('input')
        const span = input.nextElementSibling
        input.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                span.innerHTML = '输入正确'
                span.className = 'right'
            }
            else {
                span.innerHTML = '请输入正确的格式'
                span.className = 'error'
            }
        })
    </script>
</body>

</html>
```

预定义：指的是某些常见模式的简写方法


就像是，记得的时候用不上，用上的时候已经忘

#### 修饰符

修饰符约束正则执行的某些细节行为，比如是否区分大小写，是否支持多行匹配等

语法：

```html
/表达式/修饰符
```

i 是单词 ignore 的缩写，正则匹配时字母不区分大小写

g 是单词 global 的缩写，匹配所有满足正则表达式的结果

替换replace：

```javascript
字符串.replace(/正则表达式/,'替换的文本')
```

过滤敏感字（不是，前端都在干些什么得罪人的活，广告跳转，多少秒之后才关闭，屏蔽敏感字。。。步道乐跑我恨你）


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <textarea name="" cols="30" rows="10" id=""></textarea>
    <button>发布</button>
    <div></div>
    <script>
        const tx = document.querySelector('textarea')
        const btn = document.querySelector('button')
        const div = document.querySelector('div')
        btn.addEventListener('click',function(){
            console.log(tx.value)
            tx.value.replace(/我操|寄吧|草泥马|傻逼|妈的/,'**')
            div.innerHTML = tx.value.replace(/我操|寄吧|草泥马|傻逼|妈的/g,'**')
        })
    </script>
</body>
</html>
```

### 综合案例

来仿写一个小兔仙儿的页面注册

##### 短信验证码

需求一：

我们需要注意的是在点击的时候如果时间未到，那应该先禁用一下点击按钮的，，

我们可以通过一个变量进行控制

```javascript
<script>
    // 发送短信验证码模块
    const code = document.querySelector('.code')
    let flag = true
    // 点击事件
    code.addEventListener('click', function () {
      if (flag) {
        flag = false
        let i = 5
        code.innerHTML = `0${i}秒后重新获取`
        let timeId = setInterval(function () {
          i--
          code.innerHTML = `0${i}秒后重新获取`
          if (i === 0) {
            flag = true
            clearInterval(timeId)
            code.innerHTML = `重新获取`
          }
        }, 1000)
      }
    })
  </script>
```

##### 验证用户名模块

需求：

```javascript
//验证的是用户名
    // 获取用户表单
    const username = document.querySelector('[name=username]')
    // 使用change事件， 值发生变化的时候
    username.addEventListener('change',verifyName)
    // 封装函数
    function verifyName(){
      const span = username.nextElementSibling
      // 定规则
      const reg = /^[a-zA-Z0-9-_]{6,10}$/
      if(!reg.test(username.value))
    {
      span.innerHTML='输入不合法，请输入6~10位'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }
```

##### 验证手机号和密码框

让我们来看看这个捏

```javascript
//验证码验证
    // 获取手机表单
     const codeInput = document.querySelector('[name=code]')
    // 使用change事件， 值发生变化的时候
    codeInput.addEventListener('change',verifycodeInput)
    // 封装函数
    function verifycodeInput(){
      const span = codeInput.nextElementSibling
      // 定规则
      const reg = /^\d{6}$/
      if(!reg.test(codeInput.value))
    {
      span.innerHTML='输入不合法，请输入6位数字'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

    // 密码验证
    // 获取手机表单
    const password= document.querySelector('[name=password]')
    // 使用change事件， 值发生变化的时候
    password.addEventListener('change',verifypassword)
    // 封装函数
    function verifypassword(){
      const span = password.nextElementSibling
      // 定规则
      const reg = /^[a-zA-Z0-9-_]{6,20}$/
      if(!reg.test(password.value))
    {
      span.innerHTML='输入不合法，请输入6~20位数字，字母，符号组成的密码'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

     // 密码再次验证
    // 获取手机表单
    const confirm= document.querySelector('[name=confirm]')
    // 使用change事件， 值发生变化的时候
    confirm.addEventListener('change',verifyPwd)
    // 封装函数
    function verifyPwd(){
      const span = confirm.nextElementSibling
      if(confirm.value !== password.value)
    {
      span.innerHTML='输入不一致'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }
```

##### 我同意和提交模块

接下来做我同意模块，又想到了。。。流氓软件

```javascript
//我同意模块
    const agree = document.querySelector('.icon-queren')
    agree.addEventListener('click',function(){
      //切换类 原有的就删掉，没有就添加
      this.classList.toggle('icon-queren2')

    })
```

```javascript
//提交模块
    const form = document.querySelector('form')
    form.addEventListener('submit',function(e){
      //判断是否勾选我同意模块，如果有就证明勾选了，没有就是没有
      if(!agree.classList.contains('icon-queren2')){
        return alert('请勾选同意协议')
        // 阻止提交
        e.preventDefault()
      }
      // 依次判断上面的每个框框，是否通过，只有一个没通过的就阻止
      if(!verifyName()) e.preventDefault()
      if(!verifyPhone()) e.preventDefault()
      if(!verifyPwd()) e.preventDefault()
      if(!verifycodeInput()) e.preventDefault()
      if(!verifypassword()) e.preventDefault()
    })
```

全部代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>小兔鲜儿 - 新鲜 惠民 快捷!</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <link rel="shortcut icon" href="./favicon.ico">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/register.css">
  <link rel="stylesheet" href="https://at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
</head>

<body>
  <!-- 项部导航 -->
  <div class="xtx_topnav">
    <div class="wrapper">
      <!-- 顶部导航 -->
      <ul class="xtx_navs">
        <li>
          <a href="./login.html">请先登录</a>
        </li>
        <li>
          <a href="./register.html">免费注册</a>
        </li>
        <li>
          <a href="./center-order.html">我的订单</a>
        </li>
        <li>
          <a href="./center.html">会员中心</a>
        </li>
        <li>
          <a href="javascript:;">帮助中心</a>
        </li>
        <li>
          <a href="javascript:;">在线客服</a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="mobile sprites"></i>
            手机版
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- 头部 -->
  <div class="xtx_header">
    <div class="wrapper">
      <!-- 网站Logo -->
      <h1 class="xtx_logo"><a href="/">小兔鲜儿</a></h1>
      <!-- 主导航 -->
      <div class="xtx_navs">
        <ul class="clearfix">
          <li>
            <a href="./index.html">首页</a>
          </li>
          <li>
            <a href="./category01.html">生鲜</a>
          </li>
          <li>
            <a href="./category01.html">美食</a>
          </li>
          <li>
            <a href="./category01.html">餐厨</a>
          </li>
          <li>
            <a href="./category01.html">电器</a>
          </li>
          <li>
            <a href="./category01.html">居家</a>
          </li>
          <li>
            <a href="./category01.html">洗护</a>
          </li>
          <li>
            <a href="./category01.html">孕婴</a>
          </li>
          <li>
            <a href="./category01.html">服装</a>
          </li>
        </ul>
      </div>
      <!-- 站内搜索 -->
      <div class="xtx_search clearfix">
        <!-- 购物车 -->
        <a href="./cart-none.html" class="xtx_search_cart sprites">
          <i>2</i>
        </a>
        <!-- 搜索框 -->
        <div class="xtx_search_wrapper">
          <input type="text" placeholder="搜一搜" onclick="location.href='./search.html'">
        </div>
      </div>
    </div>
  </div>
  <div class="xtx-wrapper">
    <div class="container">
      <!-- 卡片 -->
      <div class="xtx-card">
        <h3>新用户注册</h3>
        <form class="xtx-form">
          <div data-prop="username" class="xtx-form-item">
            <span class="iconfont icon-zhanghao"></span>
            <input name="username" type="text" placeholder="设置用户名称">
            <span class="msg"></span>
          </div>
          <div data-prop="phone" class="xtx-form-item">
            <span class="iconfont icon-shouji"></span>
            <input name="phone" type="text" placeholder="输入手机号码  ">
            <span class="msg"></span>
          </div>
          <div data-prop="code" class="xtx-form-item">
            <span class="iconfont icon-zhibiaozhushibiaozhu"></span>
            <input name="code" type="text" placeholder="短信验证码">
            <span class="msg"></span>
            <a class="code" href="javascript:;">发送验证码</a>
          </div>
          <div data-prop="password" class="xtx-form-item">
            <span class="iconfont icon-suo"></span>
            <input name="password" type="password" placeholder="设置6至20位字母、数字和符号组合">
            <span class="msg"></span>
          </div>
          <div data-prop="confirm" class="xtx-form-item">
            <span class="iconfont icon-suo"></span>
            <input name="confirm" type="password" placeholder="请再次输入上面密码">
            <span class="msg"></span>
          </div>
          <div class="xtx-form-item pl50">
            <i class="iconfont icon-queren"></i>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <div class="xtx-form-item">
            <button class="submit">下一步</button>
            <!-- <a class="submit" href="javascript:;">下一步</a> -->
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- 公共底部 -->
  <div class="xtx_footer clearfix">
    <div class="wrapper">
      <!-- 联系我们 -->
      <div class="contact clearfix">
        <dl>
          <dt>客户服务</dt>
          <dd class="chat">在线客服</dd>
          <dd class="feedback">问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd class="weixin">公众号</dd>
          <dd class="weibo">微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode">
            <img src="./uploads/qrcode.jpg">
          </dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000
            <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="wrapper">
        <!-- 口号 -->
        <div class="slogan">
          <a href="javascript:;" class="price">价格亲民</a>
          <a href="javascript:;" class="express">物流快捷</a>
          <a href="javascript:;" class="quality">品质新鲜</a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight &copy; 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </div>
  <script>
    // 发送短信验证码模块
    const code = document.querySelector('.code')
    let flag = true
    // 点击事件
    code.addEventListener('click', function () {
      if (flag) {
        flag = false
        let i = 5
        code.innerHTML = `0${i}秒后重新获取`
        let timeId = setInterval(function () {
          i--
          code.innerHTML = `0${i}秒后重新获取`
          if (i === 0) {
            flag = true
            clearInterval(timeId)
            code.innerHTML = `重新获取`
          }
        }, 1000)
      }
    })
    //验证的是用户名
    // 获取用户表单
    const username = document.querySelector('[name=username]')
    // 使用change事件， 值发生变化的时候
    username.addEventListener('change',verifyName)
    // 封装函数
    function verifyName(){
      const span = username.nextElementSibling
      // 定规则
      const reg = /^[a-zA-Z0-9-_]{6,10}$/
      if(!reg.test(username.value))
    {
      span.innerHTML='输入不合法，请输入6~10位'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

    // 验证手机号和密码框
     // 获取手机表单
     const phone = document.querySelector('[name=phone]')
    // 使用change事件， 值发生变化的时候
    phone.addEventListener('change',verifyPhone)
    // 封装函数
    function verifyPhone(){
      const span = phone.nextElementSibling
      // 定规则
      const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
      if(!reg.test(phone.value))
    {
      span.innerHTML='输入不合法，请输入11位手机号'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

    //验证码验证
    // 获取手机表单
     const codeInput = document.querySelector('[name=code]')
    // 使用change事件， 值发生变化的时候
    codeInput.addEventListener('change',verifycodeInput)
    // 封装函数
    function verifycodeInput(){
      const span = codeInput.nextElementSibling
      // 定规则
      const reg = /^\d{6}$/
      if(!reg.test(codeInput.value))
    {
      span.innerHTML='输入不合法，请输入6位数字'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

    // 密码验证
    // 获取手机表单
    const password= document.querySelector('[name=password]')
    // 使用change事件， 值发生变化的时候
    password.addEventListener('change',verifypassword)
    // 封装函数
    function verifypassword(){
      const span = password.nextElementSibling
      // 定规则
      const reg = /^[a-zA-Z0-9-_]{6,20}$/
      if(!reg.test(password.value))
    {
      span.innerHTML='输入不合法，请输入6~20位数字，字母，符号组成的密码'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

     // 密码再次验证
    // 获取手机表单
    const confirm= document.querySelector('[name=confirm]')
    // 使用change事件， 值发生变化的时候
    confirm.addEventListener('change',verifyPwd)
    // 封装函数
    function verifyPwd(){
      const span = confirm.nextElementSibling
      if(confirm.value !== password.value)
    {
      span.innerHTML='输入不一致'
      return false
    }
    // 合法的，就清空span
    span.innerHTML = ' '
    return true
    }

    //我同意模块
    const agree = document.querySelector('.icon-queren')
    agree.addEventListener('click',function(){
      //切换类 原有的就删掉，没有就添加
      this.classList.toggle('icon-queren2')
    })

    //提交模块
    const form = document.querySelector('form')
    form.addEventListener('submit',function(e){
      //判断是否勾选我同意模块，如果有就证明勾选了，没有就是没有
      if(!agree.classList.contains('icon-queren2')){
        return alert('请勾选同意协议')
        // 阻止提交
        e.preventDefault()
      }
      // 依次判断上面的每个框框，是否通过，只有一个没通过的就阻止
      if(!verifyName()) e.preventDefault()
      if(!verifyPhone()) e.preventDefault()
      if(!verifyPwd()) e.preventDefault()
      if(!verifycodeInput()) e.preventDefault()
      if(!verifypassword()) e.preventDefault()
    })
  </script>
</body>

</html>
```

### 阶段案例

#### 登录页面

我们还要实现的是登录页面，先来实现tab栏切换

```javascript
// tab栏切换,事件委托
    const tab_nav = document.querySelector('.tab-nav')
    const pane = document.querySelectorAll('.tab-pane')
    // 事件监听
    tab_nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        // 取消上一个
        // 当前元素添加active
        tab_nav.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        // 显示和隐藏类
        // 先干掉所有人，使用for循环
        for (let i = 0; i < pane.length; i++) {
          pane[i].style.display = 'none'
        }
        //让对应序号的大pane显示
        pane[e.target.dataset.id].style.display = 'block'
      }
    })
```

然后来做点击登录可以跳转页面

```javascript
// 点击提交模块
    const form = document.querySelector('form')
    const agree = document.querySelector('[name=agree]')
    const username = document.querySelector('[name=username]')
    form.addEventListener('submit',function(e){
      e.preventDefault()
      if(!agree.checked)
    {
      return alert('请勾选同意协议')
    }
    // 记录用户名到本地存储(没有后台数据)
    localStorage.setItem('xtx-uname',username.value)
    //跳转到首页
    location.href = './index.html'
    })
```

全部代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>小兔鲜儿 - 新鲜 惠民 快捷!</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <link rel="shortcut icon" href="../favicon.ico">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/login.css">
  <link rel="stylesheet" href="https://at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
</head>

<body>
  <!-- 登录头部 -->
  <div class="xtx-login-header">
    <h1 class="logo"></h1>
    <a class="home" href="./index.html">进入网站首页</a>
  </div>
  <!-- 登录内容 -->
  <div class="xtx-login-main">
    <div class="wrapper">
      <form action="" autocomplete="off">
        <div class="box">
          <div class="tab-nav">
            <a href="javascript:;" class="active" data-id="0">账户登录</a>
            <a href="javascript:;" data-id="1">二维码登录</a>
          </div>
          <div class="tab-pane">
            <div class="link">
              <a href="javascript:;">手机验证码登录</a>
            </div>
            <div class="input">
              <span class="iconfont icon-zhanghao"></span>
              <input required type="text" placeholder="请输入用户名称/手机号码" name="username">
            </div>
            <div class="input">
              <span class="iconfont icon-suo"></span>
              <input required type="password" placeholder="请输入密码" name="password">
            </div>
            <div class="agree">
              <label for="my-checkbox">
                <input type="checkbox" value="1" id="my-checkbox" class="remember" name="agree">
                <span class="iconfont icon-xuanze"></span>
              </label>
              我已同意 <a href="javascript:;">《服务条款》</a href="javascript:;"> 和 <a>《服务条款》</a>
            </div>
            <div class="button clearfix">
              <button type="submit" class="dl">登 录</button>
              <!-- <a class="dl" href="./center.html">登 录</a> -->
              <a class="fl" href="./forget.html">忘记密码？</a>
              <a class="fr" href="./register.html">免费注册</a>
            </div>
          </div>
          <div class="tab-pane" style="display: none;">
            <img class="code" src="./images/code.png" alt="">
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- 登录底部 -->
  <div class="xtx-login-footer">
    <!-- 版权信息 -->
    <div class="copyright">
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">配送与验收</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </p>
      <p>CopyRight &copy; 小兔鲜儿</p>
    </div>
  </div>
  <script>
    // tab栏切换,事件委托
    const tab_nav = document.querySelector('.tab-nav')
    const pane = document.querySelectorAll('.tab-pane')
    // 事件监听
    tab_nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        // 取消上一个
        // 当前元素添加active
        tab_nav.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        // 显示和隐藏类
        // 先干掉所有人，使用for循环
        for (let i = 0; i < pane.length; i++) {
          pane[i].style.display = 'none'
        }
        //让对应序号的大pane显示
        pane[e.target.dataset.id].style.display = 'block'
      }
    })

    // 点击提交模块
    const form = document.querySelector('form')
    const agree = document.querySelector('[name=agree]')
    const username = document.querySelector('[name=username]')
    form.addEventListener('submit',function(e){
      e.preventDefault()
      if(!agree.checked)
    {
      return alert('请勾选同意协议')
    }
    // 记录用户名到本地存储(没有后台数据)
    localStorage.setItem('xtx-uname',username.value)
    //跳转到首页
    location.href = './index.html'
    })
  </script>
</body>

</html>
```

#### 首页页面

需求：

从登录页面跳转过来之后，自动显示用户名

如果点击退出，则不显示用户名

一些东西：

```javascript
<script>
    //获取第一个li
    const li1 = document.querySelector('.xtx_navs li:first-child')
    const li2 = li1.nextElementSibling
    //最好做一个渲染函数 
    function render()
    {
      //读取本地存储的用户名
      const uname = localStorage.getItem('xtx-uname')
      if(uname)
    {
        li1.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user"> ${uname}</i></a>`
        li2.innerHTML = '<a href="javascript:;">退出登录</a>'
      } 
    else{
      li1.innerHTML = '<a href="./login.html">请先登录</a>'
      li2.innerHTML = '<a href="./register.html">免费注册</a>'
    }
    }
    render()

    //点击退出登录模块
    li2.addEventListener('click',function(){
      // 删除本地存储的数据
      localStorage.removeItem('xtx-uname')
      // 重新渲染
      render()
    })
  </script>
```

所有代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>小兔鲜儿 - 新鲜 惠民 快捷!</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <link rel="shortcut icon" href="./favicon.ico">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/index.css">
  <link rel="stylesheet" href="https://at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
  <script>
    // 检测 userAgent（浏览器信息）
    !(function () {
      const userAgent = navigator.userAgent
      // 验证是否为Android或iPhone
      const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
      const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)

      // 如果是Android或iPhone，则跳转至移动站点
      if (android || iphone) {
        location.href = 'http://m.itcast.cn'
      }

    })()
  </script>
</head>

<body>
  <!-- 项部导航 -->
  <div class="xtx_topnav">
    <div class="wrapper">
      <!-- 顶部导航 -->
      <ul class="xtx_navs">
        <li>
          <a href="./login.html">请先登录</a>
        </li>
        <li>
          <a href="./register.html">免费注册</a>
        </li>
        <li>
          <a href="./center-order.html">我的订单</a>
        </li>
        <li>
          <a href="./center.html">会员中心</a>
        </li>
        <li>
          <a href="javascript:;">帮助中心</a>
        </li>
        <li>
          <a href="javascript:;">在线客服</a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="mobile sprites"></i>
            手机版
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- 头部 -->
  <div class="xtx_header">
    <div class="wrapper">
      <!-- 网站Logo -->
      <h1 class="xtx_logo"><a href="/">小兔鲜儿</a></h1>
      <!-- 主导航 -->
      <div class="xtx_navs">
        <ul class="clearfix">
          <li>
            <a href="./index.html">首页</a>
          </li>
          <li>
            <a href="./category01.html">生鲜</a>
          </li>
          <li>
            <a href="./category01.html">美食</a>
          </li>
          <li>
            <a href="./category01.html">餐厨</a>
          </li>
          <li>
            <a href="./category01.html">电器</a>
          </li>
          <li>
            <a href="./category01.html">居家</a>
          </li>
          <li>
            <a href="./category01.html">洗护</a>
          </li>
          <li>
            <a href="./category01.html">孕婴</a>
          </li>
          <li>
            <a href="./category01.html">服装</a>
          </li>
        </ul>
      </div>
      <!-- 站内搜索 -->
      <div class="xtx_search clearfix">
        <!-- 购物车 -->
        <a href="./cart-none.html" class="xtx_search_cart sprites">
          <i>2</i>
        </a>
        <!-- 搜索框 -->
        <div class="xtx_search_wrapper">
          <input type="text" placeholder="搜一搜" onclick="location.href='./search.html'">
        </div>
      </div>
    </div>
  </div>
  <!-- 分类及焦点图 -->
  <div class="xtx_entry">
    <div class="wrapper">
      <!-- 分类 -->
      <div class="xtx_category">
        <!-- 顶级分类 -->
        <ul class="xtx_category_super">
          <li>
            <a href="javascript:;">
              生鲜
              <small>水果</small>
              <small>蔬菜</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li class="active">
            <a href="javascript:;">
              美食
              <small>面点</small>
              <small>干果</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              电器
              <small>数码产品</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              居家
              <small>床品</small>
              <small>四件套</small>
              <small>被枕</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              洗护
              <small>洗发洗护</small>
              <small>美妆</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              孕婴
              <small>奶粉</small>
              <small>玩具</small>
              <small>辅食</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              餐橱
              <small>数码产品</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              服饰
              <small>女装</small>
              <small>男装</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              杂货
              <small>户外</small>
              <small>图书</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              品牌
              <small>品牌制造</small>
            </a>
            <i class="sprites"></i>
          </li>
        </ul>
        <!-- 子分类 -->
        <div class="xtx_category_subset">

        </div>
      </div>
      <!-- 焦点图 -->
      <div class="xtx_banner">

        <ul>
          <li>
            <a href="javascript:;">
              <img src="./uploads/banner_1.png" alt="">
            </a>
          </li>
        </ul>
        <!-- 切换按钮  -->
        <a href="javascript:;" class="prev sprites"></a>
        <a href="javascript:;" class="next sprites"></a>
        <!-- 指示器 -->
        <div class="indicator">
          <span></span>
          <span></span>
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  </div>
  <!-- 新鲜好物 -->
  <div class="xtx_goods_new xtx_panel">
    <div class="wrapper">
      <!-- 面板头部 -->
      <div class="xtx_panel_header">
        <h3>新鲜好物<small>新鲜出炉 品质靠谱</small></h3>
        <a href="./index-new.html" class="more">
          查看全部<i class="sprites"></i>
        </a>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_1">
        <a href="javascript:;">
          <img src="./uploads/new_goods_1.jpg" alt="">
          <span class="name">睿米无线吸尘器F8</span>
          <span class="price"><small>￥</small>899</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/new_goods_2.jpg" alt="">
          <span class="name">智能环绕3D空调</span>
          <span class="price"><small>￥</small>1299</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/new_goods_3.jpg" alt="">
          <span class="name">广东软软糯米煲仔饭</span>
          <span class="price"><small>￥</small>129</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/new_goods_4.jpg" alt="">
          <span class="name">罗西机械智能手表</span>
          <span class="price"><small>￥</small>3399</span>
        </a>
      </div>
    </div>
  </div>
  <!-- 人气推荐 -->
  <div class="xtx_goods_popular xtx_panel">
    <div class="wrapper">
      <!-- 面板头部 -->
      <div class="xtx_panel_header">
        <h3>人气推荐<small>人气爆款 不容错过</small></h3>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_1">
        <a href="javascript:;">
          <img src="./uploads/popular_1.jpg">
          <span class="title">特惠推荐</span>
          <span class="alt">我猜得到 你的需要</span>
        </a>
        <a href="./index-hot.html">
          <img src="./uploads/popular_2.jpg">
          <span class="title">爆款推荐</span>
          <span class="alt">人气好物推荐</span>
        </a>
        <a href="./index-one.html">
          <img src="./uploads/popular_3.jpg">
          <span class="title">场景使用一站买全</span>
          <span class="alt">编辑精心整理推荐</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/popular_4.jpg">
          <span class="title">领券中心</span>
          <span class="alt">发现更多超值优惠券</span>
        </a>
      </div>
    </div>
  </div>
  <!-- 热门品牌 -->
  <div class="xtx_goods_brand xtx_panel">
    <div class="wrapper">
      <div class="xtx_panel_header">
        <h3>热门品牌<small>国际经典 品质保证</small></h3>
        <div class="page-bar">
          <a href="javascript:;" class="prev sprites"></a>
          <a href="javascript:;" class="next sprites active"></a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_goods">
        <ul>
          <li>
            <a href="./index-brand.html">
              <img src="./uploads/brand_goods_1.jpg" alt="">
            </a>
            <a href="./brand-list.html">
              <img src="./uploads/brand_goods_2.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./uploads/brand_goods_3.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./uploads/brand_goods_4.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./uploads/brand_goods_5.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 分类商品 -->
  <div class="xtx_goods_category xtx_panel">
    <div class="wrapper">
      <!-- 生鲜 -->
      <div class="xtx_panel_header">
        <h3>生鲜</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">水果</a>
          <a href="javascript:;">蔬菜</a>
          <a href="javascript:;">肉禽蛋</a>
          <a href="javascript:;">裤装</a>
          <a href="javascript:;">衬衫</a>
          <a href="javascript:;">内衣</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/fresh_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>生鲜馆</span>
              <span>全场3件8折</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">美威 智利原味三文鱼排 240g/袋 4片装</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>59</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">红功夫 麻辣小龙虾1.5kg 4-6钱/25-32只</p>
              <p class="flag">火锅食材</p>
              <p class="price"><small>￥</small>71.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">三都港 冷冻无公害黄花鱼 700g 2条 袋装</p>
              <p class="flag">海鲜水产</p>
              <p class="price"><small>￥</small>49.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">渔公码头 大连鲜食入味 即食海参 辽参刺参 调味海</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>899</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">越南进口白心火龙果4个 装 标准果 单果400-550g </p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>29</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">广西沃柑 柑橘1.5kg</p>
              <p class="flag">新鲜水果</p>
              <p class="price"><small>￥</small>59</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">进口 牛油果 6个装 单果重约130-180g</p>
              <p class="flag">新鲜水果</p>
              <p class="price"><small>￥</small>39.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">泰国进口山竹5A级 500g </p>
              <p class="flag">新鲜水果</p>
              <p class="price"><small>￥</small>29.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 服饰 -->
      <div class="xtx_panel_header">
        <h3>服饰</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">行李箱</a>
          <a href="javascript:;">男士包袋</a>
          <a href="javascript:;">女士包袋</a>
          <a href="javascript:;">钱包及小提袋</a>
          <a href="javascript:;">男鞋</a>
          <a href="javascript:;">女鞋</a>
          <a href="javascript:;">拖鞋</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/clothes_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>服饰馆</span>
              <span>3折狂欢</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">人本秋季厚底帆布鞋 韩版低帮增高学生</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>55</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">迪士尼真皮针扣表带宽度 14-16mm规格双色压纹 女表带</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>20.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">三都港 冷冻无公害黄花鱼 700g 2条 袋装</p>
              <p class="flag">海鲜水产</p>
              <p class="price"><small>￥</small>209</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>274.5</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">拉夫劳伦t恤男正品 </p>
              <p class="flag">圆领短袖</p>
              <p class="price"><small>￥</small>99</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">李宁跑步鞋男鞋空气 弧2018春季款</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>79</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">Dickies男鞋2020春季 英伦休闲工装鞋低帮</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>179</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">北极绒春夏季纯棉背心 男士修身纯色打底</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>69</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 餐厨 -->
      <div class="xtx_panel_header">
        <h3>餐厨</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">水果</a>
          <a href="javascript:;">蔬菜</a>
          <a href="javascript:;">肉禽蛋</a>
          <a href="javascript:;">裤装</a>
          <a href="javascript:;">衬衫</a>
          <a href="javascript:;">内衣</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/kitchen_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>餐厨馆</span>
              <span>大额优惠<br>等你来拿</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">创意可爱不锈钢便携餐具 套装筷子便携三件套</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>5.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">三金西瓜霜竹炭牙刷软毛 成人家用家庭装</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>20.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">朴（TOPOTO）大卫免手 洗平板拖把拓扑懒人木地 板刮刮乐桶拖布</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>129</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>274.5</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">金纺不伤手柔顺剂 妈妈的选择</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>29</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">洁成绵柔抹布洗碗巾超 值5片装 洗锅刷碗</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>10.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">大卫双驱动旋转拖把桶 免手洗拓扑拖布地拖墩布 </p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>159</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">斧头牌（AXE）去污地板 清洁剂2L 柠檬清香 </p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>22.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 居家 -->
      <div class="xtx_panel_header">
        <h3>居家</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">咖啡具</a>
          <a href="javascript:;">水具酒具</a>
          <a href="javascript:;">锅具</a>
          <a href="javascript:;">餐具</a>
          <a href="javascript:;">功能厨具</a>
          <a href="javascript:;">茶具</a>
          <a href="javascript:;">清洁保鲜</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/home_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>居家馆</span>
              <span>全场满减</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">菜鸟异常专用链接 非请 勿拍</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>8999</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">【中盐软水盐】汉斯希 尔家用软水机适配</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>65</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">云米净水壶家用直饮台式 净水机渗透过滤自来水</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>129</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">ztk恒温调奶器配件玻璃壶 炖盅</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>129</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">荞麦枕头单人枕芯双人 护颈椎枕头芯</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>29</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">Bear/小熊 LLJ-B04G1 家用多功能切碎机 电动</p>
              <p class="flag">料理机</p>
              <p class="price"><small>￥</small>10.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">荣事达薄饼机春饼春卷皮 家用博饼机电饼铛 </p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>159</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">美式双人实木床 红实木 显档次</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>22.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 最新主题 -->
  <div class="xtx_goods_topic xtx_panel">
    <div class="wrapper">
      <div class="xtx_panel_header">
        <h3>最新专题</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
      </div>
      <div class="xtx_topic">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/topic_goods_1.jpg" alt="">
              <div class="meta">
                <p class="title">
                  吃这些美食才不算辜负自己
                  <small>餐厨起居洗护好物</small>
                </p>
                <span class="price"><small>￥</small>29.9起</span>
              </div>
            </a>
            <div class="social">
              <span class="like">
                <i class="sprites"></i>1220
              </span>
              <span class="view">
                <i class="sprites"></i>1800
              </span>

              <span class="reply">
                <i class="sprites"></i>1220
              </span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./uploads/topic_goods_2.jpg" alt="">
              <div class="meta">
                <p class="title">
                  吃这些美食才不算辜负自己
                  <small>餐厨起居洗护好物</small>
                </p>
                <span class="price"><small>￥</small>29.9起</span>
              </div>
            </a>
            <div class="social">
              <span class="liked">
                <i class="sprites"></i>1220
              </span>
              <span class="view">
                <i class="sprites"></i>1800
              </span>

              <span class="reply">
                <i class="sprites"></i>1220
              </span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./uploads/topic_goods_3.jpg" alt="">
              <div class="meta">
                <p class="title">
                  吃这些美食才不算辜负自己
                  <small>餐厨起居洗护好物</small>
                </p>
                <span class="price"><small>￥</small>29.9起</span>
              </div>
            </a>
            <div class="social">
              <span class="like">
                <i class="sprites"></i>1220
              </span>
              <span class="view">
                <i class="sprites"></i>1800
              </span>

              <span class="reply">
                <i class="sprites"></i>1220
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 公共底部 -->
  <div class="xtx_footer clearfix">
    <div class="wrapper">
      <!-- 联系我们 -->
      <div class="contact clearfix">
        <dl>
          <dt>客户服务</dt>
          <dd class="chat">在线客服</dd>
          <dd class="feedback">问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd class="weixin">公众号</dd>
          <dd class="weibo">微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode">
            <img src="./uploads/qrcode.jpg">
          </dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000
            <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="wrapper">
        <!-- 口号 -->
        <div class="slogan">
          <a href="javascript:;" class="price">价格亲民</a>
          <a href="javascript:;" class="express">物流快捷</a>
          <a href="javascript:;" class="quality">品质新鲜</a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight &copy; 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </div>

  <script>
    //获取第一个li
    const li1 = document.querySelector('.xtx_navs li:first-child')
    const li2 = li1.nextElementSibling
    //最好做一个渲染函数 
    function render()
    {
      //读取本地存储的用户名
      const uname = localStorage.getItem('xtx-uname')
      if(uname)
    {
        li1.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user"> ${uname}</i></a>`
        li2.innerHTML = '<a href="javascript:;">退出登录</a>'
      } 
    else{
      li1.innerHTML = '<a href="./login.html">请先登录</a>'
      li2.innerHTML = '<a href="./register.html">免费注册</a>'
    }
    }
    render()

    //点击退出登录模块
    li2.addEventListener('click',function(){
      // 删除本地存储的数据
      localStorage.removeItem('xtx-uname')
      // 重新渲染
      render()
    })
  </script>
</body>

</html>
```

​
​这是我学习JS的第11天了，，，我现在赶着周末学JS，然后还有二十多天就期末了呵呵呵。。。

### 图片切换模块

这是实现的代码，建议还是把不同的变量定义出来比较合适：

```javascript
//获取三个盒子
    // 小盒子
    const small = document.querySelector('.small')
    // 中盒子
    const middle = document.querySelector('.middle')
    // 大盒子
    const large = document.querySelector('.large')
    let activeElement = null
    small.addEventListener('mouseover', function (e) {
      if (e.target.tagName === 'IMG') {
        // 排他
        const parent = e.target.parentNode
        if(activeElement)
      {
        activeElement.classList.remove('active')
      }
        // 当前元素的父亲添加
        parent.classList.add('active')
        activeElement = parent
        //让中等盒子里面的图片.src更换为小图片src
        middle.querySelector('img').src = e.target.src
        large.style.backgroundImage = `url(${e.target.src})`
      }
    })
```

这是原视频的代码，虽然后面好像又能切换图片了但是为什么呢？？？？？

```javascript
// 1. 获取三个盒子
    // 2. 小盒子 图片切换效果
    const small = document.querySelector('.small')
    //  中盒子
    const middle = document.querySelector('.middle')
    //  大盒子
    const large = document.querySelector('.large')
    // 2. 事件委托
    small.addEventListener('mouseover', function (e) {
      if (e.target.tagName === 'IMG') {
        // console.log(111)
        // 排他 干掉以前的 active  li 上面
        this.querySelector('.active').classList.remove('active')
        // 当前元素的爸爸添加 active
        e.target.parentNode.classList.add('active')
        // 拿到当前小图片的 src
        // console.log(e.target.src)
        // 让中等盒子里面的图片，src 更换为   小图片src
        middle.querySelector('img').src = e.target.src
        // 大盒子更换背景图片
        large.style.backgroundImage = `url(${e.target.src})`
      }
    })
```

奥我知道了，是有没有添加active类的情况，如果没有active类的话就完蛋了，就null了

呵呵。

### 放大镜效果

接下来我们实现放大镜的效果：

第一条已经做完了，现在来做第二个部分：

看看这个：

```javascript
// 鼠标经过中等盒子，显示隐藏大盒子
    middle.addEventListener('mouseenter', show)
    middle.addEventListener('mouseleave', hide)
    let timeId = 0
    // 显示函数
    function show() {
      clearTimeout(timeId)
      large.style.display = 'block'
    }
    // 隐藏函数
    function hide() {
      timeId = setTimeout(function () {
        large.style.display = 'none'
      }, 200)
    }

    // 鼠标经过大盒子，显示隐藏大盒子
    large.addEventListener('mouseenter', show)
    large.addEventListener('mouseleave', hide)
```

然后我们来做黑色遮罩层跟着鼠标来回移动的效果，可以先添加显示和隐藏，移动再说吧：

```javascript
middle.addEventListener('mousemove', function (e) {
      let x = e.pageX - middle.getBoundingClientRect().left
      let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
```

```javascript
if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
        //黑色盒子不是一直移动的
        // layer.style.left = x + 'px'
        // layer.style.top = y + 'px'
        //声明两个变量，黑色盒子移动的mx变量
        let mx = 0, my = 0
        if (x <= 100) {
          mx = 0
        }
        if (x >= 100 && x <= 300) {
          mx = x - 100
        }
        if (x > 300) {
          mx = 200
        }
        layer.style.left = mx + 'px'
        if (y <= 100) {
          my = 0
        }
        if (y >= 100 && y <= 300) {
          my = y -100
        }
        if (y > 300) {
          my = 200
        }
        layer.style.top = my + 'px'
      }
```

大图和小图一起移动：

```javascript
//大图和小图一起移动,两倍关系
        large.style.backgroundPositionX = -2 *mx + 'px' 
        large.style.backgroundPositionY = -2 *my + 'px'
```

JS部分代码：

```javascript
// 1. 获取三个盒子
    // 2. 小盒子 图片切换效果
    const small = document.querySelector('.small')
    //  中盒子
    const middle = document.querySelector('.middle')
    //  大盒子
    const large = document.querySelector('.large')
    // 2. 事件委托
    small.addEventListener('mouseover', function (e) {
      if (e.target.tagName === 'IMG') {
        // console.log(111)
        // 排他 干掉以前的 active  li 上面
        this.querySelector('.active').classList.remove('active')
        // 当前元素的爸爸添加 active
        e.target.parentNode.classList.add('active')
        // 拿到当前小图片的 src
        // console.log(e.target.src)
        // 让中等盒子里面的图片，src 更换为   小图片src
        middle.querySelector('img').src = e.target.src
        // 大盒子更换背景图片
        large.style.backgroundImage = `url(${e.target.src})`
      }
    })


    // 3. 鼠标经过中等盒子， 显示隐藏 大盒子
    middle.addEventListener('mouseenter', show)
    middle.addEventListener('mouseleave', hide)
    let timeId = null
    // 显示函数 显示大盒子
    function show() {
      // 先清除定时器
      clearTimeout(timeId)
      large.style.display = 'block'
    }
    // 隐藏函数 隐藏大盒子
    function hide() {
      timeId = setTimeout(function () {
        large.style.display = 'none'
      }, 200)
    }


    // 4. 鼠标经过大盒子， 显示隐藏 大盒子
    large.addEventListener('mouseenter', show)
    large.addEventListener('mouseleave', hide)


    // 5. 鼠标经过中等盒子，显示隐藏 黑色遮罩层
    const layer = document.querySelector('.layer')
    middle.addEventListener('mouseenter', function () {
      layer.style.display = 'block'
    })
    middle.addEventListener('mouseleave', function () {
      layer.style.display = 'none'
    })
    // 6.移动黑色遮罩盒子
    middle.addEventListener('mousemove', function (e) {
      // let x = 10, y = 20
      // console.log(11)
      // 鼠标在middle 盒子里面的坐标 = 鼠标在页面中的坐标 - middle 中等盒子的坐标
      // console.log(e.pageX)鼠标在页面中的坐标
      // middle 中等盒子的坐标
      // console.log(middle.getBoundingClientRect().left)
      let x = e.pageX - middle.getBoundingClientRect().left
      let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
      // console.log(x, y)
      // 黑色遮罩移动 在 middle 盒子内 限定移动的距离
      if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
        // 黑色盒子不是一直移动的
        // 声明2个变量 黑色盒子移动的 mx my变量 
        let mx = 0, my = 0
        if (x < 100) mx = 0
        if (x >= 100 && x <= 300) mx = x - 100
        if (x > 300) mx = 200

        if (y < 100) my = 0
        if (y >= 100 && y <= 300) my = y - 100
        if (y > 300) my = 200

        layer.style.left = mx + 'px'
        layer.style.top = my + 'px'
        // 大盒子的背景图片要跟随 中等盒子移动  存在的关系是 2倍   
        large.style.backgroundPositionX = -2 * mx + 'px'
        large.style.backgroundPositionY = -2 * my + 'px'
      }
    })
```

全部代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>小兔鲜儿 - 新鲜 惠民 快捷!</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <!-- <link rel="stylesheet" href="//at.alicdn.com/t/font_1939705_bgtmkonu28.css"> -->
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/product.css">
</head>

<body>
  <!-- 项部导航 -->
  <div class="xtx_topnav">
    <div class="wrapper">
      <!-- 顶部导航 -->
      <ul class="xtx_navs">
        <li>
          <a href="javascript:;">请先登录</a>
        </li>
        <li>
          <a href="javascript:;">免费注册</a>
        </li>
        <li>
          <a href=".javascript:;">我的订单</a>
        </li>
        <li>
          <a href="javascript:;">会员中心</a>
        </li>
        <li>
          <a href="javascript:;">帮助中心</a>
        </li>
        <li>
          <a href="javascript:;">在线客服</a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="mobile sprites"></i>
            手机版
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- 头部 -->
  <div class="xtx_header">
    <div class="wrapper">
      <!-- 网站Logo -->
      <h1 class="xtx_logo"><a href="/">小兔鲜儿</a></h1>
      <!-- 主导航 -->
      <div class="xtx_navs">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">生鲜</a>
          </li>
          <li>
            <a href="javascript:;">美食</a>
          </li>
          <li>
            <a href="javascript:;">餐厨</a>
          </li>
          <li>
            <a href="javascript:;">电器</a>
          </li>
          <li>
            <a href="javascript:;">居家</a>
          </li>
          <li>
            <a href="javascript:;">洗护</a>
          </li>
          <li>
            <a href="javascript:;">孕婴</a>
          </li>
          <li>
            <a href="javascript:;">服装</a>
          </li>
        </ul>
      </div>
      <!-- 站内搜索 -->
      <div class="xtx_search clearfix">
        <!-- 购物车 -->
        <a href="javascript:;" class="xtx_search_cart sprites">
          <i>2</i>
        </a>
        <!-- 搜索框 -->
        <div class="xtx_search_wrapper">
          <input type="text" placeholder="搜一搜" onclick="location.href='./search.html'">
        </div>
      </div>
    </div>
  </div>
  <div class="xtx-wrapper">
    <div class="container">
      <!-- 面包屑 -->
      <div class="xtx-bread">
        <a href="javascript:;"> 首页 > </a>
        <a href="javascript:;"> 电子产品 > </a>
        <a href="javascript:;"> 电视 > </a>
        <span>小米电视4A 32英寸</span>
      </div>
      <!-- 商品信息 -->
      <div class="xtx-product-info">
        <div class="left">
          <div class="pictrue">
            <div class="middle">
              <img src="./images/1.jpg" alt="">
              <div class="layer"></div>
            </div>
            <div class="small">
              <ul>
                <li class="active"><img src="./images/1.jpg" alt=""></li>
                <li><img src="./images/2.jpg" alt=""></li>
                <li><img src="./images/3.jpg" alt=""></li>
                <li><img src="./images/4.jpg" alt=""></li>
                <li><img src="./images/5.jpg" alt=""></li>
              </ul>
            </div>
            <div class="large"></div>
          </div>
          <div class="other">
            <ul>
              <li>
                <p>销量人气</p>
                <p>1999+</p>
                <p>销量人气</p>
              </li>
              <li>
                <p>商品评价</p>
                <p>999+</p>
                <p>查看评价</p>
              </li>
              <li>
                <p>收藏人气</p>
                <p>299+</p>
                <p><a href="javascript:;">收藏商品</a></p>
              </li>
              <li>
                <p>品牌信息</p>
                <p>小米</p>
                <p><a href="javascript:;">品牌主页</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <h3 class="name">小米电视4A 32英寸</h3>
          <p class="desc">全面屏设计 / 高清分辨率 / 海量内容 / 1G+4G大内存 / 多核处理器</p>
          <p class="price"><span class="now">¥1899</span><span class="old">¥2999</span></p>
          <div class="address">
            <div class="item">
              <div class="dt">促销</div>
              <div class="dd">12月好物放送，App领券购买直降120元</div>
            </div>
            <div class="item">
              <div class="dt">配送</div>
              <div class="dd">至
                <div class="box">
                  <span>陕西 西安 <i></i></span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="dt">服务</div>
              <div class="dd">
                <span class="fw">无忧退货</span>
                <span class="fw">快速退款</span>
                <span class="fw">免费包邮</span>
                <a href="#" class="lj">了解详情</a>
              </div>
            </div>
          </div>
          <div class="attrs">
            <div class="item">
              <div class="dt">颜色</div>
              <div class="dd">
                <img src="./uploads/img/cate-06.png" alt="">
                <img src="./uploads/img/cate-07.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="dt">颜色</div>
              <div class="dd">
                <span class="size">22英寸</span>
                <span class="size">42英寸</span>
                <span class="size">52英寸</span>
                <span class="size">62英寸</span>
              </div>
            </div>
            <div class="item">
              <div class="dt">数量</div>
              <div class="dd">
                <div class="num">
                  <a href="javascript:;">-</a>
                  <input type="text" value="1">
                  <a href="javascript:;">+</a>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="buy" href="javascript:;">立即购买</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 同类产品推荐 -->
      <div class="xtx-relevant-product">
        <h3>同类产品推荐</h3>
        <ul>
          <li>
            <a href="#">
              <img src="./uploads/history_goods_1.jpg" alt="">
              <p class="name">USB Type C数据线</p>
              <p class="desc">快速充电，稳定传输</p>
              <p class="price">¥39</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./uploads/history_goods_2.jpg" alt="">
              <p class="name">红米Note 5A 高配版</p>
              <p class="desc">1600万像素柔光自拍</p>
              <p class="price">¥1899</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./uploads/history_goods_3.jpg" alt="">
              <p class="name">VGA网口多功能转接器</p>
              <p class="desc">小巧便携，节省桌面空间</p>
              <p class="price">¥19</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./uploads/history_goods_4.jpg" alt="">
              <p class="name">笔记本Pro 15.6"</p>
              <p class="desc">全金属强化机身搭配独显</p>
              <p class="price">¥4899</p>
            </a>
          </li>
        </ul>
        <a href="javascript:;" class="prev"><span class="iconfont icon-angle-left"></span></a>
        <a href="javascript:;" class="next"><span class="iconfont icon-angle-right"></span></a>
      </div>
      <!-- 商品详情 -->
      <div class="xtx-product-detail">
        <div class="main">
          <div class="cont">
            <div class="tab-head">
              <a href="javascript:;">商品详情</a>
              <a href="javascript:;">商品评价<span>（998+）</span></a>
            </div>
            <div class="tab-pane">
              <!-- 静态属性 -->
              <div class="attrs">
                <div class="item"><span>商品名称：</span><span>小米L32M5-AZ </span></div>
                <div class="item"><span>商品编号：</span><span>4620979 </span></div>
                <div class="item"><span>商品毛重：</span><span>8.0kg </span></div>
                <div class="item"><span>商品产地：</span><span>中国大陆 </span></div>
                <div class="item"><span>屏幕尺寸：</span><span>32英寸及以下 </span></div>
                <div class="item"><span>能效等级：</span><span>三级能效 </span></div>
                <div class="item"><span>电视类型：</span><span>人工智能 </span></div>
                <div class="item"><span>选购指数：</span><span>6.9-6.0 </span></div>
                <div class="item"><span>观看距离：</span><span>2m以下（≤32英寸）</span></div>
              </div>
              <!-- 详情内容 -->
              <div class="detail">
                <img src="https://yanxuan-item.nosdn.127.net/39d7f2407c90d0442566a719146ee9c1.jpg" alt=""
                  data-v-2c43c764=""><img src="https://yanxuan-item.nosdn.127.net/7dfee58e7c6b3996badf368610ed62b1.jpg"
                  alt="" data-v-2c43c764=""><img
                  src="https://yanxuan-item.nosdn.127.net/d1acff1a29bddd21c2ad337d892a9f7c.jpg" alt=""
                  data-v-2c43c764=""><img src="https://yanxuan-item.nosdn.127.net/ac722b04b2014ac337d8db695ee46f0c.jpg"
                  alt="" data-v-2c43c764=""><img
                  src="https://yanxuan-item.nosdn.127.net/c63e36faa0848ee37c825897f5cec179.jpg" alt=""
                  data-v-2c43c764=""><img src="https://yanxuan-item.nosdn.127.net/e0f13dbf14c8a2f07e86bf3df3ca002b.jpg"
                  alt="" data-v-2c43c764="">
              </div>
            </div>
            <div class="tab-pane" style="display: none;">评价</div>
          </div>
          <!-- 注意事项 -->
          <div class="warn">
            <h3>注意事项</h3>
            <p class="tit">• 购买运费如何收取？ </p>
            <p>单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p>
            <br>
            <br>
            <p class="tit">• 使用什么快递发货? </p>
            <p>默认使用顺丰快递发货(个别商品使用其他快递） </p>
            <p>配送范围覆盖全国大部分地区(港澳台地区除外）。 </p>
            <br>
            <br>
            <p class="tit">• 如何申请退货? </p>
            <p>1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p>
            <p>2.内裤和食品等特殊商品无质量问题不支持退货； </p>
            <p>3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p>
            <p>4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。</p>
          </div>
        </div>
        <div class="aside">
          <div class="tit">24小时热销榜</div>
          <div class="product">
            <img src="./uploads/fresh_goods_3.jpg" alt="">
            <p class="name">USB Type C数据线</p>
            <p class="desc">快速充电，稳定传输</p>
            <p class="price">¥29</p>
          </div>
          <div class="product">
            <img src="./uploads/fresh_goods_3.jpg" alt="">
            <p class="name">USB Type C数据线</p>
            <p class="desc">快速充电，稳定传输</p>
            <p class="price">¥29</p>
          </div>
          <div class="product">
            <img src="./uploads/fresh_goods_3.jpg" alt="">
            <p class="name">USB Type C数据线</p>
            <p class="desc">快速充电，稳定传输</p>
            <p class="price">¥29</p>
          </div>
          <div class="tit">专题推荐</div>
          <div class="special">
            <img src="./uploads/discuss_goods_1.jpg" alt="">
            <p class="name">一往无前，诞生于崛起</p>
          </div>
          <div class="special">
            <img src="./uploads/discuss_goods_1.jpg" alt="">
            <p class="name">一往无前，诞生于崛起</p>
          </div>
          <div class="special">
            <img src="./uploads/discuss_goods_1.jpg" alt="">
            <p class="name">一往无前，诞生于崛起</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 公共底部 -->
  <div class="xtx_footer clearfix">
    <div class="wrapper">
      <!-- 联系我们 -->
      <div class="contact clearfix">
        <dl>
          <dt>客户服务</dt>
          <dd class="chat">在线客服</dd>
          <dd class="feedback">问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd class="weixin">公众号</dd>
          <dd class="weibo">微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode">
            <img src="./uploads/qrcode.jpg">
          </dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000
            <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="wrapper">
        <!-- 口号 -->
        <div class="slogan">
          <a href="javascript:;" class="price">价格亲民</a>
          <a href="javascript:;" class="express">物流快捷</a>
          <a href="javascript:;" class="quality">品质新鲜</a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight &copy; 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </div>
  <script>
    // 1. 获取三个盒子
    // 2. 小盒子 图片切换效果
    const small = document.querySelector('.small')
    //  中盒子
    const middle = document.querySelector('.middle')
    //  大盒子
    const large = document.querySelector('.large')
    // 2. 事件委托
    small.addEventListener('mouseover', function (e) {
      if (e.target.tagName === 'IMG') {
        // console.log(111)
        // 排他 干掉以前的 active  li 上面
        this.querySelector('.active').classList.remove('active')
        // 当前元素的爸爸添加 active
        e.target.parentNode.classList.add('active')
        // 拿到当前小图片的 src
        // console.log(e.target.src)
        // 让中等盒子里面的图片，src 更换为   小图片src
        middle.querySelector('img').src = e.target.src
        // 大盒子更换背景图片
        large.style.backgroundImage = `url(${e.target.src})`
      }
    })

    // 鼠标经过中等盒子，显示隐藏大盒子
    middle.addEventListener('mouseenter', show)
    middle.addEventListener('mouseleave', hide)
    let timeId = 0
    // 显示函数
    function show() {
      clearTimeout(timeId)
      large.style.display = 'block'
    }
    // 隐藏函数
    function hide() {
      timeId = setTimeout(function () {
        large.style.display = 'none'
      }, 200)
    }

    // 鼠标经过大盒子，显示隐藏大盒子
    large.addEventListener('mouseenter', show)
    large.addEventListener('mouseleave', hide)

    //鼠标经过中等盒子，显示隐藏黑色遮罩层
    const layer = document.querySelector('.layer')
    middle.addEventListener('mouseenter', function () {
      layer.style.display = 'block'
    })
    middle.addEventListener('mouseleave', function () {
      layer.style.display = 'none'
    })

    //移动黑色遮罩层
    middle.addEventListener('mousemove', function (e) {
      let x = e.pageX - middle.getBoundingClientRect().left
      let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
      //遮罩层在middle盒子内限定移动的距离
      if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
        //黑色盒子不是一直移动的
        // layer.style.left = x + 'px'
        // layer.style.top = y + 'px'
        //声明两个变量，黑色盒子移动的mx变量
        let mx = 0, my = 0
        if (x <= 100) {
          mx = 0
        }
        if (x >= 100 && x <= 300) {
          mx = x - 100
        }
        if (x > 300) {
          mx = 200
        }
        layer.style.left = mx + 'px'
        if (y <= 100) {
          my = 0
        }
        if (y >= 100 && y <= 300) {
          my = y - 100
        }
        if (y > 300) {
          my = 200
        }
        layer.style.top = my + 'px'
        //大图和小图一起移动,两倍关系
        large.style.backgroundPositionX = -2 * mx + 'px'
        large.style.backgroundPositionY = -2 * my + 'px'
      }
    })

  </script>
</body>

</html>
```

​
