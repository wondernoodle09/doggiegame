 //calendar

    var fullness = 5
    var tummyhealth = 5
    var energy = 5
    var groom = 5
    var happy = 5
    var destrest = 5
    var social = 5

    var alpha = 0
    var goodboy = 0
    var athlete = 0
    var bond = 0
    var friends = 0
    var fleas = false

    var items = [];
    const itemwords = [];
    var dialogue = [];
    var counter = 0;
    var currentitem

    var handlerCopy


    $('#text').css({'width':'auto','height':'auto','display':'table'})
    var date = new Date("Jul 1 2021")
    var datenum = date.getDate();
    const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var weekdaynum = date.getDay()
    var day = weekday[weekdaynum];

    document.getElementById("date").innerHTML = day + ", July " + datenum

    function advanceDay() {
        if (weekdaynum < 6) {
            weekdaynum = 0

        } else {
            day = day + 1
        }
        date.setDate(date.getDate() + 1);
        datenum = datenum + 1
        day = weekday[date.getDay()]
        document.getElementById("date").innerHTML = day + ", July " + datenum
        createCalendar(calendar, 2021, 7);
    }

    function createCalendar(elem, year, month) {

      let mon = month - 1; // months in JS are 0..11, not 1..12
      let d = new Date(year, mon);

      let table = '<table><tr><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th></tr><tr>';

      // spaces for the first row
      // from Monday till the first day of the month
      // * * * 1  2  3  4
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // <td> with actual dates
      for (let i = 0; i < 31; i++) {
        if (datenum == i+1) {
            table += '<td id="currentdate">' + d.getDate() + '</td>';
        } else {
            table += '<td>' + d.getDate() + '</td>';  
        }

        if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      // add spaces after last days of month for the last row
      // 29 30 31 * * * *
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      // close the table
      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
      let day = date.getDay();
      return day;
    }

    createCalendar(calendar, 2021, 7);
//game



    var hoveraudio = $("#hovernoise")[0];
    $(".keyitem, .arrow, .button, #nextbutton, .itemdisplay").mouseover(function() {
    hoveraudio.play();
    });

    var clickaudio = $("#clicknoise")[0];
    $(".keyitem, .arrow, .button, #nextbutton").click(function() {
    clickaudio.play();
    });


    var dogname = localStorage.getItem("chosendog");
    var currentroom

    
//house
    

    document.getElementById("pet").src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/images/" + dogname + ".png";

    document.getElementById("downarrow").addEventListener("click", determineRoomDown);

    document.getElementById("leftarrow").addEventListener("click", determineRoomLeft);

    document.getElementById("rightarrow").addEventListener("click", determineRoomRight);

    document.getElementById("uparrow").addEventListener("click", determineRoomUp);

    function determineRoomDown() {
        switch(currentroom) {
            case "kitchen":
            currentroom = "livingroom"
            document.getElementById("downtext").innerHTML = "to kitchen"
            document.getElementById("uptext").innerHTML = "to backyard"
            document.getElementById("lefttext").innerHTML = "to hallway"
            document.getElementById("righttext").innerHTML = "";
            document.getElementById("uparrow").style.display = "block";
            document.getElementById("leftarrow").style.display = "block";
            document.getElementById("rightarrow").style.display = "none";
            document.getElementById("kitchenstuff").style.display = "none";
            document.getElementById("livingroomstuff").style.display = "block";
            var pet = document.getElementById('pet');
            pet.style.right = 420 +'px';
            pet.style.bottom = 175 +'px';
            break;

            case "livingroom":
            currentroom = "kitchen"
            document.getElementById("downtext").innerHTML = "to living room"
            document.getElementById("righttext").innerHTML = "to front door"
            document.getElementById("uptext").innerHTML = ""
            document.getElementById("lefttext").innerHTML = ""
             document.getElementById("leftarrow").style.display = "none";
            document.getElementById("uparrow").style.display = "none";
            document.getElementById("rightarrow").style.display = "block";
            document.getElementById("kitchenstuff").style.display = "block";
            document.getElementById("livingroomstuff").style.display = "none";
            var pet = document.getElementById('pet');
            pet.style.right = 700 +'px';
            pet.style.bottom = 300 +'px';
            break;

            case "backyard":
            currentroom = "livingroom"
            document.getElementById("downtext").innerHTML = "to kitchen"
            document.getElementById("uptext").innerHTML = "to backyard"
            document.getElementById("lefttext").innerHTML = "to hallway"
            document.getElementById("righttext").innerHTML = ""
            document.getElementById("rightarrow").style.display = "none";
            document.getElementById("uparrow").style.display = "block";
            document.getElementById("leftarrow").style.display = "block";
            document.getElementById("backyardstuff").style.display = "none";
            document.getElementById("livingroomstuff").style.display = "block";
            break;

            case "outsideofhouse":
            //to world
            break;
        };
        frame.style.backgroundImage="url('/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/scenes/" + currentroom + ".jpeg')";
    };

    function determineRoomRight() {
        switch(currentroom) {
           case "kitchen":
            currentroom = "outsideofhouse"
            document.getElementById("uptext").innerHTML = "to kitchen"
            document.getElementById("righttext").innerHTML = ""
            document.getElementById("downtext").innerHTML = "to world"
            document.getElementById("lefttext").innerHTML = ""
            document.getElementById("rightarrow").style.display = "none";
            document.getElementById("uparrow").style.display = "block";
            document.getElementById("kitchenstuff").style.display = "none";
            document.getElementById("outsideofhousestuff").style.display = "block";
            var pet = document.getElementById('pet');
            pet.style.right = 400 +'px';
            pet.style.bottom = 160 +'px';
            pet.style.width = '50px';
            break;

            case "hallway":
            currentroom = "bedroom"
            document.getElementById("lefttext").innerHTML = "to hallway"
            document.getElementById("righttext").innerHTML = ""
            document.getElementById("uptext").innerHTML = ""
            document.getElementById("downtext").innerHTML = ""
            document.getElementById("uparrow").style.display = "none";
            document.getElementById("rightarrow").style.display = "none";
            document.getElementById("bedroomstuff").style.display = "block";
            document.getElementById("hallwaystuff").style.display = "none";
            var pet = document.getElementById('pet');
                pet.style.right = 1000 +'px';
                pet.style.bottom = 250 +'px';
                pet.style.width = 70 + 'px';
            break;

            case "bathroom":
            currentroom = "hallway"
            document.getElementById("downtext").innerHTML = ""
            document.getElementById("righttext").innerHTML = "to bedroom"
            document.getElementById("uptext").innerHTML = "to living room"
            document.getElementById("lefttext").innerHTML = "to bathroom"
            document.getElementById("uparrow").style.display = "block";
            document.getElementById("leftarrow").style.display = "block";
            document.getElementById("bathroomstuff").style.display = "none";
            document.getElementById("hallwaystuff").style.display = "block";

            var pet = document.getElementById('pet');
            pet.style.right = 675 +'px';
            pet.style.bottom = 175 +'px';
            pet.style.width = 100 + 'px';
            break;
        }
        frame.style.backgroundImage="url('/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/scenes/" + currentroom + ".jpeg')";
    }

    function determineRoomUp() {
        switch(currentroom) {

            case "livingroom":
                currentroom = "backyard"
                document.getElementById("downtext").innerHTML = "to living room"
                document.getElementById("righttext").innerHTML = ""
                document.getElementById("lefttext").innerHTML = ""
                document.getElementById("uptext").innerHTML = ""
                document.getElementById("uparrow").style.display = "none";
                document.getElementById("leftarrow").style.display = "none";
                document.getElementById("backyardstuff").style.display = "block";
                document.getElementById("livingroomstuff").style.display = "none";
            break;

            case "hallway":
                currentroom = "livingroom"
                document.getElementById("downtext").innerHTML = "to kitchen"
            document.getElementById("uptext").innerHTML = "to backyard"
            document.getElementById("lefttext").innerHTML = "to hallway"
            document.getElementById("righttext").innerHTML = ""
            document.getElementById("downarrow").style.display = "block";
            document.getElementById("rightarrow").style.display = "none";
            document.getElementById("hallwaystuff").style.display = "none";
            document.getElementById("livingroomstuff").style.display = "block";
            var pet = document.getElementById('pet');
            pet.style.right = 450 +'px';
            pet.style.bottom = 175 +'px';
            break;

            case "outsideofhouse":
                currentroom = "kitchen"
                document.getElementById("downtext").innerHTML = "to living room"
            document.getElementById("righttext").innerHTML = "to front door"
            document.getElementById("uptext").innerHTML = ""
            document.getElementById("lefttext").innerHTML = ""
            document.getElementById("rightarrow").style.display = "block";
            document.getElementById("uparrow").style.display = "none";
            document.getElementById("leftarrow").style.display = "none";
            document.getElementById("kitchenstuff").style.display = "block";
            document.getElementById("outsideofhousestuff").style.display = "none";
            var pet = document.getElementById('pet');
            pet.style.right = 700 +'px';
            pet.style.bottom = 300 +'px';
            pet.style.width = 100 + 'px';

            break; 
        }
        frame.style.backgroundImage="url('/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/scenes/" + currentroom + ".jpeg')";
    }

    function determineRoomLeft() {
        switch(currentroom) {

            case "livingroom":
                currentroom = "hallway"
                document.getElementById("lefttext").innerHTML = "to bathroom"
                document.getElementById("righttext").innerHTML = "to bedroom"
                document.getElementById("uptext").innerHTML = "to living room"
                document.getElementById("downtext").innerHTML = ""
                document.getElementById("rightarrow").style.display = "block";
                document.getElementById("downarrow").style.display = "none";
                document.getElementById("hallwaystuff").style.display = "block";
                document.getElementById("livingroomstuff").style.display = "none";
                var pet = document.getElementById('pet');
                pet.style.right = 675 +'px';
                pet.style.bottom = 175 +'px';
            
            break;

            case "hallway":
                currentroom = "bathroom"
                document.getElementById("righttext").innerHTML = "to hallway"
                document.getElementById("lefttext").innerHTML = ""
                document.getElementById("uptext").innerHTML = ""
                document.getElementById("downtext").innerHTML = ""
                document.getElementById("leftarrow").style.display = "none";
                document.getElementById("uparrow").style.display = "none";
                document.getElementById("bathroomstuff").style.display = "block";
                document.getElementById("hallwaystuff").style.display = "none";
            break;

            case "bedroom":
                currentroom = "hallway"
                document.getElementById("lefttext").innerHTML = "to bathroom"
                document.getElementById("righttext").innerHTML = "to bedroom"
                document.getElementById("uptext").innerHTML = "to living room"
                document.getElementById("downtext").innerHTML = ""
                document.getElementById("uparrow").style.display = "block";
                document.getElementById("rightarrow").style.display = "block";
                document.getElementById("downarrow").style.display = "none";
                document.getElementById("bedroomstuff").style.display = "none";
                document.getElementById("hallwaystuff").style.display = "block";
                var pet = document.getElementById('pet');
                pet.style.right = 675 +'px';
                pet.style.bottom = 175 +'px';
                pet.style.width = 100 + 'px';

            break;
        }
        frame.style.backgroundImage="url('/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/scenes/" + currentroom + ".jpeg')";
    }

    // independent activities

    $(document).ready(function() {
        morningScreen();
    });

    function morningScreen() {
        document.getElementById("pet").style.display = "none";
        document.getElementById("crumbs").style.display = "none";
        document.getElementById("rightarrow").style.display = "none";
        document.getElementById("downarrow").style.display = "none";
        var randnum = Math.floor(Math.random()*5)
        var nextbutton = document.getElementById("nextbutton")
        nextbutton.style.display = "block"
        document.getElementById("text").innerHTML = "Today is " + day + ", " + "July " + datenum + "."
        document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
        currentroom = "sky" + randnum;
        frame.style.backgroundImage="url('/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/scenes/" + currentroom + ".jpeg')";
        document.getElementById("nextbutton").addEventListener("click", firstHome);
    }

    function firstHome() {
        currentroom = "kitchen"
        document.getElementById("nextbutton").removeEventListener("click", firstHome);
        frame.style.backgroundImage="url('/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/scenes/" + currentroom + ".jpeg')";
        document.getElementById("text").innerHTML = "What should " + dogname + " do today?"
        document.getElementById("nextbutton").style.display = "none"
        document.getElementById("pet").style.display = "block";
        document.getElementById("crumbs").style.display = "block";
        document.getElementById("rightarrow").style.display = "block";
        document.getElementById("downarrow").style.display = "block";
    }

    function advanceText(dial) {

        var menukey = "menu:"
        var currentstring = dial[counter];


        if (counter == dial.length && currentstring == undefined) {
            document.getElementById("nextbutton").removeEventListener("click", handlerCopy, true);
            ownerHome();
           
        } else if ((currentstring.includes("menu:")) == true) {
            document.getElementById("text").innerHTML = currentstring.slice(0, currentstring.indexOf(menukey))
            document.getElementById("yesbutton").style.display = "block"
            document.getElementById("nobutton").style.display = "block"
            var menukey = "menu:"
        
            var yesbutwords = currentstring.substring(currentstring.indexOf(menukey)+ menukey.length,
                dial[counter].lastIndexOf("menu2:"));

            document.getElementById("yesbutton").innerHTML = yesbutwords;

            var menu2key = "menu2:"
            var nobutwords = currentstring.substring(currentstring.indexOf(menu2key) + menu2key.length,
                dial[counter].lastIndexOf("menuclose"));
            document.getElementById("nobutton").innerHTML = nobutwords;
            document.getElementById("yesbutton").addEventListener("click", returnDialogue);
            document.getElementById("nobutton").addEventListener("click", returnDialogue);

           
        } else if ((currentstring.includes("photo:")) == true) {
            var photoclose = "photoclose"
            document.getElementById("text").innerHTML = currentstring.slice(currentstring.indexOf("photoclose") + photoclose.length , currentstring.length);
            var photo = "photo:"
            currentitem = currentstring.slice(currentstring.indexOf("photo:") + photo.length , currentstring.indexOf("photoclose"))
            document.getElementById("item").src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/images/" + currentitem + ".png"
            document.getElementById("item").style.display = "block";
            document.getElementById("itembox").style.display = "block";

        } else if ((currentstring.includes("photogone"))){
            var photogone = "photogone"

            document.getElementById("item").style.display = "none";
            document.getElementById("itembox").style.display = "none";
            document.getElementById("text").innerHTML = currentstring.slice(currentstring.indexOf("photogone") + photogone.length, currentstring.length);

        } else if ((currentstring.includes("photoslide"))) {
            var photoslide = "photoslide"
            document.getElementById("text").innerHTML = currentstring.slice(currentstring.indexOf("photoslide") + photoslide.length, currentstring.length);
            moveItem();


        } else if ((currentstring.includes("colortext:"))) {
            var colortext = "colortext:"
            document.getElementById("text").innerHTML = currentstring.slice(currentstring.indexOf("colortext:") + colortext.length, currentstring.length);
            document.getElementById("text").classList.add("coloredtext");


        } else {
            document.getElementById("text").innerHTML = dial[counter];
           
        }

        counter += 1

        function returnDialogue() {
            document.getElementById("yesbutton").style.display = "none"
            document.getElementById("nobutton").style.display = "none"
            document.getElementById("nextbutton").style.display = "block"
        }

        


                  
    }
    

    function displayItems() {
            for (let i = 0; i < items.length; i++) {
            var itemsbox = document.getElementById("itemsboxbox")
            var img = document.createElement("IMG");
            var imgsrc = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/doggiegame/assets/images/" + items[i] +".png"
            img.setAttribute("src", imgsrc );
            itemsbox.appendChild(img);
            img.className = "itemdisplay"
            img.onmouseover = function() {document.getElementById("itemdesc").style.display = "block"; 
            document.getElementById("itemdesctitle").innerHTML = items[i];
            document.getElementById("itemdescwords").innerHTML = itemwords[i]};
            img.onmouseout = function() {document.getElementById("itemdesc").style.display = "none";
            document.getElementById("itemdesctitle").innerHTML = "Items";};
        }
    }


    
    
    function moveItem() {
        var item = document.getElementById("item")
        item.classList.add("itemanimation");
        setTimeout(displayItems, 1000)   
    }

    function loadingScreen() {
        document.getElementById("nextbutton").style.display = "none";
        document.getElementById("pet").style.zIndex = "-15"
        document.getElementById("loadingscreen").style.display = "block";
        $(".arrow").hide();
        $(".keyitem").hide();
        document.getElementById("text").innerHTML = "Some time passes..."
        setTimeout(function(){
            document.getElementById("loadingscreen").style.display = "none"
            document.getElementById("pet").style.zIndex = "1"
            $(".arrow").show();
            $(".keyitem").show();
        }, 4000);

    }


    function ownerHome() {
            document.getElementById("text").classList.remove("coloredtext");
            decreaseStats();
            equateProgress();
            loadingScreen();

            var audio = document.getElementById("homenoise"); 
            var pet = document.getElementById("pet");
            var left = getOffset(pet).left -50;
            var top = getOffset(pet).top - 50;

            setTimeout(function(){
                document.getElementById("text").innerHTML = "!" 
                audio.play();
                document.getElementById("expoint").style.display = "block"
                document.getElementById("expoint").style.left = left + "px";
                document.getElementById("expoint").style.top = top + "px";
                }, audio.duration * 2000);

            setTimeout(function() {
                document.getElementById("text").innerHTML = dogname + "'s owner is home!";
                document.getElementById("expoint").style.display = "none"
                document.getElementById("nextbutton").style.display = "block";
            }, audio.duration * 3000)

    }

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    function decreaseStats() {
        fullness -= 1
        energy -= 1
        groom -= 1
        happy -= 1
        destrest -= 1
        social -= 1
    }

    function valBetween(v, min, max) {
        return (Math.min(max, Math.max(min, v)));
    }

    function equateProgress() {
        var fullnessdiv = document.getElementById("fullnessbar")
        var energydiv = document.getElementById("energybar")
        var groomdiv = document.getElementById("groomingbar")
        var happydiv = document.getElementById("happinessbar")
        var destrestdiv = document.getElementById("destrestbar")
        var socialdiv = document.getElementById("socialbar")

        fullnessdiv.style.width = (valBetween(fullness, 1, 5) * 56) + "px";
        energydiv.style.width = (valBetween(energy, 1, 5) * 56) + "px";
        groomdiv.style.width = (valBetween(groom, 1, 5) * 56) + "px";
        happydiv.style.width = (valBetween(happy, 1, 5) * 56) + "px";
        destrestdiv.style.width = (valBetween(destrest, 1, 5) * 56) + "px";
        socialdiv.style.width = (valBetween(social, 1, 5) * 56) + "px";

    }

        

    function displayOptions() {
        document.getElementById("nextbutton").style.display = "none"
        document.getElementById('yesbutton').innerHTML = yesbutwords;
        document.getElementById('nobutton').innerHTML = nobutwords;
        document.getElementById("yesbutton").style.display = "block";
        document.getElementById("nobutton").style.display = "block";
        
    }

    var randfoodnum = Math.floor(Math.random() * 7);

    function scavengeForFood() {
        
        document.getElementById("nextbutton").style.display = "block";
        

        switch(randfoodnum) {
            case 0:
                dialogue.push(dogname + " sniffed, but could not find anything",
                "However, the grass in the backyard looks appetizing.", 
                dogname + " chews on the grass.", 
                "colortext:" + dogname + " feels fuller!")

                fullness += 1;

                advanceText(dialogue);

                handlerCopy = advanceText.bind(null, dialogue)

                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

            break;

            case 1:
                dialogue.push(dogname + " scavenged for food.",
                "Found some crumbs.", 
                dogname + " is pleased with the crumbs.",
                "colortext:" + dogname + " feels fuller!")

                fullness += 1

                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
            break;

            case 2:
                dialogue.push(dogname + " scavenged for food.",
                dogname + " thought it found crumbs, but it turns out it was just dust.", 
                dogname + " is not pleased.", 
                dogname + " is still hungry.")

                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

            break;
            case 3:
                dialogue.push(dogname + " sniffed and sniffed, and miraculously has come across a larger piece of bread.", 
                dogname + " feels lucky.", 
                "colortext:" + dogname + " feels fuller!")

                fullness += 2

                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
            break;

            case 4:
                dialogue.push(dogname + " sniffed for food, but every attempt has lead it to the trashcan.", 
                " Dig into the trashcan?menu:Digmenu2:Don't digmenuclose")

                advanceText(dialogue);

                handlerCopy = advanceText.bind(null, dialogue)

                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                document.getElementById("yesbutton").addEventListener("click", yesTrash);
                document.getElementById("nobutton").addEventListener("click", noTrash);

                function yesTrash() {
                dialogue.push( dogname + " dug into the trashcan.", 
                " It found remnants of a bag of chocolate pretzels.",
                dogname + " ate the chocolate pretzels, and now it doesn't feel too good.",
                "colortext:" + dogname + " feels fuller!" )
                fullness+=1
                tummyhealth -=1
                    advanceText(dialogue);
                    returnDialogue();
                    
                }
                
                function noTrash() {
                    dialogue.push( dogname + " decided not to dig into the trashcan.", 
                    dogname + " believes its patience will one day reward itself.",
                    "colortext:" + dogname + " feels a little more like a good boy!")
                    goodboy+=1
                    advanceText(dialogue);
                    returnDialogue();
                    
                }


                
            break;

            case 5:
                dialogue.push(dogname + " found some loose Cheerios.", 
                dogname + "is a cheery dog!", 
                "colortext:" + dogname + " feels fuller!")
                fullness += 1
                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
            break;

            case 6:
                dialogue.push(dogname + " sniffed the entire house, feeling extra determined today.", 
                "photo:half of a MilkbonephotocloseIt sees a half-broken Milkbone in the corner of the room.", 
                " Eat the Milkbone or save it for later?menu:Eat the Milkbonemenu2:Save it for latermenuclose")

                advanceText(dialogue);

                handlerCopy = advanceText.bind(null, dialogue)

                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                document.getElementById("yesbutton").addEventListener("click", yesClicked);
                document.getElementById("nobutton").addEventListener("click", noClicked);
                

                function yesClicked() {
                    dialogue.push("photogoneUnable to control itself, " + dogname + " inhales the milkbone.",
                    "colortext:" + dogname + " feels fuller!")
                    fullness += 1;
                    advanceText(dialogue);
                    returnDialogue();
                    
                }
                
                function noClicked() {
                    items.push("Half of a Milkbone");
                    itemwords.push("A classic delicacy. It's got everything you can ask for: crunchy, crumbly, meaty, and nutritious. Despite being only a half piece, it's just as delicious.")
                    dialogue.push("photoslide" + dogname + " saved the milkbone for later.",
                    dogname + " is practicing lots of self control.")
                    advanceText(dialogue);
                    returnDialogue();
                    
                }

            break;
        };
    };

    var randdignum = Math.floor(Math.random() * 7)

    function goDig() {
        document.getElementById("nextbutton").style.display = "block";
        

        switch(randdignum) {
            case 0:
                dialogue.push(dogname + " dug up a hole in the backyard.",
                "It didn't find anything, but " + dogname + " feels relieved and proud of its efforts")

                destrest += 1;

                advanceText(dialogue);

                handlerCopy = advanceText.bind(null, dialogue)

                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

            break;

            case 1:
                dialogue.push(dogname + " dug and dug.",
                    "Its nails hit something solid in the ground.",
                    "photo:pretty rockphotoclose" + dogname + " found a pretty rock.",
                    "photoslide" + dogname + " saved the rock for later, just in case.",
                    "colortext:" + dogname + "feels satisfied.")

                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

                destrest += 1;
                
                items.push("pretty rock");
                itemwords.push("Is it an igneous rock? A sedimentary rock? " + dogname + " swears it learned this in school.")
                    

                
            break;

            case 2:
                dialogue.push(dogname + " dug viciously, as it is extra frustrated today.",
                    "Despite digging many holes in the yard, its urge to destroy has only gotten bigger.",
                    "Looks like " + dogname + " is going to get in trouble for all the holes it's dug.",
                    dogname + " does not feel satisfied.")

                goodboy -= 1

                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

            break;
            case 3:

                dialogue.push(dogname + " sniffed around and smelled something metallic.",
                    "It went with its instincts and dug up the smell.",
                    "photo:time capsulephotocloseLooks like " + dogname + " found a time capsule!",
                    "colortext:" + dogname + " feels satisfied.",
                    "Open the time capsule or save it for later?menu:Open time capsulemenu2:save time capsule for latermenuclose")

                destrest += 1

                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                document.getElementById("yesbutton").addEventListener("click", yesTime);
                document.getElementById("nobutton").addEventListener("click", noTime);

                function yesTime() {
                items.push("letter to the future", "old photo", "vintage dog toy")
                itemwords.push("A letter to the future. It reads, 'Dear future dog. woof.'", 
                    "An old photo of some owners and their dog. Who knows, it might be related to this ancestor!",
                    "A vintage dog toy. It's just a worn tennis ball, but it's special, because it has finely aged time encompassing the material.")
                dialogue.push("photoslide" + dogname + " opened the time capsule.",
                    "There's so many goodies here!",
                    dogname + " recieved a letter to the future.",
                    dogname + " recieved an old photo.",
                    dogname + " recieved a vintage dog toy.")
                    advanceText(dialogue);
                    returnDialogue();
                    
                }
                
                function noTime() {
                    slideitemnum = 6
                    items.push("time capsule")
                    dialogue.push( "photoslide" + dogname + " decided to save the time capsule for later.",
                        "After all, it's called a time capsule for a reason.")
                    itemwords.push(dogname + " wants to open this so badly. But he knows, like a fine wine, the longer it waits, the more it will be rewarded.")
                    advanceText(dialogue);
                    returnDialogue();
                }
            break;

            case 4:
                dialogue.push(dogname + " Dug up a couple holes in the backyard.",
                    dogname + " really feels like it let its frustration out.",
                    "colortext:" + dogname + " no longer feels much destructiveness.")

                destrest += 2

                advanceText(dialogue);

                handlerCopy = advanceText.bind(null, dialogue)

                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                
            break;

            case 5:
                dialogue.push(dogname + " dug.",
                    "photo:bug1photocloseAt the very bottom of the hole, " + dogname + " notices a bug.",
                    "Deal with the bug or leave it alone?menu:Deal with the bugmenu2:Leave it alonemenuclose")


                destrest += 1


                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                document.getElementById("yesbutton").addEventListener("click", yesDeal);
                document.getElementById("nobutton").addEventListener("click", noDeal);

                function yesDeal() {
                    dialogue.push("photogone" + dogname + " dealt with the bug.",
                        "Goodbye bug.",
                        "colortext:Suddenly, " + dogname + " feels a bit more primitive.")
                    alpha +=1
                    advanceText(dialogue);
                    returnDialogue();
                }

                function noDeal() {
                    dialogue.push(dogname + " left the bug alone.",
                        "photogone" + dogname + " feels like that bug deserved a chance to explore the backyard too.")                 
                    advanceText(dialogue);
                    returnDialogue();

                }
            break;

            case 6:

                dialogue.push(dogname + " dug, but it just seems like the dirt ground isn't cutting it today.", 
                    "Suddenly, " + dogname + " got the idea to dig somewhere else, like in the house.", 
                    "Dig inside the house?menu:Dig inside the housemenu2:Don't dig inside the housemenuclose")

                advanceText(dialogue);

                handlerCopy = advanceText.bind(null, dialogue)

                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                document.getElementById("yesbutton").addEventListener("click", yesHouse);
                document.getElementById("nobutton").addEventListener("click", noHouse);

                function yesHouse() {
                    determineRoomDown();

                    dialogue.push(dogname + " found a solid part of the carpet to dig.",
                        "Sometimes, somehow, the carpet feels more like digging dirt than dirt feels like digging dirt.",
                        "colortext:" + dogname + "feels satisfied.")
                    destrest += 1
                    advanceText(dialogue);
                    returnDialogue();
                    
                }
                
                function noHouse() {
                    dialogue.push(dogname + " decided not to dig inside the house.",
                    dogname + " settled with digging the dirt.",
                    "colortext:" + "It wasn't the most satisfying dig, but it helped " + dogname + "'s frustration anyways.")
                    destrest += 1
                    advanceText(dialogue);
                    returnDialogue();
                    
                }

            break;
        };

    }

    var groomnum = Math.floor(Math.random()*2)

    function groomSelf() {
        document.getElementById("nextbutton").style.display = "block";
        if (fleas === true) {

            dialogue.push(dogname + " began to groom itself.",
                dogname + " actually feels a bit itchy.",
                "The grooming has turned into groom-biting and scratching.",
                dogname + " doesn't know if it feels any more groomed. " + dogname + " just feels more itchy.")

                    advanceText(dialogue);

                    handlerCopy = advanceText.bind(null, dialogue)

                    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

        } else {
            switch(groomnum) {
                case 0:
                    dialogue.push(dogname + " took a moment to groom itself.",
                        "colortext:" + dogname + "'s coat feels cleaner!")

                    groom+= 1

                    advanceText(dialogue);

                    handlerCopy = advanceText.bind(null, dialogue)

                    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                break;

                case 1:
                    dialogue.push(dogname + " started licking itself from head to toe.",
                        "That's much better.",
                        "colortext:" + dogname + " feels like its coat is nice and slick.")

                    groom += 1

                    advanceText(dialogue);

                    handlerCopy = advanceText.bind(null, dialogue)

                    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                break;
            }
        }
        
    }
    var newspapernum = Math.floor(Math.random()*4)

    function getNewspaper() {
        document.getElementById("nextbutton").style.display = "block";
        switch(newspapernum) {
            case 0:
                dialogue.push(dogname + " went through the doggie door to get the newspaper.",
                    dogname + " brought the newspaper inside.",
                    "colortext:" + dogname + " feels a little more like a good boy.")

                    goodboy += 1

                    advanceText(dialogue);

                    handlerCopy = advanceText.bind(null, dialogue)

                    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
            break;

            case 1:
                dialogue.push(dogname + " pranced outside and picked up the newspaper with its mouth.",
                    dogname + " took the newspaper inside.",
                    "colortext:" + dogname + " feels a little more like a good boy.")

                    goodboy += 1

                    advanceText(dialogue);

                    handlerCopy = advanceText.bind(null, dialogue)

                    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
            break;

            case 2:
                dialogue.push(dogname + " went outside to get the newspaper.",
                    "Suddenly, a familiar scene appears before it.",
                    "photo:upstruckphotocloseThe UPS man is here! And he has a Milkbone for " + dogname + "!!",
                    dogname + " happily ate the Milkbone and got some pets from the UPS man.",
                    "photogone" + dogname + " went back inside.",
                    "colortext:" + dogname + " feels happier, fuller, and like a good boy!")
                    document.getElementById("item").style.top = "350px"
                    document.getElementById("item").style.left = "100px"


                    goodboy += 1
                    fullness += 1
                    happy += 1

                    advanceText(dialogue);

                    handlerCopy = advanceText.bind(null, dialogue)

                    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
            break;

            case 3: 
                dialogue.push(dogname + " went out the doggie door and ran to the newspaper.",
                    "photo:packagephotoclose" + dogname + " sees that there's a package for its owner as well, small enough to fit in its mouth.",
                    "Take the package inside as well?menu:Take the package insidemenu2:Leave the package outsidemenuclose")
                
                
                advanceText(dialogue);
                handlerCopy = advanceText.bind(null, dialogue)
                document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
                document.getElementById("yesbutton").addEventListener("click", takePackage);
                document.getElementById("nobutton").addEventListener("click", leavePackage);

                var randpackagenum = Math.floor(Math.random()*2)
                function takePackage() {
                    switch(randpackagenum) {
                        case 0:
                        dialogue.push("photogone" + dogname + " took the package inside.",
                            "colortext:" + dogname + " feels like an extra good boy.")
                        goodboy += 2
                        break;

                        case 1:
                        dialogue.push("photogone" + dogname + " took the package inside.", 
                            dogname + " realized its teeth punctured the package.",
                            "colortext:" + dogname + " is sad and feels like a bad boy.")
                        goodboy -= 1
                        break;

                    }
                    advanceText(dialogue);

                }

                function leavePackage() {
                    dialogue.push("photogone" + dogname + " decided to leave the package alone.",
                        dogname + " does not want to mess up the natural order of things.")

                    advanceText(dialogue);

                }

            break;
        }
        
    }
    var randspidnum = Math.floor(Math.random()*3)
    function huntForSpiders() {
        document.getElementById("nextbutton").style.display = "block";

        switch(randspidnum) {
            case 0:
                dialogue.push(dogname + " hunted for spiders.",
                    "Spider after spider, " + dogname + " successfully caught them and ended their fates.",
                    dogname + " continued to look for more spiders.",
                    "But nobody came.",
                    "colortext:" + dogname + " feels extremely primitive.")
                alpha += 2
            break;
            case 1:
                dialogue.push(dogname + " looked high and low for some spiders.",
                    "Unfortunately, there was not a spider to be seen.")
            break;
            case 2:
                dialogue.push(dogname + " searched the house for spiders.",
                    dogname + " saw a couple and dealt with them.",
                    dogname + " would say that this was a successful hunting trip.",
                    "colortext:" + dogname + " feels more primitive!")
                alpha += 1
            break;
        }

        advanceText(dialogue);

        handlerCopy = advanceText.bind(null, dialogue)

        document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
        
    }
    var randscratchnum = Math.floor(Math.random()*2)
    function scratchSelf() {
        document.getElementById("nextbutton").style.display = "block";
        switch(randscratchnum) {
            case 0:
                dialogue.push(dogname + " scratched itself.",
                    dogname + " really feels like it got the right spot.")
            break;
            case 1:
                if (fleas == true) {
                    dialogue.push(dogname + " scratched itself so good.",
                        "It almost feels as if its fleas had been scratched off.")
                } else {
                    dialogue.push(dogname + " scratched itself so good.",
                    "colortext:" + dogname + " almost feels cleaner from scratching itself.")
                groom += 1
                }
            break;
        }

        advanceText(dialogue);

        handlerCopy = advanceText.bind(null, dialogue)

        document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
        
    }
    var randsleepnum = Math.floor(Math.random()*4)
    function goToSleep() {
        document.getElementById("nextbutton").style.display = "block";
        switch(randsleepnum) {
            case 0:
                dialogue.push(dogname + " snuggled up against its fluffy dog bed and drifted off to sleep.",
                    dogname + " Had a wonderful, uninterrupted nap.",
                    "colortext:" + dogname + " feels more energized for the day.")
                energy += 1
            break;

            case 1:
                dialogue.push(dogname + " rested its head against the doggie bed.",
                    dogname + " tried to sleep, but had a nightmare about its owner abandoning itself.",
                    dogname + " twisted and turned, and yelped helplessly in its sleep.",
                    "After the nap, " + dogname + " does not feel more energized.")
            break;

            case 2:
                dialogue.push(dogname + " felt the sunlight pouring onto him as it drifted off to sleep.",
                    dogname + " woke up, not even realizing it fell asleep.",
                    "colortext:" + dogname + " feels more energized.")
                energy += 1
            break;

            case 3:
                dialogue.push(dogname + " feels its weight in its body and lugged itself to the doggie bed.",
                    dogname + "passed out and even snored a little.",
                    "colortext:" + dogname + "woke up feeling very rested.")
                energy += 2
        }

        advanceText(dialogue);

        handlerCopy = advanceText.bind(null, dialogue)

        document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

    }

    var randbasknum = Math.floor(Math.random()*3)
    function goBask() {
        document.getElementById("nextbutton").style.display = "block";
        switch(randbasknum) {
            case 0:
                dialogue.push(dogname + " feels a bit chilly, so it went to go bask in the sunlight.",
                    "The sun seeped through " + dogname + "'s skin and filled it with happiness.",
                    "colortext:" + dogname + " feels happier!")
                happy += 1
            break;
            case 1:
                dialogue.push(dogname + "laid down in front of the sunlight to absorb all of that vitamin D.",
                    dogname + " can feel the sunlight changing its mood.",
                    "colortext:" + dogname + " feels happier!")
                happy += 1
            break;
            case 2:
                dialogue.push(dogname + " enjoyed the warmth of the generous sunlight on its skin.",
                    dogname + " was vibing so much it fell asleep.",
                    dogname + " later woke up with a sunburn and feels uncomfortable and crabby.")
            break;
        }
        advanceText(dialogue);

        handlerCopy = advanceText.bind(null, dialogue)

        document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);
    }

    var randborknum = Math.floor(Math.random())
    function borkRelentlessly() {
        document.getElementById("nextbutton").style.display = "block";
        switch(randborknum) {
            case 0:
            dialogue.push(dogname + " borked at the fence.",
                "The doggie on the other side of the fence aggressively borked back.",
                dogname + " borked back again and they had a borking contest.",
                "colortext:" + dogname + " feels a little more assertive.")
            alpha += 1
            break;
            case 1:
            dialogue.push(dogname + " could hear the doggie on the other side of the fence borking loudly.",
                dogname + " borked a single, assertive bork.",
                "The borking stopped.",
                "colortext:" + dogname + " feels in control.")
            alpha += 1
            break;
            case 2:
            dialogue.push(dogname + " borked and borked, but none of his borks were returned.",
                "The doggie on the other side of the fence must be away.",
                dogname + " feels like it's wasted its time.")
            break;
            case 3:
            dialogue.push(dogname + " let out a medium-loud bork.",
                "The doggie on the other side of the fence replied with a medium-loud bork.",
                "They had a nice conversation about their favorite treats.",
                "colortext:" + dogname + " feels like it's more social.")
            social += 1
            break;
            case 4:
            dialogue.push(dogname + " borked back at the other doggie borking on the other side of the fence.",
                "Suddenly, " + dogname + " heard someone say 'SHUT UP!!'.",
                "Keep barking or shut up?menu:Keep barkingmenu2:Shut upmenuclose")
            document.getElementById("yesbutton").addEventListener("click", keepBarking);
            document.getElementById("nobutton").addEventListener("click", shutUp);
            function keepBarking() {
                dialogue.push(dogname + ", despite understanding the human, has decided to continue barking.",
                    "No one can stop it from getting these victory words across.",
                    "colortext:" + dogname + " feels unstoppable.")
                alpha += 2
                advanceText(dialogue);
            }

            function shutUp() {
                dialogue.push("Fortunately, " + dogname + " understood the human and ceased its barking.",
                    "colortext:" + dogname + " feels obedient and like a good boy.")
                goodboy += 1
                advanceText(dialogue);

            }

            break;
        }   

    advanceText(dialogue);

    handlerCopy = advanceText.bind(null, dialogue)

    document.getElementById("nextbutton").addEventListener("click", handlerCopy, true);

    }

