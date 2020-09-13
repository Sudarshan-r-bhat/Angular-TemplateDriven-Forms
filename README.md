# Angular-TemplateDriven-Forms

## Guidelines:
wrap each line of form inside the div class 'form-group'

And its a angular rule to include class="form-control" to apply angular effects. for each input form elements.

Once we import FormsModule. angular will automatically add all formControls to 
the form. Its upto us how we use the forms module classes.

## form access and manipulation
'<tag #<name>="<directive>" ></tag>' this syntax is called template reference.

FormModule classes extract the data using the attribute 'name'. Hence it is necessary to give a name to every element in the form and add the property 'ngModel'.

ngModel property binding '[ngModel]' takes 2 types of assignments. 1.template reference, 2. script file variable.




## Important form form-control directives to remember:

1. "ngForm" -(string directive) this is assigned to a template reference and all form .
state and values can be fetched using this. template reference.

2. ngModelGroup - this directive is used to group a set of form elements/groups

3. ngModel - this directive is mainly used for data-binding.

## ngModel classes that are applied to forms based on user Activity:  
ng-touched /un
ng-dirty / pristine
ng-valid/ in 


You can check what classes have been applied to the from elements through the template-reference declared in the form element.
ex: <input name="username" #name type="text" required>
here #name is the elements template reference.
so, now , you can access all classes applied to this html elements using interpolation as {{name.className}}


## Note: data binding and getting reference to the class using 
the template-reference are 2 different things.
for Ex: 1. [(ngModel)] = "<variable>"
		2. #reference = "ngModel" 
here in 1. there is only binding, in 2, there is access to
the entire angular class applied to that Html-element.		



'class binding' this is used to apply some effects to the element using angular. 
syntax: <tag [class.<method>] = "<directive>.<method>" >



## Also, note that, there is a clear-cut difference 
between 'attribute and property' so, 
for ex: class=" " is attribute  
and [class.method]=" " is property.
