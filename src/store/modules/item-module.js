import { itemService } from '../../services/item.service'

export default {
  state: {
    items: null,
    categories:null,
    filterBy: {
      categoryId: '',
    },
  },
  getters: {
    items(state) {
      return state.items
    },
    categoriesMap(state){
      return state.categories
      ? 
      state.categories.reduce((acc,{name,id,child})=>{
        acc.push({id, name})
        if(child) child.forEach(({id,name})=>{
          acc.push({id,name})
        })
        return acc
      },[])
      :
      []
    }
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items
    },
    setCategories(state, {categories}){
      state.categories = categories
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadItems({ commit, state }) {
      itemService.query({...state.filterBy}).then(({items, categories}) => {
        commit({ type: 'setItems', items })
        commit({type:'setCategories', categories})
      })
    },
  },
}
