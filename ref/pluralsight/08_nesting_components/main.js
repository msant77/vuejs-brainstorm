Vue.component('task-list', {
  template : '<div><task v-for="task in tasks">{{task.description}}</task></div>',
  data: () => {
    return { 
      tasks : [
        { description : 'Go to the market', completed : false},
        { description : 'Go to the bakery', completed : false},
        { description : 'Go to the dance club', completed : false},
        { description : 'Go to the coffee shop', completed : false},
        { description : 'Go to the rental store', completed : false}   
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});
 

new Vue({
  el : '#root'
})