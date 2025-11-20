---
title: 速通HTML
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/691eb46a3203f7be00198f16.jpg
tags: HTML
categories: 前端
---


​什么是HTML呢？

HTML是超文本标记语言，HTML代码是由“标签”构成的

> 超文本：文本、声音、图片、视频、表格、链接
> 
> 标记：由许许多多的标签组成

HTML页面是运行到浏览器上面的

### 第一个HTML程序

和C语言从hello world开始一样

HTML可以先从编写第一个页面开始

就是用记事本编写之后将文件的后缀改成html

它支持很多标签

比如说：

```html
<body>hello</body>
```

> 标签名（body）放到<>中
> 
> 大部分标签（双标签）成对出现<body>为开始标签</body>为结束标签
> 
> 少数标签只有开始标签（单标签）
> 
> 开始标签和结束标签之间，写的是标签的内容
> 
> 开始标签可能会带有属性，id属性相当于给这个标签设置了一个唯一的标识符（身份证号码）

```html
<body id="myId">hello</body>
```

一个标准的html的结构怎么样呢？

```html
<html>
	<head>
		<title>第一个页面</title>
</head>
<body>
	hello world
</body>
</html>
```

长得基本上也是一毛一样

**html是html的文件根标签**

**head是编写页面相关的属性**

**title是页面的标题**

**body是页面内容展示信息**

和DOM树（Document Object Mode (文档对象模型)）结构类似，所有的标签都是html的子标签

head和body是兄弟标签（每一个标签相当于一个对象，程序员可以通过代码拿到这些对象，拿到之后可以对此进行增删查改）

双标签：标签又开始有结束

也有单标签

### 开发环境的配置：VScode相关插件

为了保证开发效率，需要采用VScode编写代码（是一个企业开发前端非常常用的一个开发工具）

关于编写HTML，可以安装这个插件：

**Auto Rename Tag**


想要直接在VScode上面跑html的话 ，要下另一个插件：

**view-in-browser**


每次都写很麻烦，可以！加上回车

就可以快速生成代码的框架了

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

**​<!DOCTYPE html>​**称为 DTD (文档类型定义), 描述当前的文件是一个 HTML5 的文件

**​​ <html lang="en">​**是指定当前的页面内容是英文的

**​<meta charset="UTF-8">​**是浏览器解码规则（我就知道学里牛渴死和MySQL有用，你怎么看呢荷叶饭）

**​<meta http-equiv="X-UA-Compatible" content="IE=edge">​**是指定浏览器的渲染效果，这个是指定效果是IE浏览器的最新版本

**​<meta name="viewport" content="width=device-width, initial-scale=1.0">​**这个是针对移动端适配

### 标签

先来说说注释标签（为了提高代码可读性），我们直接使用快捷键Ctrl+/就可以实现注释了


怎么查看注释呢？

在我们在浏览器上打开页面之后，按F12会出现这样的侧栏（按F12或者右键审查元素，可以开启开发者工具，切换到Elements标签，就可以看到页面结果的细节）：

因为HTML是基于浏览器去运行的，所以用户可以拿到我们的代码：

注释不能写不友好的，点你呢荷叶饭

#### 标题

用标题标签来达成效果，标题标签总共有六个，写博客的应该知道这个：

这是我们CSDN上的格式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>这是h1</h1>
    <h2>这是h2</h2>
    <h3>这是h3</h3>
    <h4>这是h4</h4>
    <h5>这是h5</h5>
    <h6>这是h6</h6>
</body>
</html>
```

#### 段落

页面有很多段落

这样的效果在代码层面怎么实现捏？

需要用到p标签，p标签是双标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>权限问题</h3>
    <p>如果是在远程仓库上执行Git命令时出现了拒绝连接的问题，可能是因为没有足够的权限访问该仓库。</p>
    <p>解决办法是检查账户权限，确保有权限访问该仓库。</p>
    <h3>网络问题</h3>
    <p>网络不稳定或网络连接被中断可能导致Git链接不上。检查网络连接，确保网络正常，并尝试重新连接。</p>
    <p>可以使用ping命令检查网络连接，如ping github.com，如果显示超时或错误，说明网络连接存在问题。</p>
    <h3>SSH密钥问题</h3>
    <p>如果使用SSH协议连接到远程仓库，SSH密钥配置有误可能导致连接失败。</p>
    <p>检查SSH密钥配置，确保配置正确，密钥与远程仓库匹配。</p>
    <p>可以使用ls -al ~/.ssh命令检查是否存在SSH密钥文件（如id_rsa和id_rsa.pub）。</p>
</body>
</html>
```

这是git链接不上的一些原因

在文本方面，在VScode里回车会被解析成浏览器中的空格

#### 换行

还有一个标签是换行标签<br>

换行之后间隙比段落标签间隙小

> tips：
> 
> br是一个单标签（不需要结束标签）
> 
> br标签不像p标签那样大空隙
> 
> <br/>是规范写法，不建议写成<br>

我们需要做的是给标题、作者、小标题都加上合适的标题

给每个段落加上合适的段落

给需要换行的地方加上br标签

### 格式化标签

加粗: strong 标签 和 b 标签（这俩都是双标签）

以及，荷叶饭你知道CSDN的加粗快捷键是**Ctrl+B**吗

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <strong>十一月你不用来了</strong>
    <b>我挺不住了</b>
</body>
</html>
```

倾斜: em 标签 和 i 标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <strong>十一月你不用来了</strong>
    <b>我挺不住了</b>
    <br>
    <em>免我蹉跎苦</em>
    <i>不能专挑我一个人欺负</i>
</body>
</html>
```

删除线: del 标签 和 s 标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <strong>十一月你不用来了</strong>
    <b>我挺不住了</b>
    <br>
    <em>免我蹉跎苦</em>
    <i>不能专挑我一个人欺负</i>
    <br>
    <del>求您做做主</del>
    <s>求您做做主</s>
</body>
</html>
```


下划线: ins 标签 和 u 标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <strong>十一月你不用来了</strong>
    <b>我挺不住了</b>
    <br>
    <em>免我蹉跎苦</em>
    <i>不能专挑我一个人欺负</i>
    <br>
    <del>求您做做主</del>
    <s>求您做做主</s>
    <br>
    <ins>姑娘一句春不晚</ins>
    <u>痴儿留在真江南</u>
</body>
</html>
```

这几个有什么区别呢？前面的是强调文本（可以通过网络爬虫技术获取到文本）

### 图片标签img

这是一个比较重要的标签捏

img 标签必须带有 src 属性表示图片的路径

```html
<img src="rose.jpg">
```

要把rose.jpg这个图片文件放到和html中的同级目录中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <strong>十一月你不用来了</strong>
    <b>我挺不住了</b>
    <br>
    <em>免我蹉跎苦</em>
    <i>不能专挑我一个人欺负</i>
    <br>
    <img src="./微信图片_20240126210846.jpg">
    <br>
    <del>求您做做主</del>
    <s>求您做做主</s>
    <br>
    <ins>姑娘一句春不晚</ins>
    <u>痴儿留在真江南</u>
</body>
</html>
```

相对路径方式就是和Linux学的差不多，可以同级上一级巴拉巴拉这样子（不一 一演示了荷叶饭，我们都学过了）：

> 同级路径: 直接写文件名即可 (或者 ./)
> 
> 下一级路径: image/1.jpg
> 
> 上一级路径: ../image/1.jpg

绝对路径就是一个完整的磁盘路径或者网络路径：

```html
磁盘路径 D:\rose.jpg
```

```html
网络路径 https://images0.cnblogs.com/blog/130623/201407/300958470402077.png
```

img标签还有其他的属性：

> alt: 替换文本. 当文本不能正确显示的时候, 会显示一个替换的文字（谁都会犯错）
> 
> title: 提示文本. 鼠标放到图片上, 就会有提示
> 
> width/height: 控制宽度高度. 高度和宽度一般改一个就行, 另外一个会等比例缩放. 否则就会图片失衡
> 
> border: 边框, 参数是宽度的像素. 一般使用 CSS 来设定

```html
<img src="rose.jpg" alt="鲜花" title="这是一朵鲜花" width="500px" height="800px" 
border="5px">
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <strong>十一月你不用来了</strong>
    <b>我挺不住了</b>
    <br>
    <em>免我蹉跎苦</em>
    <i>不能专挑我一个人欺负</i>
    <br>
    <img src="./微信图片_20240126210846.jpg" title="这是一只乌萨奇">
    <br>
    <del>求您做做主</del>
    <s>求您做做主</s>
    <br>
    <ins>姑娘一句春不晚</ins>
    <u>痴儿留在真江南</u>
</body>
</html>
```


tips：

> 1.属性可以有多个，不能写到标签之前
> 
> 2.属性之间用空格分割，可以是多个空格，也可以是换行
> 
> 3.属性之间不分先后顺序
> 
> 3.属性使用**键值对**的格式来表示

### 超链接标签：a

这是一个比较重要的标签，就是点击之后跳转，功能有点像CSDN中粘贴链接的这个，贴一篇我的博客宣传宣传：

[含情脉脉的进程-CSDN博客![](https://csdnimg.cn/release/blog_editor_html/release2.4.4/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=P9T8)https://blog.csdn.net/chestnut\_orenge/article/details/139043958?spm=1001.2014.3001.5501](https://blog.csdn.net/chestnut_orenge/article/details/139043958?spm=1001.2014.3001.5501 "含情脉脉的进程-CSDN博客")这篇荷叶饭说她三个通宵才学完，以及痛斥我这种一些写一坨的行为

这需要具备一些属性：

> href：必须具备，表示点击之后会跳转到哪个页面
> 
> target：打开方式，默认是\_self，如果是\_blank则用新的标签页打开

```html
<a href="https://github.com/justice049">小小Switch</a>
```

没错，就是这样。。。

荷叶饭该写自己的个人主页了

链接有几种形式：

**外部链接：href引用其他网站的地址（就是上面的那种）**

**内部链接：网站内部页面之间的链接，写相对路径即可捏**

**空链接：使用#在href中占位**

```html
<a href="#">空链接</a>
```

**下载链接：href 对应的路径是一个文件. (可以使用 zip 文件)**

```html
<a href="test.zip">下载文件</a>
```

**网页元素链接：可以给图片等任何元素添加链接（把元素放到标签a中）：**

```html
<a href="http://www.sogou.com">
    <img src="rose.jpg" alt="">
</a>
```

**锚点链接：可以快速定位到页面中的某个位置**

```html
<a href="#one">第一集</a>
<a href="#two">第二集</a>
<a href="#three">第三集</a>
<p id="one">
   第一集剧情 <br>
   第一集剧情 <br>
   ...
</p>
<p id="two">
   第二集剧情 <br>
   第二集剧情 <br>
 ...
</p>
<p id="three">
   第三集剧情 <br>
   第三集剧情 <br>
 ...
</p>
```


也有禁止a标签跳转的选项：

```html
<a href="javascript:void(0);">
<a href="javascript:;">
```

### 表格标签

介绍一个快捷键：Shift+Alt+↓就类似VS中的Ctrl+d是快捷复制


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table>
        <tr>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
        </tr>
        <tr>
        <td>尹君墨</td>
        <td>女</td>
        <td>18</td>
        </tr>
        <tr>
        <td>顺火暖暖</td>
        <td>男</td>
        <td>30</td>
        </tr>
        <tr>
        <td>算命不</td>
        <td>男</td>
        <td>30</td>
        </tr>
    </table>
</body>

</html>
```

这里注意：

> **table 标签: 表示整个表格**
> 
> **tr: 表示表格的一行** ****
> 
> **td: 表示一个单元格** ****
> 
> **th: 表示表头单元格. 会居中加粗**
> 
> **thead: 表格的头部区域(注意和 th 区分, 范围是比 th 要大的)** ****
> 
> **tbody: 表格得到主体区域**

table包含tr，tr包含td或者th

生成的表格式这样的，没有分割线，想要有对应的分割线的话，可以添加border：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1" cellspacing="0">
        <tr>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
        </tr>
        <tr>
        <td>尹君墨</td>
        <td>女</td>
        <td>18</td>
        </tr>
        <tr>
        <td>顺火暖暖</td>
        <td>男</td>
        <td>30</td>
        </tr>
        <tr>
        <td>算命不</td>
        <td>男</td>
        <td>30</td>
        </tr>
    </table>
</body>

</html>
```

这个cellspacing是间隙，默认为2


这是设置表头：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1" cellspacing="0" width="500" height="500">
        <thead>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        </thead>
        <tbody>
        <tr>
            <td>尹君墨</td>
            <td>女</td>
            <td>18</td>
        </tr>
        <tr>
        <td>顺火暖暖</td>
        <td>男</td>
        <td>30</td>
        </tr>
        <tr>
        <td>算命不</td>
        <td>男</td>
        <td>30</td>
        </tr>
        </tbody>
    </table>
</body>

</html>
```


我们通常把跟表头有关的放在thead中，把内容放在tbody中

这是设置完之后，可以更改长宽（这都是表格标签的属性，可以设置大小边框等，一般用CSS来设置）

> **align 是表格相对于周围元素的对齐方式. align="center" (不是内部元素的对齐方式)** ****
> 
> **border 表示边框. 1 表示有边框(数字越大, 边框越粗), "" 表示没边框**
> 
> **cellpadding: 内容距离边框的距离, 默认 1 像素** ****
> 
> **cellspacing: 单元格之间的距离. 默认为 2 像素** ****
> 
> **width / height: 设置尺寸**

这几个属性，VScode都提示不出来

#### 合并单元格

有些时候我们需要用到合并单元格的操作，可以这样：


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1" cellspacing="0" width="500" height="500">
        <thead>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        </thead>
        <tbody>
        <tr>
            <td>尹君墨</td>
            <td>女</td>
            <td>18</td>
        </tr>
        <tr>
        <td>顺火暖暖</td>
        <td rowspan="2">男</td>
        <td>30</td>
        </tr>
        <tr>
        <td>算命不</td>
    
        <td>30</td>
        </tr>
        </tbody>
    </table>
</body>

</html>
```

如果想要合并列单元格的话，就可以这样：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1" cellspacing="0" width="500" height="500">
        <thead>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        </thead>
        <tbody>
        <tr>
            <td colspan="2">尹君墨/女</td>
            <td>18</td>
        </tr>
        <tr>
        <td>顺火暖暖</td>
        <td rowspan="2">男</td>
        <td>30</td>
        </tr>
        <tr>
        <td>算命不</td>
    
        <td>30</td>
        </tr>
        </tbody>
    </table>
</body>

</html>
```

#### 列表标签

列表在html中还是比较常用的

快捷生成代码的方式

然后按回车就好了

前面的黑点是它展示的样式（浏览器默认展示成实心圆：disc）

我们可以通过改属性更改（square：方块           circle：空心圆）

这是无序列表（ul    li）


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>这是无序列表</h1>
    <ul type="circle">
    <li>你好</li>
    <li>他好</li>
    <li>我不好</li>
    </ul>
</body>
</html>
```


这是有序列表（ol    li）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>这是无序列表</h1>
    <ul type="circle">
    <li>你好</li>
    <li>他好</li>
    <li>我不好</li>
    </ul>
    <h1>这是有序列表</h1>
    <ol>
    <li>春</li>
    <li>夏</li>
    <li>秋</li>
    <li>冬</li>
    </ol>
</body>
</html>
```

这是自定义列表（dl是总标签，dt是小标题，dd是围绕标题说明，上面有小标题，下面有几个围绕标题展开的）：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>这是无序列表</h1>
    <ul type="circle">
    <li>你好</li>
    <li>他好</li>
    <li>我不好</li>
    </ul>
    <h1>这是有序列表</h1>
    <ol>
    <li>春</li>
    <li>夏</li>
    <li>秋</li>
    <li>冬</li>
    </ol>
    <h1>这是自定义列表</h1>
    <dl>
    <dt>数字</dt>
    <dd>1</dd>
    <dd>2</dd>
    <dd>3</dd>
    <dd>4</dd>
    </dl>
</body>
</html>
```


**tips：**

**元素之间只能是并列关系**

**ul/ol中只能放li不能放其他标签，dl中只能放dt和dd**

**li中可以放其他标签**

**列表带有自己的样式可以用CSS修改**

#### 表单标签

表单是让用户输入信息的重要途径

可以用表单完成和服务器的一次交互

登录就相当于和服务器进行一次交互（提交表单）

表单分为两个部分：

**表单域：包含表单元素的区域，重点是form标签**

**表单控件：输入框，提交按钮等，重点是input标签**

先来看看input标签吧：

input标签是给用户做输入的

可以通过type进行对应的取值，来控制input类型


当type类型是text的时候就是输入文本，当为password的时候就是输入密码哩：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
</body>
</html>
```

input单选框

单选框就比如填表的时候，选择男/女

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
    <br>
    性别<input type="radio">男
    <input type="radio" checked="checked">女
</body>
</html>
```

> **type**有许多取值的种类，button，checkbox，text，file，image，password，radio等
> 
> ​**name**​：给input给起了个名字，尤其是对于单选按钮，具有相同的name才能多选一
> 
> ​**value**​：input中的默认值
> 
> ​**checked**​：默认被选中（用于单选按钮和多选按钮）
> 
> ​**maxlength**​：设置最大的长度

对于实现单选框的多选一效果，需要让单选框间具备相同的name属性，才能实现**多选一**效果 ，比如这样：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
    <br>
    性别<input type="radio" name="sex">男
    <input type="radio" name="sex" checked="checked">女
</body>
</html>
```

**复选框**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
    <br>
    性别<input type="radio" name="sex">男
    <input type="radio" name="sex" checked="checked">女
    <br>
    爱好
    <input type="checkbox">吃饭
    <input type="checkbox">睡觉
    <input type="checkbox">玩游戏
</body>
</html>
```

**普通按钮**

这是什么含义？

我们无法只是普通朋友的那种普通吗，，，

确实挺像的，这个按钮点击没反应，需要搭配JS使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
    <br>
    性别<input type="radio" name="sex">男
    <input type="radio" name="sex" checked="checked">女
    <br>
    爱好
    <input type="checkbox">吃饭
    <input type="checkbox">睡觉
    <input type="checkbox">玩游戏
    <br>
    <input type="button" value="我是个按钮">

</body>
</html>
```

**提交按钮**

提交按钮就是用来将这个东西提交到服务器上

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
    <br>
    性别<input type="radio" name="sex">男
    <input type="radio" name="sex" checked="checked">女
    <br>
    爱好
    <input type="checkbox">吃饭
    <input type="checkbox">睡觉
    <input type="checkbox">玩游戏
    <br>
    <input type="button" value="我是个按钮">
    <br>
    <form action="test.html">
        <input type="text" name="username">
        <input type="submit" value="提交">
    </form>
</body>
</html>
```


提交按钮必须放到form内，点击之后就会尝试给服务器发送

**清空按钮**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    姓名<input type="password">
    <br>
    性别<input type="radio" name="sex">男
    <input type="radio" name="sex" checked="checked">女
    <br>
    爱好
    <input type="checkbox">吃饭
    <input type="checkbox">睡觉
    <input type="checkbox">玩游戏
    <br>
    <input type="button" value="我是个按钮">
    <br>
    <form action="test.html">
        <input type="text" name="username">
        <input type="submit" value="提交">
        <input type="reset" value="清空">
    </form>
</body>
</html>
```

清空按钮必须放置在form中，点击之后会将form内所有的用户输入内容重置


关于form标签需要结合服务器/网络编程来理解（荷叶饭get到里牛渴死的好处了吧）

#### **label标签**

它可以搭配input使用，点击label也能选中对应的单选/复选框，能够提升用户体验（就相当于你本来点圈圈才能选中的东西，你现在点字可以实现一样的效果）

for属性：指定当前的label和哪个相同id的input标签对应（此时点击才有用）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="male">男</label>
    <input type="radio" name="sex" id="male">
    <label for="famale">女</label>
    <input type="radio" name="sex" id="famale">

</body>
</html>
```

#### **select标签**

select标签可以实现那种下拉式的选择

option中定义selected="selected"表示默认选中


没错就是这样的

然后如果没有显示定义的话，可以给的第一个选项作为默认选项

#### **textarea标签**

这一般用于填写那种长段的文本内容，比如什么自我评价啊，，，

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <textarea rows="3" cols="50">
    </textarea>
</body>
</html>
```

文本域中的内容就是默认的内容捏，空格也会有影响

rows和cols一般也是用CSS来改的

#### 无语义标签：div&span

无语义标签没有固定的用途，可以拿它干任何事，通常用它进行页面布局的设计

div标签，是division的缩写，含义为分割

span标签含义是跨度

可以理解为两个盒子，用于网页布局

**div是独占一行的，是大盒子**

**span是不独占一行的，是一个小盒子**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <span>模电</span>
        <span>信号与系统</span>
        <span>概率论</span>
        <span>大物</span>
    </div>
    <div>
        <span>模电实验</span>
        <span>大物实验</span>
        <span>嵌入式实验</span>
    </div>
</body>
</html>
```


​
