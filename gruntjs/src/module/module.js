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