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

## IndexLink

```
<Link to="/"> Home </Link>
```

/
/contact
/about

> 会匹配任何以/开始的子路由，但是，我们访问的/路由，只希望展示 Home 组件

## Redirect

访问的路由不存在时，进行路由重定向

## browserHistory

> react-router 是基于 history 构建的，利用 history 属性来监听浏览器地址栏的变化，并且，将URL 进行解析后放入到 location 对象中，从而给react-router 提供UI和路由之间的匹配。

### 三种history属性类型

- hashHistory
	- 不需要你配置服务器即可使用
	- 不支持服务端渲染
	- 不建议在生产环境使用
- browserHistory
	- 通过 URL 变化来改变路由的，调用的是浏览器的 History
	- 一般用于线上生产环境
	- webpack-dev-server 启动需要加上`--history-api-fallback`
- createMemoryHistory
	- Memory history 并不会从地址栏中操作或是读取，它能够帮助我们完成服务器端的渲染，或者用于测试以及其他渲染环境 (比如 React Native)，和其他两种方式不一样的是，我们需要在内存中创建 history 对象来使用
- createHashHistory & createBrowserHistory

## Navigation control

如何控制路由切换

- Link
- browserHistory
```
browserHistory.push( path )
```
- this.context.router

## Confirm Navigation

/

/about

路由跳转前确认，场景：询问是否保存数据，转场动画等

- this.context.router.setRouteLeaveHook

## 更多内容

- Dynamic Routing 根据路由异步加载对应的资源
- Server Rendering 在服务端的渲染
- Combine With Redux 和redux结合的生活应该做
