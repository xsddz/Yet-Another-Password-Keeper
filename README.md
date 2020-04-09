
# Yet-Another-Password-Keeper

yet another passowrd keeper app based on Electron.

for safe, app is opensource, so anyone can check the source code.

for easily backup, app use local SQLite database file to store password info, so you can keep the database file anytime you want.

## TODO

### master

+ [x] 主框架
+ [x] 页面设计细化、图标设计等
+ [x] SQLite操作库
+ [x] Electron主进程和渲染进程通信
+ [x] 添加、修改、展示、~~删除~~
+ [ ] 密码展示处理、复制
+ [ ] when app start, before show react render page, it show index.html empty page first issue 
+ [ ] how to add perload.js
+ [x] app打包

### featrue

功能调研部分，借助这里的环境进行试验，后续会删除。

+ [x] 视频采集
+ [x] capture桌面
+ [x] capture音频：同 capture桌面 功能，使用 Electron desktopCapturer 模块，这里没有试验
+ [ ] 音视频recorder、mixer、converter
+ [ ] 推流

## 附件

### 技术栈选型

electron + typescript + react + sass + webpack

+ a. 为什么采用 typescript？

  都说挺好的，毕竟有类型系统。

+ b. 为什么采用 react？

  react刚出的时候，研究过，有一定的熟悉感；听人说react才是王道。

+ c. 为什么使用sass？

  很早之前了解过一些，比起一点点写css，继承的写法，省心。

### 开发备忘录

```
# 克隆这仓库
$ git clone https://github.com/xsddz/Yet-Another-Password-Keeper.git
# 进入仓库
$ cd Yet-Another-Password-Keeper
# 安装依赖库
$ npm install
# 运行应用
$ npm start
```

目录结构如下：

```
Yet-Another-Password-Keeper
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── appLeftContent.tsx
│   │   ├── appRightContent.tsx
│   │   ├── camera.tsx
│   │   └── desktop.tsx
│   ├── css
│   ├── fonts
│   ├── img
│   ├── electron.ts
│   ├── index.html
│   ├── index.tsx
│   └── modules
│       ├── images.d.ts
│       └── passdb.ts
├── tsconfig.json
└── webpack.config.js
```

### How To Build An Electron App From Scratch

根据参考中的文章，一步一步操作。

### 参考文章

+ [Electron 文档](https://www.electronjs.org/docs)
+ [Getting Started with Electron, Typescript, React and Webpack](https://www.sitepen.com/blog/getting-started-with-electron-typescript-react-and-webpack/)
+ [入门教程: 认识 React](https://zh-hans.reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code)，[State & 生命周期](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)
+ [TypeScript+React入门-----引入css](https://segmentfault.com/a/1190000017404282)
+ [Module not found: Error: Can't resolve 'ReactDOM' - reactjs](https://html.developreference.com/article/11455919/Module+not+found%3A+Error%3A+Can%27t+resolve+%27ReactDOM%27)
+ [Full Height and Width "Web App" Style Layout Tutorial](https://www.youtube.com/watch?v=Nx0aYVwhwqQ&list=PLE4oxngl2zsozlg65XoNogjhCtGE742JV&index=3&t=0s)
+ [electron 仿制QQ登录界面](https://segmentfault.com/a/1190000016763275)
+ [desktop capture does not work on version 8.0.1 !!!](https://github.com/electron/electron/issues/22391)，对比发现系中文文档不是最新的！！！！！！
+ [Building a responsive camera component with React Hooks](https://blog.logrocket.com/responsive-camera-component-react-hooks/)
+ [Invalid Hook Call Warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)
+ [npn install 卡住](https://github.com/electron/electron/issues/20841)，[electron-download](https://www.npmjs.com/package/electron-download)
+ [npm --save-dev --save 的区别](https://segmentfault.com/a/1190000010686415)
+ [Electron 使用 Webpack2 打包应用程序](https://www.jianshu.com/p/fa54b3325fb1)，[Electron-builder打包应用程序策略](https://www.cnblogs.com/leejay6567/p/10092962.html)，[File Patterns](https://www.electron.build/file-patterns)，[Multi Platform Build](https://www.electron.build/multi-platform-build)，[你不知道的 Electron (二)：了解 Electron 打包](https://imweb.io/topic/5b6817b5f6734fdf12b4b09c)，[electron-builder打包见解](https://segmentfault.com/a/1190000016695922)，[Mac: "your.app.category.type" ??](https://github.com/electron-userland/electron-builder/issues/836)，[LSApplicationCategoryType](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)
+ [Loading Fonts with webpack](https://chriscourses.com/blog/loading-fonts-webpack)
+ [Loading Images](https://webpack.js.org/guides/asset-management/#loading-images)，[typescript项目中import 图片时报错：TS2307: Cannot find module ‘...’](https://www.cnblogs.com/chen-cong/p/10445635.html)
+ [Form Inputs with inset icons](https://github.com/connors/photon/issues/14)，[sass-loader](https://webpack.js.org/loaders/sass-loader/)
+ [Developing ElectronJS applications with SQLite3](https://www.youtube.com/watch?v=c76FTxLRwAw)，[knex](http://knexjs.org/#Installation)，[electron-rebuild failure with sqlite3](https://github.com/electron/electron-rebuild/issues/204)
+ [Module not found: Error: Can't resolve 'aws-sdk'](https://github.com/webpack/webpack/issues/8400)，[Webpack node modules externals](https://www.npmjs.com/package/webpack-node-externals)
+ [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/modules.html)，[TypeScript Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
+ [Electron: Change React component state from main.js](https://stackoverflow.com/questions/47440798/electron-change-react-component-state-from-main-js)，[TypeError: Cannot read property 'updater' of undefined](https://github.com/facebook/react/issues/9654)，[Updating an object with setState in React](https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react)
+ [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
+ [Passing Data Between React Components — Parent, Children, Siblings](https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf)，[You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
+ [Why can't I change my input value in React even with the onChange listener](https://stackoverflow.com/questions/41736213/why-cant-i-change-my-input-value-in-react-even-with-the-onchange-listener)
+ [React onClick get li clicked](https://www.freecodecamp.org/forum/t/react-onclick-get-li-clicked-solved/68112)
+ [javascript Date format(js日期格式化)](https://www.cnblogs.com/zhangpengshou/archive/2012/07/19/2599053.html)
+ [UL or DIV vertical scrollbar](https://stackoverflow.com/questions/4102832/ul-or-div-vertical-scrollbar/4102846)
+ [electron-with-sqlite3](https://github.com/tarikguney/electron-with-sqlite3/blob/master/index.js)，[__dirname returns '/' when js file is built with webpack](https://github.com/webpack/webpack/issues/1599#issuecomment-186841345)
