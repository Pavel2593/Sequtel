$(document).ready(function() {
    $('.contacts__form').submit(function (event) {
        event.preventDefault();
        var feedBack = $(this);
        var name = feedBack[0].elements.contactsName.value;
        var lastName = feedBack[0].elements.contactsLastName.value;
        var email = feedBack[0].elements.contactsEmail.value;
        var message = feedBack[0].elements.contactsMessage.value;
        var data = {
            'name': name,
            'last name': lastName,
            'email': email,
            'message': message
        }
        console.log(data);
    });
});