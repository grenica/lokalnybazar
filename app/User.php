<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens,Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // relacje
    public function roles() {
        return $this->belongsToMany(Role::class);
    }

    public function isAdmin() {
        if($this->roles->first()->name =='Admin'){
            return true;
        } else {
            return false;
        }
        
    }
    
    public function isFarmer() {
        if($this->roles->first()->name =='Rolnik'){
            return true;
        } else {
            return false;
        }
       
    }
    public function isClient() {
        if($this->roles->first()->name =='Klient'){
            return true;
        } else {
            return false;
        }
       
    }

    public function farmer() {
        //  return $this->hasMany(Farmers::class);
         return $this->hasOne(Farmer::class);
    }

    public function client() {
        //  return $this->hasMany(Farmers::class);
         return $this->hasOne(Client::class);
    }
}
