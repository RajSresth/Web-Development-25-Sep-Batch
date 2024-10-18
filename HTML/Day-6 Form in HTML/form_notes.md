# Form:-
Forms are used to accept input from the user.
To create form in html we use <form></form>.

In html form, to accept input from the user we use <input> tag.
It is unpair tag.
<input type="text">

# Attributes of input tag:
1. type:- type attribute is used to specify which type of data we can accept in that input field.

text
tel
email
password
file
date
time
datetime-local
color
range
search
url
submit
reset
number 
radio
checkbox
month
week
image
button

2. Name Attribute:- name attribute is used to provide name to the input field.

3. Value Attribute:- Value attribute is used to provide initial value to the input field.

4. disabled:- It will make the input field as disabled user can not access the input field. 

5. Readonly:- It will make the input field as readonly user can not access the value but can access the input field.

6. Required:- It will make the input field as mandatory.If input field is empty form will not be submitted.

7. placeholder:- It is used to provide hint to the user.

8. autofocus:- Whenever page reload it will automatically focus an input field.

9. maxlength:-The maxlength attribute specifies the maximum number of characters allowed in the <input> element.

10. minlength:-The minlength attribute specifies the minimum number of characters allowed in the <input> element.

11. autocomplete:- on/off


# Label Tag:
Lable tag is used to connect text with the input field.

The text we want to connect we have to write within label tag.
<label for="user-name">
    Name
</label>.


Input tag we have to use id attribute and that id's value we have to pass to label's for attribute.
<input type="text" id="user-name">

whenever use click on that text respective input field will be focused.


# fieldset:-
Fieldset tag is used to group form and it will create one box around all the elements.

Fieldset tag we have to write within form tag.

# legend tag:-
To provide title or caption to the form we use legend tag.
Legend tag we have to write within fieldset tag.


# Select Tag:-
1. Select tag is used to create dropdown list.
2. Here we are providing multiple option to the user from these option user can select only one value.
3. To create option inside dropdown list we use option tag.
4. syntax:-

        <select name="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>


# Datalist:-
1. The Datalist Tag is introduced in Html5.
2. The Html datalist tag is used to provide an autocomplete feature on the form element.
3. Datalist tag is a container tag.
4. It is block level element.
5. It is used to provide a list of predefined options to the users.
6. Datalist tag is used to create suggestion list or autocomplete list.
7. The <datalist> tag contains a set of <option> tags that define the options in the list.
8. We are binding the suggestion list with the input field, for this we have to provide 'list' attribute in the input tag and 'id' attribute in the datalist tag, this same 'id' we have to provide in the 'list' attribute of input tag.
9. Whenever the user inputs in the input field related suggestions are displayed.
10. The advantage of using the datalist tag is that it allows users to enter values that are not present in the options list.


# Textarea:-
It is used to accept multiline input from the user.
 <textarea name="" id=""></textarea>

 height:- rows="10"
 width:- cols="30"
