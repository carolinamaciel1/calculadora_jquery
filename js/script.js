$(document).ready(function(){
       
       var v1, v2, op;

       $('.buttontecla').click(function(){
        $('#campo1').val($('#campo1').val() + $(this).val());
       });

       $('#ce').click(function(){
            $('#campo1').val('');
       });


       //script para efetuar a soma
       $('#soma').click(function(){
            if($('#campo1').val() != ''){
                v1 = parseFloat($('#campo1').val());
                $('#campo1').val('');
                op = "soma";
                $("#campo1").text($(this).val());
                //alert(op);
            }else{
                alert("Insira um valor para efetuar a operação!");
            }
       });


       //script para efetuar a sub
       $('#sub').click(function(){
        if($('#campo1').val != ''){
            v1 = parseFloat($('#campo1').val());
            $('#campo1').val('');
            op = "sub";
            $('#campo1').text($(this).val());
        }else{
            alert('Insira um valor para efetuar a operação!');
        }
       });

       //script para efetuar a mult
       $('#mult').click(function(){
        if($('#campo1').val != ''){
            v1 = parseFloat($('#campo1').val());
            $('#campo1').val('');
            op = "mult";
            $('#campo1').text($(this).val());
        }else{
            alert('Insira um valor para efetuar a operação!');
        }
       });

        //script para efetuar a div
       $('#div').click(function(){
        if($('#campo1').val != ''){
            v1 = parseFloat($('#campo1').val());
            $('#campo1').val('');
            op = "div";
            $('#campo1').text($(this).val());
        }else{
            alert('Insira um valor para efetuar a operação!');
        }
       });

        $('#igual').click(function(){
            if($('#campo1').val() != ''){
                v2 = parseFloat($('#campo1').val());
                $('#campo1').val('');
                if(op == "soma"){
                    $('#campo1').val(v1+v2);
                } else if(op == "sub"){
                    $('#campo1').val(v1-v2);
                }else if(op == "mult"){
                    $('#campo1').val(v1*v2);
                }else if(op == "div"){
                    $('#campo1').val(v1/v2);
                }
            }else{
                alert("Insira um valor para efetuar o cálculo!");
            }
       });
});

