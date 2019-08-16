#  轮子 -  一个Vue UI组件
[![Build Status](https://travis-ci.org/zixiamu/lunzi_vue_1.svg?branch=master)](https://travis-ci.org/zixiamu/lunzi_vue_1)
作者：zixiamu
##介绍
这是我在学习Vue过程中做的一个UI框架，希望对你有用。


##开始使用

## 安装
1.CSS样式
    使用本框架前，请在CSS中开启border-box
```
*,*::before,*::after{box-sizing:border-box}
```
   你还需要设置默认颜色等变量（后续改为SCSS变量）
   
```
 html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
 }
```

IE 15及以上浏览器都支持此样式

2.安装lunzi
```
npm i --save lunzi-vue-1
```
3.引入lunzi
```
import {Button,ButtonGroup,Icon} from 'lunzi-vue-1'
import 'lunzi-vue-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-icon':Icon,
    'g-button':Button
  }
}
```
4.引入svg symbols
```
<script src="//at.alicdn.com/t/font_1244576_my7l3uiyvbq.js"></script>
```
## 文档
##提问
##变更记录
##联系方式
##贡献代码
