$(document).ready(function() {
    var solutionsItem = $('.solutions__item');
    var solutionsItemRowFirst = solutionsItem.children('.item__row');
    var solutionsItemCloseIcon = solutionsItem.find('.item__close');
    var solutionsItemArrowIcon = solutionsItem.find('.item__arrow');

    solutionsItemRowFirst.on('click', function() {
        var item = $(this).parent('.solutions__item');
        if (item.hasClass('solutions__item-selected')) {
            item.removeClass('solutions__item-selected');
        } else {
            item.addClass('solutions__item-selected');
        }
    });

    // solutionsItemCloseIcon.on('click', function() {
    //     var thisItem = $(this).closest('.solutions__item');
    //     thisItem.removeClass('solutions__item-selected');
    // });

    // solutionsItemArrowIcon.on('click', function() {
    //     var thisItem = $(this).closest('.solutions__item');
    //     thisItem.addClass('solutions__item-selected');
    // });
});