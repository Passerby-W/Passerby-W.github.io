!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ScrollProgress=e()}(this,function(){"use strict";function t(){}var e=function(e){this._handleUpdate="function"==typeof e?e:t,this._viewportHeight=this._getViewportHeight(),this._viewportWidth=this._getViewportWidth(),this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y),this._onScroll=this._onScroll.bind(this),this._onResize=this._onResize.bind(this),window.addEventListener("scroll",this._onScroll),window.addEventListener("resize",this._onResize)};return e.prototype._getViewportHeight=function(){return document.body.scrollHeight-window.innerHeight},e.prototype._getViewportWidth=function(){return document.body.scrollWidth-window.innerWidth},e.prototype._getProgress=function(){var t=void 0===window.scrollX?window.pageXOffset:window.scrollX,e=void 0===window.scrollY?window.pageYOffset:window.scrollY;return{x:0===this._viewportWidth?0:t/this._viewportWidth,y:0===this._viewportHeight?0:e/this._viewportHeight}},e.prototype._onScroll=function(){this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y)},e.prototype._onResize=function(){this._viewportHeight=this._getViewportHeight(),this._viewportWidth=this._getViewportWidth(),this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y)},e.prototype.trigger=function(){this._handleUpdate(this._progress.x,this._progress.y)},e.prototype.destroy=function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("resize",this._onResize),this._handleUpdate=null},e});