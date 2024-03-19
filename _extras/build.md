---
title: "Build Notes for DUNE computing-HWDB" 
teaching: 0 
exercises: 0 
questions: 
- How to import lesson template as a GitHub repo? 
objectives:  
- Build a GitHub repository and corresponding .io site to present DUNE Computing training materials.
keypoints: 
- Build from styles template is straightforward but requires numerous steps to ensure the GitHub Pages render correctly.
---

## Introduction

In this lesson we will build a github.io site for the upcoming training of the DUNE Computing HWDB which has learning materials presented using the Software Carpentry (SC) templates. 

Identify SC lesson template source:
Work from the latest version of the lesson template, to verify versioning, visit [https://github.com/swcarpentry](https://github.com/swcarpentry),  and check out the meta-repository to help navigate the lessons and repos of the SC Community: [https://github.com/swcarpentry/swcarpentry](https://github.com/swcarpentry/swcarpentry).
>## Build Note
>Observing file dates at  https://github.com/carpentries/styles indicates no commits to the styles repo have been made in the last 2 years, with latest release: styles v9.5.3 Latest on Aug 21, 2018. All styles development work has shifted to their Workbench project, still in a beta stage.
{: .callout}

### Steps in a Nutshell
* Copy styles .git URL to buffer
* Create DUNE GitHub instance 
* Import styles (not fork, not clone)
* GitHub settings, set default branch to gh-pages, then delete the main branch.
* Locally, clone your github instance using GitHub Desktop
* In a terminal window whle in top level of your repo, and using $python bin/lesson_initialize.py
* Run $make serve to enable Jekyll/Ruby/Bundler based editing for localhost viewing
* Make edits, when ready push updates to the master repo on Github

### User Setup Expectations
* Versed at building GitHub repo.
* Capable of using GitHub Desktop.
* Has an editing environment such as emacs configured on their development computer.
* Has installed Ruby/Jekyll development framework for localhost editing.
* Markdown as a program language is understood.

### Step by Step Instructions
<p style="color: red; font-weight: bold">>> Assumes user has familiarity with Github, and we encourage the Jekyll/Ruby development environment is used locally to verify content before pushing to Github. <hr></p>

We will build from the styles lesson by importing it into a new DUNE GitHub repo using the source given at: [swcarpentry/styles](https://github.com/swcarpentry/styles). Have a look at [https://github.com/carpentries/styles](https://github.com/carpentries/styles).

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image4.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image4.png" alt="Image 4" width="1042" height="460" />
</a>

Select the green &lt;> Code button, and grab (copy URL to clipboard) the URL for the Clone ([https://github.com/carpentries/styles.git](https://github.com/carpentries/styles.git)) 


<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image18.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image18.png" alt="Image 18" width="378" height="318" />
</a>

Now go to: [https://github.com/DUNE/](https://github.com/DUNE/)

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image12.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image12.png" alt="Image 12" width="820" height="298" />
</a>

Select Repositories tab from the menu, use New repository (green button)


<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image15.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image15.png" alt="Image 15" width="352" height="90" />
</a>

Instead of creating a new repository, follow the Import a repository link which is located in the opening paragraph.

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image7.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image7.png" alt="Image 7" width="1490" height="366" />
</a>

The link to Import a repository → [https://github.com/new/import](https://github.com/new/import)

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image17.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image17.png" alt="Image 17" width="783" height="737" />
</a>

Enter your old repository’s clone URL as [https://github.com/carpentries/styles.git](https://github.com/carpentries/styles.git), declare Your new repository details as: DUNE/computing-HWDB, and as Public, then select the green Begin import button.  

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image5.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image5.png" alt="Image 5" width="654" height="270" />
</a>

> ## Why Import, and not Clone?
>>
>>Clone vs. Fork vs. Import - Repo owner approves all changes through pull requests. Fork - creates a local and remote copy of a repo. You become the owner of the forked repo, but it remains linked to the original repo. Import - creates a local and remote copy of a repo that is unlinked from the original.
>>
>>Reference: [https://joshuadull.github.io/GitHub-Desktop/03-sharing/index.html](https://joshuadull.github.io/GitHub-Desktop/03-sharing/index.html) 
{: .solution}
{: .challenge}


Go to the new repo is [https://github.com/DUNE/computing-HWDB](https://github.com/DUNE/computing-HWDB)  to verify the installation.

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image19.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image19.png" alt="Image 19" width="1199" height="429" />
</a>

Notice the default branch is main, showing minimal content, except, “Please use the gh-pages branch.  Inspect the contents of the gh-pages branch by selecting the main branch dropdown and selecting gh-pages.

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image24.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image24.png" alt="Image 24" width="395" height="378" />
</a>

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image23.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image23.png" alt="Image 23" width="1152" height="1155" />
</a>

We will change the default branch to gh-pages and delete the main branch. Set the default branch of the repo to gh-pages by going to the Settings tab (top menu next the gear icon) or directly: [https://github.com/DUNE/computing-HWDB/settings](https://github.com/DUNE/computing-HWDB/settings) where in the Default branch block:

Select the left-right arrow button and the gh-pages branch, then the Update button

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image1.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image1.png" alt="Image 1" width="664" height="409" />
</a>

Then accept the responsibility of change to gh-pages

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image11.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image11.png" alt="Image 11" width="365" height="163" />
</a>

Afterwards, select the &lt;>Code tab (top menu bar)


<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image3.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image3.png" alt="Image 3" width="1192" height="306" />
</a>

And then the “2 Branches” tab (right of gh-pages) delete the main branch by following the Branches icon in the left menu 

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image10.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image10.png" alt="Image 10" width="1189" height="545" />
</a>

And use the trash can to delete the main branch, the results:

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image20.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image20.png" alt="Image 20" width="1063" height="254" />
</a>

Returning &lt;> Code, we now have a base instance of the styles lesson template parked as a DUNE repo.

Our goal is to build the .io site from our local editing environment using GitHub Desktop to manage the edits which include a couple critical actions, the first being creating the _config.yml file.

Using GitHub Desktop on your Mac or PC, Clone the Repository… [https://github.com/DUNE/computing-HWDB.git](https://github.com/DUNE/computing-HWDB.git) 

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image6.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image6.png" alt="Image 6" width="386" height="117" />
</a>

Selecting DUNE/computing-HWDB which is filtered from those available at GitHub.com assuming your GitHub/DUNE credentials are correct.

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image25.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image25.png" alt="Image 25" width="501" height="494" />
</a>

Verify your new repo has been stashed as a Local Path, and select the CLone (blue) button.

Inspect the file list for your repository in a Terminal window. 

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image14.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image14.png" alt="Image 14" width="515" height="357" />
</a>

Create necessary initial files `$ python bin/lesson_initialize.py `


<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image2.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image2.png" alt="Image 2" width="594" height="49" />
</a>

And reinspect

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image21.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image21.png" alt="Image 21" width="631" height="379" />
</a>

Notice several files have been generated (13), _config.yml, index.md, README.md being among those that require configuration edits.  

Verify the installation by running `$make serve` and inspecting the local version of the .io website via your web browser the URL [http://127.0.1:4000](http://127.0.1:4000) 

Notice the Changes to the repo on your GitHub Desktop app, then provide a Summary, and a short Description, then Commit to gh-pages (blue button) to load the new files, following up with a Push to Origin ([https://github.com/DUNE/computing-HWDB](https://github.com/DUNE/computing-HWDB)).

With these files in place, [https://dune.github.io/computing-HWDB/](https://dune.github.io/computing-HWDB/) will be generated automatically. See Settings:Pages to verify the site is live:

<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image16.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image16.png" alt="Image 16" width="1200" height="469" />
</a>

Now we are ready to build out the site for public use. 

Back at [github.com/DUNE/computing-HWDB](github.com/DUNE/computing-HWDB) add an about:


<a href="{{ page.root }}/fig/computing-HWDB-build-notes-images/image13.png">
  <img src="{{ page.root }}/fig/computing-HWDB-build-notes-images/image13.png" alt="Image 13" width="508" height="419" />
</a>


The [dune.github.io/computing-HWDB](dune.github.io/computing-HWDB) site is now ready for customization that includes index.md, README.md, setup.md. Morevoer, the _episodes can be constructed when a schedule will be automatically generated for display._

A good time to take a break!


{% include links.md %}
