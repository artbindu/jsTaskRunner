/** 
* Copyright 2023-2024 Biswasindhu Mandal 
* Licensed under MIT (https://github.com/artbindu/jsTaskRunner/blob/main/README.md) 
* bundle.js - v1.0.0 - 2024-03-31  
*/ 
'use strict';
"use strict";function mainBody(){var e=document.createElement("h1");return e.textContent="This is First Rollup Project",e}function main(){var e=document.getElementById("main");e.appendChild(mainBody()),e.appendChild(module()),console.log("log: This is Parent Root")}function logTesting(){console.log("console log"),console.info("console info"),console.debug("console debug"),console.warn("console warn"),console.error("console error")}function addImage(){var e=document.createElement("img"),o=(e.id="my_logo",document.createElement("div"));return o.appendChild(e),o}function module(){console.log("This is Child 001");var e=document.createElement("h2");return e.className="cl2",e.id="id2",e.textContent="This is Module Page",e.appendChild(addImage()),e}logTesting(),main();