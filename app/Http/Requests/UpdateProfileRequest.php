<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
//        return true;
        return $this->user()->hasRole('admin','trainer','user');
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'  =>  'string',
            'email' =>  'string',
            'password'  =>  'string',
            'photo'  =>  'file',
            'statue'  =>  'boolean',
        ];
    }
}
