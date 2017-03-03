function captchaCode() {
  var Numb1, Numb2, Numb3, Numb4, Numb6, Numb5, Code;
  Numb1 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb2 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb3 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb4 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb5 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb6 = (Math.ceil(Math.random() * 10)-1).toString();

  Code = Numb1 + Numb2 + Numb3 + Numb4 + Numb5 + Numb6;
  $("#captcha span").remove();
  $("#captcha input").remove();
  $("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
}

(function() {

  captchaCode();
  $("#pb_contact_submit").style.display = "none";

  $('#pb_contact_form').validate();

  submitPBContact = function() {
    var captchaVal = $("#code").text();
    var captchaCode = $(".captcha").val();
    if (captchaVal == captchaCode) {
      $("#pb_contact_submit").style.display = "block";
      $(".captcha").css({
        "color" : "#7CEA19"
      });
    }
    else {
      $(".captcha").css({
        "color" : "#CE3B46"
      });
    }
    if(!$('#pb_contact_name').val().length || !$('#pb_contact_email').val().length) {
      $('#pb_contact_invalid').show();
      return;
    }

    $('#pb_contact_invalid').hide();
    $('#pb_contact_submit').prop('disabled', true);
    $('#pb_contact_spinner').show();

    var postData = {
      name: $('#pb_contact_name').val(),
      email: $('#pb_contact_email').val(),
      comment: $('#pb_contact_comment').val()
    }

    $.post('/api/contact/pb_contact_submit', JSON.stringify(postData), function(result) {
      if(result.code > 1) {
        $('#pb_contact_spinner').hide();
        $('#pb_contact_submit').prop('disabled', false)
                               .removeClass('btn-primary')
                               .addClass('btn-danger');
        $('#pb_contact_error').show();
        return;
      }

      $('#pb_contact_submit').removeClass('btn-primary')
                             .addClass('btn-success');
      $('#pb_contact_spinner i').removeClass('fa-circle-o-notch')
                                .removeClass('fa-spin')
                                .addClass('fa-check');
      $('#pb_contact_success').show();
    });
  }
}());
