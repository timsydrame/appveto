<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VeterinaireResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'email' => $this->email,
            'adresse' => $this->adresse,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
