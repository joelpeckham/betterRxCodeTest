<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

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
    $registryURL = 'https://npiregistry.cms.hhs.gov/api/?number=' . $npi
      . '&enumeration_type=&taxonomy_description=' . $taxonomy
      . '&name_purpose=&first_name=' . $firstName
      . '&use_first_name_alias=&last_name=' . $lastName
      . '&organization_name=&address_purpose=&city=' . $city
      . '&state='.$state
      .'&postal_code='.$zip
      .'&country_code=&limit=&skip=&pretty=&version=2.1';
    $curl = curl_init();
    curl_setopt_array(
      $curl,
      array(
        CURLOPT_URL => $registryURL,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 5,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
      )
    );

    $res = curl_exec($curl);

    curl_close($curl);
    return Inertia::render(
      'Welcome',
      [
        'searchRes' => [$request, json_decode($res)],
      ]
    );
  }
}