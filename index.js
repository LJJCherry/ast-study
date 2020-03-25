const parser = require("@babel/parser");
const generator = require("@babel/generator").default;
const types = require("@babel/types");
const traverse = require("@babel/traverse").default;
const fs = require("fs");

let code = `function test(){
    console.log('ljj')
}`;

function compile(code) {
  // 1、parse 将js转换成AST抽象语法树
  ast = parser.parse(code);
  // 2 traverse 遍历AST抽象语法树
  const visitor = {
    CallExpression: function(path) {
      const { callee } = path.node;
      //   fs.writeFileSync("test.json", JSON.stringify(path.node));
      // 判断是否是console.log
      const isConsole =
        types.isMemberExpression(callee) &&
        callee.object.name === "console" &&
        callee.property.name === "log";

      if (isConsole) {
        // 获取函数名称
        const funcPath = path.findParent(p => {
          return p.isFunctionDeclaration();
        });
        const funcName = funcPath.node.id.name;

        path.node.arguments.unshift(types.stringLiteral(funcName));
      }
    }
  };
  traverse(ast, visitor);

  return generator(ast, {}, code);
}
console.log(compile(code).code);
