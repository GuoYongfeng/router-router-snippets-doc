# Getting Started with React Router

React Router 是完整的 React 路由解决方案

React Router 保持 UI 与 URL 同步。它拥有简单的 API 与强大的功能，例如代码延迟加载、动态路由匹配、以及帮助建立正确的位置过渡处理。

## 内容介绍

- 01-打通基本开发环境
- 02-基于react-router跑通基本路由
- 03-使用Link组件进行导航切换
- 04-路由的嵌套使用
- 05-activeClassName和activeStyle设置路由激活状态
- 06-params路由参数
- 07-更复杂的路由嵌套结合
- 08-IndexRoute的使用
- 09-IndexLink的使用
- 10-如何使用browserHistory
- 11-线上环境如何使用
- 12-navigating
- 13-服务端渲染

## 打通基本开发环境

```
$ git clone git@github.com:GuoYongfeng/router-router-snippets-doc.git
$ cd router-router-snippets-doc
$ npm install
$ npm start
```

## 基于react-router跑通基本路由

```
$ npm install --save react-router
```

- Router
- Route
- hashHistory

## 使用Link组件进行导航切换

- Link

## 路由的嵌套使用

- 多个组件的嵌套组合构成一个路由对于的页面
```
index -> App
page 1 -> App + Contact + ...
page 2 -> App + About + ...
```
- 结合 `this.props.children`

## activeClassName和activeStyle设置路由激活状态


- activeClassName
- activeStyle

## params

路由变量设置和获取

```
/contact/footer
/contact/header

/contact/footer/header
```

## IndexRoute 默认路由

在解释 默认路由(IndexRoute) 的用例之前，我们来设想一下，一个不使用默认路由的路由配置是什么样的：

```
<Router>
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
  </Route>
</Router>
```
当用户访问 / 时, App 组件被渲染，但组件内的子元素却没有， App 内部的 this.props.children 为 undefined ，这个时候我们只可以简单地使用 `{this.props.children ||}` 来渲染一些默认的 UI 组件。

- IndexRoute
