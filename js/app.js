define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    var _mensaje_ = document.getElementById("card_mensaje");
                    var _formulario_ = document.getElementById("card_formulario");
                    _mensaje_.classList.replace('d-none', 'd-block');
                    _formulario_.classList.replace('d-block', 'd-none');
                    console.debug("listo!");
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var _cl_lenguaje = document.getElementsByClassName("cl_lenguaje");
    var cl_lenguaje_i_ = document.getElementsByClassName("cl_lenguaje_i");
    var _r_nivel_valid = document.getElementsByClassName("r_nivel_valid");
    var _textarea_valid = document.getElementById("textarea_valid");
    var textarea_ = document.getElementById("opinion");
    var nivel_python_ = document.getElementById("nivel_python");
    var nivel_python_p_ = document.getElementById("nivel_python_p");
    var nivel_java_ = document.getElementById("nivel_java");
    var nivel_java_p_ = document.getElementById("nivel_java_p");
    var nivel_cpp_ = document.getElementById("nivel_cpp");
    var nivel_cpp__p_ = document.getElementById("nivel_cpp_p");
    var _check_dificil_valid = document.getElementsByClassName("check_dificil_valid");
    var _check_dificil_i = document.getElementsByClassName("check_dificil_i");
    var otro_ = document.getElementById("otro");
    nivel_python_.addEventListener("change", function () {
        nivel_python_p_.innerHTML = "Nivel [ " + String(nivel_python_.value) + " ]";
    });
    nivel_java_.addEventListener("change", function () {
        nivel_java_p_.innerHTML = "Nivel [ " + String(nivel_java_.value) + " ]";
    });
    nivel_cpp_.addEventListener("change", function () {
        nivel_cpp__p_.innerHTML = "Nivel [ " + String(nivel_cpp_.value) + " ]";
    });
    for (var i = 0; i < _cl_lenguaje.length; i++) {
        _cl_lenguaje[i].addEventListener("change", function () {
            for (var j = 0; j < cl_lenguaje_i_.length; j++)
                if (cl_lenguaje_i_[j].checked) {
                    for (var k = 0; k < _cl_lenguaje.length; k++)
                        _cl_lenguaje[k].classList.replace('is-invalid', 'is-valid');
                    return;
                }
            for (var l = 0; l < _cl_lenguaje.length; l++)
                _cl_lenguaje[l].classList.replace('is-valid', 'is-invalid');
        });
    }
    for (var i = 0; i < _r_nivel_valid.length; i++) {
        _r_nivel_valid[i].addEventListener("change", function () {
            for (var i_1 = 0; i_1 < _r_nivel_valid.length; i_1++)
                _r_nivel_valid[i_1].classList.replace('is-invalid', 'is-valid');
        });
    }
    _textarea_valid.addEventListener("change", function () {
        if (String(textarea_.value).length >= 50)
            _textarea_valid.classList.replace('is-invalid', 'is-valid');
        else
            _textarea_valid.classList.replace('is-valid', 'is-invalid');
    });
    for (var i = 0; i < _check_dificil_valid.length; i++) {
        _check_dificil_valid[i], addEventListener("change", function () {
            for (var j = 0; j < _check_dificil_i.length; j++) {
                if (_check_dificil_i[j].checked) {
                    for (var k = 0; k < _check_dificil_valid.length; k++)
                        _check_dificil_valid[k].classList.replace('is-invalid', 'is-valid');
                    return;
                }
            }
            if (String(otro_.value).length > 0)
                for (var k = 0; k < _check_dificil_valid.length; k++)
                    _check_dificil_valid[k].classList.replace('is-invalid', 'is-valid');
            else
                for (var k = 0; k < _check_dificil_valid.length; k++)
                    _check_dificil_valid[k].classList.replace('is-valid', 'is-invalid');
        });
    }
});
