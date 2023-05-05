# Hello React

## 官网

1. 英文官网:[ https://reactjs.org/](https://reactjs.org/)

2. 中文官网: https://react.docschina.org/

## Hello React

**初识React**

React是单向数据绑定，并且没有指令，配合JSX

使用React需要引入三个库：

1. `react.development.js`React的核心库，核心业务所在
2. `react-dom.development.js`支持react操作DOM
3. `babel.min.js`用于将 jsx 转为 js（react 默认写法为 jsx）

页面内使用react：

```js
<div id="test"></div>
<script type="text/babel" > /* 此处一定要写babel */
    //1.创建虚拟DOM
    const VDOM = <h1>Hello,React</h1> /* 此处一定不要写引号，因为不是字符串 */
	//2.渲染虚拟DOM到页面
	ReactDOM.render(VDOM,document.getElementById('test'))
</script>
```

> > 注
>
> 再`<script></script>`中的type必须保证是`text/babel`,这将使用babel将jsx语法转化为js，否则无法识别
>
> 在jsx中，虚拟DOM千万不要加引号（''/""），否则将会被当成字符串渲染到DOM上。

**使用原生js创建**

使用`React.createElement('xx',{id:'xx},'xx')`创建一般js对象。

第一个参数：要创建什么元素（span、h1）

第二个参数：创建的元素属性(id)

第三个参数：元素的内容

例如：`const VDOM = React.createElement('h1',{id:'title'},'Hello React')`

之后，再将此页面渲染：

`ReactDOM.render(VDOM,document.getElementByID('test'))`将上方创建的VDOM渲染到 id='test' 这个节点上。

代码：

```js
<div id="test"></div>
<script type="text/javascript" > 
    //1.创建虚拟DOM
    const VDOM = React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello,React'))
	//2.渲染虚拟DOM到页面
	ReactDOM.render(VDOM,document.getElementById('test'))
</script>
```

**使用原生jsx创建**

首先创建一个虚拟DOM：`const VDOM = (<h1><span>Hello React</span></h1>)`

将此虚拟DOM交给React渲染成真实DOM：`ReactDOM.render(VDOM,document.getElementByID('test'))`

代码：

```js
<div id="test"></div>
<script type="text/babel" > /* 此处一定要写babel */
    //1.创建虚拟DOM
    const VDOM = (  /* 此处一定不要写引号，因为不是字符串 */
        <h1 id="title">
        <span>Hello,React</span>
        </h1>
    )
	//2.渲染虚拟DOM到页面
	ReactDOM.render(VDOM,document.getElementById('test'))
</script>	
```

## 虚拟DOM和真实DOM的比较

![虚拟DOM和真实DOM的比较](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20221117190231253.png)

虚拟DOM会比真实DOM的属性值少，因为虚拟DOM只是React用来渲染页面的，不必要用那么多属性。

# React基础

## jsx语法规则

jsx是React专用的 js 扩展，在原有的基础上新增了一些规则，规则如下：

1. 定义虚拟DOM时，不要添加引号。
2. 标签中混入JS表达式要用 {}
3. 样式的类名指定不要用class，要用className。
4. 内联样式，要用style={{key:value}}，第一个大括号代表内部是表达式而不是字符串，第二个大括号代表对象。
5. 有且只有一个根标签
6. 标签必须闭合，自闭合和完整标签均可。
7. 标签首字母如果是小写，则代表着HTMl标签元素，如果HTML中没有响应的标签元素，则报错
8. 标签首字母如果是大写，则代表着React组件，如果组件没有定义，则报错。

代码举例：

```js
<style>
    .title{
        background-color: orange;
        width: 200px;
    }
</style>
<div id="test"></div>
<script type="text/babel" >
    const myId = 'aTgUiGu'
    const myData = 'HeLlo,rEaCt'
    //1.创建虚拟DOM
    const VDOM = (
        <div>
            <h2 className="title" id={myId.toLowerCase()}>
                <span style={{color:'white',fontSize:'29px'}}>{myData.toLowerCase()}</span>
            </h2>
            <h2 className="title" id={myId.toUpperCase()}>
                <span style={{color:'white',fontSize:'29px'}}>{myData.toLowerCase()}</span>
            </h2>
            <input type="text"/>
        </div>
    )
    //2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))

</script>
```

## jsx渲染列表

```js
	<script type="text/babel" >

		//模拟一些数据
		const data = ['Angular','React','Vue']
		//1.创建虚拟DOM
		const VDOM = (
			<div>
				<h1>前端js框架列表</h1>
				<ul>
					{
						data.map((item,index)=>{
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		)
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
```

>> 注
>
>	一定注意区分：【js语句(代码)】与【js表达式】
>			1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
>						下面这些都是表达式：
>								(1). a
>								(2). a+b
>								(3). demo(1)
>								(4). arr.map()
>								(5). function test () {}
>			2. 语句(代码)：
>						下面这些都是语句(代码)：
>								(1).if(){}
>								(2).for(){}
>								(3).switch(){case:xxxx}
>
>

## 定义组件

这里的组件和Vue其实差不多，分为两种创建组件的方式：

**函数式组件**

1. 函数式组件，类似于创建函数，只不过必须有返回值，且返回值为虚拟DOM

   ```js
   //1.创建函数式组件
   function MyComponent(){
       console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
       return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
   }
   ```

2. 渲染组件到页面

   `ReactDOM.render(<MyComponent/>,document.getElementByID('test'))`

> > 执行了ReactDOM.render(...)之后，发生了什么？
>
> 1. React解析组件标签，找到MyComponent组件
> 2. 发现组件时使用函数定义的，调用函数，将返回的虚拟DOM转化为真实DOM，随后呈现在页面中。

**类式组件**

1. 使用 class 关键字创建一个组件，必须继承于React.Component才会被当成组件且必须要写render，render必须有返回值，返回值为虚拟DOM

   ```js
   class MyComponent extends React.Component {
       render(){
           //render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
           //render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
           console.log('render中的this:',this);
           return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
       }
   }
   ```

2. 渲染组件到页面`ReactDOM.render(<MyComponent/>,document.getElementById('test'))`

> > 执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
>
> 1. React解析组件标签，找到了MyComponent组件。
> 2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
> 3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。

## 修改state

修改 state 不要直接`this.state  = `，

而是：`this.setState({})`

## 组件通信

### 父传子Props

使用props为子组件传递数据，用法：

```jsx
父组件，就是在子组件里放一个属性
class List extends Component {
    render() {
        return (
            <div>
                <ul className="todo-main">
                    <Item a={1}></Item>
                </ul>
            </div>
        );
    }
}
```

```jsx
子组件
使用 this.props.属性 进行接收
```

### 子传父

这里和 Vue 一样，就是父给子传一个函数，这个函数需要一个参数，子调用这个函数，并把数据传入，这样父就拿到了子传过来的实参了。

```jsx
父组件
class App extends Component {
    state = {
        todos: [{id: 1, name: '吃饭', done: true}, {id: 2, name: '睡觉', done: true}, {id: 3, name: '打豆豆', done: true}]
    }
    sonChange = (todo) => {
        this.state.todos.push({id: this.state.todos.length + 1, name: todo, done: false})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    ---
                    <Header sonChange={this.sonChange}></Header>
                    ---
                    <List todos={this.state.todos}></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }

}
```

```jsx
子组件
class Header extends Component {
    handleKeyUp = (event) => {
        if(event.keyCode !== 13) return
        --- 
        this.props.sonChange(event.target.value)
        ---
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}
```



## 生命周期钩子

### 旧的生命周期

![image-20230504115225491](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504115225491.png)

**初始化阶段：**由ReactDOM.render()触发--初次渲染

1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount() ===> 常用
   - 一般再这个钩子中做一些初始化的事，比如：开启定时器，发送网络请求、订阅消息（相当于Vue中的mounted）

**更新阶段：**由组件内部 this.setState() 或父组件 render 触发

1. shouldComponentUpdate() 
2. componentWillUpdate()
3. render()     ===> 必须用
4. componentDidUpdate()

**卸载组件：**由 ReactDOM.unmountComponentAtNode() 触发

1. componentWillUnmount() ===> 常用
   - 一般再这个钩子中做些收尾的事，例如：关闭定时器、取消订阅消息

### 新的生命周期

![image-20230504115049893](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504115049893.png)

> 新版本中可以使用旧的钩子，但是会出现警告
>
> ![image-20230504115434267](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504115434267.png)
>
> 需要将这个生命周期加上UNSAFE_，比如使用componentWillMount改成UNSAFE_componentWillMount，需要添加UNSAFE _的钩子：componentWillMount,componentWillReceiveProps,componentWillUpdate，也就是所有带Will的钩子都要加上这个，除了componentWillUnmount

 相对于旧的生命周期，新的生命周期取消了三个钩子，提出了两个新的钩子。

新的钩子：

1. getDerivedStateFromProps()
2. getSnapshotBeforeUpdate()

这两个新提出的钩子用法比较罕见，一般不用

## Diffing算法

在 React 中有 Diffing 算法，此算法用来在 state 更新后，重新  render 的时候比较前后节点是否相同，如果发现前后节点相同，那么直接使用之前的，如果不同，才会重新渲染此节点

- Diffing 比较的是标签，不能对标签中的内容进行比较

- 如果节点中 state 被修改，而此节点中还存在另外一个标签没有被修改，那么将会保留其中的标签

  ```jsx
  <span>
  	现在是：{this.state.date.toTimeString()}
      <input type="text"></input>
  </span>
  ```

  这里的 input 标签将会被保留

---

在 React，Vue中，想要遍历状态渲染节点都需要传入一个 key，作为唯一标识，最好是使用此状态专属的key，如果使用遍历的 index，会产生问题：

```jsx
class Person extends React.Component{
    state = {
        persons:[
            {id:1,name:'小张',age:18},
            {id:2,name:'小李',age:19}
        ]
    }
    add = () {
        const {persons} = this.state
        const p = {id:persons.length+1,name:'小陈',age:20}
        this.setState({persons:[p,...persons]})
    }
    render() {
        return (
        	<div>
                <h2>展示人员信息</h2>
                <button onClick={this.add}>添加小王</button>
                {
                    this.state.persons.map((personObj,index)=>{
                        return <li key={index}>{personObj.name}---{personObj.age}</li>
                    })
                }
            </div>
        )
    }
}
```

点击按钮，将会出现这个小陈，但是在这里边，有一个很严重的效率问题，使用id的效率很低

```
两道经典面试题：

1. react / vue 中的 key 有什么作用？（key 的内部原理是什么？）
2. 为什么遍历列表时，key 最好不要使用 index？

答：
1. 虚拟D0M中key的作用：
   1. 简单的说：key是虚拟DoM对象的标识，在更新显示时key起着极其重要的作用。
   2. 详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DoM】,
      随后React.进行【新虚拟DoM】与【旧虚拟DoM】的diff比较，比较规则如下：
      - 旧虚拟DoM中找到了与新虚拟DoM相同的key:
        (1),若虚拟D0M中内容没变，直接使用之前的真实D0M
        (2),若虚拟D0M中内容变了，则生成新的真实D0M,随后替换掉页面中之前的真实D0M
      - 旧虚拟DoM中未找到与新虚拟DoM相同的key
        根据数据创建新的真实D0M,随后渲染到到页面
2. 用index作为key可能会引发的问题：
   1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作：
      会产生没有必要的真实D0M更新=>界面效果没问题，但效率低。
   2. 如果结构中还包含输入类的D0M:
      会产生错误D0M更新=>界面有问题。
   3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
      仅用于渲染列表用于展示，使用index作为key是没有问题的。
```

对上方代码进行慢动作回放：

```
使用 index 索引值作为 key
    初始数据：
        {id:1,name:'小张',age:18},
        {id:2,name:'小李',age:19}
    初始的虚拟DOM：
    	<li key=0>小张---18</li>
    	<li key=1>小李---19</li>
   	更新后的数据
   		{id:3,name:'小陈',age:20},
   		{id:1,name:'小张',age:18},
        {id:2,name:'小李',age:19},
    更新数据后的虚拟DOM：
    	<li key=0>小陈---20</li>
    	<li key=1>小李---19</li>
    	<li key=2>小张---18</li>
   	然后这个虚拟DOM根据 key 与上方初始虚拟DOM对比，发现全部对比不上，所以只能全部重新渲染 
```

使用数据的唯一标识（id）作为key，是不会有这个问题的









# 生态

- React、react-router、Axios、Redux、Ant-design(蚂蚁金服UI库)
- 小程序：taro(多端开发)
- 整合：DVA（简化API）
- 脚手架：create-react-app

# 脚手架

## 基础使用

安装脚手架：`npm install -g create-react-app`

判断状态：`create-react-app -V`

成功会显示版本号

创建项目：`create-react-app 项目名`

启动项目：`npm start`

使用 React 最好使用 yarn，因为都是 Facebook 出品的



## 项目目录

生成项目后有查看 package.json，可以看到如下四个命令

![image-20230504204054547](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504204054547.png)

对应如下：

- start：启动项目
- build：打包项目
- test：测试项目
- eject：react 把所有 webpack 的配置文件都给隐藏了，如果使用这个命令，将会把所有 webpack 相关的配置文件都暴露出来 

![image-20230504211020440](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504211020440.png)

文件目录：

- public：静态资源文件夹
  - favicon.icon 网站页签图标
  - index.html 主页面
  - logo192.png logo图
  - logo512.png logo图
  - manifest.json 应用加壳的配置文件
  - robots.txt 爬虫协议文件
- src：源码文件夹
  - App.css App组件的样式
  - App.js App组件
  - App.test.js 用于给 App做测试
  - index.css 入口文件
  - logo.svg logo图
  - reportWebVitals.js 页面性能分析文件（需要 web-bitals 库的支持）
  - setupTests.js 组件单元测试的文件（需要 jest-dom 库的支持） 

一般来说，我们都这样写，然后在需要使用此组件的父组件中导入

![image-20230504214956321](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504214956321.png)

当然，如同Vue，我们也可以这样写，然后只需要导入`import Hello from './components/Hello'`即可

![image-20230504215214618](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504215214618.png)

由于使用 .js 结尾很难分清，哪个是组件文件，哪个是 js 文件，那么我们都可以把组件文件以 jsx 结尾，这样的话，一看到 jsx 结尾的文件，就知道是组件了

![image-20230504220005872](C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504220005872.png)

## 样式的模块化

如果多个模块都叫一个类名，那么类名之间一定会产生冲突，有两种解决方法：

1. 使用 less：

   ```less
   .Hello{
   	.title {
   		color:red
   	}
   }
   .Welcome {
   	.title {
   		color:orange
   	}
   }
   ```

2. 使用样式模块化：把 css 样式的后缀改成 .module.css ，然后就可以这样进行导入：`import Hello from 'index.module.css'`，然后使用样式：`class={Hello.title}`

   <div style="display:flex">
       <div style='flex:2'>
           <img src='C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504221003634.png'/>
       </div>
    	<div>
       <img src='C:\Users\chen2\AppData\Roaming\Typora\typora-user-images\image-20230504221015320.png' style='flex:1'/>        
       </div>

## 创建React快捷键

1. rcc+tab键：用ES6模块系统创建一个React组件类

   ```jsx
   import React, {Component} from 'react';
   
   class Test extends Component {
       render() {
           return (
               <div>
                   
               </div>
           );
       }
   }
   
   export default Test;
   ```

2. rccp+tab键：创建一个带有PropTypes和ES6模块系统的React组件类

   ```jsx
   import React, {Component} from 'react';
   import PropTypes from 'prop-types';
   
   class Test extends Component {
       render() {
           return (
               <div>
                   
               </div>
           );
       }
   }
   
   Test.propTypes = {};
   
   export default Test;
   ```

3. rcfc+tab键：创建一个带有PropTypes和所有生命周期方法以及ES6模块系统的React组件类

   ```jsx
   import React, {Component} from 'react';
   import PropTypes from 'prop-types';
   
   class Test extends Component {
       constructor(props) {
           super(props);
   
       }
   
       componentWillMount() {
   
       }
   
       componentDidMount() {
   
       }
   
       componentWillReceiveProps(nextProps) {
   
       }
   
       shouldComponentUpdate(nextProps, nextState) {
   
       }
   
       componentWillUpdate(nextProps, nextState) {
   
       }
   
       componentDidUpdate(prevProps, prevState) {
   
       }
   
       componentWillUnmount() {
   
       }
   
       render() {
           return (
               <div>
   
               </div>
           );
       }
   }
   
   Test.propTypes = {};
   
   export default Test;
   ```

4. rcjc+tab键：用ES6模块系统创建一个React组件类（无导出）

   ```jsx
   class Test extends Component {
       render() {
           return (
               <div>
                   
               </div>
           );
       }
   }
   ```

5. **rdp+tab键**：快速生成defaultProps

   ```javascript
   .defaultProps = {
       
   };
   ```

6. **rpc+tab键**：用PropTypes和ES6 moudle系统创建一个React纯组件类

   ```javascript
   import React, {PureComponent} from 'react';
   import PropTypes from 'prop-types';
   
   class Test extends PureComponent {
       render() {
           return (
               <div>
                   
               </div>
           );
       }
   }
   
   Test.propTypes = {};
   export default Test;
   ```

7. **rrc+tab键**：创建一个连接到redux的React组件类

   ```jsx
   import React, {Component} from 'react';
   import {connect} from 'react-redux';
   
   function mapStateToProps(state) {
       return {};
   }
   
   class Test extends Component {
       render() {
           return (
               <div>
                   
               </div>
           );
       }
   }
   
   export default connect(
       mapStateToProps,
   )(Test);
   ```

8. **rrdc+tab键**：创建一个通过dispatch连接到redux的React组件类

   ```javascript
   import React, {Component} from 'react';
   import {connect} from 'react-redux';
   
   function mapStateToProps(state) {
       return {};
   }
   
   function mapDispatchToProps(dispatch) {
       return {};
   }
   
   class Test extends Component {
       render() {
           return (
               <div>
                   
               </div>
           );
       }
   }
   
   export default connect(
       mapStateToProps,
   )(Test);
   ```

9. **rsc+tab键**：创建没有PropTypes和ES6模块系统的无状态React组件

   ```javascript
   import React from 'react';
   
   const Test = () => {
       return (
           <div>
               
           </div>
       );
   };
   
   export default Test;
   复制代码
   ```

10. **rscp+tab键**：创建有PropTypes和ES6模块系统的无状态React组件

    ```jsx
    import React from 'react';
    import PropTypes from 'prop-types';
    
    const Test = props => {
        return (
            <div>
    
            </div>
        );
    };
    
    Test.propTypes = {
        
    };
    
    export default Test;
    ```

11. rsf+tab键**：以命名函数的形式创建无状态的React组件，不使用PropTypes

    ```jsx
    import React from 'react';
    
    function Test(props) {
        return (
            <div></div>
        );
    }
    
    export default Test;
    ```

    

12. **rsfp+tab键**：使用PropTypes将无状态的React组件作为命名函数创建

    ```jsx
    import React from 'react';
    import PropTypes from 'prop-types';
    
    Test.propTypes = {
        
    };
    
    function Test(props) {
        return (
            <div></div>
        );
    }
    
    export default Test;
    ```

13. **rsi+tab键**：创建无状态的React组件，不使用PropTypes和ES6模块系统，但使用隐式返回和道具

    ```jsx
    import React from 'react';
    
    const Test = (props) => (
        
    );
    
    export default Test;
    ```

14. **rwwd+tab键**：在没有导入的情况下，在ES6模块系统中创建一个有构造函数、空状态、proptypes和导出的React组件类。(主要用于React时，proptype由webpack提供插件提供)

    ```jsx
    class Test extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {};
    
        }
    
        render() {
            return (
                <div>
                    
                </div>
            );
        }
    }
    
    Test.propTypes = {};
    
    export default Test;
    ```

