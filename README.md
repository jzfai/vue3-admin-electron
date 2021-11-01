# vue3-admin-electron

**English** | [中文](./README-zh_CN.md)

> This is a basic vue3 admin electron desktop platform. Contains the most basic electron development and construction steps and the use of demo, a set of codes can be packaged for win, mac, linux platform applications at the same time.

A new  generation Cross-desktop framework   using  electron13+vue3(setup-script)+vite2+element-plus ，It's fast!

Use eslint+prettier+gitHooks format and verification code to improve code standardization and development efficiency


## Update log

```javascript
//11-01
add demo of electron
```

## Online experience(Download the installation package, unzip and install the experience)

![link](https://pan.baidu.com/s/1UUWwh1Zx_C_c4pxL2m9zQA)
password：4293

## Demo
-- win
![electron-win-demo](http://8.135.1.141/file/images/electron-win-demo.png)
-- mac
![electron-mac-demo](http://8.135.1.141/file/images/electron-mac-demo.png)

## Related items

The framework is available in js, ts, plus and  electron versions
- electron version:[vue3-admin-electron](https://github.com/jzfai/vue3-admin-electron.git
- js version：[vue3-element-admin](https://github.com/jzfai/vue3-admin-electron.git)
- ts version：[vue3-element-ts](https://github.com/jzfai/vue3-admin-ts.git)
- js version for plus：[vue3-element-plus](https://github.com/jzfai/vue3-admin-plus.git)
- react version： [react-admin-template](https://github.com/jzfai/react-admin-template.git)
- java Micro-service background data：[micro-service-plus](https://github.com/jzfai/micro-service-plus)
> development and  experience：two words  Really fragrant！！！！！

## Documents

-- Efforts are being made to develop documents ......


#### Comparison of performance between vue3 and vue2

- 41% reduction in package size

- The initial rendering is 55% faster, the update rendering is 133% faster

- Memory reduction 54%

- **Use Proxy instead of defineProperty to implement data responsiveness**

- **Rewrite the implementation of virtual DOM and Tree-Shaking**


[Comparison of packaging speed between vite2 and webpack](https://github.com/jzfai/vue3-admin-electron/issues/2)

## Build Setup

```bash
# clone the project
git clone https://github.com/jzfai/vue3-admin-electron.git

# enter the project directory
cd vue3-admin-electron

# install dependency(Recommend use yarn)
yarn

# develop(Page hot load, electron related modules will not be hot loaded, if you need to load both of them, you can use "yarn run electron:nodemon" to start in nodemon mode)
yarn run electron:dev
```

## Build

```bash
# build for production environment
yarn run electron:build
> Note: The packaged exe is packaged with the windows system, and the packaged dmg is packaged with the mac system. Separate as much as possible
```

## Others

```bash
# code format check
yarn run lint

```

## Extra

Architecture development is not easy. If you feel good, please give me a compliment. The architecture is still being improved. Welcome to join me in development and become Contributors together! ! ! !

## Browsers support

Note: Vue3 is not supported the Internet Explorer

Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
|Edge| last 2 versions| last 2 versions| last 2 versions

## Discussion and Communication
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## License

[MIT](https://github.com/jzfai/vue3-admin-electron/blob/master/LICENSE) license.

Copyright (c) 2021-present  kuanghua

