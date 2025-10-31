---
title: HWDB Dashboard
teaching: 15
exercises: 0
questions:
objectives:
keypoints:
---

### This page describes usage of the HWDB Dashboard which provides data obtained from the HWDB visually (e.g., by plotting them).


## Contents
>
>|-------------------------------------+------------------|
>| Section                             | Description      |
>|-------------------------------------+------------------|
>| [Requirement](#requirement) | Must have the Python HWDB Tools installed. Need to have dash and pandas additionally  |
>|-------------------------------------+------------------|
>| [Startup](#startup) | A screen when launched |
>|-------------------------------------+------------------|
>| &emsp; [How it works](#how-it-works) | Brief description of how it works|
>|-------------------------------------+------------------|
>| [Preferences](#preferences) |  Setting up the version of the HWDB and your local working directory |
>|-------------------------------------+------------------|
>| [Tabs](#tabs) |  An extra tab(s) for future projects |
>|-------------------------------------+------------------|
>| [Pre-Filters](#pre-filters) | Applying filtering conditions on the HWDB side before syncing |
>|-------------------------------------+------------------|
>| [Component Type ID, Test Type Name, Sync to the HWDB, and Select a file](#component-type-id-test-type-name-sync-to-the-hwdb-and-select-a-file) |   |
>|-------------------------------------+------------------|
>| &emsp; [Component Type ID](#component-type-id) | Provide a Component Type ID to download the corresponding Items  |
>|-------------------------------------+------------------|
>| &emsp; [Test Type Name](#test-type-name) | Optionally could also provide a Test Type Name  |
>|-------------------------------------+------------------|
>| &emsp; [Sync to the HWDB](#sync-to-the-hwdb) | Syncing to the HWDB...   |
>|-------------------------------------+------------------|
>| &emsp; [Select a file](#select-a-file) | Can also select a locally saved file to plot  |
>|-------------------------------------+------------------|
>| [Chart Type](#chart-type) |  Selecting a plotting method (e.g., histogram, scatter...etc) |
>|-------------------------------------+------------------|
>| &emsp; [# of bins](#-of-bins) | Enforcing a specific binning  |
>|-------------------------------------+------------------|
>| &emsp; [Boxplot](#boxplot) |  A.k.a. box-and-whisker plot |
>|-------------------------------------+------------------|
>| &emsp; [Scatter](#scatter) | Yep, need to select two variables to plot!  |
>|-------------------------------------+------------------|
>| [Selecting a variable(s) to be plotted](#selecting-a-variables-to-be-plotted) | Naming scheme of flattened structure |
>|-------------------------------------+------------------|
>| &emsp; [Selecting a value(s) of the selected variables](#selecting-a-values-of-the-selected-variables) | Can plot a certain value(s) of the selected variable   |
>|-------------------------------------+------------------|
>| [Selecting conditions](#selecting-conditions) | How to apply conditions |
>|-------------------------------------+------------------|
>| &emsp; [Load conditions](#load-conditions) | Loading-in a locally stored set of conditions |
>|-------------------------------------+------------------|
>| [Saving filtered Items in CSV](#saving-filtered-items-in-csv) | Saving both the resultant filtered data the selected conditions locally|
>|-------------------------------------+------------------|
{: .checklist}

<br/>


## Requirement:

This is a part of the Python HWDB Tools. If not already, please refer to [Using the Python HWDB Tools]({{ page.root }}/07-Using-Python-Upload-Tool/index.html) section to obtain and install it first.
Make sure to install **version 1.4.1 or newer**. The latest version can be found from [here](https://github.com/DUNE/DUNE-HWDB-Python/releases/latest).

And to use HWDB Dashboard, you will need three additional packages, **dash**, **pandas**, and **dash_bootstrap_components**, if you don't have them arealdy:
~~~
conda install conda-forge::dash
conda install conda-forge::pandas
conda install conda-forge::dash-bootstrap-components
~~~
{: .language-bash} 

[back to top](#contents)

## Startup:

In your terminal, start it up via:
~~~
hwdb-dash
~~~
This will auto-launch your default web browser with http://127.0.0.1:8050/.
{: .language-bash} 

In your browser, you should see something like below:

![dashstart](../fig/Dash/dash_startup.jpg){: .image-with-shadow}{: width="100%"}

<br/><br/> <br/><br/> 

### How it works:

You provide a Component Type ID, such as Z00100100040 (you could additionally provide a Test Type Name).
Dashboard then obtains the corresponding Items that are created under the provided Component Type ID.

You could then:
- Select certain conditions.
- Plot a variable(s) with the selected conditions (1D or 2D).
- Store the filtered data (Items), along with the selected conditions.

For the rest of this page, we describe how exactly individual buttons work.

[back to top](#contents)

## Preferences:

The Preferences button sits at the top-left conner. Clicking the button shows a screen like the one below slided in:

![dashpreferences](../fig/Dash/dash_preferences.jpg){: .image-with-shadow}{: width="40%"}

You need to do two setups here:
- Select a version of the HWDB that you like to access to. It has to be either **Development** or **Production**.
- Select your working directory. The downloaded data, selected conditions, and filtered data are stored in this directory.
  Don't forget to click "Save the selected working directory" button to save.

[back to top](#contents)

## Tabs:

You see selectable tabs right below the title.
Select **Plots** if you like to plot things. We anticipate to fill other tabs in future. Currently there is single tab available, "Plots".

[back to top](#contents)

## Pre-Filters:

Probably they are self-explanatory. You could (you don't need to) apply certain conditions
before you let Dashboard sync to the HWDB. This would potentially shorten the actual syncing time.

[back to top](#contents)

## Component Type ID, Test Type Name, Sync to the HWDB, and Select a file

### Component Type ID:
In this box, you input a Component Type ID, which must already exist in the HWDB. Dashboard will complain if you provide a non-existent ID.

### Test Type Name:
This is optional. If you like to access to a variable(s) that is stored in **Test Log** of Items under the provided Component Type ID,
then insert the corresponding Test Type Name here. Again, Dashboard will complain if you provide non-existent Test Type Name.

### Sync to the HWDB:
Clicking this initiates Dashboard to communicate with the HWDB. The button turns into orange-ish color as shown below while talking to the HWDB.
![dashsyncing](../fig/Dash/dash_syncing.jpg){: .image-with-shadow}{: width="30%"}

<br/><br/> 

>## **Also...**
> While Dashboard stores the downloaded data in its memory, it also stores the downloaded data as a pickle file.
>
> - It saves in **/\<Your working directory\>/\<provided Component Type ID\>/**. If the sub-directory, **/\<provided Component Type ID>/**,doesn't exist, Dashboard will create one.
> - The saved file name would be **HWDB\_downloaded\_\<provided Component Type ID\>\_\<time stamp\>.pkl**. If a Component Test Type Name is provided, the file name would be **HWDB\_downloaded\_\<Test Type Name\>\_\<provided Component Type ID\>\_\<time stamp\>.pkl**, instead.
{: .prereq}

### Select a file:
Let's you select a file, which must be either csv or pickle file, to load-in. The loaded-in data then can be plotted.
This is for files that are saved by Dashboard itself. We'll describe about saving later below.

[back to top](#contents)

## Chart Type:

Select a type of distribution that you like to plot. As can be seen below, available types are:
- Histogram
- Cumulative Histogram
- Scatter
- Line
- Boxplot

![dashcharttype](../fig/Dash/dash_charttype.jpg){: .image-with-shadow}{: width="45%"}

### # of bins:
Again, this is optional. Bins are auto-binned. However, you could enforce them to finner or broader binning.

### Boxplot:
This is to visualize the data (aka box-and-whisker plot). An example plot is shown below:

![dashboxplot](../fig/Dash/dash_boxplot.jpg){: .image-with-shadow}{: width="100%"}


### Scatter:
This is to plot a very simple 2D scatter plot. When this type is selected, you need to select
the corresponding 2 variables to be plotted as shown below. We'll describe naming scheme of available variables later below.

![dashscatter](../fig/Dash/dash_scatter.jpg){: .image-with-shadow}{: width="65%"}

[back to top](#contents)

## Selecting a variable(s) to be plotted:

Next, you need to select a variable (or variables if you select scatter for your chart type).
In principle, **all** variables, that are stored in the HWDB, should be available, including those in Item/Test Specifications,
with the exceptions of binaries (images, pdfs, and csv files), as seen below:

![dashvariables](../fig/Dash/dash_variables.jpg){: .image-with-shadow}{: width="70%"}

These variable names are the ones what the HWDB REST-API returns, except when there is a nested structure, such as "Item Specifications".

To flatten such structure, we insert "_" between layers.
For the case of "Item Specifications", since the HWDB stores its modification history in array, Dashboard grabs its latest entry.
Hence there is "0" inserted in the above example.

When a Test Type Name is provided, names of all available variables start with either "ITEM:" or "TEST:", depending on whether
they belong to Items or Tests, as shown below.

![dashvariablestest](../fig/Dash/dash_variablestest.jpg){: .image-with-shadow}{: width="70%"}

[back to top](#contents)


### Selecting a value(s) of the selected variables:

Optionally one could choose a particular value on the selected variables to be plotted, or could also select multiple values as shown below.
In this example, plotting certain values of *ITEM: created* (dates/times).

![dashvalues](../fig/Dash/dash_valuesvariables.jpg){: .image-with-shadow}{: width="60%"}

## Selecting conditions:

In selecting conditions, you start by selecting the overall logis to be applied. It has to be either "AND" or "OR".
Then click "Add condition" to start a condition (or keep clicking it as many conditions as you like to apply).

Next, select a variable that you like to apply a condition, select an operation (>, <, ==, contains...etc), threshold, the corresponding color,
then finally click "Apply".

An example plot with two conditions are shown below:

![dashconditions](../fig/Dash/dash_conditions.jpg){: .image-with-shadow}{: width="100%"}

<br/><br/> 

Dashboard only overlays the filtered distributions here, ignoring the chosen overall logic ("AND" or "OR"). The chosen logic will be employed
when it saves the result, which we'll describe later below.

### Load conditions:

Clicking "Load conditions" button lets you select a saved set of conditions from a local directory.
Again, we'll describe about this later below.

[back to top](#contents)


## Saving filtered Items in CSV:


Clicking "Save filtered Items in CSV" will do two things:
- Saves the filtefred Items in  **\<Your working directory\>/\<provided Component Type ID\>/** with a file name,
  **HWDB\_filtered\_\<provided Component Type ID\>\_\<time stamp\>.csv**.
  Again, if a Test Type Name is provided, its name would be **HWDB\_filtered\_\<provided Component Type ID\>\_\<Test Type Name\>\_\<time stamp\>.csv**.
- Similarly, it also saves the applied conditions in JSON in the same directory. The file name format is **HWDB\_conditions\_\<provided Component Type ID\>\_\<time stamp\>.json** and **HWDB\_conditions\_\<provided Component Type ID\>\_\<Test Type Name\>\_\<time stamp\>.json** when a Test Type Name is given.

As can be seen below, one could also specify a file name as well, while the default file name is auto-suggested there.

![dashsaving](../fig/Dash/dash_saving.jpg){: .image-with-shadow}{: width="100%"}

<br/><br/> 

>## **Also...**
> The saved csv file has the usual format:
> - Column labels, for each of the flattened variables, at the 1st row.
> - Each of the rest of the rows represent individual Item (PID).
{: .prereq}

[back to top](#contents)

<br/><br/> 


{% include links.md %}

