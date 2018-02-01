let Home = {
  template: '<div><h1 class="page-header">Home</h1></div>'
};

let Contact = {
  template: '<div><h1 class="page-header">Contact</h1></div>'
};

let routes = [
  { path: '/', component: Home},
  { path: '/contact', component: Contact}
];

let router = new VueRouter({ routes });

let app = new Vue({ router }).$mount('#app');
