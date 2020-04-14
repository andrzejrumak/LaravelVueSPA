<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\BokingByReviewBookableShowResource;


class BookingByReviewShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'booking_id' => $this->id,
            'from' => $this->from,
            'to' => $this->to,
            'bookable' => new BokingByReviewBookableShowResource($this->bookable),
            
        ];
    }
}
