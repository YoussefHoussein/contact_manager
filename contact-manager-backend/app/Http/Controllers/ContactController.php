<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Address;
class ContactController extends Controller
{
    //
    public function addContact(Request $request){
        $name = $request->name;
        $phone_number = $request->phone_number;
        $latitude = $request->latitude;
        $longitude = $request->longitude;

        $address = new Address();

        $address->latitude = $latitude;
        $address->longitude = $longitude;
        $address->save();

        $contact = new Contact();
        $contact->name = $name;
        $contact->phone_number = $phone_number;
        $contact->address_id = $address->id;
        $contact->save();

        return response()->json([
            'status' => 'Success',
        ], 200);
    }
    public function deleteContact(Request $request){
        if($request->id){
            $contact = Contact::find($request->id);
            if($contact){
                $contact->delete();
                return response()->json([
                    'status' => 'Success',
                ], 200);
            }
            else{
                return response()->json([
                    'status' => 'Failed',
                    'message' => 'Contact not exists',
                ], 200);;
            }
        }
    }
}
