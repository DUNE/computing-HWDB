---
title: Using the Python HWDB Upload Tool
teaching: 60
exercises: 0
questions:
- Active user privilage is required.
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

<table class="spreadsheet">
    <tr>
        <th style="width: 1em"></th>
        <th style="width: 10em">A</th>
        <th style="width: 20em">B</th>
        <th style="width: 20em">C</th>
    </tr>
    <tr>
        <th>1</th>
        <td><b>Record Type</b></td>
        <td colspan="2">Item</td>
    </tr>
    <tr>
        <th>2</th>
        <td><b>Part Type ID</b></td>
        <td colspan="2">Z00100300012</td>
    </tr>
    <tr>
        <th>3</th>
        <td><b>Part Type Name</b></td>
        <td colspan="2">Z.Sandbox.HWDBUnitTest.doodad</td>
    </tr>
    <tr>
        <th>4</th>
        <td colspan="3"></td>
    </tr>
    <tr>
        <th>5</th>
        <td><b>Serial Number</b></td>
        <td><b>Institution</b></td>
        <td><b>Manufacturer</b></td>
    </tr>
    <tr>
        <th>6</th>
        <td>SN000001</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <th>7</th>
        <td>SN000002</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <th>8</th>
        <td>SN000003</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <th>9</th>
        <td>SN000004</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <th>10</th>
        <td>SN000005</td>
        <td>(186) University of Minnesota Twin Cities</td>
        <td>(50) Acme Corporation</td>
    </tr>
    <tr>
        <td colspan="4"><i>Items.xlsx</i></td>
    </tr>
</table>

To do a mock test of uploading this spreadsheet, enter the following. This will not actually 
commit the changes to the HWDB. It will only do a trial run to test for errors.  

~~~
hwdb-upload Items.xlsx
~~~
{: .language-bash}


If this appears to run without errors, you may commit the update by using "--submit"

~~~
hwdb-upload Items.xlsx --submit
~~~
{: .language-bash}

<br/>
#### About Field Names

TBD

[back to top](#contents)

### Example 1.2: Providing default values

In the above example, every item had the exact same Institution and Manufacturer. A shortcut is available for this case. Additional fields may be provided in the header indicating default values for a column. The column itself may be omitted if there are no exceptions to the default values.

<table class="spreadsheet">
    <tr>
        <th style="width: 1em"></th>
        <th style="width: 10em">A</th>
        <th style="width: 20em">B</th>
    </tr>
    <tr>
        <th>1</th>
        <td><b>Record Type</b></td>
        <td>Item</td>
    </tr>
    <tr>
        <th>2</th>
        <td><b>Part Type ID</b></td>
        <td colspan="1">Z00100300012</td>
    </tr>
    <tr>
        <th>3</th>
        <td><b>Part Type Name</b></td>
        <td colspan="1">Z.Sandbox.HWDBUnitTest.doodad</td>
    </tr>
    <tr>
        <th>4</th>
        <td><b>Institution</b></td>
        <td colspan="1">(186) University of Minnesota Twin Cities</td>
    </tr>
    <tr>
        <th>5</th>
        <td><b>Manufacturer</b></td>
        <td colspan="1">(50) Acme Corporation</td>
    </tr>
    <tr>
        <th>6</th>
        <td colspan="2"></td>
    </tr>
    <tr>
        <th>7</th>
        <td><b>Serial Number</b></td>
        <td></td>
    </tr>
    <tr>
        <th>8</th>
        <td>SN000001</td>
        <td></td>
    </tr>
    <tr>
        <th>9</th>
        <td>SN000002</td>
        <td></td>
    </tr>
    <tr>
        <th>10</th>
        <td>SN000003</td>
        <td></td>
    </tr>

    <tr>
        <th>11</th>
        <td>SN000004</td>
        <td></td>
    </tr>
  
    <tr>
        <th>12</th>
        <td>SN000005</td>
        <td></td>
    </tr>
    
    <tr>
        <td colspan="3"><i>Items.xlsx</i></td>
    </tr>
</table>

[back to top](#contents)


### Example 1.3: Providing values on the command line

If you do not wish to provide a header inside a spreadsheet, you may provide values on the command line.

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 20em">A</th>
</tr>

<tr><th>1</th><td><b>Serial Number</b></td></tr>
<tr><th>2</th><td>SN000001</td></tr>
<tr><th>3</th><td>SN000002</td></tr>
<tr><th>4</th><td>SN000003</td></tr>
<tr><th>5</th><td>SN000004</td></tr>
<tr><th>6</th><td>SN000005</td></tr>
<tr><th>7</th><td>SN000006</td></tr>
<tr><th>8</th><td>SN000007</td></tr>
<tr><th>9</th><td>SN000008</td></tr>
<tr><td colspan="2"><i>Items.xlsx</i></td></tr>
</table>

To upload this example:
~~~
hwdb-upload \
    --part-type-id=Z00100300012 \
    --record-type=Item \
    --value "Manufacturer ID" 50 \
    --value "Institution ID" 186 \
    Items.xlsx \
    --submit
~~~
{: .language-bash}

[back to top](#contents)

### Example 1.4: Specification fields

The type “doodad” has a specification field named “DATA.” (Ignore the “_meta” field. It is
for internal use by the application.) Top-level specification fields such as “DATA” can be
provided the same way as Institution or Manufacturer.


<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 20em">B</th>
</tr>
<tr><th>1</th><td><b>Record Type</b></td><td>Item</td></tr>
<tr><th>2</th><td><b>Part Type ID</b></td><td>Z00100300012</td></tr>
<tr><th>3</th><td><b>Part Type Name</b></td><td>Z.Sandbox.HWDBUnitTest.doodad</td></tr>
<tr><th>4</th><td><b>Institution</b></td><td>(186) University of Minnesota Twin Cities</td></tr>
<tr><th>5</th><td><b>Manufacturer</b></td><td>(50) Acme Corporation</td></tr>
<tr><th>6</th><td colspan="2"></td></tr>
<tr><th>7</th><td><b>Serial Number</b></td><td><b>DATA</b></td></tr>
<tr><th>8</th><td>SN000001</td><td>apple</td></tr>
<tr><th>9</th><td>SN000002</td><td>orange</td></tr>
<tr><th>10</th><td>SN000003</td><td>banana</td></tr>
<tr><th>11</th><td>SN000004</td><td>pear</td></tr>
<tr><th>12</th><td>SN000005</td><td>cherry</td></tr>
<tr><td colspan="3"><i>Items.xlsx</i></td></tr>
</table>

[back to top](#contents)

## Lesson 2: Subcomponents

### HWDB Setup

For this lesson, we want to create a hierarchy of components. We will therefore need a second component type.
The examples below assume that the following configuration has been set up in the HWDB, in addition to the configuration from Lesson 1:
    • A component type named “Z.Sandbox.HWDBUnitTest.doohickey” has been created, which has a type ID of Z00100300013.
    • The component is managed by (at least) the group “tester,” and the user running the examples is a member of this group.
    • The component has “Acme Corporation” listed as one of its available manufacturers.
    • The component’s specifications are:
{ “DATA”: {}, “_meta”: {} }
    • The component type has a single subcomponent slot named “Doodad” of type “Z.Sandbox.HWDBUnitTest.doodad”

[back to top](#contents)

### Example 2.1: Linking a subcomponent

For this example, we need to upload items of two different component types. We can do this
by adding multiple worksheets to our Excel file.

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 20em">B</th>
</tr>
<tr><th>1</th><td><b>Record Type</b></td><td>Item</td></tr>
<tr><th>2</th><td><b>Part Type ID</b></td><td>Z00100300012</td></tr>
<tr><th>3</th><td><b>Part Type Name</b></td><td>Z.Sandbox.HWDBUnitTest.doodad</td></tr>
<tr><th>4</th><td><b>Institution</b></td><td>(186) University of Minnesota Twin Cities</td></tr>
<tr><th>5</th><td><b>Manufacturer</b></td><td>(50) Acme Corporation</td></tr>
<tr><th>6</th><td colspan="2"></td></tr>
<tr><th>7</th><td><b>Serial Number</b></td><td><b>DATA</b></td></tr>
<tr><th>8</th><td>SN000006</td><td>donut</td></tr>
<tr><td colspan="3"><i>Items.xlsx, sheet "Doodad"</i></td></tr>
</table>
<br/> 
<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 14em">B</th>
    <th style="width: 14em">C</th></tr>
<tr><th>1</th><td><b>Record Type</b></td><td colspan="2">Item</td></tr>
<tr><th>2</th><td><b>Part Type ID</b></td><td colspan="2">Z00100300013</td></tr>
<tr><th>3</th><td><b>Part Type Name</b></td><td colspan="2">Z.Sandbox.HWDBUnitTest.doohickey</td></tr>
<tr><th>4</th><td><b>Institution</b></td><td colspan="2">(186) University of Minnesota Twin Cities</td></tr>
<tr><th>5</th><td><b>Manufacturer</b></td><td colspan="2">(50) Acme Corporation</td></tr>
<tr><th>6</th><td colspan="3"></td></tr>
<tr><th>7</th><td><b>Serial Number</b></td><td><b>DATA</b></td><td><b>Doodad</b></td></tr>
<tr><th>8</th><td>SN000006</td><td>donut</td><td>SN000006</td></tr>
<tr><td colspan="4"><i>Items.xlsx, sheet "Doohickey"</i></td></tr>
</table>
<br/>

To upload this example:
~~~
hwdb-upload Items.xlsx --submit
~~~

Some notes on linking subcomponents:

• The “Doodad” column may contain the serial number of the item to be connected, or the Part ID if the item already exists in the database.

• If the subcomponent item is already in the database, it is not strictly necessary to include a sheet defining the item.

• The subcomponent to be linked must not have its “status” set to anything besides “available.” (“Available” is the default status for an item, so an item will not have a different status unless deliberately changed.)


{: .language-bash}

## Lesson 3: Item Tests

[back to top](#contents)

## Lesson 4: Dockets

[back to top](#contents)


<br/><br/> 
<br/><br/> 
<br/><br/> 

{% include links.md %}

