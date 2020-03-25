#### AST 转换示例代码

输入代码

```
function test() {
  console.log('ljj');
}
```

输出代码

```
function test() {
  console.log('test', 'ljj');
}
```

#### 用 babel AST 的转换过程

1、@babel/parser 将 js 代码转化成 AST 抽象语法树

2、@babel/traverse 对 AST 节点进行遍历递归

3、@babel/types 对具体的 AST 节点进行修改

4、@babel/generator AST 抽象语法树 —》转成新的 js 代码

#### 扩展链接

ast 线上转换地址：[链接](https://astexplorer.net/)

> @babel/parser 是基于 acorn

由源码生成的图形化语法树： [链接](https://resources.jointjs.com/demos/javascript-ast)

#### 参考教程：

偏右的[《AST 入门》](https://www.bilibili.com/video/BV13t411q7hD?from=search&seid=18263652192222066509)
