<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <!--CSS -->
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

    <title>Hello, world!</title>
  </head>

  <body>

    <header>     
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{route('agregar_consolas')}}">
                  <img class = "logo" src="{{asset('img/logo.png')}}" alt="">
                
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="{{route('agregar_consolas')}}">Agregar Consola</a>
                    <a class="nav-link" href="{{route('ver_consolas')}}">Ver Consolas</a>
                    <a class="nav-link" href="{{route('ver_juegos')}}">Ver Juegos</a>
                    <a class="nav-link" href="{{route('agregar_juegos')}}">Agregar juegos</a>
                </div>
                </div>
            </div>
        </nav>
    
    </header>

    <main class= "container-fluid">
        @yield('contenido')
    </main>
    
    <footer>
    </footer>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <!--Libreria-->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!--Codigo propio-->
    <script src="{{asset('js/axios_config.js')}}"></script>
    <!--Esto define el una seccion que se va a llamar-->
    @yield("javascript")
  
  </body>
</html>