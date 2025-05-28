function includeHTML(){
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
   
}

function title(){
    let songs = [
        `"A Melody To Break The Curse" by RainbowDragonEyes`,
        `"On the Beach at Night" by Curtis Schweitzer`,
        
        ]
    
    let song = songs[Math.floor(Math.random() * songs.length)];
    
    let randNum = (Math.random() * 10000000000000000);
    
    let names = new Array ();
    
    //let batterystaple = import {CorrectHorseBatteryStaple} from "https://www.correcthorsebatterystaple.net/js/main.js?1595924535951";
    let xX = "xX";

    names[0] = [
        
    "MinceRaft",
    "New and improved!",
    "I like trains",
    "I patched like 50 bugs",
    "Title.exe has stopped responding",
    "Do your homework",
    "Also try Creative Coding Class",
    "Hello Mrs. Revoir!",
    "You killed my father, prepare to die",
    "No, I am your father",
    "Luke, I am your father",
    "Now with 257 rgb values per channel!",
    "Pie flavor",
    "Help I'm trapped inside a website title!",
    "Also try Terraria",
    "Mining all day",
    "4672 Upvotes",
    "Never Gonna Give You Up",
    "5G networking",
    "You're not the pizza deliveery guy!",
    "Nani?!? (I don't watch anime)",
    "Nani!?!",
    "Actual size!",
    "50% off until March 5th",
    "Cheeseburger",
    "Hey steven! What have you done? *explodes*",
    "Feat. Bruno Mars",
    "Feat. Will Smith",
    "Java the Hutt",
    "Batman, worlds greatest detective",
    "nana nana nana nana Batman!",
    "Bapanada",
    "Shaw",
    song,
    "Interdimensional",
    "Fighting for justice",
    "Shamefully small parts",
    "for ages 1-92",
    "Serving the industrial needs of industry for over 50 years",
    "not suitable.",
    "Play that one about falling down the stairs",
    "proteced protecting protectors",
    randNum,
    "We have the high ground!",
    "Imaginational services",
    "alt-F4 is a lie",
    "Throw the cheeeeese!",
    "Don't get apendicitus",
    "Made in china",
    "Inconceivable!",
    "PERRY the platypus?",
    "Over 25 alphabetical letters",
    "Ctrl C . . . Ctrl V",
    "Move fast and break things",
    "Not so fast!",
    "Zeplin o' clock",
    "Also try xkcd",
    "poppycock!",
    "indubitably",
    "We broke even!",
    "No llama no!",
    "Now with CSS",
    "Now with JavaScript",
    "Now with HTML",
    "Are you suggesting that coconuts migrate?",
    "Ni",
    "Nunchuck skills",
    "I'm 37 I'm not old",
    "Ludicrous amounts of semicolons ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "based in Utah",
    "Hi hello I'm still a piece of garbage.",
    "Unrelatable anectodes",
    "Somebody once told me",
    "Who parked their car, On my sandwich!",
    "Fanageling my way to victory",
    "Binary, Trinary, and other numbers",
    "#Relatable",
    "look up #region and #endregion",
    "the power of true love!!!",
    "PoopDie",
    "Honey why is the baby on fire?",
    "Nikola Tesla",
    "Never endorsed by Joe Biden!",
    "Proud sponser of corrupt politicians",
    "Sir Robin ran away!",
    "Just like a story book story",
    "Good heavens!",
    "Why are there all these llamas at the football stadium!",
    "Bigger on the inside",
    "Why are you looking for clothes at the soup store!",
    "<p> tags for everyone",
    "sponsered by squarespace",
    "you've got too many legs",
    "without windows 11",
    "baked beans",
    "surely you aren't serious",
    "I am serious, and don't call me surely",
    "With advanced darkness",
    "patent pending",
    "join the club",
    "Mine fields ahead",
    "fresh cooked ramen noodles",
    "Olive Garden has great breadsticks",
    "Breathtaking graphics",
    "Code red!",
    "Demonitator",
    "More cheese than Lasagna",
    "Thousands of NFTs",
    "Recreational",
    "Continental breakfast",
    "Blue Shell!",
    "eviscoration",
    "The Photoviscorator is op",
    "Give me a red pen of any color",
    "Oxymoronical",
    "Paradoxical",
    "Take Laxatives",
    "Oh my goodness gracious!",
    "saddly he pooped himself to death on the way to the bathroom",
    "I give you air from my lungs",
    "I never explain anything!",
    "Neil DeGrass eating Bison",
    "audio only silent subtitle films",
    "get me an everything burger",
    "No YOU'RE getting mugged",
    "Saxophone",
    "Real Estate",
    "I missed the part where that's my problem",
    "Fancy meeting you here",
    "What a coincidence!",
    ":)",
    ";(",
    "fragrant spices",
    "Trigonometrical",
    "Course, ruff, and ear in tainting",
    "Peppermint flavour",
    "Dwayne The Rock Johnson",
    "Alexander the great; now Alexander the dead",
    "Check out Bill Wurtz",
    "Play Hollow Knight",
    "Saber Ballistic",
    "Footnotes not included*",
    "Don't do drugs kids",
    "Forget it Intersection",
    "Dog Ladman",
    "Cornfalkes",
    "Not The Bees!",
    "Senendipitinuity",
    "Boof should be a word",
    "Serated edges",
    "Bagel",
    "99 bottles of beer",
    "with Adam Savage",
    "and Jamie Hyneman",
    "between them more than 30 years of special effects experience",
    "they don't just tell the myths",
    "they put them to the test",
    "Lasagna is SSS tier",
    "Fridays are awesome",
    "This is important! I need to tell you that Obamas last name is actually Obama",
    "So many way to play",
    "Arbie's, where the good stuff is",
    "Periodical earthquakes",
    "Maybe you should move to Alaska",
    "Sandwich shop",
    "More than a dream",
    "Stop it, get some help",
    "Tom Brady is my favorite baseball player",
    "Solar Eclipses are cool",
    "The most politically incorrect website there is!",
    "The most politically correct website there is!",
    "Life doesn't give you seatbelts",
    "2/10, too many titles",
    "where's my super suit!",
    "<title>Meta title</title>",
    "Sleep earlier",
    "Wrong Lever!",
    "Why do I even have that lever?",
    "Ok why does she even have that lever?",
    "Oh yeah it's all coming together",
    "Whose Idea was this?",
    "Bill nye the science guy! Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill, Bill,",
    "Je suis un petat",
    "Don't do swears",
    "I just want to make toast",
    "Villager news",
    "adsfghjkl;'",
    "Pie charts for everyone",
    "All American Asterisks",
    `Searching "*" into Google gives no results`,
    "Diamond sword",
    "How Quaint!",
    "Pish Posh",
    "Egad!",
    "And never ever eat pears!",
    "I don't want to go",
    "Mesopotamian",
    "www.companyname.website",
    "Not sponsered by squarespace",
    "Beep Bloop Bop",
    "Play Starbound I dare you!",
    "You won't beleive!",
    "Shampoo not included",
    "This website is not legal on airplanes",
    "Speak American Qualski!",
    "9:27!",
    "You feel an evil presence watching you ...",
    "You feel vibrations from deep below ...",
    "Screams echo from the dungeon ...",
    "This is going to be a terrible night ...",
    "Impending doom approaches ...",
    "Moon Lord has awoken!",
    "In colaboration with Tayson Herbert!",
    "I can't focus",
    "Look at all those chickens!",
    "Never invade russia durring the winter",
    "You've fallen for one of the classic blunders!",
    "Blanchin Straight to France",
    "Is it a rock or a face?",
    "Don't you dare close your eyes",
    "Websiting Since 13,000,000,000 BCE",
    "It's Over 9000!",
    "This is somewhat of a website itself",
    "100% Crowdsourced!",
    "Now with all the best musical Chords",
    "Follow us on social media",
    "AI generation!",
    "I don't trust the banker man Owen.",
    "525,500 minutes in the making",
    "Also try JohnLindquist.com",
    "Where's waldo?",
    "Boom Shakala",
    "Talk to Erik from tech support",
    "Has anyone seen my turtle? It ran away",
    "You underestimate my sneakiness",
    "Curiosity killed the cat",
    "Curiosity killed the climate",
    "Check out this cool website!",
    `Our company policy is: "screw cancer!" `,
    "Now arriving in Los Angeles",
    "Think only SUIT",
    "Love Max supreme",
    "Laggiest lag in the west",
    "59 different flavors",
    "Cut all the grass",
    "Government not supported!",
    "Jerald the Herald",
    "His gravy was taken?",
    "PHP is dumb",
    "Critical Hit",
    "Level up",
    "Do you have a pencil?",
    "Break the laws",
    "Taste the victory!",
    "Explosions are cool",
    "Made with real Idaho potatos",
    "Die potato",
    "Find us on Doordash",
    "Ninja skills",
    "Don't let the sands of time seep into your shorts",
    "Top 1 website since never",
    "Tip: Cacti are pokey",
    "Tip: Cold water can kill you",
    "Tip: Don't eat innedible materials",
    "Tip: Pay taxes",
    "Tip: Pay your bills",
    "Imported from Sri Lanka",
    "Vaccinated in the last 30 days",
    "Also try C#",
    "Lazers included",
    "Cosmic warfare",
    "Nuclear warfare",
    "Medieval warfare",
    "Not approved by pharmacies",
    "Certified by Pharmacies",
    "Now in Infdev",
    "Sign up to view ad-free",
    "No ads!",
    "With a very high skill ceiling",
    "from June 'til May",
    "Coming to Theaters",
    "In theaters now!",
    "Tricks are for kids",
    "Unlimited double jumps",
    "Tear down the walls",
    "jump up the walls",
    "jump off the walls",
    "The statue got me high",
    "The statue got me down",
    "This is something else",
    "Divine",
    "Scrumptious",
    "Magical",
    "With chocolate filling!",
    "Slower than 90% of snails",
    "Fastest in the west",
    "Slowest in the west",
    "Flamethrowers",
    "Gatling guns",
    "Eat your peas",
    "Sweet pea",
    "Run away!",
    "Drink some water",
    "Eat some cookies",
    "Easier than cake",
    "Easier than pie",
    "Parade floats, booleans, and integers",
    "New record!",
    "What fate a knight",
    "Reinstalling driver...",
    "Everything said",
    "Clean your room",
    "Brush your teeth",
    "100 points",
    "Hello, so forth and etc.",
    "Track pad compatibility",
    "D-pad compatibility",
    "ABCDEFG and whatnot",
    "Celestial powers",
    "Supported by .EDUs",
    "Great Deals",
    "Great bargains",
    "super angry mode",
    "What is this?",
    "That checks out",
    "Thousands of different options",
    "choice overload!",
    "CGI explosions",
    "Directed by Micheal Bay",
    "Minimalistic graphics",
    "now with rtx",
    "Go play Minecraft",
    "You'll never take me alive!",
    "Sage advice",
    "Termites everywhere!",
    "How dare you?",
    "How DARE you?",
    "save the whales",
    "Ctrl Z!",
    "Sneak attack!",
    "World famous sauces",
    "Bond, James Bond",
    "Balloons!",
    "Where do they come from?",
    "Correct horse battery staple",
    "Aggresive bagpipes",
    "You can commit crimes if you want to",
    "A whole new world",
    "Splendid",
    "Chairs are meant for sitting",
    "Now with cookies",
    "Definitely not tracking your data",
    "For petes sake!",
    "Definitely tracking your data",
    "For Freedom!",
    "Greased fries",
    "Sega",
    "protect the children",
    "educate the children",
    "brainwash the children",
    "give candy to the children",
    "pre-baked prefabs",
    "C# > JS",
    "C# < JS",
    "zyxwvutxrqpomnlkjihgfedcba",
    "Now in the frozen breakfast isle",
    "Incorrect horse battery staple",
    "Steal some cookies",
    "make some pancakes",
    "perfect angles",
    "mostly correct measurements",
    "completely correct measurments",
    "100% incorrect measurements",
    "turkey baster",
    "OH NO!",
    "<><><><><><><><><><><><><><><><>",
    "yuiop",
    "Micro$oft",
    "Proud sponser of nothing!",
    "Fly you fools",
    "Ding Wacka Ding Dong",
    "No, because I work at the muffin factory",
    "dexterity!",
    "Ropes are for losers",
    "Being smart is for idiots",
    "Don't die, and enjoy yourself",
    "X",
    "xXcoolGuyXx",
    xX,
    "567 567 567",
    "1 1 2 3 5 8 13 21 34 55 89 etc.",
    "Older than a boulder",
    "Every single time!",
    "very swauve",
    "very classy",
    "very stylish",
    "exterminate!",
    "very posh",
    "very interesting",
    "very exciting",
    "break down the walls",
    "when in doubt, C4",
    "when in doubt, C5",
    "when in doubt . . .",
    "$o many$dol$ar$ s$gns!$$ $ $$$$",
    "Hyper Typer",
    "Salt!",
    "Don't cross the streams",
    "Perhaps . . . .",
    "Perhaps Not . . . .",
    "Perhapsn't . . . .",
    "Yesn't",
    "Try geometry dash",
    "geometric",
    "lost in space",
    "space attack!",
    "undefined",
    ]
    
    names[1] = [
    "Are we there yet?", // The ones that Scooter did
    "Ba ba ba ba ba where the good stuff is!",
    "Suddenly Pineapple",
    "Since 2022!",
    "I love it!",
    "Some idiot stole my credit card",
    "Three, three Manhattans, Ha, Ha, Ha",
    "Chancellor, sith lords are our specialty",
    "Hold on, this whole operation was your idea",
    "Micheal Jordan is my favorite baseball player",
    "You can never have enough maps!",
    "No, you not so fast!",
    "Desmond the moon bear.",
    "Play Zelda: breath of the wild",
    "You're welcome",
    "may the forks be with you",
    "We're looking at sea otters",
    "I am your sandwich",
    "John F. Kennedy's initials spell out KFC",
    "When life gives you lemons...",
    "Get mad! I don't want you're darn lemons!",
    //"The 6 W's: Walrus, Wednesday, Website, Wonky, Wall, and Why ",
    "Y is a vowel",
    "Micheal here",
    "Leave some for me!",
    "May your forehead grow like the mighty oak",
    "Normal view, Normal view, Normal view",
    "JOOOOOOOOOOOOOOOOOOOOOOOOOOHN CENA! BA BA BA BUM BA BA BA BUM...",
    "I found Waldo",
    "What's the apple without the pie?",
    "What is the french without the fry?",
    "It's like peas in a pod without... the peas",
    //"Tip: if you don't want to be trapped in the underworld forever don't eat pomegranates",
    
    ]
    
    names[2] = [
    "Disney Presents:",     //The ones that Tayson did
    "I'm the flash",
    //"He hated that he loved what she hated about hate.",
    //"Red is greener than purple, for sure.",
    //"I rolled around my dog in Church because I'm really not on drugs!",
    "I'm NOT crazy.",
    //"I licked a gangster",
    //"I karate chopped my neighbour",
    //"I ran over a noodle",
    "Sausages.",
    //"I did the Macarena with a ninja",
    //"I yelled at a pickle",
    //"I had lunch with a football",
    //"I karate chopped a llama",
    "Cattywampus",
    "Bumfuzzle",
    `You’re killing me, Smalls`,
    `You’ll shoot your eye out, kid`,
    //`Eat my shorts`,
    `Keep the change, ya filthy animal`,
    `Did I stutter`,
    //`It’s not a man purse. It’s called a satchel`,
    `I am Iron Man`,
    `Sir, I’m going to have to ask you to exit the donut`,
    `I can do this all day`,
    //`Doth mother know you weareth her drapes`,
    `You get hurt, hurt ’em back. You get killed… walk it off`,
    `We know each other! He’s a friend from work`,
    `How it feels to chew Five gum`,
    "gfdbsjyhxgfjdhgfjxzhfgxjhf",
    "Stimulate your senses",
    "everybody do the flop",
    //`input spider-man meme here`,
    `no this is patrick`,
    ]
    
    xX = "xX" + names[0][Math.floor(Math.random() * names[0].length)] + "Xx";
    names[0][387] = xX;
    
    let contributors = ["me", "my brother", "Tayson"]
    
    lengthTotal = 0;
    for(let i = 0; i < names.length; i++){
        lengthTotal += names[i].length;
    }
    
    let number = Math.floor(Math.random() * lengthTotal);
    
    let displayNumber = number;
    
    let arrayOn = 0;
    
    for(let i = 0; i < names.length; i++){
        if(number > names[i].length){
            arrayOn++;
            number -= names[i].length;
        } else {
            i = names.length + 1;
        }
    }
    
    let views = Number.parseInt(getCookie("views"));
   
    if(typeof(views) != "number"){
        views = 1;
    }
    
    if(!Number.isFinite(views)){
        views = 1;
    }
    
    setCookie("views", views + 1, 90);


    let viewed = getCookie("viewed");
    if(viewed == ""){

    }

    let index = ((36 * number) + arrayOn).toString(36);
    
    if(!viewed.includes(index)){
    viewed = viewed + index + ".";
    }
    
    

    
    setCookie("viewed", viewed, 90);
    
    viewedDisplay = 0;
    
    for (let i = 0; i < viewed.length; i++) {
    if (viewed.charAt(i) == ".") {
        viewedDisplay++;
    }
    }
      if(document.getElementById("title-info") != null){
          document.getElementById("title-info").innerHTML = 
          "Viewing title number: " + displayNumber + " of " + lengthTotal + 
          ", title made by " + contributors[arrayOn] + 
          " (Refresh to see a new one). You've viewed this website " + views + " times, " +
          " and seen " + viewedDisplay + " out of " + lengthTotal + " titles. " +
          "I use cookies to track how many titles you have viewed, that's all they do. ";
       }

    document.getElementById("title").innerHTML = "Juxtacity : " + names[arrayOn][number];

}

function openSesame(){
    setCookie("viewed", ".................................................", 90);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function padding(){
     let padding = window.innerWidth / 10;
    const body = document.getElementById("body");
    body.setAttribute(
        "style", "padding-left:" + padding
        +"; padding-right:" + padding
    );
}

function setNavbarColor(color){
  //change the css variables: --navbar1, --navbar2, --navbar3
  document.documentElement.style.setProperty('--navbar1',"var(--"+ color +"1)");
  document.documentElement.style.setProperty('--navbar2',"var(--"+ color +"2)");
  document.documentElement.style.setProperty('--navbar3',"var(--"+ color +"3)");
}