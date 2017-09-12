var page = require('page');
var yo = require('yo-yo');
var main = document.getElementById('main-container');
//var empty = require('empty-element');

page('/', function(ctx, next) {
    //main.innerHTML = '<a href="/signup">Signup</a>'
})

page('/signup', function(ctx, next) {

    var el = yo `<div class="container">
            <div class="row">
                <div class="col s10 push-s1">
                    <div class="row">
                        <div class="col m5 hide-on-small-only">
                            <img class="iphone" src="iPhone-PNG.png" alt="">
                        </div>
                        <div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="platzigram">Platzigram</h1>
                                    <form action="" class="signup-form">
                                        <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                                        <div class="section">
                                            <a href="" class="btn btn-fb hiden-on-small-only">Iniciar sesion con Facebook</a>
                                            <a href="" class="btn btn-fb hiden-on-med-and-up">Iniciar sesiòn</a>
                                        </div>
                                        <div class="divider">

                                        </div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="Correo electronico" />
                                            <input type="text" name="name" placeholder="Nombre Completo" />
                                            <input type="text" name="username" placeholder="Nombre de Usuario" />
                                            <input type="password" name="password" placeholder="Contraseña" />
                                            <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        
        main.appendChild(el);
})

page();