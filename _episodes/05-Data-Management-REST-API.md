---
title: Data Management using REST API
teaching: 60
exercises: 0
questions:
- question 1
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
>| [Lesson 1](#lesson-part-1) |   |
>|-------------+------------------|
>| [Lesson 2](#lesson-part-2) |   |
>|-------------+------------------|
>| [GET items by Specifications and Test Data](#get-items-by-specifications-and-test-data) | Get via specifications and test data |
>|-------------+------------------|
{: .checklist}


<br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> 

## Lesson Part 1

Part 1...

## Lesson Part 2



## GET items by Specifications and Test Data

One can *get* items using specification and test data as seen in  Item Filtering in the WEB UI section. The following are the templates for the bash commands.

~~~
/api/v1/components?specs=<XXX>
/api/v1/components?testdata=<XXX>
~~~
{: .language-bash}

The following are a list of specific examples for get via specifications:

~~~
/api/v1/components?specs=SiPM_Strip_ID==4548 | jq.data[].part_id
/api/v1/components?specs=Test_Box_ID==Mib3 | jq.data[].part_id
/api/v1/components?specs=Label%20Code==12345| jq.data[].part_id
~~~
{: .language-bash}

The following is a list of specific examples for get via test data:

~~~
/api/v1/components?testdata=RPFSSRes%20RP%20Drawing%20N==DFD-20-A503 | jq.data[].part_id
/api/v1/components?testdata=I[0]==1.2604860486048603e-06 | jq.data[].part_id
~~~
{: .language-bash}

[back to top](#contents)

<br/><br/> 
<br/><br/> 
<br/><br/> 

{% include links.md %}

