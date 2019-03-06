首先在 client/ 目录下添加一个配置文件

```
cp config.default.js config.js
```

config.js 文件的内容如下

```
export default {
  docRepo: '/Users/peter/nervos/ncourse',
  gitHubRepo: 'https://github.com/happypeter/ncourse/blob/master'
}
```

先把之前编译项目生成的 client/dist 目录删除，然后再编译项目，

```
rm -rf dist
yarn build
```

此时 client/ 目录下出现一个新的 dist 目录
