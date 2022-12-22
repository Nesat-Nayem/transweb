"use strict";
! function(l, r, d) {
    function c(e, t, i, a, n) {
        t.classList.add(i), a.classList.add(n), e.setAttribute("aria-expanded", "true"), "search_toggle" === e.id && r.getElementById("search_dropdown").children[0].children[0].focus(), "message_top_toggle" !== e.id && "message_bottom_toggle" !== e.id || (function(e) {
            var t = new Date;
            t.setTime(t.getTime() + 31536e6);
            var i = "expires=" + t.toUTCString();
            t.cookie = e + "=1;" + i + ";path=/"
        }(e.getAttribute("data-id")), e.parentNode.remove())
    }

    function u(e, t, i, a, n) {
        t.classList.remove(i), a.classList.remove(n), e.setAttribute("aria-expanded", "false")
    }

    function f(e, t) {
        return -1 !== e.className.indexOf(t)
    }

    function m(t, i, a, n, s) {
        var o = r.getElementById(i),
            d = r.getElementById(t);
        o && d && (o.addEventListener("click", function(e) {
            (f(d, a) ? u : c)(o, d, a, n, s)
        }), n.addEventListener("click", function(e) {
            f(d, a) && e.target !== o && e.target.closest("#" + i) !== o && !e.target.closest("#" + t) && u(o, d, a, n, s)
        }), "message_top_toggle" !== i && "message_bottom_toggle" !== i && l.addEventListener("scroll", function(e) {
            f(d, a) && u(o, d, a, n, s)
        }))
    }
    jQuery("select").wrap('<div class="select-wrap"></div>');
    var e, i, a, n = d(".page_header_side");

    function v() {
        var e = d('input[type="number"]');
        e.before('<input type="button" value="+" class="plus">'), e.after('<input type="button" value="-" class="minus">'), d(".plus").on("click", function(e) {
            var t = d(this).parent().find('[type="number"]'),
                i = "" === t.val() ? 0 : t.val();
            t.val(parseFloat(i) + 1).trigger("change")
        }), d(".minus").on("click", function(e) {
            var t = d(this).parent().find('[type="number"]'),
                i = "" === t.val() ? 0 : t.val();
            t.val(parseFloat(i) - 1).trigger("change"), i < 1 && t.val(0)
        })
    }

    function h() {
        var e = d(".shop_table");
        e.find('.quantity input[type="number"]').on("change", function() {
            setTimeout(function() {
                e.find('button[name="update_cart"]').trigger("click")
            }, 300)
        })
    }
    d("ul.menu-low-items").find("li").each(function() {
        var i = d(this);
        i.find("ul").length && i.append('<span class="toggle_submenu color-darkgrey"></span>').find(".toggle_submenu, > a").on("click", function(e) {
            var t = d(this);
            "#" !== t.attr("href") && t.parent().hasClass("active-submenu") || e.preventDefault(), (t.parent().hasClass("active-submenu") ? t.parent() : i.addClass("active-submenu").siblings()).removeClass("active-submenu")
        })
    }), d(".cross-sells").each(function() {
        d(".cross-sells ul").addClass("slides"), d(".cross-sells>h2").addClass("text-center"), d(".cross-sells ul").removeClass("columns-2"), d(".cross-sells ul").wrapAll("<div class='flexslider-2' />")
    }), d(".related.products").each(function() {
        d(".related.products ul").addClass("slides"), d(".related.products ul").removeClass("columns-2"), d(".related.products ul").wrapAll("<div class='flexslider-3' />")
    }), d("#toggle_shop_view").on("click", function(e) {
        e.preventDefault(), d(this).toggleClass("grid-view"), d("#products, ul.products").toggleClass("grid-view list-view"), d.cookie && (d("#products, ul.products").hasClass("list-view") ? d.cookie("grid-view", "list-view") : d.cookie("grid-view", "grid-view"))
    }), d.cookie && "list-view" == d.cookie("grid-view") && d("#toggle_shop_view").trigger("click"), r.addEventListener("DOMContentLoaded", function(e) {
        var t = r.body;
        m("nav_top", "nav_toggle", "active", t, "top-menu-active"), m("nav_side", "nav_side_toggle", "active", t, "side-menu-active"), m("search_dropdown", "search_toggle", "active", t, "search-dropdown-active"), m("login_dropdown", "login_toggle", "active", t, "login-dropdown-active"), m("topline_dropdown", "topline_dropdown_toggle", "active", t, "topline-dropdown-active"), m("dropdown-cart", "dropdown-cart-toggle", "active", t, "cart-dropdown-active"), m("message_top", "message_top_toggle", "active", t, "messagee-top-active"), m("message_bottom", "message_bottom_toggle", "active", t, "messagee-bottom-active");
        var i = r.getElementById("nav_close");
        i && i.addEventListener("click", function(e) {
                r.body.dispatchEvent(new Event("click"))
            }),
            function(e) {
                for (var t = 0; t < e.length; ++t) e[t].addEventListener("click", function(e) {
                    e.preventDefault()
                })
            }(r.querySelectorAll('a[href="#"]'));
        var a, n, s = r.getElementById("header-affix-wrap");
        s && (i = r.getElementById("header"), n = (a = i).offsetTop, l.onscroll = function(e) {
                l.pageYOffset >= n ? a.classList.add("affix") : a.classList.remove("affix"), 0 == l.pageYOffset && a.classList.remove("affix"), this.oldScroll > this.scrollY ? (a.classList.add("scrolling-up"), a.classList.remove("scrolling-down")) : (a.classList.remove("scrolling-up"), a.classList.add("scrolling-down")), this.oldScroll = this.scrollY
            }),
            function() {
                if ("undefined" != typeof Masonry && "undefined" != typeof imagesLoaded) {
                    var e = r.querySelectorAll(".masonry");
                    if (e.length)
                        for (var t = 0; t < e.length; t++) imagesLoaded(e[t], function(e) {
                            new Masonry(e.elements[0], {
                                itemSelector: ".grid-item",
                                columnWidth: ".grid-sizer",
                                percentPosition: !0
                            })
                        });
                    var i = r.querySelectorAll(".masonry-grid");
                    if (i.length)
                        for (var a = 0; a < i.length; a++) imagesLoaded(i[a], function(e) {
                            new Masonry(e.elements[0], {
                                itemSelector: ".wp-block-group__inner-container>*",
                                columnWidth: ".wp-block-group__inner-container>*",
                                percentPosition: !0
                            })
                        })
                }
            }(), "undefined" != typeof GLightbox && (new GLightbox({
                selector: ".blocks-gallery-item  figure a, .gallery figure a"
            }), new GLightbox({
                selector: 'a[href*="youtube.com"]:not(.social-icon), a[href*="youtu.be"], a[href*="vimeo.com"]'
            })), d(".wp-block-getwid-recent-posts__entry-meta .heading-inner").each(function() {
                d(this).prepend(d(this).closest(".wp-block-getwid-recent-posts__content-wrapper").find(".wp-block-getwid-recent-posts__post-categories").html())
            }), d("label[for]").each(function() {
                var e, t, i = d(this);
                (d(".comment-form-comment") || i.closest(".is-style-inline-form").length) && (d("form") && i.find("input").length || ((e = d("#" + i.attr("for"))).attr("placeholder") || e.is('[type="radio"]') || e.is('[type="checkbox"]') || e.is("select") || (t = (t = i.text()).replace(/\t|  |\*/g, ""), e.attr("placeholder", t), i.css({
                    display: "none"
                }))))
            });
        var o = r.getElementById("to-top");
        o && (o.addEventListener("click", function(e) {
            e.preventDefault(), l.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }), l.addEventListener("scroll", function(e) {
            60 < l.pageYOffset ? o.classList.add("visible") : o.classList.remove("visible")
        })), (o || s) && l.dispatchEvent(new Event("scroll")), t.classList.add("dom-loaded"), v(), h(), document.getElementById("yith-quick-view-modal") && (t = document.querySelectorAll(".product .yith-wcqv-button"), [].slice.call(t).forEach(function(e) {
            e.addEventListener("click", function() {
                var e = document.getElementById("yith-quick-view-modal"),
                    t = new MutationObserver(function(e) {
                        e.length && v(), t.disconnect()
                    });
                t.observe(e, {
                    childList: !0,
                    subtree: !0
                })
            })
        }))
    }), e = ".modalLoginWrap .button", i = [".modalLoginWrap .modal-login", ".modalLoginWrap .modal-registration"], (a = document.querySelector(".modalLoginWrap")) && a.querySelectorAll(e).forEach(function(e) {
        e.addEventListener("click", function(e) {
            i.forEach(function(e) {
                a.querySelector(e).classList.remove("active")
            });
            var t = this.dataset.toggle;
            a.querySelector("." + t).classList.add("active")
        })
    }), d("body").on("updated_cart_totals", function(e) {
        v(), h()
    }), l.onload = function() {
        r.body.classList.add("window-loaded");
        var e = r.getElementById("preloader");
        e && e.classList.add("loaded")
    }, document.querySelector(".iq-rotate-text") && d(".iq-rotate-text").each(function() {
        new CircleType(this)
    }), l.onload = function() {
        function i() {
            return window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3
        }
        d().flexslider && (d(".page_slider .flexslider").each(function(e) {
            var t = d(this),
                i = t.data(),
                a = "undefined" === i.nav || i.nav,
                n = "undefined" === i.dots || i.dots,
                s = "undefined" === i.slideshow || i.slideshow,
                i = "undefined" !== i.speed ? i.speed : 5e3;
            t.flexslider({
                animation: "slide",
                pauseOnHover: !0,
                useCSS: !0,
                controlNav: n,
                directionNav: a,
                prevText: "",
                nextText: "",
                smoothHeight: !1,
                slideshow: s,
                slideshowSpeed: i,
                animationSpeed: 600,
                start: function(e) {
                    e.find(".intro_layers").children().css({
                        visibility: "hidden"
                    }), e.find(".flex-active-slide .intro_layers .slide-pre-heading").each(function(e) {
                        var t = d(this),
                            i = t.data("animation") ? t.data("animation") : "fadeInLeft";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    }), e.find(".flex-active-slide .intro_layers .slide-heading").each(function(e) {
                        var t = d(this),
                            i = t.data("animation") ? t.data("animation") : "fadeInRight";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    }), e.find(".flex-active-slide .intro_layers .slide-description").each(function(e) {
                        var t = d(this),
                            i = t.data("animation.delay-1s") ? t.data("animation") : "pullUp";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    }), e.find(".flex-active-slide .intro_layers .slider-buttons-wrap").each(function(e) {
                        var t = d(this),
                            i = t.data("animation.delay-2s") ? t.data("animation") : "fadeIn";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    })
                },
                after: function(e) {
                    e.find(".flex-active-slide .intro_layers .slide-pre-heading").each(function(e) {
                        var t = d(this),
                            i = t.data("animation") ? t.data("animation") : "fadeInLeft";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    }), e.find(".flex-active-slide .intro_layers .slide-heading").each(function(e) {
                        var t = d(this),
                            i = t.data("animation") ? t.data("animation") : "fadeInRight";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    }), e.find(".flex-active-slide .intro_layers .slide-description").each(function(e) {
                        var t = d(this),
                            i = t.data("animation.delay-1s") ? t.data("animation") : "pullUp";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    }), e.find(".flex-active-slide .intro_layers .slider-buttons-wrap").each(function(e) {
                        var t = d(this),
                            i = t.data("animation.delay-2s") ? t.data("animation") : "fadeIn";
                        setTimeout(function() {
                            t.addClass("animated " + i)
                        }, 250 * e)
                    })
                },
                end: function(e) {
                    e.find(".intro_layers .slide-pre-heading").each(function() {
                        var e = d(this),
                            t = e.data("animation") ? e.data("animation") : "fadeInLeft";
                        e.removeClass("animated " + t).css({
                            visibility: "hidden"
                        })
                    }), e.find(".intro_layers .slide-heading").each(function() {
                        var e = d(this),
                            t = e.data("animation") ? e.data("animation") : "fadeInRight";
                        e.removeClass("animated " + t).css({
                            visibility: "hidden"
                        })
                    }), e.find(".intro_layers .slide-description").each(function() {
                        var e = d(this),
                            t = e.data("animation.delay-1s") ? e.data("animation") : "pullUp";
                        e.removeClass("animated " + t).css({
                            visibility: "hidden"
                        })
                    }), e.find(".intro_layers .slider-buttons-wrap").each(function() {
                        var e = d(this),
                            t = e.data("animation.delay-2s") ? e.data("animation") : "fadeIn";
                        e.removeClass("animated " + t).css({
                            visibility: "hidden"
                        })
                    })
                }
            })
        }), d(".flexslider").each(function(e) {
            var t = d(this);
            t.find(".flex-active-slide").length || t.flexslider({
                animation: "slide",
                useCSS: !0,
                controlNav: !0,
                directionNav: !0,
                prevText: "<",
                nextText: ">",
                smoothHeight: !1,
                slideshow: !0,
                slideshowSpeed: 5e3,
                animationSpeed: 800
            })
        }), d(".flexslider-2").each(function(e) {
            var t = d(this);
            t.find(".flex-active-slide").length || t.flexslider({
                animation: "slide",
                useCSS: !0,
                controlNav: !0,
                directionNav: !1,
                prevText: "<",
                nextText: ">",
                smoothHeight: !1,
                slideshow: !0,
                slideshowSpeed: 5e3,
                animationSpeed: 800,
                animationLoop: !1,
                itemWidth: 480,
                itemMargin: 40,
                minItems: i(),
                maxItems: i()
            })
        }), d(".flexslider-3").each(function(e) {
            var t = d(this);
            t.find(".flex-active-slide").length || t.flexslider({
                animation: "slide",
                useCSS: !0,
                controlNav: !1,
                directionNav: !0,
                prevText: "<",
                nextText: ">",
                smoothHeight: !1,
                slideshow: !0,
                slideshowSpeed: 5e3,
                animationSpeed: 800,
                animationLoop: !1,
                itemWidth: 480,
                itemMargin: 40,
                minItems: i(),
                maxItems: i()
            })
        }))
    }, n = jQuery(".page_header_side"), jQuery("ul.menu-side-click").find("li").each(function() {
        var i = jQuery(this);
        i.find("ul").length && i.append('<span class="activate_submenu"></span>').find(".activate_submenu, > a").on("click", function(e) {
            var t = jQuery(this);
            if ("#" !== t.attr("href") && t.parent().hasClass("active-submenu") || e.preventDefault(), t.parent().hasClass("active-submenu")) return e.preventDefault(), void t.parent().removeClass("active-submenu");
            i.addClass("active-submenu").siblings().removeClass("active-submenu")
        })
    }), jQuery(".vertical_menu_header").find("ul.menu-side-click").find("a").each(function() {
        var e = jQuery(this),
            t = e.attr("href");
        "#" === t[0] && 1 < t.length && e.on("click", function() {
            n.removeClass("active-slide-side-header")
        })
    }), n.length && (jQuery(".toggle_menu_side").on("click", function() {
        var e = jQuery(this);
        e.hasClass("header-slide") ? n.toggleClass("active-slide-side-header") : e.parent().hasClass("header_side_right") ? $body.toggleClass("active-side-header slide-right") : $body.toggleClass("active-side-header")
    }), $body.on("click", function(e) {
        jQuery(e.target).closest(".page_header_side").length || n.hasClass("page_header_side_sticked") || n.hasClass("vertical_menu_header") || (n.removeClass("active-slide-side-header"), $body.removeClass("active-side-header slide-right"))
    })), d(".format-quote").each(function() {
        d(".format-quote").addClass("bg_teaser")
    }), d(".format-status").each(function() {
        d(".format-status").addClass("bg_teaser")
    }), d(".blog .bg_teaser").each(function() {
        var e = d(this),
            t = e.find("img").first().attr("src");
        t && e.css("background-image", "url(" + t + ")"), e.find(".bg_overlay").length || e.prepend('<div class="bg_overlay"/>')
    })
}(window, document, jQuery);