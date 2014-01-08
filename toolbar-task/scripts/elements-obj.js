/// <reference path="jquery-2.0.2.js" />
/// <reference path="class.js" />

window.currentElement = {
    backColor: '',
    id: ''
};

var elements = (function () {

    var ElementObj = Class.create({
        render: function (selector, text, idCount, backColor) {
        },
        background: '',
        setBackground: function (element, backColor, isFirstInit) {
            this.background = backColor;
            $(element).css("background-color", backColor);

            if (isFirstInit) {
                $(element).hover(function () {
                    $(this).css("opacity", '0.6');
                }, function () {
                    $(this).css("opacity", '1');
                });
            }
        },
        getBackground: function (element, selector) {
            var self = this;
            var wrapper = $(selector);
            wrapper.colpickShow();
            wrapper.colpickSetColor(this.background);

            $(".colpick").one("click", ".colpick_submit", function () {
                if ($(element).attr("id") == window.currentElement.id) {
                    self.setBackground(element, window.currentElement.backColor);
                }
            });
        }
    });

    var ButtonObj = ElementObj.extend({
        render: function (selector, text, idCount, backColor) {
            this._super(selector, text, idCount, backColor);
            var self = this;
            var buttonHtml = ui.buttonElement(text, idCount);
            $(selector).append(buttonHtml);

            var btnElement = ".btn.element #el-" + idCount;
            this.setBackground(btnElement, backColor, true);
            
            $(selector).on("dblclick", btnElement, function () {
                window.currentElement.id = $(btnElement).attr("id");
                self.getBackground(this, selector);
            });
        }
    });

    var TextObj = ElementObj.extend({
        render: function (selector, text, idCount, backColor) {
            this._super(selector, text, idCount, backColor);
            var self = this;
            var textHtml = ui.textElement(text, idCount);
            $(selector).append(textHtml);

            var txtElement = ".txt.element#el-" + idCount;
            this.setBackground(txtElement, backColor, true);

            $(selector).on("dblclick", txtElement, function () {
                window.currentElement.id = $(txtElement).attr("id");
                self.getBackground(this, selector);
            });
        }
    });

    var ImageObj = Class.create({
        render: function (selector, imageUrl, idCount) {
            var self = this;
            var imageHtml = ui.imageElement(imageUrl, idCount);
            $(selector).append(imageHtml);

            var imageElement = ".img.element #el-" + idCount;

            $(selector).on("dblclick", imageElement, function () {
                $("#popup-imgs").dialog("open");
            });
        }
    });

    return {
        button: function () {
            return new ButtonObj();
        },
        text: function () {
            return new TextObj();
        },
        image: function () {
            return new ImageObj();
        }
    }
})();