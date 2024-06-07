---
title: Using the Python HWDB Upload Tool
teaching: 60
exercises: 0
questions:
- How does one upload bulk data with the Python HWDB Upload Tool?
objectives:
- objective 1
- objective 2
keypoints:
- keypoint 1
---

## Contents
>
>|-------------+------------------|
>|    | Description  |
>|-------------+------------------|
>| [Introduction](#introduction) |   |
>|-------------+------------------|
>| [Requirements](#Requirements) | |
>|-------------+------------------|
>| [Installation](#Installation) | |
>|-------------+------------------|
>| [Configuration](#Configuration) | |
>|-------------+------------------|
>| [Lesson 1: Some Simple Examples](#Lesson-1) | |
>| &emsp;[HWDB Setup](#Lesson-1-Setup) | |
>| &emsp;[Example 1.1 A very simple example](#Lesson-1-Example-1.1) | |
>| &emsp;[Example 1.2 Providing Default Values](#Lesson-1-Example-1.2) | |
>| &emsp;[Example 1.3 Providing values on command line](#Lesson-1-Example-1.3) | |
>| &emsp;[Example 1.4 Specification fields](#Lesson-1-Example-1.4) | |
>|-------------+------------------|
>| [Lesson 2: Subcomponents](#Lesson-2) | |
>|-------------+------------------|
>| [Lesson 3: Item Tests](#Lesson-3) | |
>| [Lesson 4: Dockets](#Lesson-4) | |
{: .checklist}

<br/><br/> 

## Introduction

[Explain what the Python API is and its relationship to the HWDB]

[screenshots of live demo to illustrate what it does, without explaining in detail]

[back to top](#contents)

## Requirements
This software was developed on Ubuntu 20.04 running under WSL for Windows 11, and was tested for compatibility on [Mac version].
This software requires Anaconda to be installed on your device. Anaconda may be downloaded at https://www.anaconda.com/.
Before the upload tool can be used, users need to download a PKCS12 certificate for their Fermilab account.

[back to top](#contents)

## Installation

Follow these instructions to install the Python HWDB API:

* Go to the GitHub project page at https://github.com/DUNE/DUNE-HWDB-Python

* On the right side of the page, look for “Releases” and select the latest release. The latest 
release at the time of this writing is 1.2.1.

* Download and extract the source code to a directory of your choosing. For the purposes of this 
document, we will assume this directory is $HOME/DUNE-HWDB-Python.

* To have the necessary paths available in your Bash shell, add the following lines to your 
.bashrc file. (If you are using a different shell, modify accordingly.)

~~~
export HWDB=~/DUNE-HWDB-Python
export PATH=$HWDB:$HWDB/bin:$HWDB/devtools:$PATH
export PYTHONPATH=$HWDB/lib:$PYTHONPATH
~~~
{: .language-bash}

* Although we have attempted to have the executable flag set in GitHub on the appropriate files, 
it appears to be inconsistent, so you may need to set these manually.
  - In your Bash shell, go to your installation directory ($HOME/DUNE-HWDB-Python)
  - Enter the following to set executable permissions:

~~~
chmod +x hwdb-*
~~~
{: .language-bash}

[back to top](#contents)

## Configuration

Before using the software, you must configure it to use your PKCS12 certificate. To do this,
enter:
~~~
hwdb-configure --cert <path-to-your-p12-file> --password <your password>
~~~
{: .language-bash}

Note that this command does NOT save your password locally. Instead, it extracts a PEM 
certificate and saves it in $HOME/.sisyphus. This directory will be automatically created when 
you first configure the application, and it should be set to have read permissions for the user 
only, but you may wish to verify that the permissions are set correctly. The PEM certificate 
could be used by other parties to access the HWDB under your account, so take care to keep it 
protected.

Configuration automatically sets the server to Development. When you are ready to work with the 
official Production server, enter:

~~~
hwdb-configure --prod 
~~~
{: .language-bash}

Likewise, to set it back to Development, enter:

~~~
hwdb-configure --dev 
~~~
{: .language-bash}

Note that the --prod and --dev switches may also be added to the initial configuration command instead of being run separately.
[back to top](#contents)

## Lesson 1: Some Simple Examples

The examples in this lesson demonstrate how to upload simple spreadsheets that do not require an
additional "docket" file that describes their contents. Typically, if the component type has no 
specifications, or the specifications are simple key/value pairs, it is possible to upload item
sheets directly, as demonstated in these examples. 

### HWDB Setup

The examples below assume that the following configuration has been set up in the HWDB. These 
should already be available on the Development server, but since they are not protected from
modification, it is possible that they may be edited by others. If the examples appear not to
work, check the following:

• A component type named “Z.Sandbox.HWDBUnitTest.doodad” has been created, which has a type ID
of Z00100300012.

• The component is managed by (at least) the group “tester,” and the user running the examples is 
a member of this group.
    
• The component has “Acme Corporation” listed as one of its available manufacturers.
    
• The component’s specifications are:
\{ "DATA": \{\}, "_meta": \{\} \}

For the first several examples, we will only be uploading Item information with no tests attached, 
but most of the principles involved with uploading tests is the same as uploading items, so it is 
worthwhile to follow all the item examples before moving on to tests.

### Example 1.1: A very simple example

The simplest way to upload hardware items to the HWDB is to create a spreadsheet where the top several rows form a “header” that indicates, at minimum, that the “Record Type” being uploaded is “Item,” and either the “Part Type ID” or the “Part Type Name.” (Both may be given, but they must indicate the exact same component type. There must be an empty row between the header and the section containing the actual data.

<table border="2">
    <tr>
        <td></td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Record Type</td>
        <td colspan="2">Item</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Part Type ID</td>
        <td colspan="2">Z00100300012</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Part Type Name</td>
        <td colspan="2">Z.Sandbox.HWDBUnitTest.doodad</td>
    </tr>
    <tr>
        <td>4</td>
        <td colspan="3"></td>
    </tr>
    <tr>
        <td>5</td>
        <td>Serial Number</td>
        <td>Institution</td>
        <td>Manufacturer</td>
    </tr>
    <tr>
        <td>6</td>
        <td>SN000001</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <td>7</td>
        <td>SN000002</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <td>8</td>
        <td>SN000003</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SN000004</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <td>10</td>
        <td>SN000005</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <td colspan="4"><i>Items.xlsx</i></td>
    </tr>
</table>

To test uploading this spreadsheet, enter:

~~~
hwdb-upload Items.xlsx --submit
~~~
{: .language-bash}


[back to top](#contents)

## Lesson 2: Subcomponents

[back to top](#contents)

## Lesson 3: Item Tests

[back to top](#contents)

## Lesson 4: Dockets

[back to top](#contents)


<br/><br/> 
<br/><br/> 
<br/><br/> 

{% include links.md %}

