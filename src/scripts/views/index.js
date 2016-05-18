var indexTpl = require('../tpl/index.string');

// 定义一个视图
SPA.defineView('index',{
	html: indexTpl,
	
	//定义子视图
	modules:[{
		name:'content',
		views:['home','love','my'],
		container:'.m-content',
		defaultTag:'home'
	}],
	
	plugins:[
		'delegated'
	],
	
	bindActions: {
		'tap.switch':function(e,data) {
			
			this.modules.content.launch(data.tag);
			console.log(data);
		}
	}
});



