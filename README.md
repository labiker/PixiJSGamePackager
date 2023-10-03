# PixiJSGamePackager
A packager that can pack PixiJS Game into Windows application.

### **[English Version](/README_EN.md)**

# 为什么要做这个
虽然 PixiJS game 通常是一些流程较短的休闲游戏，在浏览器上游玩也非常方便，但是有时我们会想要开发一些流程较长的游戏，甚至需要用到存档和读档，这时候就需要一个可以将游戏打包成本地应用的工具了。
PixiJS game packager 正是为了解决这个问题而生的。它是在 webpack-typescript 模板的 [electron-app](https://www.electronforge.io/) 的基础上进行开发的，可以将你的 PixiJS game 打包成 Windows 应用，让你的游戏可以在本地环境上运行。

在仓库中，我已经提供了 [PixiJS](https://github.com/pixijs) 的 [open-games](https://github.com/pixijs/open-games) 中的 [bubbo-bubbo](https://github.com/pixijs/open-games/tree/main/bubbo-bubbo) 的 package，你可以在[这里](/dist)找到它们。

# 如何使用
## 1. 安装依赖
```shell
npm install
```

## 2.打包
```shell
npm run package
```

# 如何将自己的游戏打包成 Windows 应用

## 1. 将游戏打包成 web 应用后，把打包产物放到清空后的 `dist` 目录下

推荐使用 [PixiJS](https://github.com/pixijs) 的 [open-games](https://github.com/pixijs/open-games) 中的 [bubbo-bubbo](https://github.com/pixijs/open-games/tree/main/bubbo-bubbo) 作为游戏模板，在此基础上进行开发，并将其打包成 web 应用。

接着，清空 [dist](/dist) 文件夹下的所有内容，将打包产物放到该目录下。

经过处理后，`dist` 的文件结构应该是这样的：
```
dist
├── assets
│   └── index-xxx.js
├── audio
|   ├── xxx.mp3
|   ├── xxx.ogg
|   └── ...
├── fonts
|   └── ...
├── images
|   └── ...
├── index.html
```

## 2. 修改 index.html

修改 `dist` 目录下的 [index.html](./dist/index.html) 文件，将其中的 `title` 标签的内容替换成你的游戏的名字。

接着，在该文件中寻找下面这行代码：
```html
<script type="module" crossorigin src="/assets/index-xxx.js"></script>
```

将其修改为下面这样，否则程序将无法找到该文件：
```html
<script type="module" crossorigin src="./assets/index-xxx.js"></script>
```

## 3. 修改 `package.json`

根据你的游戏内容，替换 `name`, `productName`, `description`, `author` 等字段的信息。

## 4. 替换游戏图标

将 [这里](/icons/win/) 的图标替换成你的游戏图标。

推荐使用 [Icon Editor](https://redketchup.io/icon-editor) 进行图标的制作。

## 5. 打包

```shell
npm run package
```

打包完成后，你可以在 `out` 目录下找到你的游戏。

在 windows 应用上开始游戏吧！