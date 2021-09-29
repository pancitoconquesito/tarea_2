import jquery=require('jquery');
const $:JQueryStatic=jquery;
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            const _mensaje_:any=document.getElementById("card_mensaje");
            const _formulario_:any=document.getElementById("card_formulario");
            _mensaje_.classList.replace('d-none', 'd-block');
            _formulario_.classList.replace('d-block','d-none');

            console.debug("listo!");
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()




const _cl_lenguaje:any=document.getElementsByClassName("cl_lenguaje");
const cl_lenguaje_i_:any=document.getElementsByClassName("cl_lenguaje_i");
const _r_nivel_valid:any= document.getElementsByClassName("r_nivel_valid");
const _textarea_valid:any=document.getElementById("textarea_valid");
const textarea_:any=document.getElementById("opinion");
const nivel_python_:any=document.getElementById("nivel_python");
const nivel_python_p_:any=document.getElementById("nivel_python_p");
const nivel_java_:any=document.getElementById("nivel_java");
const nivel_java_p_:any=document.getElementById("nivel_java_p");
const nivel_cpp_:any=document.getElementById("nivel_cpp");
const nivel_cpp__p_:any=document.getElementById("nivel_cpp_p");
const _check_dificil_valid:any=document.getElementsByClassName("check_dificil_valid");
const _check_dificil_i:any=document.getElementsByClassName("check_dificil_i");
const otro_:any=document.getElementById("otro");

nivel_python_.addEventListener("change", function() {
  nivel_python_p_.innerHTML="Nivel [ "+String(nivel_python_.value)+" ]";
});

nivel_java_.addEventListener("change", function() {
  nivel_java_p_.innerHTML="Nivel [ "+String(nivel_java_.value)+" ]";
});

nivel_cpp_.addEventListener("change", function() {
  nivel_cpp__p_.innerHTML="Nivel [ "+String(nivel_cpp_.value)+" ]";
});

for(let i=0;i<_cl_lenguaje.length;i++){
  _cl_lenguaje[i].addEventListener("change", function() {
    for(let j=0;j<cl_lenguaje_i_.length;j++)
      if(cl_lenguaje_i_[j].checked){
        for(let k=0;k<_cl_lenguaje.length;k++)  _cl_lenguaje[k].classList.replace('is-invalid', 'is-valid');
        return;
      }
    for(let l=0;l<_cl_lenguaje.length;l++)  _cl_lenguaje[l].classList.replace('is-valid','is-invalid');
  });
}

for(let i=0;i<_r_nivel_valid.length;i++){
  _r_nivel_valid[i].addEventListener("change", function() {
    for(let i =0;i<_r_nivel_valid.length;i++)  _r_nivel_valid[i].classList.replace('is-invalid', 'is-valid');
  });
}

_textarea_valid.addEventListener("change", function() {
  if(String(textarea_.value).length>=50) _textarea_valid.classList.replace('is-invalid', 'is-valid');
  else _textarea_valid.classList.replace('is-valid','is-invalid');
});

for(let i=0;i<_check_dificil_valid.length;i++){
  _check_dificil_valid[i],addEventListener("change", function() {
    for(let j=0;j<_check_dificil_i.length;j++){
      if(_check_dificil_i[j].checked){
        for(let k=0;k<_check_dificil_valid.length;k++)
          _check_dificil_valid[k].classList.replace('is-invalid', 'is-valid');
        return;
      }
    }
    if(String(otro_.value).length>0)
      for(let k=0;k<_check_dificil_valid.length;k++)
        _check_dificil_valid[k].classList.replace('is-invalid', 'is-valid');
    else
      for(let k=0;k<_check_dificil_valid.length;k++)
        _check_dificil_valid[k].classList.replace('is-valid','is-invalid');
  });
}
  
  
  
  