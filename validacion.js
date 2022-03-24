function validarDatos(){
    window.event.preventDefault();

    if(document.form.nombre.value == ""){
        alert("Campo nombre es obligatorio");
        document.form.nombre. focus();
        }else if(document.form.email.value == ""){
            alert("Campo email es obligatorio");
            document.form.email. focus();
        }else if(document.form.asunto.value == ""){
                alert("Campo asunto es obligatorio");
                document.form.asunto. focus();
        }else if(document.form.email.value.indexOf("@")== -1 && document.form.email.value.indexOf(".")== -1){
            alert("Campo email es invalido");
            document.form.email. focus();
        }else if(document.form.mensaje.value == "" || document.form.mensaje.length <= 50){
            alert("Campo mensaje es obligatorio de debe contener al menos 50 caracteres");
            document.form.mensaje. focus();
        }        
}
document.querySelector("form").addEventListener("submit",validarDatos)