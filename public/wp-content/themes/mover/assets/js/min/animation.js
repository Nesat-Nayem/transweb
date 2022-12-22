"use strict";
! function() {
    var e = JSON.parse(document.getElementById("body")) || {};
    e[".animate"] = "";
    var a, n = [];
    for (a in e) {
        var t = document.querySelectorAll(a);
        t.forEach(function(t) {
            t.setAttribute("data-animate", e[a])
        }), n.push(t)
    }
    "IntersectionObserver" in window ? window.addEventListener("load", function(t) {
        var e = new IntersectionObserver(function(t, i) {
            var r = 0;
            t.forEach(function(t, e) {
                var a, n;
                0 < t.intersectionRatio && ((a = t.target.getAttribute("data-animate")) || t.target.classList.forEach(function(t) {
                    0 === t.indexOf("an__") && (a = t.slice(4))
                }), n = a || "fadeInUp", r++, setTimeout(function() {
                    t.target.classList.add("animated", n), i.unobserve(t.target)
                }, 200 * r, t))
            })
        }, {
            root: null,
            rootMargin: "0px",
            threshold: .04
        });
        n.forEach(function(t) {
            t.forEach(function(t) {
                e.observe(t)
            })
        })
    }, !1) : n.forEach(function(t) {
        t.forEach(function(t) {
            t.classList.add("animated", t.getAttribute("data-animate"))
        })
    })
}();