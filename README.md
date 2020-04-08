
# Yet-Another-Password-Keeper

yet another passowrd keeper app based on Electron.

for safe, app is opensource, so anyone can check the source code.

for easily backup, app use local SQLite database file to store password info, so you can keep the database file anytime you want.

## TODO

+ [✓][实现] 主框架
+ [][实现] 页面设计细化、图标设计等
+ [][实现] SQLite操作库
+ [][实现] Electron主进程和渲染进程通信
+ [][实现] 添加、修改、删除、展示密码
+ [✓][实现] app打包

+ [✓][功能调研] 视频采集
+ [✓][功能调研] capture桌面
+ [?][功能调研] capture音频：同 capture桌面 功能，使用 Electron desktopCapturer 模块，这里没有试验
+ [][功能调研] 音视频recorder、mixer、converter
+ [][功能调研] 推流

以上，功能调研部分，借助这里的环境进行试验，后续会删除。

## 附件

### 1 开发备忘录

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
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── appLeftBar.tsx
│   │   ├── appRightBar.tsx
│   │   ├── camera.tsx
│   │   └── desktop.tsx
│   ├── css
│   │   └── index.css
│   ├── electron.ts
│   ├── index.html
│   └── index.tsx
├── tsconfig.json
└── webpack.config.js

```

### 2 How To Build An Electron App From Scratch

根据参考中的文章，一步一步操作。

### 3 参考文章

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
+ [Electron 使用 Webpack2 打包应用程序](https://www.jianshu.com/p/fa54b3325fb1)，[Electron-builder打包应用程序策略](https://www.cnblogs.com/leejay6567/p/10092962.html)，[File Patterns](https://www.electron.build/file-patterns)，[Multi Platform Build](https://www.electron.build/multi-platform-build)，[你不知道的 Electron (二)：了解 Electron 打包](https://imweb.io/topic/5b6817b5f6734fdf12b4b09c)，[electron-builder打包见解](https://segmentfault.com/a/1190000016695922)
+ [Loading Fonts with webpack](https://chriscourses.com/blog/loading-fonts-webpack)
+ [Loading Images](https://webpack.js.org/guides/asset-management/#loading-images)，[typescript项目中import 图片时报错：TS2307: Cannot find module ‘...’](https://www.cnblogs.com/chen-cong/p/10445635.html)
+ [Form Inputs with inset icons](https://github.com/connors/photon/issues/14)，[sass-loader](https://webpack.js.org/loaders/sass-loader/)
+ [Developing ElectronJS applications with SQLite3](https://www.youtube.com/watch?v=c76FTxLRwAw)，[knex](http://knexjs.org/#Installation)，[electron-rebuild failure with sqlite3](https://github.com/electron/electron-rebuild/issues/204)
+ [Module not found: Error: Can't resolve 'aws-sdk'](https://github.com/webpack/webpack/issues/8400)，[Webpack node modules externals](https://www.npmjs.com/package/webpack-node-externals)
+ [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/modules.html)，[TypeScript Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
+ [Electron: Change React component state from main.js](https://stackoverflow.com/questions/47440798/electron-change-react-component-state-from-main-js)，[TypeError: Cannot read property 'updater' of undefined](https://github.com/facebook/react/issues/9654)，[Updating an object with setState in React](https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react)
+ [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

