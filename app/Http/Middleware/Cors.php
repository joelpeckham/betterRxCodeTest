<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Allow access for https://npiregistry.cms.hhs.gov/api/
        return $next($request)
            ->header('Access-Control-Allow-Origin', 'https://npiregistry.cms.hhs.gov/api/');

    }
}
