"use strict";$(document).ready(function(){function n(){$(".mob-submenu").show(),$(".mob-menu-btn i").css("color","#000"),$(".mob-menu-btn").css("top","-10px"),$("body").css("overflow","hidden")}function e(){$(".mob-submenu").slideUp("fast"),$(".mob-menu-btn i").css("color","#dcdf3c"),$(".mob-menu-btn").css("top","0"),$("body").css("overflow","auto")}$(".main-slider").slick({dots:!0,autoplay:!0,arrows:!1,responsive:[{breakpoint:860,settings:{dots:!1}}]}),$(".top-menu li a").click(function(){$(".top-menu li a").removeClass("yellow"),$(this).addClass("yellow")}),$(".select-lang li a").click(function(){$(this).parent().insertBefore(".select-lang li:first-child"),$(".select-lang li").siblings().hide()}),$(".select-lang").hover(function(){$(".select-lang li").show().css("background-color","#dcdf3c")},function(){$(".select-lang li").hide().css("background-color","transparent")}),$(document).hover(function(){$(".select-lang li").css("background-color","transparent")}),Modernizr.mq("(max-width: 1232px)")&&$(".side-bar").hover(function(){$(".page-container").css("margin-right","240px")},function(){$(".page-container").css("margin-right","40px")}),$(window).resize(function(){$(window).width()>1232?$(".page-container").css("margin-right","240px"):$(".page-container").css("margin-right","40px")}),$(window).resize(function(){$(window).width()<=1232?$(".side-bar").hover(function(){$(".page-container").css("margin-right","240px")},function(){$(".page-container").css("margin-right","40px")}):($(".page-container").css("margin-right","240px"),$(".side-bar").hover(function(){$(".page-container").css("margin-right","240px")}))}),$(".inner-side-bar").hover(function(){$("#page-hover").removeClass("page-hover-out").addClass("page-hover-in")},function(){$("#page-hover").addClass("page-hover-out")}),$(".nav5 li ul").hover(function(){$(this).parent().children(":first-child").toggleClass("menu-color")});var i=new Boolean(!0);$(".mob-submenu").hide(),$(".mob-menu-btn").click(function(){return i?(i=!1,n.call(this)):(i=!0,e.call(this)),!1}),$("#city").selectmenu({width:540,icons:{button:"  ui-icon-triangle-2-n-s"}}),$("#curency").selectmenu({icons:{button:"  ui-icon-triangle-2-n-s"},width:155})});