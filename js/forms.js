$(function(){

  $.validator.setDefaults({
    errorClass: "invalid",
    validClass: function(element){
        $(element).addClass('valid');
    },
    highlight: function(element){
        $(element).addClass('hasError');
    },
    unhighlight: function(element){
        $(element).removeClass('hasError');
    }
  });

  $.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z\s']+$/i.test(value);
  }, "Your name cant contain numbers or special characters.");

  $(".contactForm").validate({
      rules: {
        name: {
          required: true,
          lettersonly: true
        },
        email: {
          required: true,
          email: true
        },
        description: {
          required: true
        }
      },
      messages: {
        name: {
          required: "You must supply your name."
        },
        email: {
          required: "You must supply an email.",
          email: "Enter a valid email."
        },
        description: {
          required: "This field is required."
        }
      }
  });
});
