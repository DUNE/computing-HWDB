---
title: Data Management using WEB UI
teaching: 60
exercises: 0
questions:
- How does one use the WEB UI?
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
>| [Component Types](#component-types) |   |
>|-------------+------------------|
>| [Items](#items) |   |
>|-------------+------------------|
>| &emsp;[Preparing Items to be Added](#preparing-items-to-be-added) | |
>|-------------+------------------|
>| &emsp;[Adding Item(s)](#adding-items) | |
>|-------------+------------------|
>| &emsp;&emsp;[Adding Single Item](#adding-single-item) | |
>|-------------+------------------|
>| &emsp;&emsp;[Bulk Adding Items](#bulk-adding-items) | |
>|-------------+------------------|
>| &emsp;&emsp;[Adding Subcomponents](#adding-subcomponents) | |
>|-------------+------------------|
>| &emsp;&emsp;[Adding Tests](#adding-tests) | |
>|-------------+------------------|
>| &emsp;&emsp;[Adding Images](#adding-images) | |
>|-------------+------------------|
>| &emsp;[More Item Operations](#more-item-operations) | |
>|-------------+------------------|
>| [Item Filtering](#item-filtering) | Searching for Items based on chosen Filters |
>|-------------+------------------|
>| &emsp;[Syntax](#syntax) | Syntax in Filter fields |
>|-------------+------------------|
>|&emsp;[Filtering with Specifications](#filtering-with-specifications) | Filtering via the Specifications field |
>|-------------+------------------|
>|&emsp;[Filtering with Test Data](#filtering-with-test-data) | Filtering via the Test Data field |
>|-------------+------------------|
{: .checklist}

<br/><br/><br/><br/><br/><br/><br/><br/>



## Component Types

You can utilize the WEB UI directly access specific component types. Say you wish to find the "Front Axle" we have previously discussed. You can find it via the following process:

![component-type-filtering](../fig/Data-management-WEB-UI/comp-type-filter.png){: width="85%"}

The component types are displayed in list view. This provides a variety of options as seen below. In particular you may access the Component Type definition, the Test Types, and the list of Items of that component type. Click on the red boxes.

{% include data-management-web-ui/component-type-index.html %}


[back to top](#contents)

<br/><br/>

## Items

### Preparing Items to be Added

Let’s assume that “Front Axle” has already been defined in the database, and that it should contain a “Left Wheel” and a “Right Wheel” as Subcomponents, and these have also been defined in the database. Let’s take a quick look at the definition for “Front Axle.”

{% include data-management-web-ui/preparing-items-added-index.html %}

[back to top](#contents)

<br/><br/>

### Adding Item(s)


We can also add items to component types through the WEB UI. Suppose we wish to add an item to the "Front Axle" component type. As shown above, you can view the list of items associated with a particular component type by clicking on the particular icon in the component type list. Doing so will provide the following.

{% include data-management-web-ui/view-items-index.html %}

[back to top](#contents)

<br/><br/>

#### Adding Single Item

We can click on "Add New" in order to add a single new item. The following page will show up.

{% include data-management-web-ui/add-item-index.html %}

You can use this interface to create a new item and save it. If you wish to add subcomponents to this item, record the PID. In this case the PID is `Z00100400005-00030`. 

[back to top](#contents)

<br/><br/>

#### Bulk Adding Items

Bulk Adding allows you to add a number of items simultaneously. This is handy if you have a number of Items you wish to reserve Part IDs for, but you’re not ready to enter all the information for those Items yet. We can click on "Bulk Add" which will produce the following.

{% include data-management-web-ui/bulk-add-index.html %}

[back to top](#contents)

<br/><br/>

#### Adding Subcomponents

Suppose we wish to add subcomponents to the previously added item `Z00100400005-00030`. Since this item has component type "Front Axle", the component type definition requires that the subcomponents be of component type "Left Wheel" and "Right Wheel". Return to the list of component types and as seen at the beginning of this section. Then utilize the method shown to add single items to both "Left Wheel" and "Right Wheel" and record the PIDs. It is essential to make sure that the "status" = "available", which is the default when creating items. In this case the PIDs are `Z00100400007-00013` and `Z00100400008-00014` respectively. Now return to the item you wish to attach the subcomponents to, this can be done through directly filtering the list of items or by going to the specific component type and listing the items which belong to it.

{% include data-management-web-ui/add-subcomp-index.html %}

[back to top](#contents)

<br/><br/>

#### Adding Tests

Test Types need to be added to the Component Type before performing this action. When editing the item, click on "Test Log" on the top item menu (see [More Item Operations](#more-item-operations) for more) which will present you with something that looks like the following.

{% include data-management-web-ui/add-test-index.html %}

You can also add new tests by editing the item. To do so navigate to the particular item and go to its "Test Log", then click "Add New." Adding a new instance of a test and “editing” an instance are functionally identical! The only difference is that “editing” starts the form pre-filled with the contents of that instance. There is no branching. There is only one sequence of test records, and adding or “editing” will always just add a record to the end of that sequence. If multiple instances of the same test is desired, it is advisable to set up the Test Definition itself to accommodate multiple rows, and then always regard the last record in the log to be “current” and contain all relevant data for all tests, and every other record to be historical and not current.

[back to top](#contents)

<br/><br/>

#### Adding Images

In order to add an image to a selected item, click on "Images" on the top item menu (see [More Item Operations](#more-item-operations) for more) which will present you with something that looks like the following.

{% include data-management-web-ui/add-image-index.html %}

You can also add images to specific tests associated with items. Suppose we wish to add an image to the bounce test we added to `Z00100400005-00030`. Then navigate to the particular item and go to its "Test Log" which produces the following which allows you to add an image in the same way as shown above.

{% include data-management-web-ui/add-test-image-index.html %}

You can also add an image immediately after the additon of a new test, as it gives you the option to do so.

Images are attached to that test result record ONLY. If you “edit” a test, the images you have attached will not carry forward. You will need to decide whether you should re-attach all images every time you update a test record, or regard all images in the historical sequence to be “current.” The author of this presentation has no strong opinion at the time this was written.

[back to top](#contents)

<br/><br/>

### More Item Operations

Once an Item has been created, you are provided with more operations as shown below.

{% include data-management-web-ui/item-operations-index.html %}

[back to top](#contents)
<br/><br/>

## Item Filtering

You can search for Items (Components) based on the usual fields such as Component_type, Part_id, Serial_number, and Creator. In addition, you can filter by the fields as shown below.

You can filter by **status**: any, available, temporarily not available, permanantly not available.
![status filter](../fig/Setting-up-Types/StatusFilter.png){: width="70%"}

You can also filter by **Location**, **Manufacturer**, and **Country of Origin**. Each of which are case **in**sensitive and need not be completely spelled out.
![location,Manufac,Country filter](../fig/Setting-up-Types/LocManConFilter.png){: width="90%"} 

A more advanced discussion of filtering requires use of specific syntax.

### Syntax

There is certain syntax that can be used when you are refining your search using filter fields. The following symbols can be utilized with **numbers** in filter fields. 

>|------+------|
>| symbol | definition|
>|------+------|
>| == | equal to|
>|------+------|
>| != | not equal to|
>|------+------|
>| < | less than|
>|------+------|
>| <= | less than or equal to|
>|------+------|
>| > | greater than|
>|------+------|
>| >= | greater than or equal to|
>|------+------|

The following symbols can be utilized with **strings** and **substrings** in filter fields.

>|------+------|
>| symbol | definition|
>|------+------|
>| == | equal to|
>|------+------|
>| != | not equal to|
>|------+------|
>| ~ | case sensitive regex search|
>|------+------|
>| ~* | case insensitive regex search|
>|------+------|

[back to top](#contents)

### Filtering with Specifications

You can also filter based on item **Specifications**. Suppose there exists an item with the following specifictations:
~~~
"specifications":[
  {
    "Documentation": "https://something.com/something"
    "SiPM_Strip_ID": 4548
    "Test_Box_ID": "Mib3"
    "Tray_Number": 20
    "Vendor_box_Number": 14,
    "Vendor_Delivery_ID": "HPK_Ciemat_03"
    "_meta":{
      "_column_order:[
        "Vendor_Delivery_ID",
        "Vendor_box_Number",
        "SiPM_Strip_ID",
        "Test_Box_ID",
        "Documentation"
      ]
    }
  }
]
~~~
{: .output}
Then you can apply the following filters to search the item. The syntax used in the filtering field is explained in depth in the following section. 
![Spec filter](../fig/Setting-up-Types/SpecFilter.png){: width="90%"} 



<br/><br/> 

Consider an item with the following Specifications.

~~~
"specifications":[
  {
    "Vendor_Delivery_ID": "HPK_Ciemat_03"
    "DATA": {
      "Drawing Number": "DFD-21-2101",
      "Label Code": "12345",
      "Name": "Main I-Beam"
    }
  }
]
~~~
{: .output}

Then, 
- Vendor_Delivery_ID~HPK_Ciemat_
- Vendor_Delivery_ID~*HPK_CiemaT_
- Name==Main I-Beam
- Label Code==12345

all return this item (as well as others if possible). However,
- Vendor_Delivery_ID~HPK_CiemaT_

would not return any item as **~** is case sensitive.


[back to top](#contents)

<br/><br/> 

### Filtering with Test Data

You can also filter using Test_data in the same way as Specifications. Suppose you have an item with the following test data:

~~~
"test_data":{
  "Test Results": [
    {
      "Location": "Minnesota",
      "Operator": "Scientist Red"; "Scientist Blue",
      "SiPM":[
        {
          "Comment":"",
          "List1":[
            1.77734e-06
            6.90008e-07
            -2.44907e-06
            5.33429e-06
          ]
          "List2":[
            "H_RED"
            "Z_yellow"
            "U_green"
            "J_BLUE"
          ]
        }
      ]
    }
  ]
}
~~~
{: .output}
Then,
- List1[0]==1.77734e-06
- List1[1]>6.9e-07
- List2[3]~*j_blue
- List[*]==H_RED

all return the intended item.

[back to top](#contents)
<br/><br/> 




{% include links.md %}

