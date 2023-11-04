---
title: \huge Form Basics
date: November 1, 2023
---

- ***First read all code snippets in [lesson page.](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics)***

- ***In [this playlist](https://youtube.com/playlist?list=PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA) watch the videos from [18](https://youtu.be/j2sNOdGMV6I) to [25](https://youtu.be/jlD4wL7vxc4)***

# Assignment Articles I Didn't Read

I may return to these articles later.

## Form basics

1. Read and follow along to [MDN’s Introductory Guides to Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms#introductory_guides) - complete [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form) and [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form#test_your_skills!)

2. Read and follow along to [MDN’s The Different Form Controls Guides](https://developer.mozilla.org/en-US/docs/Learn/Forms#the_different_form_controls)

## Styling forms

1. Read and follow along to [MDN’s Form Styling Guides](https://developer.mozilla.org/en-US/docs/Learn/Forms#form_styling_guides)

2. Read and follow along to [the internetingishard guide to forms](https://internetingishard.netlify.app/html-and-css/forms/index.html)

# Some notes

`action` attribute in `form` tag is used to specify the URL where the form data will be sent.

`GET` is used in `method` attribute when we want to retrieve something from a server meanwhile `POST` is used when we want to change something on the server.

The `name` attribute serves as a reference to the data inputted into a form control after submitting it. You can think of it as a variable name for the input. **Form input should always have a name attribute; otherwise, it will be ignored when the form is submitted.**

Select dropdowns are great for saving space on the page when we have an extensive list of options we want users to choose from. However, when we have a smaller list of 5 or fewer options to choose from, it is often a better user experience to have them displayed on the page instead of hidden behind a dropdown.

Once a user is finished filling in a form, they will need a way to submit it. There is a specialized button for this; the submit button. When a submit button is clicked, it will submit the form it is contained within. **The type attribute has a value of submit by default**, i.e. if the `type` is not specified or the value provided is invalid.

> *It is important to remember that a button within a form with the `type` value of submit (which happens to be the default value) will always try to make a new request and submit data back to the server. Hence, for buttons that are used within a form for different purposes other than submitting the data, the `type` attribute should always be specified to avoid unwanted effects of submitting a form.*
