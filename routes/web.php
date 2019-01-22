<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//PageControll Route
// Route::get('page1','PageControllers@p1');
Route::get('page2','PageControllers@show');
Route::get('page/{mypage}','PageControllers@onepage');
Route::post('pagestore','PageControllers@store');
Route::get('page/{id}/delete','PageControllers@delete');

//NoteControlle Route
Route::post('page/{mypage}/thenote','NoteController@addnote');
Route::get('page/{not_id}/deleten','NoteController@deletenote');
Route::get('page/{not_id}/editn','NoteController@editNote');
Route::post('page/{not_id}/update','NoteController@updateNote');



//Authintication Route
Auth::routes();

Route::get('/home', 'HomeController@index')->middleware('auth')->name('home');
Route::get('/profile', 'HomeController@profile')->name('profile');
Route::get('/control', 'ControlController@control')->name('control');

//Profile
Route::post('update-my-profile/{user_id}','ProfileController@updateProfile');

//Course
Route::post('createCourse','ControlController@createCourse');
