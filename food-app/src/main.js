const app = new Vue({
   el:'#app',
    data:{
first_name:'sowmya',
last_name:'medepalli',
say_hi:false
  },
  methods:{
saySomething:function(){
  this.say_hi=!this.say_hi;
}
  }
});

/*import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');*/
