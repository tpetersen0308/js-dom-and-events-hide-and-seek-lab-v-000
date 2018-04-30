function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested .target");
}

function deepestChild() {
  let node = document.querySelector("div#grand-node");
  
  while (node.querySelector("div")) {
    node = node.querySelector("div");
  }

  return node;
}

function increaseRankBy(n) {
  const nodes = document.querySelectorAll("ul.ranked-list li");
  
  for (let item of nodes) {
    item.innerHTML = (parseInt(item.innerHTML) + n).toString();
  }
}