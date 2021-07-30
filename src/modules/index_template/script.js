$(document).ready(function () {
    var advantagesBox = $('.advantages__box');
    advantagesBox.on('click', function() {
        if ($(this).hasClass('advantages__box-active')) {
            $(this).removeClass('advantages__box-active');
        } else {
            $(this).addClass('advantages__box-active');
        }
    });

    function sliderMoveLeft(indexItem, nullItem, selectedItem) {
        var biasMargin = 345*indexItem;
        var margin = biasMargin+'px';
        nullItem.animate({ 
            marginLeft: margin
          }, 1000);
        selectedItem.removeClass('box__selected');
        selectedItem.prev().addClass('box__selected');
    }

    function sliderMoveRight(indexItem, nullItem, selectedItem) {
        var biasMargin = 345*indexItem;
        var margin = biasMargin+'px';
        nullItemMarginDefault = nullItem.css('margin-left');
        nullItem.animate({ 
            marginLeft: margin
          }, 1000);
        selectedItem.removeClass('box__selected');
        selectedItem.next().addClass('box__selected');
    }

    function arrowDisabled(index, maxIndex) {
        if (index == 1) {
            arrowSliderLeft.addClass('arrow-left-disabled');
        } else if (index == maxIndex) {
            arrowSliderRight.addClass('arrow-right-disabled');
        } else if (index < 1 || index > maxIndex) {
            arrowSliderLeft.removeClass('arrow-left-disabled');
            arrowSliderRight.removeClass('arrow-right-disabled');
        } 
    }

    var arrowSliderLeft = $('.strategic-directions .arrow-left');
    var arrowSliderRight = $('.strategic-directions .arrow-right');
    var sliderBoxNull = $('.strategic-directions .box__null');
    var sliderLength = $('.slider__box .box').length;
    var maxSliderIndex = (sliderLength-2)*-1;
    var selectedBoxIndex = 0;

    arrowSliderLeft.click(function () {
        var selectedBox = $('.slider__box .box__selected');
        if (selectedBoxIndex != 1) {
            selectedBoxIndex += 1;
            sliderMoveLeft(selectedBoxIndex, sliderBoxNull, selectedBox);
            arrowDisabled(selectedBoxIndex, maxSliderIndex);
        }
    });

    arrowSliderRight.click(function () {
        var selectedBox = $('.slider__box .box__selected');
        if (selectedBoxIndex != maxSliderIndex) {
            selectedBoxIndex -= 1;
            sliderMoveRight(selectedBoxIndex, sliderBoxNull, selectedBox);
            arrowDisabled(selectedBoxIndex, maxSliderIndex);
        }
    });
});