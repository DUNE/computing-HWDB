---
title: "Slideshow Viewer Dev"
teaching: 0
exercises: 0
questions:
- What is a Software Carpentry lesson template?
- Which lesson template should we use for source?
- How to import lesson template as a GitHub repo?
objectives:  
- Identify Software Carpentry lesson template source.
- Build DUNE repo and corresponding .io site.
keypoints:
- Build from styles template is straightforward but requires a few steps for GitHub Pages to render correctly.
---


<!--testing style and script-->
<style>
body {background-color: white;}
h1 {color: blue;}
</style>


### Testing Image Embeds

Referencing fig directory as relative
~~~
![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
~~~
{: .source}


![Testing slide embed](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)


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


{% include links.md %}
