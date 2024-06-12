{%comment}
slideviewer js file by DeMuth
{%endcomment}

{%comment}
Scripts for slideviewer used is Software Carpentries templates.                                        
Often first offerings of lessons extend from Powerpoint, Key, or Slides.                                   
The slideviewrer.md (_extras), slideviewer.js (_includes), and slideviewer.css (_includes) are examples   
for building markdown lessons that offer a popup window of a slide that has text and an associate slide   
which allows lessons to evolve naturally over time to become a more complete SC lesson.                   
David DeMuth, Jr., DUNE June, 2024                                                                                                                          
{%endcomment}

{%comment}
Slides exported from PPT, Key, or Slides will be iterated numerically as .jpeg, for example the slideshow 
Setting-up-Types.key is exported to the folder/files as                                                   
Setting-up-Types/Setting-up-Types.001.jpeg, Setting-up-Types/Setting-up-Types.002.jpeg, etc.              
The idea with this script is that only the iteration index slideNum need to be passed, e.g. passing 001   
will be enough to reference the slide to be popped up.
{%endcomment}

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

