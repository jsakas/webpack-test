class App {
  constructor() {
    console.log('App constructed!');
    document.getElementById('app').innerHTML = '<h1>Hello, Webpack!</h1>';
  }
}

new App();
