<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'description',
        'url',
        'image'
    ];

    /**
     * This accessor will uppercase each letter of each word in the title
     * 
     * @param string $value
     * @return string
     */
    public function getTitleAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * This mutator will put the title in lowercase and strip tags to make sure that the accessor's title will formatted properly
     * 
     * @param string $value
     * @return void
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = strtolower($value);
        $this->attributes['title'] = strip_tags($value);
    }

    /**
     * This mutator will html escape the description
     * 
     * @param string $value
     * @return void
     */
    public function setDescriptionAttribute($value)
    {
        $this->attributes['description'] = strip_tags($value);
    }
}