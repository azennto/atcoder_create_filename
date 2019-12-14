
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
  const filename_str= `${location.href.split('/')[6]}.cpp`;
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.textContent =
    `
    #create_filename_button {
       padding: 10px 20px;
       position: absolute;
       left: 87.2%;
       top: 60px;
     }

     #popup{
       display: none;
       position: absolute;
       left: 90%;
       top: 110px;
       padding: 10px 20px;
       background: #ccc;
       border-radius: 5px;
     }
     `;
  document.head.appendChild(style);

  var div = document.createElement('div');
  div.setAttribute('id', 'popup');
  div.textContent = 'click!';
  element_main[1].insertBefore(div,element_main[1].firstChild);

  var button = document.createElement('button');
  button.setAttribute('id', 'create_filename_button');
  button.setAttribute('onclick', `copy_filename('${filename_str}')`);
  button.textContent = 'filename copy';
  element_main[1].insertBefore(button,element_main[1].firstChild);


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
    }
    `;
  document.head.appendChild(script);

  const jquery = document.createElement('script');
  jquery.setAttribute('type', 'text/javascript');
  jquery.textContent =
      `
      $('#create_filename_button').on('click',function(){
        $('#popup').fadeIn(300);
        var i=0;
        const scond_count = setInterval(function(){
          i++;
          if(i <= 2){
            $('#popup').fadeOut();
            clearInterval(scond_count);
          }
          console.log(i);
        },1000);
      });
    `;
  document.head.appendChild(jquery);

})();
