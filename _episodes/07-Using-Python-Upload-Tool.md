---
title: Using the Python HWDB Tools
teaching: 120
exercises: 0
questions:
- Active user privilage is required.
- How does one upload bulk data with the Python HWDB Tools?
objectives:
- upload a component specification (thus, obtain its assigned DUNE PID)
- update a component specification (for a given PID)
- create and/or update a serial number of the component
- create and/or update the component's location
- create links to its sub-components
- upload images to the component
- create and/or update the component's tests
keypoints:
- keypoint 1
---

<br/><br/> 

<!---
> ## QuickStart guide
> For those of you who just need a working example to jump start, instead of exploring other various (useful!) options that the app provides,
> please refer to our [Quick Start]({{ page.root }}/quickstart/index.html) section.
{: .prereq}
--->

## Contents
>
>|-------------+------------------|
>|    | Description  |
>|-------------+------------------|
>| [Introduction](#introduction) |   |
>|-------------+------------------|
>| [Requirements](#requirements) | |
>|-------------+------------------|
>| [Installation](#installation) | |
>|-------------+------------------|
>| [Configuration](#configuration) | |
>|-------------+------------------|
>| [Lesson 1: Some Simple Examples](#lesson-1-some-simple-examples) | |
>| &emsp;[HWDB Setup](#hwdb-setup) | |
>| &emsp;[Example 1.1: A very simple example](#example-11-a-very-simple-example) | |
>| &emsp;[Example 1.2: Providing Default Values](#example-12-providing-default-values) | |
>| &emsp;[Example 1.3: Editing Items](#example-13-editing-items) | |
>| &emsp;[Example 1.4: Providing values on command line](#example-14-providing-values-on-the-command-line) | |
>| &emsp;[Example 1.5: Providing values via a docket file](#example-15-providing-values-via-a-docket-file) | |
>| &emsp;[Example 1.6: Specification fields](#example-16-specification-fields) | |
>|-------------+------------------|
>| [Lesson 2: Subcomponents](#lesson-2-subcomponents) | |
>| &emsp;[HWDB Setup](#hwdb-setup) | |
>| &emsp;[Example 2.1: Linking a subcomponent](#example-21-linking-a-subcomponent) | |
>|-------------+------------------|
>| [Lesson 3: Item Images](#lesson-3-item-images) | |
>| &emsp;[Example 3.1: Uploading images](#example-31-uploading-images) | |
>|-------------+------------------|
>| [Lesson 4: Tests](#lesson-4-tests) | |
>| &emsp;[Example 4.1: Simple Test](#example-41-simple-test) | |
>| &emsp;[Example 4.2: Complex Structures](#example-42-complex-structures) | |
>|-------------+------------------|
>| [Lesson 5: Item Locations](#lesson-5-item-locations) | |
>| &emsp;[Example 5.1: Uploading location info](#example-51-uploading-location-info) | |
>|-------------+------------------|
>| [Lesson 6: Do them all at once!](#lesson-6-do-them-all-at-once) | |
>| &emsp;[QuickStartExample.xlsx: \"My Items\" sheet](#quickstartexamplexlsx-my-items-sheet) | |
>| &emsp;[QuickStartExample.xlsx: \"My Images\" sheet](#quickstartexamplexlsx-my-images-sheet) | |
>| &emsp;[QuickStartExample.xlsx: \"My Tests\" sheet](#quickstartexamplexlsx-my-tests-sheet) | |
>| &emsp;[QE-docket.json: \"Values\" blob](#qe-docketjson-values-blob) | |
>| &emsp;[QE-docket.json: \"Sources\"](#qe-docketjson-sources) | |
>| &emsp;[QE-docket.json: Encoders: \"My Item Encoder\"](#qe-docketjson-encoders-my-item-encoder) | |
>| &emsp;[QE-docket.json: Encoders: \"My Image Encoder\"](#qe-docketjson-encoders-my-image-encoder) | |
>| &emsp;[QE-docket.json: Encoders: \"My Test Encoder\"](#qe-docketjson-encoders-my-test-encoder) | |
>|-------------+------------------|
>| [Lesson 7: Generating bar/QR-code labels with the Tool](#lesson-7-generating-barqr-code-labels-with-the-tool) | |
>|-------------+------------------|
>| [Lesson 8: Filling out the DUNE Shipping checklists with the GUI-based Tool](#lesson-8-filling-out-the-dune-shipping-checklists-with-the-gui-based-tool) | |
{: .checklist}

<br/><br/> 

## Introduction

The Python HWDB Tools is a package of applications, written in Python that helps users to communicate with the HWDB.

It is consists of multiple applications:
- Uploader : Uploads massive data to the HWDB. User provides data by means of spreadsheets to the app. The app then simply uploads them. The app can also accept a docket file, along with spreadsheets, in which complex database schema can be defined as well. The detail usage is described later in this very page.
- [Shipping Tracker]({{ page.root }}/shippingprocedure/index.html) : Helps user to follow the official DUNE shipping procedure. It also generates/uploads shipping label, along with the required shipping documentations.
- [Label Generator]({{ page.root }}/barqrcode/index.html) : Generates labels of QR- and bar-codes. Allows user to define label & paper sizes as well as to detail orientations of codes.
- [HWDB Dashboard]({{ page.root }}/dashboard/index.html) : Helps to provide information stored in the HWDB. Runs within a web-browser with multiple tabs (Type Getter, Plots, Shipment Tracker, Binary/Test Downloader). See the link for more details.

[back to top](#contents)

## Requirements
This software was developed on Ubuntu 20.04 running under WSL for Windows 11, and was tested for compatibility on macOS 14.7 (Sonoma; M1) as well as on Ubuntu 24.04 with an Intel Linux box.
We strongly recommend to employ [Anaconda (Python distribution)](https://en.wikipedia.org/wiki/Anaconda_(Python_distribution)),
  which should get you most of the needed packages for the Tool.
It can be obtained from [https://www.anaconda.com/download](https://www.anaconda.com/download) for free and is available for Windows, Linux, and macOS.


[back to top](#contents)

## Installation

There are 3 ways to install.

### Binaries

Perhaps the easiest way is to obtain standalone binaries. We have a linux version, built under Ubuntu 24.04.4 LTS on a x86_64 machine. We have tested it also within a WSL2 environment.
A Mac version is also available, which was built on a ARM64-based machine.
These binaries can be obtained from [https://github.com/DUNE/DUNE-HWDB-Python/releases/latest](https://github.com/DUNE/DUNE-HWDB-Python/releases/latest). Make sure to access to v1.7.5 or later.
And look for **HWDBTools_lnx_x8664.tar.gz** or **HWDBTools_mac_arm64.tar.gz** under Assets there.

Once downloaded, you can put it anywhere you like.
Extract the contents and make sure to run the attached shell script, **setup_path.sh**, inside of the HWDBTools folder
to setup file permissions correctly. It will also write a line into your login file (e.g., .bashrc)
to include \<path to your HWDBTools folder\> to your $PATH.

For instance,
  ~~~
  cd <path to your downloaded file, HWDBTools_mac_arm64.tar.gz>
  tar -xzf HWDBTools_mac_arm64.tar.gz
  cd HWDBTools_mac_arm64
  ./setup_path.sh
  ~~~
  {: .language-bash}


The following commands should be available now:
- hwdb-configure
- hwdb-upload
- hwdb-shipping
- hwdb-labels
- hwdb-dash
- hwdb-list-institutions
- hwdb-list-manufacturers
- hwdb-logs
- hwdb-htgettoken
- setup_path.sh



### Source codes

You can download the source codes.

- Download the **Source code(zip)** (or **Source code (tar.gz)**, whichever you prefer) of the Tool from [https://github.com/DUNE/DUNE-HWDB-Python/releases/latest](https://github.com/DUNE/DUNE-HWDB-Python/releases/latest).

- Extract the source code to a directory of your choosing. For the purposes of this 
document, we will assume this directory is $HOME/DUNE-HWDB-Python.

- To have the necessary paths available in your Bash shell, add the following lines to your 
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

- If you don't have **reportlab** on your devide, which doesn't come with the Anaconda distro unfortunately,
the Tool will suggest you to install it. The Tool itself will run fine without this extra library, but it will not generate [bar/QR-code labels](#barqr-code-labels) in that case.
  To install this, simple execute the following command:
  ~~~
  pip install reportlab
  ~~~
  {: .language-bash}
  or
  ~~~
  conda install conda-forge::reportlab
  ~~~
  {: .language-bash}

- And as described in [these steps]({{ page.root }}/setup.html), make sure you have **htgettoken** installed.
  Again, you could install it via;
  ~~~
  pip install htgettoken
  ~~~
  {: .language-bash}
  or
  ~~~
  conda install conda-forge::htgettoken
  ~~~
  {: .language-bash}

### Auto ENV Setup

You can download the source codes as described above. But once extracted the downloaded archived file, you can find the shell script, **setup_hwdbtools_env.sh** inside. Executing the script there would crete a new virtual environment,
auto-download the required additional modules, and set up the needed environmental variables for you.

<br/>

[back to top](#contents)

## Configuration

Try to execute the following command:
 ~~~
hwdb-configure
~~~
{: .language-bash} 
If everything is setup correctly, you should see a screen similar to the one below.
![configured screen](../fig/Using-Python-Upload-Tool/Config.png){: .image-with-shadow}{: width="45%"}

This will check to see if your two tokens (Bearer and Vault) are still valid.
If your Vault token is expired or if you are running the Tool for the first time, you will be prompted to provide
your FNAL SSO credential in your web browser session. Once you are done with the authentication process there,
you should see the above screen. The obtained two tokens are saved in **$HOME/.sisyphus/**.

<br/>

When your Bearer token is expired, which happens every 3 hours, the token is refreshed automatically in background.
Whereas when your Vault token is expired (its lifetime is 7days), you will be prompted again to provide your credential in a browser session.

<br/>

Notice that the REST API base path points to the **development** version of the HWDB, which is the default setup.
When you are ready to work with the official Production server, enter:
~~~
hwdb-configure --prod 
~~~
{: .language-bash}

Likewise, to set it back to Development, enter:

~~~
hwdb-configure --dev 
~~~
{: .language-bash}

Note that the --prod and --dev switches may also be added to the initial configuration command, **$HOME/.sisyphus/config.json** instead of being run separately.

### Configuring a Component Type and a Test Type in the HWDB:

- If your Component Type is already setup, skip this step.
  Otherwise your Component Type needs to be setup as described in the [03-Setting-up-Types]({{ page.root }}/03-Setting-up-Types/index.html#defining-a-component-type).
  
- In the **Datasheet** of your Component Specifications, insert the following (notice that you must have [the Administrator privilege]({{ page.root }}/02-Introduction-HWDB/index.html#user-privileges) in order to modify Component Type definitions):
  ~~~
  DATA: {}
  _meta: {}
  ~~~
  {: .language-json}



- If you are planning to store data in **Tests**, create and define a new Test Type as described in the [03-Setting-up-Types]({{ page.root }}/03-Setting-up-Types/index.html#defining-a-test-type). And then in the **Datasheet** of the newly created Test Type,
insert the following:
  ~~~
  DATA: {}
  _meta: {}
  ~~~
  {: .language-json}

- All contents uploaded by the Tool are stored within "DATA: {}".

- "_meta: {}" is used by the Tool only and users should just ignore it.

<br/><br/>


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
        <td colspan="4"><i>Ex_1-1.xlsx</i></td>
    </tr>
</table>
This sheet is available here; [Ex_1-1.xlsx]({{ page.root }}/files/Ex_1-1.xlsx).

To do a mock test of uploading this spreadsheet, enter the following. This will not actually 
commit the changes to the HWDB. It will only do a trial run to test for errors.  

~~~
hwdb-upload Ex_1-1.xlsx
~~~
{: .language-bash}


If this appears to run without errors, you may commit the update by using "--submit"

~~~
hwdb-upload Ex_1-1.xlsx --submit
~~~
{: .language-bash}

<br/>


> #### Reconstructed Excel file
> When the above command is executed, the Tool also generates an Excel file locally  inside of folder with a timestamp being its folder name. This Excel file contains the contents of Items just uploaded, including the newly assigned PIDs in **External ID** column.
{: .prereq}


<br/>

#### About label names in spreadsheet

In spreadsheet(s), user provides contents with specific labels.
  There are specific label names that are reserved for the Tool. We list those **special labels** below.
  These special labels have specific meanings and we'll go through them in the following examples.
   - External ID
   - Serial Number
   - Comments
   - Manufacturer
   - Manufacturer ID
   - Manufacturer Name
   - Institution
   - Institution ID
   - Institution Name
   - Location
   - Location ID
   - Location Name
   - Arrived
   - Location Comments
   - Image File

<br/>

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
This sheet is available here; [Ex_1-2.xlsx]({{ page.root }}/files/Ex_1-2.xlsx).

[back to top](#contents)

### Example 1.3: Editing Items

Once a sheet has been uploaded to the HWDB, any subsequent attempts to upload the sheet will
only result in the HWDB attempting to edit the items instead of adding new ones. But, if you
explicity want to edit an item, you may use an "External ID" column instead of or in addition to
the "Serial Number" column. You may even change the existing serial numbers this way!

Note that you may not change the Institution for an item after it was initially set.

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
        <td><b>Institution</b></td>
        <td colspan="2">(186) University of Minnesota Twin Cities</td>
    </tr>
    <tr>
        <th>5</th>
        <td><b>Manufacturer</b></td>
        <td colspan="2">(50) Acme Corporation</td>
    </tr>
    <tr>
        <th>6</th>
        <td colspan="3"></td>
    </tr>
    <tr>
        <th>7</th>
        <td><b>External ID</b></td>
        <td><b>Serial Number</b></td>
        <td><b>Comments</b></td>
    </tr>
    <tr>
        <th>8</th>
        <td>Z00100300012-00001</td>
        <td>AAA000001</td>
        <td>first</td>
    </tr>
    <tr>
        <th>9</th>
        <td>Z00100300012-00002</td>
        <td>AAA000002</td>
        <td>second</td>
    </tr>
    <tr>
        <th>10</th>
        <td>Z00100300012-00003</td>
        <td>AAA000003</td>
        <td>third</td>
    </tr>

    <tr>
        <th>11</th>
        <td>Z00100300012-00004</td>
        <td>AAA000004</td>
        <td>fourth</td>
    </tr>
  
    <tr>
        <th>12</th>
        <td>Z00100300012-00005</td>
        <td>AAA000005</td>
        <td>fifth</td>
    </tr>
    
    <tr>
        <td colspan="4"><i>Ex_1-3.xlsx</i></td>
    </tr>
</table>
This sheet is available here; [Ex_1-3.xlsx]({{ page.root }}/files/Ex_1-3.xlsx).

### Example 1.4: Providing values on the command line

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
<tr><td colspan="2"><i>Ex_1-4.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_1-4.xlsx]({{ page.root }}/files/Ex_1-4.xlsx).

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

### Example 1.5: Providing values via a docket file

Another alternative way to provide external values is by using a docket file.

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
<tr><td colspan="2"><i>Ex_1-5.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_1-5.xlsx]({{ page.root }}/files/Ex_1-5.xlsx).

<br/>

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <td>
        <pre>
{
    "Sources": [
        {
            "Source Name": "Item Source",
            "Files": "Ex_1-5.xlsx"
        }
    ],
    "Values": {
        "Record Type": "Item",
        "Part Type ID": "Z00100300012",
        "Part Type Name": "Z.Sandbox.HWDBUnitTest.doodad",
        "Institution": "(186) University of Minnesota Twin Cities",
        "Manufacturer": "(50) Acme Corporation"
    }
}
        </pre>
    </td>
</tr>
<tr><td colspan="2"><i>Ex_1-5_docket.json</i></td></tr>
</table>
This sheet is available here; [Ex_1-5_docket.json]({{ page.root }}/files/Ex_1-5_docket.json).

<br/>

To upload this example:
~~~
hwdb-upload Ex_1-5_docket.json --submit
~~~
{: .language-bash}




### Example 1.6: Specification fields

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
<tr><th>8</th><td>SN000001</td><td>ABC</td></tr>
<tr><th>9</th><td>SN000002</td><td>123</td></tr>
<tr><th>10</th><td>SN000003</td><td>{"A":1,"B":2}</td></tr>
<tr><th>11</th><td>SN000004</td><td>[2,3,5,7,11]</td></tr>
<tr><th>12</th><td>SN000005</td><td>&lt;null&gt;</td></tr>
<tr><td colspan="3"><i>Ex_1-6.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_1-6.xlsx]({{ page.root }}/files/Ex_1-6.xlsx).

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
<tr><th>7</th><td><b>Serial Number</b></td><td><b>Comments</b></td></tr>
<tr><th>8</th><td>SN000001</td><td>first</td></tr>
<tr><th>9</th><td>SN000002</td><td>second</td></tr>
<tr><td colspan="3"><i>Ex_2-1_doodad.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_2-1_doodad.xlsx]({{ page.root }}/files/Ex_2-1_doodad.xlsx).

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
<tr><th>7</th><td><b>Serial Number</b></td><td><b>Comments</b></td><td><b>Doodad</b></td></tr>
<tr><th>8</th><td>SN900001</td><td>by serial number</td><td>SN000001</td></tr>
<tr><th>9</th><td>SN900002</td><td>by part id</td><td>Z00100300012-00010</td></tr>
<tr><th>10</th><td>SN900003</td><td>keep as it is</td><td></td></tr>
<tr><th>10</th><td>SN900004</td><td>void it out</td><td>&lt;null&gt;</td></tr>
<tr><td colspan="4"><i>Ex_2-1_doohickey.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_2-1_doohickey.xlsx]({{ page.root }}/files/Ex_2-1_doohickey.xlsx).

<br/>

To upload this example, first make the two items newly:
~~~
hwdb-upload Ex_2-1_doodad.xlsx --submit
~~~
{: .language-bash}
then to make links to those two;
~~~
hwdb-upload Ex_2-1_doohickey.xlsx --submit
~~~
{: .language-bash}

Some notes on linking subcomponents:

• The “Doodad” column may contain the serial number of the item to be connected, or the Part ID if the item already exists in the database.

• If the subcomponent item is already in the database, it is not strictly necessary to include a sheet defining the item.

• The subcomponent to be linked must not have its “status” set to anything besides “available.” (“Available” is the default status for an item, so an item will not have a different status unless deliberately changed.)


> #### Some notes on linking subcomponents:
> - The “Doodad” column may contain the serial number of the item to be connected, or the Part ID if the item already exists in the database.
> - If the subcomponent item is already in the database, it is not strictly necessary to include a sheet defining the item.
> - The subcomponent to be linked must not have its “status” set to anything besides “available.” (“Available” is the default status for an item, so an item will not have a different status unless deliberately changed.)
{: .prereq}


## Lesson 3: Item Images

### Example 3.1: Uploading images

#### To individual item

This example demonstrates how to upload image files for items.

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 14em">B</th>
    <th style="width: 14em">C</th></tr>
<tr><th>1</th><td><b>Record Type</b></td><td colspan="2">Item Image</td></tr>
<tr><th>2</th><td><b>Part Type ID</b></td><td colspan="2">Z00100300012</td></tr>
<tr><th>3</th><td colspan="3"></td></tr>
<tr><th>4</th><td><b>External ID</b></td><td><b>Comments</b></td><td><b>Image File</b></td></tr>
<tr><th>5</th><td>Z00100300012-00001</td><td>This is fine.</td><td>this_is_fine.jpg</td></tr>
<tr><th>6</th><td>Z00100300012-00002</td><td>This is fine.</td><td>this_is_fine.jpg</td></tr>
<tr><th>7</th><td>Z00100300012-00003</td><td>This is fine.</td><td>this_is_fine.jpg</td></tr>
<tr><td colspan="4"><i>Ex_3-1.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_3-1.xlsx]({{ page.root }}/files/Ex_3-1.xlsx).

<br/>

#### To individual test entry

We can also upload images to individual test entry, to even older test entries if wish.
Let's do this with a docket file and a spreadsheet as an example.
Take a look at the spreadsheet below.
<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 14em">B</th>
    <th style="width: 14em">C</th>
	<th style="width: 14em">D</th></tr>
<tr><th>1</th><td><b>External ID</b></td><td><b>Comments</b></td><td><b>Image File</b></td><td><b>History Order</b></td></tr>
<tr><th>2</th><td>Z00100300012-00001</td><td>This is fine.</td><td>this_is_fine.jpg</td><td>0</td></tr>
<tr><th>3</th><td>Z00100300012-00002</td><td>This is fine.</td><td>this_is_fine.jpg</td><td>0</td></tr>
</table>

<br/>
The **History Order** column is optional. It take a positive integer and its default value is 0.\
It tells the app which test entry it uploads images to.\
History Order = 0 corresponds to the latest entry, 1 corresponds to its next latest entry, and so on.

The corresponding docket file could look like below:
~~~
{
    "Values": {
        "Part Type ID": "Z00100200040",
        "Institution": "(186) University of Minnesota Twin Cities",
        "Manufacturer": "(7) Hajime Inc"
    },
    "Sources": [
	{
            "Files": "test_images.xlsx",
	    "Sheet": "My Test Image",
            "Encoder": "My Test Image Encoder",
        }
    ],
    "Encoders": [
	{
	    "Encoder Name": "My Test Image Encoder",
            "Record Type": "Test Image",
	    "Part Type ID": "Z00100200040",
	    "Test Name": "CPA_Parts_FR4_main QC check",
            "Schema": {
		"type": "group",
		"key": "External ID",
		"members": {
		    "External ID": "string",
		    "Comments": "string",
		    "Image File": "string"
                }
	    }
        }
    ]
}

~~~
{: .language-json}

Executing a command line like this;
  ~~~
  hwdb-upload test_docket.json --submit
  ~~~
  {: .language-bash} 
will upload the image file, this_is_fine.jpg, to the latest test entries of Test Type Name = "CPA_Parts_FR4_main QC check" of the 2 PIDs,
Z00100300012-00001 and Z00100300012-00002, for instance.

[back to top](#contents)

## Lesson 4: Tests

Now let's try to post some in the Test area of the HWDB.
As mentioned before, a Test Type must be created and pre-defined as described in the [03-Setting-up-Types]({{ page.root }}/03-Setting-up-Types/index.html#defining-a-test-type).

### Example 4.1: Simple Test

This sheet will post "pass" under Test Type, **Doodad Test**, of Serial Number of SN000001.
Notice that the **Record Type** is Test, instead of Item.

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 14em">B</th>
    <th style="width: 14em">C</th></tr>
<tr><th>1</th><td><b>Record Type</b></td><td colspan="2">Test</td></tr>
<tr><th>2</th><td><b>Part Type ID</b></td><td colspan="2">Z00100300012</td></tr>
<tr><th>3</th><td><b>Part Type Name</b></td><td colspan="2">Z.Sandbox.HWDBUnitTest.doodad</td></tr>
<tr><th>4</th><td><b>Test Name</b></td><td colspan="2">Doodad Test</td></tr>
<tr><th>5</th><td colspan="3"></td></tr>
<tr><th>6</th><td><b>Serial Number</b></td><td><b>DATA</b></td><td></td></tr>
<tr><th>7</th><td>SN000001</td><td>pass</td><td></td></tr>
<tr><td colspan="4"><i>Ex_4-1.xlsx</i></td></tr>
</table>

This sheet is available here; [Ex_4-1.xlsx]({{ page.root }}/files/Ex_4-1.xlsx).

<br/>

### Example 4.2: Complex Structures

Now let's try with more complex scheme.
The docket file below will post the contents of the sheet to the corresponding serial number entries
under Test Type, Doodad Test.


<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">A</th>
    <th style="width: 16em">B</th>
    <th style="width: 10em">C</th>
    <th style="width: 10em">D</th>
    <th style="width: 10em">E</th>
    <th style="width: 10em">F</th>
    <th style="width: 10em">G</th>
    <th style="width: 16em">H</th>
    <th style="width: 10em">I</th>
</tr>
<tr><th>1</th><td><b>Record Type</b></td><td colspan="8">Test</td></tr>
<tr><th>2</th><td><b>Part Type ID</b></td><td colspan="8">Z00100300012</td></tr>
<tr><th>3</th><td><b>Part Type Name</b></td><td colspan="8">Z.Sandbox.HWDBUnitTest.doodad</td></tr>
<tr><th>4</th><td><b>Test Name</b></td><td colspan="8">Doodad Test</td></tr>
<tr><th>5</th><td colspan="9"></td></tr>
<tr>
    <th>6</th>
    <td><b>Serial Number</b></td>
    <td><b>Test Date</b></td>
    <td><b>Test Operator</b></td>
    <td><b>Operator Note</b></td>
    <td><b>Overall Status</b></td>
    <td><b>Subtest Name</b></td>
    <td><b>Trial Number</b></td>
    <td><b>Trial Description</b></td>
    <td><b>Trial Result</b></td>
</tr>
<tr>
    <th>7</th>
    <td>SN000001</td>
    <td>2024-03-22 08:45:00</td>
    <td>Alex</td>
    <td>heavy snow</td>
    <td>pass</td>
    <td>bounce</td>
    <td>1</td>
    <td>drop from 1 meter</td>
    <td>pass</td>
</tr>
<tr>
    <th>8</th>
    <td>SN000001</td>
    <td>2024-03-22 08:45:00</td>
    <td>Alex</td>
    <td>heavy snow</td>
    <td>pass</td>
    <td>bounce</td>
    <td>2</td>
    <td>drop from 2 meter</td>
    <td>pass</td>
</tr>
<tr>
    <th>9</th>
    <td>SN000001</td>
    <td>2024-03-22 08:45:00</td>
    <td>Alex</td>
    <td>heavy snow</td>
    <td>pass</td>
    <td>smash</td>
    <td>1</td>
    <td>smash with 5# hammer</td>
    <td>pass</td>
</tr>
<tr>
    <th>10</th>
    <td>SN000001</td>
    <td>2024-03-22 08:45:00</td>
    <td>Alex</td>
    <td>heavy snow</td>
    <td>pass</td>
    <td>smash</td>
    <td>2</td>
    <td>smash with 9# hammer</td>
    <td>pass</td>
</tr>
<tr>
    <th>11</th>
    <td>SN000001</td>
    <td>2024-03-29 14:00:00</td>
    <td>Bill</td>
    <td>cold, windy</td>
    <td>pass</td>
    <td>bounce</td>
    <td>1</td>
    <td>drop from 1 meter</td>
    <td>pass</td>
</tr>
<tr>
    <th>12</th>
    <td>SN000001</td>
    <td>2024-03-29 14:00:00</td>
    <td>Bill</td>
    <td>cold, windy</td>
    <td>pass</td>
    <td>bounce</td>
    <td>2</td>
    <td>drop from 2 meter</td>
    <td>pass</td>
</tr>

<tr><td colspan="10"><i>Ex_4-2.xlsx</i></td></tr>
</table>
This sheet is available here; [Ex_4-2.xlsx]({{ page.root }}/files/Ex_4-2.xlsx).

<br/>

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <td style="width: 60em">
        <pre>
{
    "Sources": [
        {
            "Source Name": "Doodad Tests",
            "Files": "Ex_4-2.xlsx",
            "Encoder": "Doodad Test Encoder"
        }
    ],
    "Encoders": [
        {
            "Encoder Name": "Doodad Test Encoder",
            "Record Type": "Test",
            "Part Type Name": "Z.Sandbox.HWDBUnitTest.doodad",
            "Part Type ID": "Z00100300012",
            "Test Name": "Doodad Test",
            "Schema": {
                "Test Results": {
                    "DATA": {
                        "type": "group",
                        "key": [
                            "Test Date",
                            "Test Operator"
                        ],
                        "members": {
                            "Test Date": "string",
                            "Test Operator": "string",
                            "Overall Status": "string",
                            "Operator Note": "null,string",
                            "Subtest": {
                                "type": "group",
                                "key": "Subtest Name",
                                "members": {
                                    "Subtest Name": "string",
                                    "Trial": {
                                        "type": "group",
                                        "key": "Trial Number",
                                        "members": {
                                            "Trial Number": "integer",
                                            "Trial Description": "null,string",
                                            "Trial Result": "any"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
}



        </pre>
    </td>
</tr>
<tr><td colspan="2"><i>Ex_4-2_docket.json</i></td></tr>
</table>
This sheet is available here; [Ex_4-2_docket.json]({{ page.root }}/files/Ex_4-2_docket.json).

<br/>

Notice that the Tool sort out rows based on column labels specified by "key".
For instance, with the above docket file, it sorts out based on two columns "Test Date" and "Test Operator", forst.
And then there will be a sub-structure "Subtest", sub-sub-structure "Subtest Name" and "Trial" and so on.
In each of structures, things are sorted by the specified "key".

<br/>

[back to top](#contents)


<br/><br/> 


## Lesson 5: Item Locations

### Example 5.1: Uploading location info

This example demonstrates how to upload location information for two items.

<table class="spreadsheet">
    <tr>
        <th style="width: 1em"></th>
        <th style="width: 12em">A</th>
        <th style="width: 19em">B</th>
		<th style="width: 12em">C</th>
		<th style="width: 11em">D</th>
    </tr>
    <tr>
        <th>1</th>
        <td><b>Record Type</b></td>
        <td>Item</td>
		<td></td>
		<td></td>
    </tr>
    <tr>
        <th>2</th>
        <td><b>Part Type ID</b></td>
        <td colspan="1">D00599800015</td>
		<td></td>
		<td></td>
    </tr>
    <tr>
        <th>3</th>
        <td><b>Institution</b></td>
        <td colspan="1">(186) University of Minnesota Twin Cities</td>
		<td></td>
		<td></td>
    </tr>
    <tr>
        <th>4</th>
        <td><b>Manufacturer</b></td>
        <td colspan="1">(7) Hajime Inc</td>
		<td></td>
		<td></td>
    </tr>
    <tr>
        <th>5</th>
        <td colspan="4"></td>
    </tr>
    <tr>
        <th>6</th>
        <td><b>Serial Number</b></td>
		<td><b>Location</b></td>
		<td><b>Arrived</b></td>
		<td><b>Location Comments</b></td>
        </td>
    </tr>
    <tr>
        <th>7</th>
        <td>HA-MURAMATSU-00003</td>
		<td>(186) University of Minnesota Twin Cities</td>
        <td>10/15/2024  10:12:13 AM</td>
		<td>comments for 1st item</td>
    </tr>
	<tr>
        <th>8</th>
        <td>HA-MURAMATSU-00004</td>
		<td>(186) University of Minnesota Twin Cities</td>
        <td>10/14/2024  9:38:59 PM</td>
		<td>comments for 2nd item</td>
    </tr>
    <tr>
        <td colspan="5"><i>Ex_5-1.xlsx</i></td>
    </tr>
</table>
This sheet is available here; [Ex_5-1.xlsx]({{ page.root }}/files/Ex_5-1.xlsx).

<br/>

[back to top](#contents)

<br/>

## Lesson 6: Do them all at once!

Now let's try to upload Item specifications, Test specifications, some images, make links to a few sub-components, and upload locations of Items, all at once.

The spreadsheet file can be obtained from here: [QuickStartExample.xlsx]({{ page.root }}/files/QuickStartExample.xlsx).
It has 3 tabs, "My Items", "My Images", and "My Tests".

The corresponding docket file can be obtained from here: [QE-docket.json]({{ page.root }}/files/QE-docket.json).

We’ll start to look at the example spreadsheet file first and understand our contents. We’ll then go through the docket file to see how it works, including setting up the database schema for Specifications.

### QuickStartExample.xlsx: "My Items" sheet:

The example spreadsheet file includes 3 sheets. One of them, "My Items" sheet, looks like the below:

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 11.5em">A</th>
    <th style="width: 7em">B</th>
	<th style="width: 8.5em">C</th>
	<th style="width: 11.5em">D</th>
	<th style="width: 11.5em">E</th>
</tr>
<tr><th> 1</th><td><b>  Serial Number       </b></td><td><b>  Comments         </b></td><td><b>  Drawing Number  </b></td><td><b>  MySubComp 1  </b></td><td><b>  MySubComp 2  </b></td></tr>
<tr><th> 2</th><td>     HA-MURAMATSU-00003      </td><td>     here is my item      </td><td>     DFD-XX-FF00         </td><td>   HA-MURAMATSU-00001 </td><td> HA-MURAMATSU-00002   </td></tr>
<tr><th> 3</th><td>     HA-MURAMATSU-00004      </td><td>     another item         </td><td>     DFD-XX-FF01         </td><td>                      </td><td>                      </td></tr>
<tr><td colspan="6">the first half of <i>My Items</i> sheet</td></tr>
</table>

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 18.5em">F</th>
	<th style="width: 11.5em">G</th>
	<th style="width: 10.6em">H</th>
</tr>
<tr><th> 1</th><td><b>  Location                                   </b></td><td><b>  Arrived                 </b></td><td><b> Location Comments      </b></td></tr>
<tr><th> 2</th><td>     (186) University of Minnesota Twin Cities      </td><td>     10/14/2024 10:12:13 AM      </td><td>    comments for 1st item      </td></tr>
<tr><th> 3</th><td>     (186) University of Minnesota Twin Cities      </td><td>     10/13/2024  9:38:58 PM      </td><td>    comments for 2nd item      </td></tr>
<tr><td colspan="4">the second half of <i>My Items</i> sheet</td></tr>
</table>
<br/>

| Column | Description |
| A | It  defines a specific Item, and thus acts as a **PID**. There is no specific scheme to define serial numbers, but **each of them must be unique for a given Component Type**. One could use **External ID** as its label name here, instead. In that case, you would have to specify existing PIDs. The Tool then overwrite the contents of the specified PIDs. |
| B | This column represents comments for each of the Items. |
| C | Drawing numbers, to be stored in each of the Item's Specifications in the HWDB. |
| D & E | The label names here need to coincide with those [functional position names]({{ page.root }}/03-Setting-up-Types/index.html#connectors-an-optional-field) that are defined in its Component Type definition. Notice that the Item, HA-MURAMATSU-00003, will have 2 sub-component links, one to HA-MURAMATSU-00001 and another to HA-MURAMATSU-00002, while the Item, HA-MURAMATSU-00004, will not have any sub-component link. |
| F | The column specifies a location of the Item. It expects both Institution ID and Institution name. If you like, you could only specify ID (name) with a label name, **Institution ID** (**Institution Name**), instead. |
| G | Represents arriving date&time of the corresponding Item. One can add a time-zone. Without it, by default it takes it in the North American Central Time Zone.|
| H | Represents comments for each locations.

- If you don't have any sub-component to be linked, you could just remove the columns D & E altogether.

- Similarly, if you don't need to enter locations of your Items, go ahead to remove columns F, G, and H.

<br/> 
[back to top](#contents)

### QuickStartExample.xlsx: "My Images" sheet:

"My Images" sheet should look like the below:

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 11.5em">A</th>
    <th style="width: 10em">B</th>
	<th style="width: 7em">C</th>
</tr>
<tr><th> 1</th><td><b>  Serial Number       </b></td><td><b>  Image File         </b></td><td><b>  Comments  </b></td></tr>
<tr><th> 2</th><td>     HA-MURAMATSU-00003      </td><td>     images/apple.jpeg      </td><td>     image 1       </td></tr>
<tr><th> 3</th><td>     HA-MURAMATSU-00003      </td><td>     images/banana.jpeg     </td><td>     image 2       </td></tr>
<tr><th> 4</th><td>     HA-MURAMATSU-00004      </td><td>     images/broccoli.jpeg   </td><td>     image 3       </td></tr>
<tr><th> 4</th><td>     HA-MURAMATSU-00004      </td><td>     images/apple.jpeg      </td><td>     image 4       </td></tr>
<tr><td colspan="4"><i>My Images</i> sheet</td></tr>
</table>
<br/>

| Column | Description |
| A | Represents the same Serial Numbers that are found in the **My Items** sheet. |
| B | Specifies the locations and file names of the images to be uploaded. |
| C | Comments for each image files. |

- Again, if you don't have any image to be uploaded, you could delete the entire "My Images" sheet.

<br/> 
[back to top](#contents)

### QuickStartExample.xlsx: "My Tests" sheet:

"My Tests" sheet should look like the below:

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 11.5em">A</th>
    <th style="width: 6em">B</th>
	<th style="width: 4em">C</th>
	<th style="width: 7em">D</th>
	<th style="width: 10em">E</th>
	<th style="width: 9em">F</th>
	<th style="width: 9em">G</th>
	<th style="width: 6em">H</th>
	<th style="width: 6em">I</th>
</tr>
<tr><th> 1</th><td><b>Serial Number     </b></td><td><b>Comments  </b></td><td><b>Operator</b></td><td><b>Test Location</b></td><td><b> PSU Serial Number </b></td><td><b> Visual Inspection </b></td><td><b>PSU Manufacturer</b></td><td><b>PSU Test 1</b></td><td><b>PSU Test 2</b></td></tr>
<tr><th> 2</th><td>   HA-MURAMATSU-00003    </td><td>   Looks good    </td><td>   Hajime      </td><td>  Minneapolis       </td><td>    2PH30-230             </td><td>    Passed                </td><td>   TOSHIBA             </td><td>   Failed        </td><td>   Passed        </td></tr>
<tr><th> 3</th><td>   HA-MURAMATSU-00004    </td><td>   Looks ok      </td><td>   Andy        </td><td>  Tucson            </td><td>    2PH30-231             </td><td>    Passed                </td><td>   TOSHIBA             </td><td>   Passed        </td><td>   Failed        </td></tr>
<tr><td colspan="10">the first half of <i>My Tests</i> sheet</td></tr>
</table>

<table class="spreadsheet">
<tr>
    <th style="width: 1em"></th>
    <th style="width: 10em">J</th>
    <th style="width: 9em">K</th>
	<th style="width: 5em">L</th>
	<th style="width: 5em">M</th>
</tr>
<tr><th> 1</th><td><b>Fan Serial Number</b></td><td><b>Fan Manufacturer</b></td><td><b>Fan Test 1</b></td><td><b>Fan Test 2</b></td></tr>
<tr><th> 2</th><td>   W0909101451          </td><td>   Champion Lab        </td><td>   Passed        </td><td>   Failed        </td></tr>
<tr><th> 3</th><td>   W0909101452          </td><td>   Champion Lab        </td><td>   Failed        </td><td>   Passed        </td></tr>
<tr><td colspan="5">the second half of <i>My Tests</i> sheet</td></tr>
</table>
<br/>

| Column | Description |
| A | Represents the same Serial Numbers that are found in the **My Items** and **My Images** sheets. |
| B | Comments on each of the Tests. |
| C-M | These columns represent my test data. We'll describe how exactly we like to format them below. |

- Again, if you don't need to upload any test data, but only Items, you could just delete this "My Tests" sheet.

<br/> 
[back to top](#contents)

### QE-docket.json: "Values" blob:

"Values" blob in QE-docket.json should look like the below:
~~~
 "Values": {
        "Part Type ID": "D00599800015",
        "Institution": "(186) University of Minnesota Twin Cities",
        "Manufacturer": "(7) Hajime Inc"
    }
~~~
{: .language-json}
Here, you provide Component Type ID of the Items you like to upload (in this case, D00599800015), your Institution, and Manufacturer.

<br/> 
[back to top](#contents)

### QE-docket.json: "Sources":

"Sources" in QE-docket.json should look like the below:
~~~
 "Sources": [
        {
            "Files": "QuickStartExample.xlsx",
	        "Sheet Name": "My Items",
            "Encoder": "My Item Encoder"
        },
	    {
            "Files": "QuickStartExample.xlsx",
	        "Sheet Name": "My Images",
            "Encoder": "My Image Encoder"
        },
	    {
            "Files": "QuickStartExample.xlsx",
	        "Sheet Name": "My Tests",
            "Encoder": "My Test Encoder"
        }
    ]
~~~
{: .language-json}
- Here you specify the 3 spreadsheet file names, the 3 sheet names, and the 3 Encoder names.

- We have only one single spreadsheet file in our example. But we could have those 3 sheets in 3 different files separately.

- We'll describe each of the Encoders in the next sub-sections.

<br/> 
[back to top](#contents)

### QE-docket.json: Encoders: "My Item Encoder":

"My Item Encoder" in QE-docket.json should look like the below:
~~~
            "Encoder Name": "My Item Encoder",
            "Record Type": "Item",
            "Part Type ID": "D00599800015",
            "Schema": {
                "Specifications": {
                    "DATA": {
                        "type": "group",
                        "key": "Serial Number",
                        "members": {
                            "Serial Number": "string",
                            "Drawing Number": "string",
			                "My Doc": {
				               "value": "https://edms.cern.ch/document/2505353/"
			                },
			                "Serial Number": "string",
			                "Location": "string",
			                "Arrived": "string",
			                "Location Comments": "string"
                        }
                    }
                },
		        "Subcomponents": {
		            "MySubComp 1": {
			            "column": "MySubComp 1"
		            },
		            "MySubComp 2": {
			           "column": "MySubComp 2"
		            }
		        }
            }
~~~
{: .language-json}
- Within the Specifications blob, its database scheme is defined.

- "key" tells the Tool that "Serial Number" defines an Item (one-to-one correspondance between a "Serial Number" and an Item).

- The "members" blob defines the scheme. In the database, we like to store them like the one shown below:
  ~~~
  "Drawing Number": "DFD-XX-FF00",
  "My Doc"        : "https ://edms.cern.ch/document/2505353/"
  ~~~
  {: .language-json}
- For "My Doc", since we know the documentation link is the same for this Component Type, instead of specifying it in every row of "My Items" sheet, we provide the constant value here. Notice that we don't need to specify the label name, "My Doc" in our sheet either.

- The "Subcomponents" blob just specifies label names for sub-component PIDs (or Serial Numbers).

<br/> 
[back to top](#contents)

### QE-docket.json: Encoders: "My Image Encoder":

"My Image Encoder" in QE-docket.json should look like the below:
~~~
            "Encoder Name": "My Image Encoder",
            "Record Type": "Item Image",
            "Part Type ID": "D00599800015",
            "Schema": {
                "type": "group",
                "key": "Serial Number",
                "members": {
                    "Serial Number": "string",
                    "Image File": "string",
		            "Comments": "string"
                }
            }
~~~
{: .language-json}
- Similar to "My Item Encoder" typesets of the labels are defined.

<br/> 
[back to top](#contents)

### QE-docket.json: Encoders:  "My Test Encoder":

"My Test Encoder" in QE-docket.json should look like the below:
~~~
            "Encoder Name": "My Test Encoder",
            "Record Type": "Test",
	        "Part Type ID": "D00599800015",
	        "Test Name": "My Test",
            "Schema": {
                "Test Results": {
                    "DATA": {
                        "type": "group",
                        "key": "Serial Number",
                        "members": {
			                "Serial Number": "string",
                            "Operator": "string",
			                "Location": "string",
			                "PSU": {
				                "type": "group",
				                "key": "PSU Serial Number",
				                "members": {
				                     "PSU Serial Number": "string",
				                     "Visual Inspection": "string",
				                     "PSU Manufacturer": "string",
				                     "PSU Test 1": "string",
				                     "PSU Test 2": "string"
				                }
			                },
			                "Fans": {
				                "type": "group",
				                "key": "Fan Serial Number",
				                "members": {
				                     "Fan Serial Number": "string",
				                     "Fan Manufacturer": "string",
				                     "Fan Test 1": "string",
				                     "Fan Test 2": "string"
				                }
			                }
                        }
                    }
                }
            }
~~~
{: .language-json}
- Again, it has a very similar form to what we have seen in Item and Image Encoders.

- This time, however, it has a nested structure in its scheme. E.g., this scheme would store the contents in "My Tests" sheet as shown below:
  ~~~
  "Serial Number": "HA-MURAMATSU-00003",
  "Operator"     : "Hajime",
  "Location"     : "Minneapolis",
  "PSU"          : [ 
                       "PSU Serial Number": "2PH30-230",
                       "Visual Inspection": "Passed",
                       "PSU Manufacturer" : "TOSHIBA",
                       "PSU Test 1"       : "Failed",
                       "PSU Test 2"       : "Passed" 
  				   ],
  "Fans"         : [ 
                       "Fan Serial Number": "W0909101451",
                       "Fan Manufacturer" : "Champion Lab",
                       "Fan Test 1"       : "Passed",
                       "Fan Test 2"       : "Failed" 
  				   ]
  ~~~
  {: .language-json}

<br/> 
[back to top](#contents)

### Let's upload them:

- If you have modified your sheet(s) and docket file according to your needs, you should be ready to upload them. Execute the following command. Don't worry. It will not upload, yet. It will only check the contents of the provided files.
  ~~~
  hwdb-upload QE-docket.json
  ~~~
  {: .language-bash} 


- If you don't see any error message from the above command-line, let's upload them for real:
  ~~~
  hwdb-upload QE-docket.json --submit
  ~~~
  {: .language-bash} 
- If everything goes well, you should see a screen similar to the one shown below:

![uploaded screen](../fig/QuickStart/Uploaded.png){: .image-with-shadow}{: width="50%"}
  and **new PIDs are assigned** to each of the newly uploaded Items (i.e., the corresponding Serial Numbers).

- Again, if you don't need to upload Tests, you can remove the Test sheet from the spreadsheet file and the Tests portion from "Sources" and "Endoder" of the docket file.

- Likewise, if you don't plan to upload images, remove the corresponding parts from the spreadsheet and docket files.



### with External IDs (or Serial Numbers) that already exist in the HWDB

- If you upload with Serial Numbers (or External IDs) that already exist in the HWDB, it will **overwrite** the existing Item Specifications and Tests (don't worry, their histories are kept in the HWDB). This is actually a useful feature when you need to update contents in the HWDB.

<br/> 

[back to top](#contents)

## Lesson 7: Generating bar/QR-code labels with the Tool

One can produce massive numbers of labels with the Tool.
> Please refer to our [Generating bar/QR-code labels]({{ page.root }}/barqrcode/index.html) section.
{: .prereq}

## Lesson 8: Filling out the DUNE Shipping checklists with the GUI-based Tool

A link to this new section is coming soon.

<br/><br/> 
<br/><br/> 

{% include links.md %}

