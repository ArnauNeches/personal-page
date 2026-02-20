# Arnau Neches Vilà - Personal web page 

**Date:** 18/12/2025

In this repo you can find all the up-to-date code of my personal webpage. It will be evolving over time, even this README!
The README will serve as a third person POV of my thinking process when developing the website. With every new version, there will be a new update to this README with everything new I learnt. I still don't know how extensive will I be with these explanations, stay tuned and you'll find out! (Probably all this text will be somewhere on the personal website as well).

## Initial goal and methodology

The main goal of this project is to learn web development while I create my own personal website. This idea comes from the realization that I lack personal projects (Appart from some smaller or uni related stuff) and that when you learn the most (At least in software development, maybe not in math) is when you develop (How surprising is this? hahaha).

To achieve this and to see a cool evolution as time goes by, I will start developing the page with very simple technologies (I really mean it, the first version is going to be pure html). Every new version of the website will adopt new technologies and in the actual site you will be able to see previous versions (Or at least that's my initial idea, maybe in a few months this becomes a criptocasino; Who knows? ). 

I will also try to rely on AI as little as possible to generate code. It is undeniable that AI is a super useful tool, but I think that it should be used with boundaries if our goal is to learn (I swear not a single word on this README has been AI-generated). Of course, I will use it as a tutor to learn, but I think that I will learn much more if every (maybe some, almost-surely is enough for us P(line witten by AI)=0) line of code is written personally by me.

- One last question arises (For this initial commit at least. In general questions never finish): When will I stop developing this page? 
- One simple answer arises as well: Hopefully, NEVER!

> **TL;DR**\
My goal is to learn web development by doing this page.
I will do it in an iterative way, adopting new technologies on each version.
I'll try to use AI as little as possible to learn as much as possible.

**Date:** 26/12/2025

## Version 0:

Merry Xmas! This first version of the web-page is going to be html, nothing else. I think this early stage of the development is one of the most difficult parts because you actually have to write text hahaha. The page will be simple: A main page with three sections (Who I am, Projects, Interests) and some other individual pages such as meta-website (Where this will be written) or books. The books page will be connected with a database in the future.

I deployed. For this first version I simply used Vercel but this may change in the future. I also had to buy and configure the domain (Fortunately we learnt how DNS works at Uni hahah). 

Lastly, I reorganized the folder structure of the project.

**Date:** 29-30-31/12/2025

## Version 1:

New version, added the whole CSS. I wanted to do CSS once in my life so that I never use it again (I will eventually use it again). I only knew the basics about CSS before. Now, after +500 lines of CSS I can confidently say that I know some CSS (Stay always humble) learning about grid and flexbox was kind of interesting. Now I think that I won't adopt Tailwind after this (There is no point on changing the whole html). 

**Date:** 13/1/2026

## Version 2:
Didn't I say that I wasn't gonna do any Tailwind? Well, here we are, webpage completely migrated into TailwindCSS. At first, I thought it was gonna be tricky, but to be fair it just took me a day to learn and to change everything. I watched a youtube tutorial and after that jumped into changing everything (Again using AI as little as possible). I also had to learn how to properly install Tailwind and what package.json is.

Soooo, you may be now wondering, what is my opinion about TailwindCSS? And my answer: I prefer it over css. 
However, I dislike the way html becomes noisy (Too verbose). I can also understand why llms use it so much and the benefits of this.

Finally, what will next version be you may be wondering. Well, of course it is gonna be: Vanilla JS. No framework until I understand most of it. You are now getting what all of this is about. I am going to start rendering cards without having a database, from plain json files (Reinventing the wheel ts). This brings us to: mini-db project.

See you on the next entry!!

**Date:** 19/1/2026

## Version 3:
Okey after two days of work, JS is done! My plan was to transition to React after this. However, I think this website
is too static to use React (Will this be as the time I said no Tailwind migration?).

A brief summary of the main features I added with JavaScript: Books list and projects list are now rendered instead of hardcoded into the HTML (However, they are rendered from jsons and not from a proper DB. For that I first need to learn backend). The footer is also rendered as it was the same in all pages.
I added a very cool book search feature! Also dark and light mode which took me a while because most information was for Tailwind V3 not V4 and I didn't want to add dark: class all the time. The suggestions book form now works! (In localStorage, again I still haven't learnt backend). Finally, the videos aren't loaded immediately but only when clicked.

What will next version be? I don't know yet. As I wrote before, my initial plan was React but maybe I directly create a small backend for the page. Stay tuned and you will know!

## Version 4:
Short version, just got rid of the jsons to store projects and books and moved to supaBase. I could have done a proper backend with fastAPI or something similar but since I only needed two SELECT and one INSERT that would have been too much overhead. Now the books suggestion's form works so feel free to suggest!

Probably the next version is going to take much longer since I will make the page from the beginning with Next.js and the semester is about to start (I have lots of things to do hahah).