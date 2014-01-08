var ui = (function () {

	function buildToolbarElement() {
		var html =
            '<div id="toolbar-element">' +
			    '<a id="add-button-tool" href="#" class="button">add button</a>' +
			    '<a id="add-text-tool" href="#" class="button">add text</a>' +
			    '<a id="add-image-tool" href="#" class="button">add image</a>' +
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

	function buildImageElement(imageUrl, idCount) {
	    var html =
            '<div class="img element">' +
                '<img id="el-' + idCount + '" src="' + imageUrl + '"/>' +
            '</div>';
	    return html;
	}

	function buildPopupImages() {
	    var html =
            '<div id="popup-imgs" title="Pick your avatar">' +
	            '<img src="images/icon-1.jpg"/>' +
	            '<img src="images/icon-2.jpg"/>' +
	            '<img src="images/icon-3.jpg"/>' +
	        '</div>';
	    return html;
	}

	return {
	    toolbarElement: buildToolbarElement,
	    buttonElement: buildButtonElement,
	    textElement: buildTextElement,
	    imageElement: buildImageElement,
	    popupImages: buildPopupImages
	}
}());