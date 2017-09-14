var yo = require('yo-yo');
var landing = require('../landing')

var signinForm = `yo <div class="col s12 m7">
<div class="row">
    <div class="signup-box">
        <h1 class="platzigram">Platzigram</h1>
        <form action="" class="signup-form">
            <div class="section">
                <a href="" class="btn btn-fb hiden-on-small-only">Iniciar sesion con Facebook</a>
                <a href="" class="btn btn-fb hiden-on-med-and-up">Iniciar sesiòn</a>
            </div>
            <div class="divider">

            </div>
            <div class="section">
                <input type="text" name="username" placeholder="Nombre de Usuario" />
                <input type="password" name="password" placeholder="Contraseña" />
                <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesion</button>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="login-box">
        ¿No tienes una cuenta? <a href="/signin">Registrate</a>
    </div>
</div>
</div>`;

module.exports = landing(signinForm);


