---
title: "'Back to Top' Button for your website"
date: 2017-04-30T12:52:36+06:00
type: "blog"
tags: ["web", "javascript"]
image: /images/backgrounds/9.jpg
description : "Back to Top Button for your website with CSS & jQuery"
---
A **Back To Top** button is something that a lot of you have probably seen on many websites. It’s that arrow that appears at the bottom right or left corner of a web page when you start scrolling it. When clicked, it brings you back to the top of the page.

If you want to add a back to top button while you're still designing a website, or just curious about how you can build one on your own, this article for you.

Our code would consist of three parts: 

- tiny HTML, 
- CSS styling, 
- small jQuery script. 

Let’s start with HTML.
You need a simple HTML button code:

```html
<div class="scroll-top">
    <a href="#" class="btn"></a>
</div>
```

The button will consist of layout `class="scroll-top"` which located on the page by fixed position, usualy on the bottom left or right. And 'a' tag with `class="btn"` -  actually this a scroll top link styled like a button.  We'll don't use additional libraries or font styles for icon and will draw it by css.

The initial styles for the button would look like this:

```css
.scroll-top {
  position:fixed;
  bottom: 35px;
  right: 20px;
  transition: background-color .3s,
     opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
.btn {
  display: inline-block;
  background-color: transparent;
  border: 4px solid #0697ae;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
  margin: 0px;
  -webkit-transition: -webkit-transform 0.25s;
  transition: background-color .3s, transform 0.25s;
}
.btn::after,
.btn::before {
    content: "";
    height: 4px;
    width: 22px;
    background: #5b5b5b;
    top: 26px;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 100%;
    -webkit-transition: -webkit-transform 0.25s;
    transition: background-color .3s, transform 0.25s;
}
.btn::before {
    left: 23px;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
}
.btn::after {
    left: 13px;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
}
.btn:hover {
  cursor: pointer;
  background-color: #47afbf;
}
.btn:hover::after,
.btn:hover::before {
    background-color: #fff;
}
.btn:active {
  background-color: #555;
}
.scroll-top.show {
  opacity: 1;
  visibility: visible;
}
```

Since the button is an anchor element, and anchors by default are inline elements, we need to change the display property to inline block so that we can assign dimensions to it.

I had make it a square button of 50*50px with rounded corners of 50% it make it round. 

The fixed position would always enable our button to stay at the same spot when we scroll the page, and z-index of a very high number makes sure that the button is always overlapping other website elements.

When we hover over a button the cursor changes to a pointer, and the background becomes a dark grey. In order to make the transition smooth, we assign the transition of 0.3 seconds to the background-color property. Also, when we click the button, the background color also changes and becomes a bit lighter.

**Adding Functionality with jQuery**


In this sub-section I'll actually show you how to make the button work as expected. The easiest way to achieve this is to use a JavaScript library jQuery. First, we have to add jQuery to the HTML markup of our code. Add this line of code just before the closing body tag.

```
<script src=”https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js”></script>
```

Now we can write our script using jQuery syntax. Add the following script after the jQuery line:

```html
<script>
jQuery(document).ready(function() {

  var btn = $('#backtop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});
</script>
```

Congratulation! You done it!

Now each time we click the button, it will take us to the top of the page.\
If you are looking for more detailed information about pieces of code you alway can finde full documentation on the official [jQuery](https://api.jquery.com/scroll/) website.

**Demo**\
You can see the final result in my [CodePen demo](https://codepen.io/eneus/pen/qGYaJE). I’ve also included some sample text up there for demonstration purposes. Or just looking on the left sidebar of my website. <i class="fa fa-long-arrow-left" aria-hidden="true"></i> <i class="fa fa-smile-o" aria-hidden="true"></i>


**Final Thoughts**\
Back to top buttons are a great usability element of a web page, and having one on your website adds a small but helpful detail most of us are used to. 

Have fun coding!