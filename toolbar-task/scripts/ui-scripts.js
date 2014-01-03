var ui = (function () {

	function buildToolbarElement() {
		var html =
            '<div id="toolbar-element">' +
			    '<a id="add-button-tool" href="#" class="button">add button</a>' +
			    '<a id="add-text-tool" href="#" class="button">add text</a>' +
            '</div>';
		return html;
	}

	function buildButtonElement(text, idCount) {
	    var html =
            '<div class="btn element">' +
                '<a href="#" id="el-' + idCount + '" class="button">' + text + '</a>' +
            '</div>';
	    return html;
	}

	function buildTextElement(text, idCount) {
	    var html =
            '<div id="el-' + idCount + '" class="txt element">' + text + '</div>';
	    return html;
	}

	return {
	    toolbarElement: buildToolbarElement,
	    buttonElement: buildButtonElement,
	    textElement: buildTextElement
	}
}());