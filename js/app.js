var vueApp = new Vue({
  el:'#vue-app',
  data: {
    name:'Quentin',
    job: 'a little bit of everything',
    website: 'http://quentinjoseph.com/',
    websiteTag:'<a href="http://quentinjoseph.com/" target="_blank">Link to my page</a> ',
    age: 100,
    name2:'',
    age2:'',
    selected: false,
    unselected:false
  },
  methods:{
    add: function(){
      this.age++;
    },
    subtract: function(){
      this.age--;
    },
    greet: function(when){

      return 'hooray' + when + this.name + ' is learning stuff';
    },
    logName: function(){
      console.log('you entered your name');
    },
    logAge: function(){
      console.log('you entered your age');
    }
  },
  computed:{
    compClasses:function(){
      return {
        selected: this.selected,
        unselected: this.unselected
      }
    }
  }
});

var vueApp2 = new Vue({
  el:'#vue-app2',
  data:{
    tester: 'hey hello'
  }
});
