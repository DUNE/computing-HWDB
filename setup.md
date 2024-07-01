---
title: Obtaining a FNAL certificate
teaching: 60
exercises: 0
questions:
- Active user privilage is required.
- Get ready for the training.
---

<br/><br/>

>## Questions, Requests, and the Liaisons
>Any question/comments, including requests of examples to be added as training materials, should be directed to the liaison of your consortium (click the button below) as well as
>the followings: [Norm Buchanan](mailto: norm.buchanan@colostate.edu?),
>[Ana Paula](mailto: Ana.Vizcaya_Hernandez@colostate.edu?), and
>[Hajime Muramatsu](mailto: hmuramat@umn.edu?). For issues of the HWDB itself, also inform [here](https://fermi.servicenowservices.com/wp?id=evg-service-item&sys_id=89848f4bdb8c9b00da5174131f961994).
{: .keypoints}
{% include liaison-list/index.html %}

## Objectives

- Get ready to do the tutorials
- Obtain a certificate to access to the HWDB (both development and production version)

## Requirement

- You must have a FNAL Services account and be on the DUNE Collaboration member list.
- You also need to have your terminal ready.
- During our "REST API" sessions, we will extensively use the command, cURL (client URL, pronounced “curl”, [https://curl.se/]).

## Do you have your account in the HWDB?

Anybody with a FNAL Services account should have their account ready in the HWDB.

Perhaps, the best way to check this to try to log into one of the HWDB versions available. There are two versions of the DUNE HWDB,
the development version and the production version. You can *practice* in the development version (e.g., to go through this training site),
while the production version is the official DUNE Hardware Database. Go ahead to try log into one of them with your Web browser:

 Production version : [https://dbweb0.fnal.gov/cdb/login/sso]

 Development version: [https://dbweb0.fnal.gov/cdbdev/login/sso]

If you can login, that confirms that you have your account ready in the HWDB. And let us know if you cannot.

There are two ways to communicate with the DUNE HWDB, through the WEB UI and the REST API (more on these methods later!).
If you can login there, you are ready to go through the training with the WEB UI.

To communicate through the REST API, however, you would need a FNAL certificate. The followings describe how to obtain yours.

## Obtaining your certificate

By following the procedure described below, you will obtain your password-protected certificate in the "PKCS #12 format" that bundles a private key with its X.509 certificate from [https://www.cilogon.org].

1. With your web browser, go to [https://www.cilogon.org]

2. Select **Log On** from its side menu.

3. Select **Fermi National Accelerator Laboratory** as your Identity Provider and click **Log On**.

4. Provide your FNAL Services account credential.

5. Select **Create Password-Protected Certificate** (usually shows up at the top).

6. Enter the password, which is not necessarily the same as the one for your FNAL Services account (preferentially a different password).

7. Select **Get New Certificate**.

8. Select **Download Your Certificate**.

9. Select **Log Off** (or close your browser).

10. You should have a file, **usercred.p12**, downloaded on your computer now.

    Move it to an appropriate area. We also recommend to rename the file.

## Let's try to use it!

This exercise will use your downloaded certificate to communicate with the REST API of the HWDB.

1. This step may not be necessary. But there are certain lines that repeatedly show up in curl commands during the tutorials.
So let us define the followings:

   ~~~
   alias CURL='curl --cert-type P12 --cert usercred.p12:PassWord'
   export APIPATH='https://dbwebapi2.fnal.gov:8443/cdbdev/api/v1'
   ~~~
   {: .source}

   In the above, **usercred.p12** is your downloaded certificate. We are assuming it sits in the current directory. Else, provide the appropriate path in front of it.

   **PassWord** is the one you provided in the Step 6 in the above procedure.

   **cdbdev** allows us to communicate with the development version of the HWDB.

2. Let's use an API endpoint, **/users/whoami**, to display your HWDB account info.

   ~~~
   CURL "${APIPATH}/users/whoami"
   ~~~
   {: .language-bash}

   > ## If everything is correct, you should see your account information in **JSON** like the following:
   {: .keypoints}
   
   ~~~
   {"data":{"active":true,"administrator":true,"affiliation":"University of Minnesota","architect":true,"email":"hmuramat@umn.edu","full_name":"Hajime Muramatsu","roles":[{"id":30,"name":"HVS-CPA"},{"id":32,"name":"HVS-EW"},{"id":31,"name":"HVS-FC"},{"id":4,"name":"tester"},{"id":3,"name":"type-manager"}],"user_id":12624,"username":"hajime3"},"link":{"href":"/cdbdev/api/v1/users/12624","rel":"self"},"status":"OK"}
   ~~~
   {: .output}
   
   Sometimes the response might be too long.
   If commands like json_pp or jq are available, you could also pipe into them:
   
   ~~~
   CURL "${APIPATH}/users/whoami" | json_pp -json_opt pretty,canonical
   or
   CURL "${APIPATH}/users/whoami" | jq
   ~~~
   {: .language-bash}
   
   Then the above JSON response would look nicer, easier to read as the following:
   
   ~~~
   {
  "data": {
    "active": true,
    "administrator": true,
    "affiliation": "University of Minnesota",
    "architect": true,
    "email": "hmuramat@umn.edu",
    "full_name": "Hajime Muramatsu",
    "roles": [
      {
        "id": 30,
        "name": "HVS-CPA"
      },
      {
        "id": 32,
        "name": "HVS-EW"
      },
      {
        "id": 31,
        "name": "HVS-FC"
      },
      {
        "id": 4,
        "name": "tester"
      },
      {
        "id": 3,
        "name": "type-manager"
      }
    ],
    "user_id": 12624,
    "username": "hajime3"
  },
  "link": {
    "href": "/cdbdev/api/v1/users/12624",
    "rel": "self"
  },
  "status": "OK"
}
   ~~~
   {: .output}

{% include links.md %}

[https://curl.se/]: https://curl.se/
[https://www.cilogon.org]: https://www.cilogon.org
[https://dbweb0.fnal.gov/cdb/login/sso]: https://dbweb0.fnal.gov/cdb/login/sso
[https://dbweb0.fnal.gov/cdbdev/login/sso]: https://dbweb0.fnal.gov/cdbdev/login/sso
