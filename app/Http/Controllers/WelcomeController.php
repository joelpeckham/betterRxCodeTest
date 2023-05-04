<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Http;

function buildNPIApiUrl(Request $request, $pageSize = 50)
{
    $request = request()->all();
    $page = @$request["page"];
    if (!$page) {
        $page = 1;
    }
    $skip = ($page - 1) * $pageSize;
    $limit = $pageSize + 1;
    $npiApiUrl =
        "https://npiregistry.cms.hhs.gov/api/?number=" .
        @$request["npiNumber"] .
        "&enumeration_type=&taxonomy_description=" .
        @$request["taxonomyDescription"] .
        "&name_purpose=&first_name=" .
        @$request["firstName"] .
        "&use_first_name_alias=&last_name=" .
        @$request["lastName"] .
        "&organization_name=&address_purpose=&city=" .
        @$request["city"] .
        "&state=" .
        @$request["state"] .
        "&postal_code=" .
        @$request["zip"] .
        "&country_code=&limit=" .
        $limit .
        "&skip=" .
        $skip .
        "&pretty=&version=2.1";
    return $npiApiUrl;
}

class WelcomeController extends Controller
{
    public function search(Request $request)
    {
        //Pre API Call Validation
        $validated = $request->validate([
            "npiNumber" => "nullable|digits:10|numeric",
            "state" => "nullable|alpha|size:2",
        ]);

        $response = Http::get(buildNPIApiUrl($request));

        $res = $response->body();
        $error_msg = $response->serverError();
        $res_headers = $response->headers();

        //Post API Call Validation
        $decoded = json_decode($res, true);
        if (@$decoded["Errors"]){
            $errorMessages = array();
            foreach ($decoded["Errors"] as $error) {
                $errorMessages[$error['field']] = $error['description'];
            }
            // $errorMessages["firstName"] = $res;
            $error = \Illuminate\Validation\ValidationException::withMessages($errorMessages);
            throw $error;
        }

        return Inertia::render("Welcome", [
            "searchData" => [
                "req" => $request,
                "res" => json_decode($res),
                "err" => $error_msg,
                "resHeaders" => $res_headers,
            ],
        ]);
    }

    public function show(Request $request)
    {
        return Inertia::render("Welcome");
    }
}
