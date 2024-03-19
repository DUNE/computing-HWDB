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

<!--testing style and script-->
<style>
body {background-color: white;}
h1 {color: blue;}
</style>
<script>
<!-- will try https://www.w3schools.com/howto/howto_css_modal_images.asp -->
</script>

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


{% include links.md %}
