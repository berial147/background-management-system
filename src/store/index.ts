import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './type'

import loginModule from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Kylin',
      age: 21
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

// 对store中的数据进行初始化
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

// 为state在Vue+TS中更好用
export function useStore(): Store<IStoreType> {
  // 依然是调用vuex的useStore
  return useVuexStore()
}

export default store
