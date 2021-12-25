# vue3-admin-electron

**中文** | [English](./README.md)

> 这是一个基础的 vue3 admin electron 桌面端平台。包含最基本的electron开发构建步骤和使用demo，一套代码可同时打包 win,mac, linux 平台应用。

本架构使用的技术为：electron13+vue3(setup-script)+vite2+element-plus的新一代的跨桌面端框架，It's easy and fast!

使用 eslint+prettier+gitHooks 格式和校验代码,提高代码规范性和开发效率

## 更新日志

```javascript
//12-25
update electron to 16.x
sync to vue-admin-plus@1.3.5
```

## 线上体验(下载安装包并安装体验)
github 地址：  https://github.com/jzfai/vue3-admin-electron.git

链接: https://pan.baidu.com/s/1UUWwh1Zx_C_c4pxL2m9zQA

提取码：4293

## 例子

#### -- win
![electron-win-demo](http://8.135.1.141/file/images/electron-win-demo.png)

#### -- mac
![electron-mac-demo](http://8.135.1.141/file/images/electron-mac-demo.png)
## 相关项目

框架有js，ts，plus和electron版本
- electron版本:[vue3-admin-electron](https://github.com/jzfai/vue3-admin-electron.git)
- js版本：[vue3-element-admin](https://github.com/jzfai/vue3-admin-template.git)
- ts版本：[vue3-element-ts](https://github.com/jzfai/vue3-admin-ts.git)
- js实例参考plus版本：[vue3-element-plus](https://github.com/jzfai/vue3-admin-plus.git)
- react版本： [react-admin-template](https://github.com/jzfai/react-admin-template.git)
- java微服务后台数据：[micro-service-plus](https://github.com/jzfai/micro-service-plus)

> 开发和使用感受：两个字 真香！！！！！

## 文档
-- 文档努力开发中。。。。

vue3和vue2在性能上的对比

- 打包大小减少41%

- 初次渲染快55%, 更新渲染快133%

- 内存减少54%

- **使用Proxy代替defineProperty实现数据响应式**

- **重写虚拟DOM的实现和Tree-Shaking**

[vite2和webpack打包速度上的对比](https://github.com/jzfai/vue3-admin-electron/issues/2)

## 构建步骤

```bash
# 克隆项目
git clone https://github.com/jzfai/vue3-admin-electron.git

# 进入项目目录
cd  vue3-admin-electron

# 安装依赖(建议用yarn)
yarn

# 启动服务（页面热加载，electron相关模块不会热加载，如果需要两个都热加载可以使用 yarn run electron:nodemon，以nodemon方式启动）
yarn run electron:dev
```

## 发布

```bash

# 构建打包
yarn run electron:build
> 注：打包exe用windows系统打包，打包dmg用mac系统打包，尽量分开
```

## 其它

```bash
# 代码格式检查并自动修复
yarn run lint
```

## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - serve
  - build
  - priview
  - lint

- 全局功能
  #- 国际化多语言
  #- 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  #- Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  #- JSON 等多格式

#- Excel
  #- 导出excel
  #- 导入excel
  #- 前端可视化excel
  #- 导出zip

- 表格
  - 动态表格
  #- 拖拽表格
  #- 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  #- 拖拽Dialog
  #- 拖拽Select
  #- 拖拽看板
  #- 列表拖拽
  #- SplitPane
  #- Dropzone
  #- Sticky
  #- CountTo

- 综合实例
- 错误日志
- Dashboard
#- 引导页
- ECharts 图表
#- Clipboard(剪贴复制)
#- Markdown2html
```

>注：#---暂未实现(希望大家能一起开发)

## 额外

架构开发不易，如果感觉好，请给我点个赞憋，架构还在不断完善中，欢迎加入我开发，一起成为Contributors ！！！！

## 浏览器支持

注意：vue3不在支持IE浏览器
Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
|Edge| last 2 versions| last 2 versions| last 2 versions

## 讨论和交流(含electron跨桌面端视频教程)
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## 版本

[MIT](https://github.com/jzfai/vue3-admin-electron/blob/master/LICENSE) license.

Copyright (c) 2021-present  kuanghua



