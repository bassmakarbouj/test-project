<?php

namespace App\Http\Controllers;

use App\FormTemplate;
use App\Http\Requests\EditFormRequest;
use Illuminate\Http\Request;
use App\Form;
use Auth;
use DB;


class FormregisterController extends Controller
{

    public function formRegister(){
        return view('form_register');
    }

    /**
     * @api {post} /add_form/{course} addForm
     * @apiGroup Formregister
     * @apiParam {object} request object array of form info
     * @apiParam {integer} course course id
     *
     * @apiSuccess (Success 200)  form add form to specific course
     * @return Form
     */
    public function addForm(Request $request, $course){
        $form = new Form($request->toArray());
        $form->course_id = $course;
        $form->save();
        return $form;
    }

    /**
     * @api {post} /add_form_template/{form_id} addFormTemplate
     * @apiGroup Formregister
     * @apiParam {object} request object array of registerform info
     * @apiParam {integer} form_id form id
     *
     * @apiSuccess (Success 200)  form_template register form template for student of specific course
     * @return Form
     */
    public function addFormTemplate(Request $request, $form_id){
        $form = DB::table('forms')->where('id',$form_id)->pluck('form_statue');
        if($form[0] == 1){
            $form_template = new FormTemplate($request->toArray());
            $form_template->form_id = $form_id;
            $form_template->student_id = Auth::user()->id;
            $form_template->save();
            return $form_template;
        }
        else{
            return "This form is disable";
        }
    }

    /**
     * @api {post} /edit_form_template/{form_template_id} editFormTemplate
     * @apiGroup Formregister
     * @apiParam {object} request object array of form template updating info
     * @apiParam {object} form_template_id  array contain form template id & field to update
     *
     * @apiSuccess (Success 200) form_template_id  updating form template info
     *
     */
    public function editFormTemplate(EditFormRequest $request, FormTemplate $form_template_id ){
        $form_template_id->update($request->all());
        $form_template_id->save();
        return $form_template_id;
    }

 /**
     * @api {post} /edit_form/{form_id} editForm
     * @apiGroup Formregister
     * @apiParam {object} request object array of form updating info
     * @apiParam {object} form_id  array contain form id & field to update
     *
     * @apiSuccess (Success 200) form_id  updating form info
     *
     */
    public function editForm(Request $request, Form $form_id ){
        $form_id->update($request->all());
        $form_id->save();
        return $form_id;
    }

    /**
     * @api {get} /form_template formTemplate
     * @apiGroup Formregister
     *
     * @apiSuccess (Success 200) all_form show all form template info
     */
    public function formTemplate(){
        $all_form = DB::table('form_templates')->get()->all();
        return $all_form;
    }

/**
     * @api {get} /form form
     * @apiGroup Formregister
     *
     * @apiSuccess (Success 200) all_form show all form info
     */
    public function form(){
        $all_form = DB::table('forms')->get()->all();
        return $all_form;
    }

    /**
     * @api {get} /delete_Form/{form_id} deleteForm
     * @apiGroup Formregister
     * @apiParam {object} form_id object array contain form id to delete
     *
     * @apiSuccess (Success 200)  form_id delete form
     */
    public function deleteForm(Form $form_id){
        $form_id->delete();
        return $form_id;

    }

    /**
     * @api {get} /delete_Form_template/{form_template_id} deleteFormTemplate
     * @apiGroup Formregister
     * @apiParam {object} form_template_id object array contain form template id to delete
     *
     * @apiSuccess (Success 200)  form_template_id delete form template
     */
    public function deleteFormTemplate(FormTemplate $form_template_id){
        $form_template_id->delete();
        return $form_template_id;

    }
}
