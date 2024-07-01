---
title: Introduction to DUNE HWDB Training site
teaching: 0
exercises: 0
questions:
- No privilage is required.
- What is this website?
objectives:  
- Introduce instructors and mentors.
- Provide overview of this training site.
keypoints:
- This training site is brought to you by the DUNE Computing Consortium.
- The goals are to give you the computing basis to communicate with the DUNE Hardware Database.
---

## What is this website for?

The DUNE Hardware Database (HWDB) stores all the information related to a piece of DUNE hardware.
It is foreseen as the primary archive of hardware related data. This web site trains you so that
you can communicate (read & write) with the HWDB with ease.
Towards the end of the trainings ([the 6th]({{ page.root }}/06-Using-iPad-App/index.html) and
[the 7th]({{ page.root }}/07-Using-Python-Upload-Tool/index.html) sessions) we also introduce
two apps that would help users in communicating with the HWDB as well.


## Structure of the training site

It composes of 8 main sessions.

|-------------+------------------|
| Session   | Description  |
|-------------+------------------|
| 1. [Intro. to DUNE HWDB Training site]({{ page.root }}/01-introduction/index.html) | This page. |
|-------------+------------------|
| 2. [HWDB Conceptual Overview and the DUNE PID]({{ page.root }}/02-Introduction-HWDB/index.html) | It goes over briefly a history of Hardware Database, conceptual overview, and introduce the definiton of the **DUNE Parts Identifier (PID)**, a concept of **PID hierarchy**, and the three privileges of user account|
|-------------+------------------|
| 3. [Setting up Component Types and Test Types]({{ page.root }}/03-Setting-up-Types/index.html) | Goes through the **PID hierarchy** with the WEB UI. Then teaches you how to define **Component** and **Test Types**, which must be done before inserting actual data to the database. **User Roles** are also introduced, which restrict which users could edit/create what Types. It goes through these how-tos with both the WEB-UI and the REST API.|
|-------------+------------------|
|4. [Data Management using WEB UI]({{ page.root }}/04-Data-Management-WEB-UI/index.html) | Teaches you how to **POST/PATCH/GET Items**, **sub-components**, **Locations** of Items, **Tests**, as well as **images**, including **bar/QR-codes**, through the **WEB-UI** method. Also provides some examples of how one could perform searches for Items and Tests.|
|-------------+------------------|
| 5. [Data Management using REST API]({{ page.root }}/05-Data-Management-REST-API/index.html) | Teaches the identical materials to [the 4th session]({{ page.root }}/04-Data-Management-WEB-UI/index.html) above, but through the **REST API** method. |
|-------------+------------------|
| 6. [Using the iPad App]({{ page.root }}/06-Using-iPad-App./index.html) | Introduces the **iPad app**, its requirements, how to obtain it. Shows how easily one could go through the **PID hierarchy**, scan/generate/print **QR-codes**, while dealing with information of individual **Item Locations**. |
|-------------+------------------|
| 7. [Using the Python HWDB Upload Tool]({{ page.root }}/07-Using-Python-Upload-Tool/index.html) | Introduces the **Python-based app**, its requirements, how to obtain it. Shows how easily one could upload massive data to the database, even with some **complicated DB schema**. |
|-------------+------------------|
| 8. [Inserting Component Types]({{ page.root }}/08-Inserting-Component-Types/index.html) | This page is only for users with the Architect privilege. Describes how to **newly create Component Types** in the database. |
|-------------+------------------|

## The 2nd DUNE HWDB Tutorials

The 2nd HWDB tutorials will be held in June XX and YY. For more details, see [HWDB Tutorials]({{ page.root }}/training-schedule/index.html).
The tutorials are based on what this training site describes.


<br/><br/> 

<!--
## Welcome Session Video

The session will be captured on video a placed here after the workshop for asynchronous study.
A similar session from May 2022 was captured for your asynchronous review.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/B1mr3v1i7M8" title="DUNE Computing Tutorial May 2022 Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>


## Schedule

This May 2023 DUNE computing training spans two days: [Indico site](https://indico.fnal.gov/event/59762/timetable/#20230524).

## Instructional Crew

**Organizers:**
- Heidi Schellman (Oregon State University /FNAL)
- David DeMuth (Valley City State University)

**Lecturers (in order of appearance in the schedule):**
- Hajime:
- Alex: 
- Vladimir P: 
- Steve W:
- Jim:
- Steve M:
- Norm:
- Ana Paula:

**Mentors**
- TBA

-->

<!--

## Support

There will be live documents linked from [Indico][indico-event-link] for each [Zoom][zoom-link] session. You can write questions there, anonymously or not, and experts will reply. The chat on Zoom can quickly saturate so this is a more convenient solution and proved very successful at the previous training. We will collect all questions and release a Q&A after the event.

You can join DUNE's Slack: `dunescience.slack.com`. We created a special channel `computing_training_basics` for technical support, join [here][slack-join-link].
-->

[indico-event-link]: https://indico.fnal.gov/event/59762/
[slack-join-link]: https://dunescience.slack.com/
[zoom-link]: https://fnal.zoom.us/


{% include links.md %}

