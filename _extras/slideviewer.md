---
title: "Slideshow Viewer Dev"
teaching: 0
exercises: 0
questions:
- Experimenting with images
objectives:  
- Experimentation
keypoints:
- Demo
---

<!---  Note, there are three dashes for markdown comment vs. two for HTML
Scripts for slideviewer used is Software Carpentries templates.                                        

Often first offerings of lessons extend from Powerpoint, Key, or Slides.                                   
The slideviewrer.md (_extras), slideviewer.js (_includes), and slideviewer.css (_includes) are examples   
for building markdown lessons that offer a popup window of a slide that has text and an associate slide   
which allows lessons to evolve naturally over time to become a more complete SC lesson.                   
David DeMuth, Jr., DUNE June, 2024     

Slides exported from PPT, Key, or Slides will be iterated numerically as .jpeg, for example the slideshow 
Setting-up-Types.key is exported to the folder/files as                                                   
Setting-up-Types/Setting-up-Types.001.jpeg, Setting-up-Types/Setting-up-Types.002.jpeg, etc.              
The idea with this script is that only the iteration index slideNum need to be passed, e.g. passing 001   
will be enough to reference the slide to be popped up.
--->

<script>
function openSlidePopup(slideNum) {
    var slideExple = '../fig/Setting-up-Types/Setting-up-Types.001.jpeg';
    var slideBase = '../fig/Setting-up-Types/Setting-up-Types.';
    var slideNum = '001';
    var slideExt = '.jpeg';
    var slideUrl = slideBase.concat(slideNum,slideExt);
				      
    var slidePopup = window.open("", "slidePopup", "width=800,height=400");
    slidePopup.document.write(`<img src="${slideUrl}" style="max-width:100%; max-height:100%;">`);
}

function openImagePopup() {
  var imageUrl = '../fig/Setting-up-Types/Admin-list.png'; // Update the path to your image file
  var imagePopup = window.open("", "ImagePopup", "width=400,height=400");
  imagePopup.document.write(`<img src="${imageUrl}" style="max-width:100%; max-height:100%;">`);
}

function openImagePopup2() {
  var imageUrl = '../fig/Setting-up-Types/Setting-up-Types.001.jpeg';
  var imagePopup = window.open("", "ImagePopup", "width=400,height=400");
  imagePopup.document.write(`<img src="${imageUrl}" style="max-width:100%; max-height:100%;">`);
}
</script>

<style>
.button {
  display: inline-block;
  height: 134px;
  padding: 0;
  margin: 0;
  vertical-align: top;
  text-align: center;
  width: 204px;
  border: 0;
  background-size: 100%; 
  
}

.img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  vertical-align: center;
  max-width: 100%;
  height: auto;
}

* {
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;
}

.left {
  width: 75%;
}

.right {
  width: 15%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

### Testing Image Embeds

Referencing fig directory as relative
~~~
![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg){: .image-with-shadow}{: width="85%"}
~~~
{: .source}

![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg){: .image-with-shadow}{: width="85%"}


#### Testing popup slide

Click on the image to open in window, right click to open in you window or tab.
~~~
<a href="{{ page.root }}/fig/Setting-up-Types/Setting-up-Types.001.jpeg">
  <img src="{{ page.root }}/fig/Setting-up-Types/Setting-up-Types.001.jpeg" alt="Talk 1 Slide 1" />
</a>
~~~
{: .source}

<a href="{{ page.root }}/fig/Setting-up-Types/Setting-up-Types.001.jpeg">
  <img src="{{ page.root }}/fig/Setting-up-Types/Setting-up-Types.001.jpeg" alt="Talk 1 Slide 1" />
</a>

### Testing Acordion

> #### Slide 1
>
>~~~
>>Click on the boxed downarrow to reveal the slide image.
>>![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
>>>{: .solution}
>>{: .challenge}
>~~~
>{: .source}
> Click on the boxed downarrow to reveal the slide image.
>> ## Slide Reveal
>>  ![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
>>
>> Reference: Full Slide Show Link Here
>>{: output}
>{: .solution}
{: .challenge}


#### Blocked as alternative syntax highlighting

> #### Alternate Syntax Highlighting
>
>~~~
> ![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
>~~~
>{: .source}
> 
>
> ![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
>
{: .callout}

> Before inserting Items and their corresponding Tests, we need to define a Component Type and Test Type, respectively. We will do so, first with the WEB UI, and then through the REST API in this section.
>
>> ## Slide Reveal
>>  ![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
>>
>> Reference:  [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}


> First the WEB UI approach.
>> ## Slide Reveal
>>  ![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.002.jpeg)
>>
>>  Reference:  [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}


> One can access to the two versions of the HWDB from these addresses.  We will use the development version in this session.
>> ## Slide Reveal
>>  ![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.003.jpeg)
>>
>>  Reference:  [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

** Experiment with pop-up Figures

![Testing slide embed](../fig/Setting-up-Types/Admin-list.png)

** HTML resize

<img src="../fig/Setting-up-Types/Admin-list.png" width="100" height="100" />

** HTML popup button using JS referencing URL

<button onclick="openImagePopup()">Click to Open Image Popup</button>

** HTML popup button using JS referencing local file

<button onclick="openImagePopup()">Click to Open Image Popup</button>

** HTML popup button using JS referencing local file with image embedded in the button

<button onclick="openImagePopup()">Click to Open Image Popup</button>

<button onclick="openImagePopup()" style="background-image:url('https://raw.githubusercontent.com/DUNE/computing-HWDB/gh-pages/fig/Setting-up-Types/Admin-list.png')">x</button>

<button onclick="openImagePopup()" style="background-image:url('../fig/Setting-up-Types/Admin-list.png')">&nbsp;</button>

<button onclick="openImagePopup()">&nbsp;</button>

START

Two column with thumbnail example

<div class="row">
  <div class="column left" style="background-color:#ccc;"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="column right" style="background-color:#eee;" id="center">
    <img src="../fig/Setting-up-Types/Setting-up-Types.001.jpeg" />
    <button onclick="openImagePopup2()">Popup</button>

  </div>
</div>


STOP


<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

{% include links.md %}
