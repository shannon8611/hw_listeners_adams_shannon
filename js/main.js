var i = 1;
function clicker() {
    var para = document.createElement('P');
    var t = document.createTextNode('This is click number ' + i++);
    para.appendChild(t);
    document.body.appendChild(para);
}

document.getElementById('numclick').addEventListener('click', clicker);
