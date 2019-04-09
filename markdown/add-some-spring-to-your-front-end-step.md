---

Title: ADD SOME SPRING TO YOUR FRONT-END STEP!!!

Date: 2015-12-16

---

Talk is:

[https://www.youtube.com/watch?v=FEs2jgZBaQA]{.underline}

Page performance is like black magic

To fix:

-   Set a goal

    -   \~1s page load-

    -   Speed index of less then 1k

    -   Max 200ms server responce time

-   Text your site

    -   [http://www.webpagetest.org/]{.underline}

    -   Google PageSpeed Insights

-   Slowness is generated little by little.

    -   Every un-optimised image,

    -   Every bloaty css or js library

    -   Just adds to your slugishness

-   Use your tools

    -   Grunt/gulp

        -   minimize your code!

        -   optimize your images!

-   Remove un-used CSS

    -   Bootstrap can be over kill! Most people

    -   Most projects I am on that use bootstrap have \~85% unused or
        > overwritten bootstrap code

-   UnCSS

    -   Removes unused CSS

    -   There is a grunt and gulp task to help with this.

        -   grunt-uncss

        -   gulp-uncss

-   This is great for projects using bootstrap

-   CSS Regression testing

    -   helpfull for end to end testing

    -   Tools- Will show visual percentage changed, useful during
        > optimization stages to make sure you didn't blow up all your
        > stuff

        -   PhantomJS --- Scriptable headless browser

        -   CasperJS --- Navigation scripting & caching

        -   PhantomCSS --- Screenshot and comparison library

-   Optimize Critical Path CSS

    -   Get content shown AS SOON AS POSSIBLE!!

-   Tools npm install grunt-perfbudget

    -   PageSpeedInsights CLI --- psi (with grunt pluggin)

    -   phantoms CLI (with grunt pluggin)

    -   Parker --- CSS anilytics

-   style stats
