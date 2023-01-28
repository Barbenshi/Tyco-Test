import { createStore } from 'vuex'
import itemModule from './modules/item-module'

const storeOptions = {
    strict: true,
    modules: {
      itemModule,
    },
}


export const store = createStore(storeOptions)