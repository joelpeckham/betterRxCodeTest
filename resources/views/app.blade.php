<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="NPI Search is a free National Provider Identifier database search engine.
                Search the NPI database by NPI Number, First Name, Last Name, Organization Name, Phone Number, or Location.">
    <meta name="keywords"
        content="NPI, National Provider Identifier, NPI Search, NPI Database, NPI Number, NPI Registry, NPI Lookup,
        NPI API, NPI Search API, NPI Search Engine, NPI Search Tool, NPI Search Website, NPI Search App, NPI Search Application,
        NPI Search Service, NPI Search Provider, NPI Search Company, NPI Search Organization, NPI Search Business Name, NPI Search Phone Number,
        NPI Search Address, NPI Search City, NPI Search State, NPI Search Zip Code, NPI Search County, NPI Search Country, NPI Search Latitude,
        NPI Search Longitude, NPI Search Location">


    <title inertia>{{ config('app.name', 'NPI Search') }}</title>

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased" style="padding: 0;">
    @inertia
</body>

</html>
