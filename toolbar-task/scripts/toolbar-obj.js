/// <reference path="ui-scripts.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="class.js" />
/// <reference path="elements-obj.js" />

var toolbars = (function () {

    var ToolbarObj = Class.create({
        render: function (selector) {
            var toolbarHtml = ui.toolbarElement();
            $(selector).html(toolbarHtml);

            this.init(selector);
        },
        init: function (selector) {
            var wrapper = $(selector);
            var self = this;
            var elementsCount = 0;

            wrapper.colpick({
                showEvent: 'none',
                onSubmit: function (hsb, hex, rgb, el) {
                    window.currentElement.backColor = '#' + hex;
                    $(el).colpickHide();
                }
            });
            $(".colpick").draggable({cancel: "div.colpick div"});

            wrapper.on("click", "#add-button-tool", function () {
                self.createButton(wrapper, ++elementsCount);
            });
            wrapper.on("click", "#add-text-tool", function () {
                self.createText(wrapper, ++elementsCount);
            });
        },
        createButton: function (selector, idCount) {
            var newButton = elements.button();
            newButton.render(selector, "button", idCount, "#335588");
            $("#el-" + idCount).draggable();
        },
        createText: function (selector, idCount) {
            var newText = elements.text();
            newText.render(selector, "text", idCount, "#6688bb");
            $("#el-" + idCount).draggable();
        }
    });

    return {
        get: function () {
            return new ToolbarObj();
        }
    }
})();

$(function () {
    var toolbar = toolbars.get();
    toolbar.render("#wrapper");
    $("#toolbar-element").draggable();
});