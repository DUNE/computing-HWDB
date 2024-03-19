---
title: Setting up Types
teaching: 30
exercises: 0
questions:
- Question 1
- Question 2
objectives:
- Objective 1
- Objective 2
keypoints:
- Keypoint 1
- Keypoint 2
---
## Lesson Part 1

<!--slides are 1024 x 768 px-->

> Before inserting Items and their corresponding Tests, we need to define a Component Type and Test Type, respectively. We will do so, first with the WEB UI, and then through the REST API in this section.
>
>> ## Slide 01
>>  ![Slide 01](../fig/Setting-up-Types/Setting-up-Types.001.jpeg)
>>
>> Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}


> First the WEB UI approach.
>
>> ## Slide 02
>>  ![Slide 02](../fig/Setting-up-Types/Setting-up-Types.002.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}


> One can access to the two versions of the HWDB from these addresses.  We will use the development version in this session.
>
>> ## Slide 03 
>>  ![Slide 03](../fig/Setting-up-Types/Setting-up-Types.003.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> The opening page: When you login, this is the very 1st page you will see. One can look at the database schema of the HWDB. There are links to Swagger (https://dbweb9.fnal.gov:8443/cdbdev/apidoc/swagger) and Redoc (https://dbweb9.fnal.gov:8443/cdbdev/apidoc/redoc) as well, which we will mention later in this session.
>
>> ## Slide 04
>>  ![Slide 04](../fig/Setting-up-Types/Setting-up-Types.004.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> Going through the hierarchy of IDs (pages 5 through 9): 
>In the previous session, we introduced a several different IDs: Project, System ID, Subsystem ID, and Component Type ID. 
>With the WEB UI, one can go down (and up) such hierarchy of IDs easily. 
>Click “Admin” in the sidemen. It will show a menu as shown here. One can select any of the three, Projects, Systems, or Subsystems to get into the hierarchy list.
>
>> ## Slide 05
>>  ![Slide 05](../fig/Setting-up-Types/Setting-up-Types.005.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> Let’s start with the “root” list by clicking Projects.
>You should be seeing a list of currently available Projects in the HWDB.
>
>Now let’s click the folder in the “DONE row” & “Systems” column. This will show a list of Systems (individual System names along with System IDs) that correspond to the DUNE project. 
>
>> ## Slide 06
>>  ![Slide 06](../fig/Setting-up-Types/Setting-up-Types.006.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>Here is the list of currently available Systems (of the DUNE project).
>
>Now, similarly let’s display a list of Subsystems of System, FD2-VD HVS.
>
>> ## Slide 07
>>  ![Slide 07](../fig/Setting-up-Types/Setting-up-Types.007.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>We now see a list of Subsystems of “System, FD2-VD HVS”.
>
>By the way, within these lists we have seen so far (currently Subsystems), one can also click individual “name” (i.e., Subsystem name) to see the corresponding definition.
>
>Now let’s pick “Field Cage Spacer Bar” to see a list of Component Types of the Subsystem, Field Cage Spacer Bar.
>
>> ## Slide 08
>>  ![Slide 08](../fig/Setting-up-Types/Setting-up-Types.008.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>Four Component Types for Field Cage Spacer Bar are seen.  
>
>From a Component Type list, one can click the “Items” or “Test Types” columns to see a list of the corresponding Items or Test Types, if it exists.
> 
>> ## Slide 09
>>  ![Slide 09](../fig/Setting-up-Types/Setting-up-Types.009.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>Now that we can go through the hierarchy of existing IDs, let’s edit one of the existing Component Types. Pick one that you like to modify. 
>
>As an example, we’ll modify the Component Type, “CPA Parts FR4 bottom frame” (type id = Z00100100017) here. 
>
>> ## Slide 10
>>  ![Slide 10](../fig/Setting-up-Types/Setting-up-Types.010.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> First, let’s find the Component Type.
>
>From the side menu, click “Component Types” and then click “FILTER…”.
>
>In the “Apply filters” window, you can provide the corresponding type id to “Part_type”, if you know the type id.
>You could also provide a fraction of the Component Type name, like “FR4_BOTTOM”. It is case-insensitive here.
>
>After filtering the Component Type list, you should be seeing the type you were looking for.
>Click its Type name to see its definition now.
>
>> ## Slide 11
>>  ![Slide 11](../fig/Setting-up-Types/Setting-up-Types.011.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>Some of the fields are in “gray”, meaning that you are not allowed to edit them, such as Type Name, Type ID, Full Name, Part Type ID, Created, and Created by.. etc.
>
>We’ll fill out the rest of the empty fields now. 
>
>> ## Slide 12
>>  ![Slide 12](../fig/Setting-up-Types/Setting-up-Types.012.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>
>> ## Slide 13
>>  ![Slide 13](../fig/Setting-up-Types/Setting-up-Types.013.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>Let’s start with “Managed by”.
>
>Here we provide a specific “Role” or “Roles”. Each user can be assigned a specific Role or Roles.
>By providing a specific Role to this Component Type, only users who are assigned the specific Role are allowed to create/edit the corresponding Items later on.
>
>How can we create a new Role and assign to a specific user? 
>
>> ## Slide 14
>>  ![Slide 14](../fig/Setting-up-Types/Setting-up-Types.014.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

>Again, from the side-menu, click Admin -> Roles.
>You should see a list of existing Roles like shown here.
>
>Users with the Administrator privilege can create a new Role by clicking “ADD NEW…”.
>
>Similarly, one can display a list of users by clicking Admin -> Users.
>There, you can add a Role(s) to individual user.
> 
>> ## Slide 15
>>  ![Slide 15](../fig/Setting-up-Types/Setting-up-Types.015.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}
> 
>> ## Slide 16
>>  ![Slide 16](../fig/Setting-up-Types/Setting-up-Types.016.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 19
>>  ![Slide 16](../fig/Setting-up-Types/Setting-up-Types.017.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 17
>>  ![Slide 17](../fig/Setting-up-Types/Setting-up-Types.018.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 19
>>  ![Slide 18](../fig/Setting-up-Types/Setting-up-Types.019.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 20
>>  ![Slide 20](../fig/Setting-up-Types/Setting-up-Types.020.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 21
>>  ![Slide 21](../fig/Setting-up-Types/Setting-up-Types.021.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 22
>>  ![Slide 22](../fig/Setting-up-Types/Setting-up-Types.022.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 23
>>  ![Slide 23](../fig/Setting-up-Types/Setting-up-Types.023.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 24
>>  ![Slide 24](../fig/Setting-up-Types/Setting-up-Types.024.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 25
>>  ![Slide 25](../fig/Setting-up-Types/Setting-up-Types.025.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 26
>>  ![Slide 26](../fig/Setting-up-Types/Setting-up-Types.026.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 27
>>  ![Slide 27](../fig/Setting-up-Types/Setting-up-Types.027.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 28
>>  ![Slide 28](../fig/Setting-up-Types/Setting-up-Types.028.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 29
>>  ![Slide 29](../fig/Setting-up-Types/Setting-up-Types.029.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 30
>>  ![Slide 30](../fig/Setting-up-Types/Setting-up-Types.030.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 31
>>  ![Slide 31](../fig/Setting-up-Types/Setting-up-Types.031.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 32
>>  ![Slide 32](../fig/Setting-up-Types/Setting-up-Types.032.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 33
>>  ![Slide 33](../fig/Setting-up-Types/Setting-up-Types.033.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 34
>>  ![Slide 34](../fig/Setting-up-Types/Setting-up-Types.034.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 35
>>  ![Slide 35](../fig/Setting-up-Types/Setting-up-Types.035.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 36
>>  ![Slide 36](../fig/Setting-up-Types/Setting-up-Types.036.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 37
>>  ![Slide 37](../fig/Setting-up-Types/Setting-up-Types.037.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 38
>>  ![Slide 38](../fig/Setting-up-Types/Setting-up-Types.038.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 39
>>  ![Slide 39](../fig/Setting-up-Types/Setting-up-Types.039.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 40
>>  ![Slide 40](../fig/Setting-up-Types/Setting-up-Types.040.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 41
>>  ![Slide 41](../fig/Setting-up-Types/Setting-up-Types.041.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 42
>>  ![Slide 42](../fig/Setting-up-Types/Setting-up-Types.042.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 43
>>  ![Slide 43](../fig/Setting-up-Types/Setting-up-Types.043.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 44
>>  ![Slide 44](../fig/Setting-up-Types/Setting-up-Types.044.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 45
>>  ![Slide 45](../fig/Setting-up-Types/Setting-up-Types.045.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 46
>>  ![Slide 46](../fig/Setting-up-Types/Setting-up-Types.046.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 47
>>  ![Slide 47](../fig/Setting-up-Types/Setting-up-Types.047.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 48
>>  ![Slide 48](../fig/Setting-up-Types/Setting-up-Types.048.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}

> 
>> ## Slide 49
>>  ![Slide 49](../fig/Setting-up-Types/Setting-up-Types.049.jpeg)
>>
>>  Reference: [Slide Show](../fig/Setting-up-Types-v1.key)
>>{: output}
>{: .solution}
{: .challenge}


{% include links.md %}
