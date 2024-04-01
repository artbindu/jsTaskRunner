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