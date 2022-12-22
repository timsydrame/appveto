<?php

namespace App\Http\Controllers;

use App\Models\Veterinaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VeterinaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
            return Veterinaire::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'adresse' => 'required',
            'password' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de validation',
                'errors' => $validator->errors()
            ], 400);
        }

        $veterinaire = Veterinaire::create($input);

        return response()->json([
            'success' => true,
            'message' => 'Le véterianaire a bien été créé',
            'veterinaire' => $veterinaire
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Veterinaire::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //On récupère le Veterinaire ayant id=$id
        $veterinaire = Veterinaire::find($id);

        // Si introuvable, on repond avec 404 Not found
        if($veterinaire === null) {
            return response()->json([
                'success' => false,
                'message' => 'Veterinaire introuvable',
            ], 404);
        }
        
        $veterinaire->nom = $request->nom;
        $veterinaire->prenom = $request->prenom;
        $veterinaire->email = $request->email;
        $veterinaire->adresse = $request->adresse;
        $veterinaire->password = $request->password;

        $veterinaire->save();

        return response()->json([
            'success' => true,
            'message' => 'Veterinaire mis à jour',
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //On récupère le Veterinaire ayant id=$id
        $veterinaire = Veterinaire::find($id);

        // Si introuvable, on repond avec 404 Not found
        if($veterinaire === null) {
            return response()->json([
                'success' => false,
                'message' => 'Veterinaire introuvable',
            ], 404);
        }

        $veterinaire->destroy($id);
        return response()->json([
            'success' => true,
            'message' => 'Veterinaire supprimé',
        ], 200);
    }
}
