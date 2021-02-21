
          var word = "Hello World !";
          var str = "";
          var element = document.getElementById("text");
          var element2 = document.getElementById("txt2");

          for (let i in word) {
            setTimeout(() => {
              str += word[i];
              element.innerHTML = str;
            },  i*250)
          }
  
