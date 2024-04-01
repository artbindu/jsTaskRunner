/** 
* Copyright 2023-2024 Biswasindhu Mandal 
* Licensed under MIT (https://github.com/artbindu/jsTaskRunner/blob/main/README.md) 
* bundle.js - v1.0.0 - 2024-03-31  
*/ 
'use strict';
// import { module } from "./module/module";
// import './index.css';

function mainBody() { 
    var el = document.createElement("h1");
    el.textContent = "This is First Rollup Project";
    return el;
}
function main() {
    var d = document.getElementById("main");
    d.appendChild(mainBody());
    d.appendChild(module());
    console.log('log: This is Parent Root');
}
function logTesting() {
    console.log('console log');
    console.info('console info');
    console.debug('console debug');
    console.warn('console warn');
    console.error('console error');
}

(function () {
    logTesting();
    main(); 
})();
// import './module.css';

function addImage() {
    var x = document.createElement("img");
    x.id = "my_logo";
    // x.setAttribute("src", "./images/logo.png");
    // x.setAttribute("width", "200px");
    // x.setAttribute("height", "200px");

    var el = document.createElement("div");
    el.appendChild(x);
    return el;
}

// export 
function module() {
    console.log('This is Child 001');
    var el = document.createElement("h2");
    el.className = "cl2";
    el.id = "id2";
    el.textContent = "This is Module Page";
    el.appendChild(addImage());
    return el;
}