const module1 = {
  //全局state，类似于vue种的data
  state:{
	vuexmsg: "hello vuex",
	name: "xiaoyue",
},
  //修改state函数 commit
  mutations: {
	updata(state,payload){
		state.name=payload
	}
  },

  //提交的mutation可以包含任意异步操作 dispath
  actions: {},

  //类似于vue中的计算属性
  getters: {},

  //将store分割成模块（module）,应用较大时使用
  modules: {},
};
export default module1