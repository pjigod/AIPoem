import { createStore } from 'vuex';

const store =createStore({
  state(){
    return{
      token:'',
    }  
  },
  mutations:{
    set_token(state,token){
      state.token = token 
    },
    del_token(state){
      state.token = '' 
    },
  },
  actions:{

  }
})
export default store
