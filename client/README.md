### 本地开发过程

首先在 client/ 目录下添加一个配置文件

```
cp config.default.js config.js
```

config.js 文件的内容如下

```
export default {
  docRepo: '/Users/peter/nervos/ncourse', // 指定课程目录
  gitHubRepo: 'https://github.com/happypeter/ncourse/blob/master' // 课程 GitHub 地址
}
```

然后安装包并启动项目

```
yarn
yarn start
```

### 本地编译过程

```
yarn build
```

此时 client/ 目录下出现一个新的 dist 目录, 这就是项目编译后的静态文件存放的地方。

执行下面命令，可以看到项目编译后的运行结果

```
yarn serve
```
