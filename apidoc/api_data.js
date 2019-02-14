define({ "api": [
  {
    "type": "get",
    "url": "/add_manager/{role}/{user}",
    "title": "addManager",
    "group": "Control",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "role",
            "description": "<p>object array contain role id</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>object array contain user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "user",
            "description": "<p>update user role</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ControlController.php",
    "groupTitle": "Control",
    "name": "GetAdd_managerRoleUser"
  },
  {
    "type": "get",
    "url": "/delete_manager_account/{manager_id}",
    "title": "deleteManagerAccount",
    "group": "Control",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "manager_id",
            "description": "<p>object array contain manager id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "manager_id",
            "description": "<p>delete manager</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ControlController.php",
    "groupTitle": "Control",
    "name": "GetDelete_manager_accountManager_id"
  },
  {
    "type": "get",
    "url": "/delete_student_account/{student_id}",
    "title": "deleteStudentAccount",
    "group": "Control",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "student_id",
            "description": "<p>object array contain student id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "student_id",
            "description": "<p>delete student</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ControlController.php",
    "groupTitle": "Control",
    "name": "GetDelete_student_accountStudent_id"
  },
  {
    "type": "get",
    "url": "/show_all",
    "title": "showAll",
    "group": "Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "courses",
            "description": "<p>Get all courses info</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "course_field",
            "description": "<p>Get courses table field name</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "category",
            "description": "<p>Get all category info</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "category_field",
            "description": "<p>Get category table field name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ControlController.php",
    "groupTitle": "Control",
    "name": "GetShow_all"
  },
  {
    "type": "get",
    "url": "/student",
    "title": "student",
    "group": "Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "all_student",
            "description": "<p>show all student info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ControlController.php",
    "groupTitle": "Control",
    "name": "GetStudent"
  },
  {
    "type": "post",
    "url": "/edit_user_profile/{user_id}",
    "title": "editUserProfile",
    "group": "Control",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of user profile updating info</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user_id",
            "description": "<p>array contain user id &amp; field to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "user_id",
            "description": "<p>updating user info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ControlController.php",
    "groupTitle": "Control",
    "name": "PostEdit_user_profileUser_id"
  },
  {
    "type": "get",
    "url": "/course_category",
    "title": "courseCategory",
    "group": "CourseCategory",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "category",
            "description": "<p>get all category info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseCategoryController.php",
    "groupTitle": "CourseCategory",
    "name": "GetCourse_category"
  },
  {
    "type": "get",
    "url": "/delete_course_category/{cat_id}",
    "title": "deleteCourseCategory",
    "group": "CourseCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "cat_id",
            "description": "<p>object array contain category id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "cat_id",
            "description": "<p>delete category</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseCategoryController.php",
    "groupTitle": "CourseCategory",
    "name": "GetDelete_course_categoryCat_id"
  },
  {
    "type": "post",
    "url": "/create_course_category",
    "title": "createCourseCategory",
    "group": "CourseCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of  category info</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "success 200": [
          {
            "group": "success 200",
            "optional": false,
            "field": "category",
            "description": "<p>Add category</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseCategoryController.php",
    "groupTitle": "CourseCategory",
    "name": "PostCreate_course_category"
  },
  {
    "type": "post",
    "url": "edit_course_category/{cat_id}",
    "title": "editCourseCategory",
    "group": "CourseCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of category updating info</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "cat_id",
            "description": "<p>array of category id &amp; field to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "cat_id",
            "description": "<p>updating category info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseCategoryController.php",
    "groupTitle": "CourseCategory",
    "name": "PostEdit_course_categoryCat_id"
  },
  {
    "type": "get",
    "url": "/course",
    "title": "course",
    "group": "Course",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "course",
            "description": "<p>get all course info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Course",
    "name": "GetCourse"
  },
  {
    "type": "get",
    "url": "/course/{course_id}",
    "title": "oneCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "one_course",
            "description": "<p>get a specifec course info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Course",
    "name": "GetCourseCourse_id"
  },
  {
    "type": "get",
    "url": "/deleteCourse/{course_id}",
    "title": "deleteCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "course_id",
            "description": "<p>object array contain course id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "course_id",
            "description": "<p>delete course</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Course",
    "name": "GetDeletecourseCourse_id"
  },
  {
    "type": "get",
    "url": "/new_course",
    "title": "newCourse",
    "group": "Course",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "courses",
            "description": "<p>get new course info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Course",
    "name": "GetNew_course"
  },
  {
    "type": "post",
    "url": "/createCourse",
    "title": "createCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of course info</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "success 200": [
          {
            "group": "success 200",
            "optional": false,
            "field": "course",
            "description": "<p>Add course  with image &amp; files</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Course",
    "name": "PostCreatecourse"
  },
  {
    "type": "post",
    "url": "editCourse/{course_id}",
    "title": "editCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of course updating info</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "course_id",
            "description": "<p>array contain course id &amp; feild to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "course_id",
            "description": "<p>updating course info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Course",
    "name": "PostEditcourseCourse_id"
  },
  {
    "type": "get",
    "url": "/delete_Form/{form_id}",
    "title": "deleteForm",
    "group": "Formregister",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "form_id",
            "description": "<p>object array contain form id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "form_id",
            "description": "<p>delete form</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "GetDelete_formForm_id"
  },
  {
    "type": "get",
    "url": "/delete_Form_template/{form_template_id}",
    "title": "deleteFormTemplate",
    "group": "Formregister",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "form_template_id",
            "description": "<p>object array contain form template id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "form_template_id",
            "description": "<p>delete form template</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "GetDelete_form_templateForm_template_id"
  },
  {
    "type": "get",
    "url": "/form",
    "title": "form",
    "group": "Formregister",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "all_form",
            "description": "<p>show all form info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "GetForm"
  },
  {
    "type": "get",
    "url": "/form_template",
    "title": "formTemplate",
    "group": "Formregister",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "all_form",
            "description": "<p>show all form template info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "GetForm_template"
  },
  {
    "type": "post",
    "url": "/add_form/{course}",
    "title": "addForm",
    "group": "Formregister",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of form info</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "course",
            "description": "<p>course id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "form",
            "description": "<p>add form to specific course</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "PostAdd_formCourse"
  },
  {
    "type": "post",
    "url": "/add_form_template/{form_id}",
    "title": "addFormTemplate",
    "group": "Formregister",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of registerform info</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "form_id",
            "description": "<p>form id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "form_template",
            "description": "<p>register form template for student of specific course</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "PostAdd_form_templateForm_id"
  },
  {
    "type": "post",
    "url": "/edit_form/{form_id}",
    "title": "editForm",
    "group": "Formregister",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of form updating info</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "form_id",
            "description": "<p>array contain form id &amp; field to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "form_id",
            "description": "<p>updating form info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "PostEdit_formForm_id"
  },
  {
    "type": "post",
    "url": "/edit_form_template/{form_template_id}",
    "title": "editFormTemplate",
    "group": "Formregister",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of form template updating info</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "form_template_id",
            "description": "<p>array contain form template id &amp; field to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "form_template_id",
            "description": "<p>updating form template info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FormregisterController.php",
    "groupTitle": "Formregister",
    "name": "PostEdit_form_templateForm_template_id"
  },
  {
    "type": "get",
    "url": "/home",
    "title": "index",
    "group": "Home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "return",
            "description": "<p>home view</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/HomeController.php",
    "groupTitle": "Home",
    "name": "GetHome"
  },
  {
    "type": "post",
    "url": "user/login",
    "title": "login",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of login input values</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "token",
            "description": "<p>login successfuly</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/APILoginController.php",
    "groupTitle": "Login",
    "name": "PostUserLogin"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "profile",
    "group": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "id",
            "description": "<p>return logged in user info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ProfileController.php",
    "groupTitle": "Profile",
    "name": "GetProfile"
  },
  {
    "type": "post",
    "url": "update_my_profile/{user_id}",
    "title": "updateMyProfile",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of logged in user profile updating info</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user_id",
            "description": "<p>array contain user id &amp; field to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "user_id",
            "description": "<p>updating profile info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ProfileController.php",
    "groupTitle": "Profile",
    "name": "PostUpdate_my_profileUser_id"
  },
  {
    "type": "post",
    "url": "user/register",
    "title": "register",
    "group": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>object array of register input values</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "token",
            "description": "<p>Register user with authorization</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>get all user info for register</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/APIRegisterController.php",
    "groupTitle": "Register",
    "name": "PostUserRegister"
  }
] });
