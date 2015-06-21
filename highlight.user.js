// ==UserScript==
// @name         HIGHLIGHT ME BABY
// @namespace    http://steamcommunity.com/id/satanxvx/
// @version      0.1
// @description  you know what it does jesus
// @author       Nicholai Nissen, monkeywrench@steam
// @match        *://lab.xpaw.me/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


// CHANGE THIS OK TY
var room = 49492;


$( "td[data-sort='"+room+"']" ).parent().css({"background-color":"#888","color":"yellow"});
