---
title: "Building the Ruby Editing Environment"
teaching: 0
exercises: 0
questions:
- How to install Ruby/Jekyll editing environment.
objectives:  
- Installation
keypoints:
- Best to edit markdown files locally, test, verify, then push to GitHub.
---

#### Essential ingredients:

- gh-pages set for a given github repository (computing-HWDB -> https://github.com/DUNE/computing-HWDB renders as https://dune.github.io/computing-HWDB
- Jekyll: Jekyll performs the markdown to HTML rendering
- Ruby: powerful scripting language
- Gems: open source Ruby code
- Bundler: gem manager

> The relavent software for establishing the Ruby editing environment for use with GitHub's gh-pages are:
>> ## Glossary  
>> - Terminal is a operating system interface on MacOS that can be found in the Applications:Utilities folder.
>> - Macports is considered to be the default package manager for MacOS - [https://guide.macports.org/](https://guide.macports.org)
>> - Homebrew is a package manager for MacOS -[https://brew.sh](https://brew.sh), docs [https://docs.brew.sh/](https://docs.brew.sh) Installation
>> - Ruby is a scripting language, presumably akin to perl, for example. Ruby is installed by default on MacOS. - [https://ruby-lang.org/en/](https://ruby-lang.org/en/)
>> - Ruby Gems are open source Ruby code that provide utility. Example gems include Bundler, and Jekyll. JSON and Rails are two other examples. Ruby gems can be inspected at https://rubygems.org. More on gems: https://medium.com/@morgannegagne/what-is-a-ruby-gem-1eec2684e68
>> - rbenv - allows for managemnent of ruby version used when multiple versions of ruby are installed on a Mac (or PC). 
>> - chruby - another way to switch between versions of ruby. - https://github.com/postmodern/chruby#readme
>> - RVM - Ruby Version Manager is used to manage multiple installations of Ruby - https://rvm.io
>> - ruby-build - https://github.com/rbenv/ruby-build#readme
>> - ruby-install - makes possible the installation of ruby into a specific directory - https://github.io/postmodern/ruby-install#readme
>> - Bundler - a Ruby utility for matching a project specific gem to an associated Ruby version - https://bundler.io/getting_started.html 
>> - Jekyll - markdown to HTML renderer for .io site  https://jekyllrb.com/ and installation https://jekyllrb.com/docs/installation
>>
>>These glossary items resourced as https://ruby-lang.org/en/documentation/installation
>>{: .output}
>{: .solution}
{: .challenge}

Ruby is used as the programming language to render a web page on the fly. Essential components are selected Ruby Gems which provide the necessary utilities, these include Bundler and Jekyll.  To manage the installation of Ruby and matching the associated Gems, ruby-install and chruby have proven useful.  

Homebrew will be used for installations in this tutorial.

> Follow instructions for installation of Homebrew on macOS if needed.
>> ## Homebrew Install Notes
>> Let's get started with the macOS package manager Homebrew, realizing first the requirements:
>> - modern macOS
>> - Xcode - grab from the Apple Store or developer.apple.com 
>> - Command Line Tools - grab from [https://developer.apple.com/download/all/](https://developer.apple.com/download/all/) (`$ xcode-select --install`)
>>
>> Install Homebrew in one of two ways, first as a build from your Terminal window. Reference: [https://brew.sh](https://brew.sh).
>>~~~
>>$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
>>~~~
>>{: .language-bash}
>>
>> or instead with the package (.pkg) installer at [https://github.com/Homebrew/brew/releases](https://github.com/Homebrew/brew/releasees).
>>
>>To verify Homebrew installed correctly, in a freshly opened Terminal window, try installing wget (a useful package that can grab a file from its http URL).
>>~~~
>>$ brew install wget
>>~~~
>>{: .language-bash}
>>
>> If Homebrew was installed awhile ago, you might consider upgrading:
>>
>>~~~
>>$ brew --version
>>Homebrew 4.0.18
>>#update packages list
>>$ brew update
>>   Downloading... (a whole lot of updating)
>>#upgrade the packages that have upgrade candidates
>>$ brew upgrade
>>    Upgrading ... (a bunch of downloading and upgrading)
>>~~~
>>{: .language-bash}
>> Note: The upgrade procedure might include automatic upgrades of Ruby and Gems.
>> 
>>{: .output}
>{: .solution}
{: .challenge}


Assuming the Homebrew installation or upgrade went smoothly, lets verify a few things with respect to the Ruby programming language. That is, what is the latest version of Ruby, Gem, and Bundler?

- Inspect Ruby installation candidates - [https://formulae.brew.sh/formula/ruby](https://formulae.brew.sh/formula/ruby)
- Inspect Ruby Gem installation candidates - [https://rubygems.org](https://rubygems.org)
- Inspect Ruby Gem Bundler candidate - [https://rubygems.org/gems/bundler](https://rubygems.org/gems/bundler)

Note: A 2.0 version of Ruby is installed on a modern macOS by default, check your via the following commands.
~~~
#inspect the whereabouts of your default version of Ruby
$ which ruby
/usr/bin/ruby

$ ruby --version
ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.x86_64-darwin20]

#verify $HOME gem directory and versions of Ruby installed
$ ls -l ~/.gem/ruby/
drwxr-xr-x   9 daviddemuth  staff  288 Apr 23  2021 2.6.0

#install the latest version
$ brew install ruby
$ ruby --version

$ which ruby && ruby  --version
/usr/local/opt/ruby/bin/ruby
ruby 3.0.1p64 (2021-04-05 revision 0fb782ee38) [x86_64-darwin20]

# verify RubyGems is installed
$ which gem
/usr/bin/gem
$ gem --version
3.0.3

$ sudo gem update --system

$ which gem && gem --version
/usr/local/opt/ruby/bin/gem
3.5.6

#show local gems installed
$ gem list

#is ruby gem Bundler installed?
$ gem list | grep bundler

# install the bundler gem
$ gem install bundler

#show ruby and gem paths (good for debugging)
$ gem env
~~~
{: .language-bash}

With ruby upgraded to a 3. version, and the corresponding gem also upgraded, try launching the localhost web server from the root directory of the github repository you are working from by typing 'make serve' at the Terminal command prompt.

If it fails, it might be necessary to install the jeckyll gem, and possibly ruby-install.

Necessary is making sure your PATH to the new ruby and gems installation directories are correct.  In your installation log, you might of noticed a few prompts simlar to the following PATH commands, at these to your .bash_profile file located in your $HOME directory ('ls -a' to evidenced its existence, .bash_rc, and .profile could also work).

Sniff your installed versions (pay attention to the installation dates for example 'ls -l')

~~~
#ruby installs for 3/24/24
#set path to GEM EXECUTABLE directory
export PATH="/usr/local/lib/ruby/gems/3.3.0/bin:$PATH"
#set path to RUBY EXECUTABLE directory
export PATH="/usr/local/opt/ruby/bin:$PATH"
~~~
{: .language-bash}

Note: Check with '$which ruby && ruby --version' and '$which gem && gem --version' Compare to $ gem env (I noticed a discrepency between the install log recommendation for adding a $PATH to .bash_profile)

Go to your GitHub repository e.g., computing-HWDB
~~~
$ cd $HOME/Work/dune/computing-HWDB/

# launch the editing env
$ make serve
~~~
{: .language-bash}


With success, the compiling will end with a note to open a web browser, enter the URL: http://localhost:4000/

That terminal window will provide information as you edit your files.

With your emacs window open, edit away. With each file save, the ruby engine will update your view of the webpage with each reopen of the page.

When you are ready to push the update to GitHub, we suggest the use of GitHub Desktop connected to your github account and working in your cloned repository.

> ingnore this archive for now...
>> ## Archive
>>~~~
>># Is the Jekyll gem installed?
>>$ gem list | grep jeckyll
>># install Jeckyll
>>$ gem install jeckyll
>>#install latest version of ruby
>>$ brew install ruby-install
>># may need for additional Ruby version installations and control
>>$ brew install ruby-install
>># finding this version of emacs as featureful.
>>$ brew install spacemacs
>>~~~
>>{: .language-bash}
>>
>>Inspect github installation, notice in the root directory of your project installation the file called Gemfile. This file describes the gem dependencies required to run Ruby. 
>>~~~
>>$ more $HOME/Work/dune/computing-HWDB/Gemfile
>>~~~
>>{: .language-bash}
>>
>>{: .output}
>{: .solution}
{: .challenge}


Updates to this page will follow.

A curiosity is using virtual environments with Ruby, as we do with Python using virtualenv? Reference: [https://develves.net/blogs/asd/2016-03-17-using-virtual-environments-ruby-1/](https://develves.net/blogs/asd/2016-03-17-using-virtual-environments-ruby-1/). 
See also [https://stackoverflow.com/questions/486995/ruby-equivalent-of-virtualenv](https://stackoverflow.com/questions/486995/ruby-equivalent-of-virtualenv).

{% include links.md %}
