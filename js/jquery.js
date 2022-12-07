<script type="text/javascript">

   jQuery (documet).ready(function(){
        jQuery('#ajax_form').submit(function(){
            var dados = jQuery( this ).serialize();

            jQuery.ajax ({
                type:"POST",
                url:"newsletter-form.php",
                data: dados,
                sucess: function envio ()
                {
                    var cont = "E-mail enviado com sucesso";
                    document.getElementById("msg").innerHTML = cont;  
                }
            });
            return false;
        })
    })

</script>