// 引入模板
var loveTpl = require('../tpl/love.string');

// 定义一个视图
SPA.defineView('love', {
  // 将模板写在body里
  html: loveTpl,

  plugins: [
    'delegated'
  ],

  bindActions: {

  }
});




