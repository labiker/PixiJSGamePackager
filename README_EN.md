# PixiJSGamePackager
A packager that can pack PixiJS Game into Windows application.

### **[简体中文版](/README.md)**

# Why I made this
Although PixiJS game is usually a casual game with a short process, it is also very convenient to play in the browser. But sometimes we want to develop some games with a longer process, even need to use save and load, then we need a tool that can package the game into a local application.

PixiJS game packager is born to solve this problem. It is developed on the basis of [electron-app](https://www.electronforge.io/) in the webpack-typescript template, which can package your PixiJS game into a Windows application, so that your game can run in the local environment.

In the repository, I have provided the package of [bubbo-bubbo](https://github.com/pixijs/open-games/tree/main/bubbo-bubbo) in [open-games](https://github.com/pixijs/open-games) of [PixiJS](https://github.com/pixijs) for you to test. You can find them [here](/dist).

# How to use
## 1. Install dependencies
```shell
npm install
```

## 2. Package
```shell
npm run package
```

# How to package your own game into a Windows application

## 1. Package the game into a web application, and put the packaged product into the empty `dist` directory
It is recommended to use [bubbo-bubbo](https://github.com/pixijs/open-games/tree/main/bubbo-bubbo) in [open-games](https://github.com/pixijs/open-games) of [PixiJS](https://github.com/pixijs) as the game template for development, and package it into a web application.

Then, empty the contents of the [dist](/dist) folder and put the packaged product into the directory.

After processing, the file structure of `dist` should be like this:
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

## 2. Modify index.html

Modify the [index.html](./dist/index.html) file in the `dist` directory, and replace the content of the `title` tag with the name of your game.

Then, find the following line of code in the file:
```html
<script type="module" crossorigin src="/assets/index-xxx.js"></script>
```

Modify it to the following, otherwise the program will not be able to find the file:
```html
<script type="module" crossorigin src="./assets/index-xxx.js"></script>
```

## 3. Modify `package.json`

According to the content of your game, replace the information of `name`, `productName`, `description`, `author` and other fields.

## 4. Replace the game icon

Replace the icon [here](/icons/win/) with the icon of your game.

It is recommended to use [IcoConvert](https://icoconvert.com/) to convert the icon to the required format.

## 5. Package

```shell
npm run package
```

After the packaging is completed, you can find the packaged product in the `out` directory.

Play and have fun on the windows application!