      var map = document.querySelector(".map");
          mini_map = document.querySelector(".contacts-main img");
          map_close = document.querySelector(".map-close");
          write_us = document.querySelector(".write-us");
          write_us_btn = document.querySelector(".btn-contact");
          write_us_close = document.querySelector(".write-us-close");
          add = document.querySelector(".add");
          buy = document.querySelectorAll(".buy");
          add_close = [];
          add_close[0] = document.querySelector(".add-close");
          add_close[1] = document.querySelector(".add a:last-child");
          left = document.querySelector(".arrow-left");
          right = document.querySelector(".arrow-right");
          slides = document.querySelectorAll(".slider input[type=\"radio\"]");

      function close(block, close_btn) {
        close_btn.addEventListener("click", function(event) {
          event.preventDefault();
          block.classList.remove("display-block");
        });
      };

      for (i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", function(event) {
          event.preventDefault();
          add.classList.add("display-block");
        });
      };

      for (i = 0; i < 2; i++) {
        add_close[i].addEventListener("click", close(add, add_close[i]));
      };

      mini_map.addEventListener("click", function() {
        map.classList.add("display-block");
      });

      map_close.addEventListener("click", close(map, map_close));

      write_us_btn.addEventListener("click", function(event) {
        event.preventDefault();
        write_us.classList.add("display-block", "animation");
      });

      write_us_close.addEventListener("click", close(write_us, write_us_close));

      left.addEventListener("click", function() {
        for (i = 0; i < slides.length; i++) {
          if (slides[i].checked) {
            slides[slides.length-1-i].checked = true;
            break;
          }
        }
      });

      right.addEventListener("click", function() {
        for (i = 0; i < slides.length; i++) {
          if (slides[i].checked) {
            if (i != slides.length - 1)
              slides[i+1].checked = true;
            else
              slides[0].checked = true;
            break;
          }
        }
      });
