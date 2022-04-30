## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) We will need two <select> tags for a dropdown menu. We will need <option> tags for each each picture we will generate. 
We will need an <input> and a <button>. We will need a placeholder <ul> for our slogans.
1) We need to track the state of the dropdown selections. We will need to track the state of the #background images in css. we will need to track the stated of the slogans entered. 
1) <select> is needed for our dropdown menus. <option> is needed to give a list of option in the dropdown menu. <input> is needed to submit our slogans. <ul> will act as a placeholder to generated our slogan list in js. 
1) 
<select> will need documents.getElementByID to look for the option selected. <option> we will need to grab that ID and use it to generate the url for our image. <input> we will need to get element value for pushing to array. <button> we will need to get 'click' to get the submission for <input> value. 

1) 
When <select> we need a 'change' to update the DOM background img.
When <option> we need to take that id and put it into the css url. 
when <input><button> we need a 'click' to push option.value to array. 
<ul> will be used to document.createElement so we can .append a new element into it.
1) we need to console.log() the array to make sure we push to it. we need to console.log() each event listener to make sure it is working.
1) 
We need the array to work so we can .append a new element with it's values.

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
