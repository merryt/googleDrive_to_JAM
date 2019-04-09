\-\--

Title: PEBBLE ROCKS BOULDER

Date: 2015-9-5

Author: Tyler

\-\--

The first night of the pebble hackathon comes to an end. Viget and
pebble are hosing a great event with tons of food, free swag, and really
smart people. Learning about the pebble smart strap interface proved to
be interesting. This is my first hands on experience with the pebble
watch, and I find it is a really good life style fit for me compared to
my apple watch. Battery life, ux, and an always on screen are pretty
huge in my book. Lack of touch screen was rough at first, but I do love
not cleaning my watch face every 30 minutes. There is a ton of potential
for cool accessories with the smart strap, so I am excited to see what
the weekend yields.

After much laughter and discussion we have come up with the idea of
building a hiking and survival accessory that takes advantage of the
pebbles awesome battery life. As it currently stands our project will be
built using the pebble smart strap port on the back of the watch and go
to a arduino/lillypad/tinzy. There will be several small support
features, but the core functionality will be sending an emergency
destress signal via radio frequency. God willing all of this will fit
into a paracord strap and not be to large\... If everything goes wrong
we will 3d print an arduino case and strap that to your wrist.

Our favorite idea that didn\'t make the cut was controlling a rumba with
the accelerometer in your watch to chase yippy dogs around your living
room. Next time\...

At the end of the first day we have no code, an outline of tasks each
person will tackle and two logo ideas\...

Day two started out bright and early, we broke our project into three
sections. Our pebble app section fell 80% in place by 1:30pm when we
finally got around to breaking for lunch, but the Arduino and smartstrap
sections of the app turned into a little bit less speedy. Our app uses
the GPS from the phone (pebblejs), pebble smartstrap(c), and a serial
connection to the Arduono. It took quite a bit of time to get on the
latest Pebble version and release candidate which contains all the
goodies to use the smart strap, because of this we worked mostly off
CloudPebble, and tested on the one device. CloudPebble works pretty
smoothly, but the overhead of switching pebble versions, and release
candidates was a bit much. The developer environment we used for testing
and most of the major development not only crashed, it caused the whole
machine to lock up.

We overcome a large portion of these challenges and are ending the night
with a smartwatch on a paracord strap with a firestarter buckle. We have
the hardware built for both our testing(Arduino) and
production-ish(Teensy) environments. We are sending data from the watch
to a computer completely free of cell phone service. We are getting GPS
data from the phone, but struggling to get it all the way to the watch
to send out in our UHF stream to satellites. We have several
marketing/video type things built to help our presentation and
explanation along.

Day two impressions: I still like pebble watch, but I am now realizing
the constant pinging of the phone to location services is doing a number
on my phone battery. Tomorrow I will try a static location. The pebble
SDK is a bit rough around the edges since you can\'t write in C or JS,
you will probably need to switch between. Mike has been dealing with a
lot of the difficulties there, and it looks like quite a nightmare. The
team of Scott Owen, [[Eric
Starling]{.underline}](http://ericstarling.com/), and Mike Cassano are
really doing a great job with the real work as I draw pretty pictures,
write on post-its, and beat all the Tetris records on Mikes RetroPie.

Recap:

Pebble Rocks Boulder has come to an end, the final day started with an
some awesome dev work by Mike Cassano to finish up the couple
outstanding code problems, and Eric Starling finishing up the
presentation. The final bit of work turned out to be less stressful then
expected, since most of our stretch goals we just dropped at the very
beginning.

We had an awesome time talking to all the other teams about their
[[projects]{.underline}](https://www.hackster.io/hackathons/pebble-rocks-boulder/a-pebble-hackathon/projects).
As always it was tons of fun to speak to the judges and other teams
about our
[[project]{.underline}](https://www.hackster.io/team-universal-mind/survival-strap).
In the end we received the award for \"most popular\" and \"most
technically impressive.\"

All in all, it was a great event by Viget, Pebble, and Galvanize. I look
forward to the next one!
