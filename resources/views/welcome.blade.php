<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div id="app">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/about">About</router-link>
            <router-view></router-view>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
