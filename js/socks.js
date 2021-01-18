$(function () {
    var city_top = $('#leaders').offset().top;
    $('.leaders-click').click(function () {
        $('html,body').animate({scrollTop:city_top},500);
    })
})

$(function () {
    var city_top = $('#team').offset().top;
    $('.team-click').click(function () {
        $('html,body').animate({scrollTop:city_top},500);
    })
})

$(function () {
    var city_top = $('#products').offset().top;
    $('.products-click').click(function () {
        $('html,body').animate({scrollTop:city_top},500);
    })
})

$(function () {
    var city_top = $('#tellUs').offset().top;
    $('.tellUs-click').click(function () {
        $('html,body').animate({scrollTop:city_top},500);
    })
})

$(function () {
    var city_top = $('#contactUs').offset().top;
    $('.contactUs-click').click(function () {
        $('html,body').animate({scrollTop:city_top},500);
    })
})

function toSbumit(){
    $('#submitForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: 'This field is required.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'This field is required.'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address.'
                    }
                }
            },
            Subject: {
                validators: {
                    notEmpty: {
                        message: 'This field is required.'
                    }
                }
            },
            textopinion: {
                validators: {
                    notEmpty: {
                        message: 'This field is required.'
                    }
                }
            }
        }
    });
    
    var bootstrapValidator = $("#submitForm").data('bootstrapValidator');
    bootstrapValidator.validate();
    if (bootstrapValidator.isValid()){
        alert('提交成功');
    }else{
        return
    }
}