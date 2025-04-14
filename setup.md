---
title: Obtaining JWT tokens
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
- Obtain tokens to access to the HWDB (both development and production version)

## Requirement

- You must have a FNAL Services account and be on the DUNE Collaboration member list.
- You also need to have your terminal ready.
- During our "REST API" sessions, we will extensively use the command, cURL (client URL, pronounced “curl”, [https://curl.se/]).
- You must have the "htgettoken" command ready. It will obtain your access tokens and refresh them for you. Install this Python-based command in the usual way; e.g.,
	~~~
	pip install htgettoken
	~~~
	{: .language-bash}
	Or if you like, you could obtain the source from [https://github.com/fermitools/htgettoken].

## Do you have your account in the HWDB?

Anybody with a FNAL Services account should have their account ready in the HWDB.
And everybody who is a Fermilab user should have a Services account automatically.

If you are new to FNAL, please visit the [Global Services/Users and affiliates access](https://get-connected.fnal.gov/users-affiliates-access/) site
to request your new account.

Perhaps, the best way to check this to try to log into one of the HWDB versions available. There are two versions of the DUNE HWDB,
the development version and the production version. You can practice in the development version (e.g., to go through this training site),
while the production version is the official DUNE Hardware Database. Go ahead to try log into one of them with your Web browser:

 Production version : [https://dbweb0.fnal.gov/cdb/login/sso]

 Development version: [https://dbweb0.fnal.gov/cdbdev/login/sso]

If you can login, that confirms that you have your account ready in the HWDB.

If you can't login, yet if you have your FNAL Services account, it is likely that you are not affiliated to the DUNE experiment in the system.
Again, visit the [Global Services/Users and affiliates access](https://get-connected.fnal.gov/users-affiliates-access/) site
to check to see if you are. You can add an additional affiliation there as well.

If you have your FNAL Services account ready and are affiliated to the DUNE experiment, yet can't login, let us know.

<br/> <br/>

There are two ways to communicate with the DUNE HWDB, through the WEB UI and the REST API (more on these methods later!).
If you can login there, you are ready to go through the training with the WEB UI.

To communicate through the REST API, however, you would need a FNAL certificate. The followings describe how to obtain yours.

## Obtaining your tokens

By following the procedure described below, you will obtain your access JWT (JASON Web Token) tokens. To find out about what the JWT framework is
and/or how it works, see [https://auth0.com/docs/secure/tokens/json-web-tokens] and/or [https://lss.fnal.gov/archive/2021/conf/fermilab-conf-21-070-ccd-scd.pdf].


1. Assuming you already have the htgettoken command ready, execute the following: 
   ~~~
   htgettoken --vaultserver=htvaultprod.fnal.gov --issuer=fermilab
   ~~~
   {: .language-bash}
   This will launch your web browser and take you to a CILogon site, where you will be asked to provide your FNAL SSO credential.
   
   If the htgettoken cannot or is having a difficulty to launch your web browser (e.g., you are running htgettoken remotely), htgettoken will display the URL you should access with your local browser as shown below:
   ~~~
   Attempting OIDC authentication with https://htvaultprod.fnal.gov:8200

	Complete the authentication at:
    https://cilogon.org/device/?user_code=JLD-RQ6-ZPW
	No web open command defined, please copy/paste the above to any web browser
	Waiting for response in web browser
   ~~~
   {: .language-text}
   
   Once you provide your credential at the CILogon site, you should see a message, "You have successfully approved the user code. Please return to your device for further instructions." in your browser.

2. By this time, you should have two tokens in /tmp/ of your local machine. Your **UID** is used in naming these token files. They are your Bearer token (/tmp/bt_u\<UID\>) and Vault token (/tmp/vt_u\<UID\>).

   Their life times are **3 hours** and **7 days** for Bearer and Vault tokens, respectively.
   
   There is another file, credkey-fermilab-default, created in \<your home\>/.config/htgettoken/. This file holds your FNAL username.
   
   By the way, if you don't want your tokens or credkey-fermilab-default stored in these default locations, you could specify different locations as options. See what options are available via;
   ~~~
   htgettoken --help
   ~~~
   {: .language-bash}

   <br/>
   That's it! You are ready to access to the HWDB now.
   <br/>
   
3. Ok, one more additional step. When your tokens are expired, just execute the same command line;
   ~~~
   htgettoken --vaultserver=htvaultprod.fnal.gov --issuer=fermilab
   ~~~
   {: .language-bash}
   to refresh your tokens.
   
   Particularly, if you are refreshing your Bearer token only (the shorter life time token that expires in every 3 hours), you will not be asked to provide your credential. You will need to provide yours once your your Vault token is expired.

	
## Let's try to use it!

This exercise will use your obtained tokens to communicate with the REST API of the HWDB.

1. This step may not be necessary. But there are certain lines that repeatedly show up in curl commands during the tutorials.
So let us define the followings:

   ~~~
   alias CURL='curl -s --header "Authorization: Bearer $(cat /tmp/bt_u501)"'
   export APIPATH='https://dbwebapi2.fnal.gov:8443/cdbdev/api/v1'
   ~~~
   {: .language-bash}

   In the above, the **-s** option is just to silence additional displays from curl.
   
   And basically you just need to provide your Bearer token through its header. The 501 happens to be my personal UID and you need to replace it with yours.
   Notice that there is the command **cat** in front of the token file. That is, you need to provide **content** of the token there.

   In defining the API root path, APIPATH, **cdbdev** allows us to communicate with the development version of the HWDB
   (and **cdb** allows to communicate with the production version).

2. Let's use an API endpoint, **/users/whoami**, to display your HWDB account info.

   ~~~
   CURL "${APIPATH}/users/whoami"
   ~~~
   {: .language-bash}

   Or you could use your favorite JSON parser to make the returned outputs prettier:
   ~~~
   CURL "${APIPATH}/users/whoami" | json_pp -json_opt pretty,canonical
   or
   CURL "${APIPATH}/users/whoami" | jq
   ~~~
   {: .language-bash}

   > ## If everything is correct, you should see your account information in **JSON** like the following:
   {: .keypoints}
   
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
   {: .language-json}
   
  

{% include links.md %}

[https://curl.se/]: https://curl.se/
[https://github.com/fermitools/htgettoken]: https://github.com/fermitools/htgettoken
[https://en.wikipedia.org/wiki/JSON_Web_Token]: https://en.wikipedia.org/wiki/JSON_Web_Token
[https://auth0.com/docs/secure/tokens/json-web-tokens]: https://auth0.com/docs/secure/tokens/json-web-tokens
[https://lss.fnal.gov/archive/2021/conf/fermilab-conf-21-070-ccd-scd.pdf]: https://lss.fnal.gov/archive/2021/conf/fermilab-conf-21-070-ccd-scd.pdf
[https://www.cilogon.org]: https://www.cilogon.org
[https://dbweb0.fnal.gov/cdb/login/sso]: https://dbweb0.fnal.gov/cdb/login/sso
[https://dbweb0.fnal.gov/cdbdev/login/sso]: https://dbweb0.fnal.gov/cdbdev/login/sso
