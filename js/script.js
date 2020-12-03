let info = {
  Title: "Welcome to testurl.com...",
  "Meta Description": "Our website is all about...",
  "<h1>": "Our awsome main header...",
  "<h2>": "Our services, What we offer, ...",
  "Number of missing alt-attributes": "23",
  "contains <meta viewport.../>": "false",
};
let url = {
  url: "https://www.testurl.com/products",
};
function WriteInfo(info) {
  let main = document.querySelector("main");
  main.innerHTML = "";
  for (key in info) {
    let section = document.createElement("section");
    let h6 = document.createElement("h6");
    let p = document.createElement("p");
    h6.innerText = key;
    p.innerText = info[key];
    section.appendChild(h6);
    section.appendChild(p);
    main.appendChild(section);
  }
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  url[url] = e.target.elements.URL.value;
  console.log(url[url]);
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

WriteInfo(info);
