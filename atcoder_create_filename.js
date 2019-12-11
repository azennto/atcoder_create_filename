// ==UserScript==
// @name         atcoder_create_filename
// @version      0.1
// @description  It'll be generate the good mane of the file for AtCoder.
// @author       azennto
// @match        https://atcoder.jp/contests/*/tasks/*
// @grant        none
// @namespace    https://github.com/azenntoyuchi
// ==/UserScript==

//インターフェースの作成
(() => {
  const element_main = document.getElementsByClassName('col-sm-12');
  const filename_str= `'${location.href.split('/')[6]}.cpp`; 
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.textContent =
    `#create_filename_button {
       padding: 10px 20px;
       position: absolute;
       left: 87%;
     }`;
  document.head.appendChild(style);

  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.textContent =
    `const copy_filename = str => {
       const copyFrom = document.createElement('textarea');
       copyFrom.textContent = str;
       const bodyElm = document.getElementsByTagName('body')[0];
       bodyElm.appendChild(copyFrom);
       copyFrom.select();
       document.execCommand('copy');
       bodyElm.removeChild(copyFrom);
    }`;
  document.head.appendChild(script);

  var button = document.createElement('button');
  button.setAttribute('id', 'create_filename_button');
  button.setAttribute('onclick', `copy_filename(${filename_str})`);
  button.textContent = 'filename copy';
  element_main[1].insertBefore(button,element_main[1].firstChild);
})();
