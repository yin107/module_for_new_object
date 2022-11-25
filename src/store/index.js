import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入modules1模块化通用库（可按项目实际要求增减，将特定组件的通用变量做模块化拆分）
import module1 from './modules/module1'
import module2 from './modules/module2'
// 实例化Vuex.Store,将modules1模块挂载到Store进去（可挂载多个模块如modules2、modules3...），最后将整个Store暴露出去
const store=new Vuex.Store({

modules:{
	a:module1,
	b:module2
}
})
export default store