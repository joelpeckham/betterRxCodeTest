<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WelcomeController extends Controller
{
  public function show()
  {
    $request = request()->all();
    $firstName = @$request['firstName'];
    $lastName = @$request['lastName'];
    $city = @$request['city'];
    $state = @$request['state'];
    $zip = @$request['zip'];
    $taxonomy = @$request['taxonomyDescription'];
    $npi = @$request['npiNumber'];
    $page = @$request['page'];
    if (!$page) {
      $page = 1;
    }
    $skip = ($page - 1) * 50;
    $limit = 51;
    $registryURL = 'https://npiregistry.cms.hhs.gov/api/?number=' . $npi
      . '&enumeration_type=&taxonomy_description=' . $taxonomy
      . '&name_purpose=&first_name=' . $firstName
      . '&use_first_name_alias=&last_name=' . $lastName
      . '&organization_name=&address_purpose=&city=' . $city
      . '&state=' . $state
      . '&postal_code=' . $zip
      . '&country_code=&limit=' . $limit
      . '&skip=' . $skip
      . '&pretty=&version=2.1';

    $response = Http::get($registryURL);
    $res = $response->body();
    $error_msg = $response->serverError();
    $res_headers = $response->headers();
    // $ch = curl_init();
    // curl_setopt_array(
    //   $ch,
    //   array(
    //     CURLOPT_URL => $registryURL,
    //     CURLOPT_RETURNTRANSFER => true,
    //     CURLOPT_USERAGENT => "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)",
    //     CURLOPT_ENCODING => '',
    //     CURLOPT_MAXREDIRS => 10,
    //     CURLOPT_TIMEOUT => 50,
    //     CURLOPT_FOLLOWLOCATION => true,
    //     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //     CURLOPT_CUSTOMREQUEST => 'GET',
    //   )
    // );

    // $res = curl_exec($ch);
    // if (curl_errno($ch)) {
    //     $error_msg = curl_error($ch);
    // }
    // $curlinfo = curl_getinfo($ch);
    // curl_close($ch);

    return Inertia::render(
      'Welcome',
      [
        'searchRes' => array("req" => $request, "res" => json_decode($res), "err" => $error_msg, "url" => $registryURL, "resHeaders" => $res_headers )
      ]
    );
  }
}
