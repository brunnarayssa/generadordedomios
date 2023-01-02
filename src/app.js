/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "my"];
  let adjs = ["great", "big", "awesome"];
  let nouns = ["sitcom", "racoon", "salad", "spirit"];
  let extensions = [
    ".com",
    ".org",
    ".net",
    ".de",
    ".ru",
    ".uk",
    ".jp",
    ".it",
    ".fr",
    ".nl",
    ".ca",
    ".au",
    ".es",
    ".ch",
    ".edu",
    ".gov",
    ".se",
    ".us",
    ".no",
    ".mil",
    ".tech",
    ".shop",
    ".info",
    ".io"
  ];
  let domain = " ";
  let domains = [];

  for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (let adj = 0; adj < adjs.length; adj++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        for (let extension = 0; extension < extensions.length; extension++) {
          domain = pronouns[pronoun].concat(
            adjs[adj],
            nouns[noun],
            extensions[extension]
          );
          domains.push(domain);
        }
      }
    }
  }

  let body = this.document.querySelector("body");
  let list = this.document.createElement("ul");
  for (let i = 0; i < domains.length; i++) {
    let listElement = this.document.createElement("li");
    let allDomainsList = this.document.createTextNode(domains[i]);
    listElement.appendChild(allDomainsList);
    list.appendChild(listElement);
    body.appendChild(list);
  }
};
