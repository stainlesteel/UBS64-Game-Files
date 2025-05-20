

$(document).ready(function(){
    var oMain = new CMain({
                   win_occurrence: 40,          //WIN OCCURRENCE PERCENTAGE. VALUES BETWEEN 0-100
                   min_bet: 1,                  //MIN BET PLAYABLE BY USER. DEFAULT IS 0.1$
                   max_bet: 300,                //MAX BET PLAYABLE BY USER. 
                   bet_time: 10000,             //WAITING TIME FOR PLAYER BETTING
                   money: 1000,                 //STARING CREDIT FOR THE USER
                   blackjack_payout: 1.5,       //PAYOUT WHEN USER WINS WITH BLACKJACK (DEFAULT IS 3 TO 2). BLACKJACK OCCURS WHEN USER GET 21 WITH FIRST 2 CARDS
                   game_cash: 500,              //GAME CASH AVAILABLE WHEN GAME STARTS
                   show_credits:false,           //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
                   fullscreen:true,             //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                   check_orientation:false,      //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                   audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 

                   //////////////////////////////////////////////////////////////////////////////////////////
                   ad_show_counter: 15           //NUMBER OF HANDS PLAYED BEFORE AD SHOWN
                   //
                   //// THIS FUNCTIONALITY IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN.///////////////////////////
                   /////////////////// YOU CAN GET IT AT: /////////////////////////////////////////////////////////
                   // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421 ///////////
               });


    
   $(oMain).on("recharge", function(evt) {
            //INSERT HERE YOUR RECHARGE SCRIPT THAT RETURN MONEY TO RECHARGE
           var iMoney = 1000;
           if(s_oGame !== null){
               s_oGame.setMoney(iMoney);
           }

   });
   


   $(oMain).on("bet_placed", function (evt, iTotBet) {
       //...ADD YOUR CODE HERE EVENTUALLY
   });

   $(oMain).on("start_session", function(evt) {
 
        

       if(getParamValue('ctl-arcade') === "true"){
           parent.__ctlArcadeStartSession();
       }

   });

   $(oMain).on("end_session", function(evt) {
          if(getParamValue('ctl-arcade') === "true"){
              parent.__ctlArcadeEndSession();
          }

   });


   $(oMain).on("save_score", function(evt,iScore) {
          if(getParamValue('ctl-arcade') === "true"){
              parent.__ctlArcadeSaveScore({score:iScore});
          }
          //...ADD YOUR CODE HERE EVENTUALLY
   });

   $(oMain).on("show_interlevel_ad", function(evt) {
          if(getParamValue('ctl-arcade') === "true"){
              parent.__ctlArcadeShowInterlevelAD();
          }
          if( socket && lkey )
            socket.send(JSON.stringify({ action: 'show_interlevel_ad', lkey: lkey }));
   });

   $(oMain).on("share_event", function(evt, iScore) {
          if(getParamValue('ctl-arcade') === "true"){
              parent.__ctlArcadeShareEvent({   img: TEXT_SHARE_IMAGE,
                                               title: TEXT_SHARE_TITLE,
                                               msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                                               msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1});
          }
   });
   
   if (isIOS()) {
       setTimeout(function () {
           sizeHandler();
       }, 200);
   } else {
       sizeHandler();
   }
});



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }





  









  

          
                











  





          
                      

  
                      
document.addEventListener("DOMContentLoaded", function () {
    const modal6432HTML = `
        <div class="modal6432-overlay" id="modal6432">
            <div class="modal6432">
                <h2>Game Unlock Key</h2>
                <p>Enter the key below:</p>
                <input type="text" id="unlockkey" style="text-align:center;" placeholder="XXXXXXXXXXXX">
                <br>
                <button id="closemodal6432">Enter Key</button>
                <button id="buyNow" class="hide_button">$ Buy License Key $</button>
                <p class="info-text" style="padding:10px;"></p>
            </div>
        </div>
        <div class="modal6432-overlay" id="modalad6432">
            <div class="modal6432">
                <h2>Advertising</h2>
                <p><small>Helps make games free</small></p>
                <a href="" target="_blank" class="a_6432" id="a_6432"><img style="max-height:300px;" class="img_6432" src=""></a>
                <p class="counte_6432" style="padding:10px;"></p>
            </div>
        </div>
        <div class="modal6432-overlay" id="modal64322">
            <div class="modal6432">
                <h2>Connection error.</h2> Check your internet connection.
            </div>
        </div>
        <div id="key_button" class="key_button hide_button" style="padding:10px;background:#fff; position:fixed; left:0px; top:70%; cursor:pointer;">
            <img style="width:25px;height:25px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAz5JREFUSEu1l1mojlEYhZ9jliFE5jFjSErmZCxckCvKkCFDOMocMkeGKOmEEhfKjSEXXHFBpChTIi6McRQl8yz2qvXV5zvnP/bfOf9XX/3n//e7137Xu9717lPEv081oAHQHRgGdAQ6Ac2BZ8BT4AlwD7gGfMzER/9ZlFpZA2gPjPX7CLjh9zHQx28/oDdwBDgHlEajpRYmwNWBLsAaZ7kfOJFjw/rAJGC6GdhmNvLCF7DelsBiQFmvBmoDTQCBfAXeAx8yO+v3hcCgADwrfH6dD7JA6wLjgfmhbuOAWsAQZ9ULeAlcDnU+UM7Gqv1af78yfP4RCy5gUbwVOAhcAjoAG4ELwBVgIjAtfB7tzNN7i6EBQZB7gDkWXRS2gCcAxcAYUz3QB1H234KI2gE7gqBO+c1u3CaUazNwETgWher6LnE9NzlI7VNiaqXqnsAWYGoQlJSefRoBM4Cu1kkUtjLea0pPO0J9PNlAD9xCb0x5eZvWCRoYFdpqXgVrysQJWPQcMniyQO3VClDP3gceVpCG1vYHdgddDI1K11SvswkcjQ3KrBOwDqje1wGiHmUsWtU266Miyi5q6tqqRMtj9xCw2mGug2QU+T4S4+Fgt2IsL1W3ANT8GgDq5Z95Isvf9wUTuu74tzHxylg10gBQC63yBt9jgr1GTqfarsgHPBkSqs8UU65+vgq8ywGuGHn5L79aloCLOY1LMVdh5umxWM99qJMfD4I7GUrwObDwxQfQWvVsM5vFc+B2sNc//l2HkestiwFPAyteGw8GFrgEd1P+W9Pzuq/BX9kqFffJwyQaPAucsKuJpdOPANr6S9X9ZujZs6ZYzPQAWttkNEj0RIHnAo7RlgA02boBi4CRqaD/glcGOBGVLgIaiXLAF85Yc1mlyVnzygILXM61FOgc1L3d81yecKci2qsCWOBSuuxSQ6KxlS4bzlnzqgJOa0Lz+4wvGLJg3UJVc5VEglSflxQCWJQL+HfwhVvBimemMtddbkO4050vBLBwtK+olodn1T5cd7pCActCRe3slNqTcugyuatQwInadZ/Tv0EaPnI6PQUHTtQu75bSd/oWqzFaXMiME2rV58pcNW/oG23pX9jVoCuwfeGSAAAAAElFTkSuQmCC">
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modal6432HTML);

    const styles = document.createElement("style");
    styles.textContent = `
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .key_button{
            opacity:0.4;
        }
        .key_button:hover{
            opacity:1;
        }
        .modal6432-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index:9998!important;
            color:#000!important;
        }
            .modal6432 small{
font-size:12px!important;
            }
        .modal6432 {
        z-index:9999!important;
        font-size:14px!important;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            text-align: center;
            min-width: 300px;
            transform: scale(0.8);
            transition: transform 0.3s ease;
            color:#000!important;
        }
        .modal6432 h2 {
            margin: 0 0 10px;
            color:#000!important;
        }
        .modal6432 input {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            color:#000!important;
        }
        .hide_button{
            display: none;
        }
        .modal6432 button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
            color:#000!important;
        }
        .modal6432 button:hover {
            background: #0056b3;
            color:#000!important;
        }
        .modal6432-overlay.active {
            opacity: 1;
            visibility: visible;
            color:#000!important;
        }
        .modal6432-overlay.active .modal6432 {
            transform: scale(1);
        }
    `;
    document.head.appendChild(styles);

    const modal6432 = document.getElementById("modal6432");
    const unlockkey = document.getElementById("unlockkey");
    const key_button = document.getElementById("key_button");
    const modal64322 = document.getElementById("modal64322");
    const modalad6432 = document.getElementById("modalad6432");
    const a_6432 = document.getElementById("a_6432");

    const closemodal6432Btn = document.getElementById("closemodal6432");
    const buyNow = document.getElementById("buyNow");
    let m_y = false;

    key_button.addEventListener("click", () => {
        modal6432.classList.add("active");
        unlockkey.value = lkey;
        document.querySelector(".info-text").innerHTML = '';
    });
    a_6432.addEventListener("click", () => {
        socket.send(JSON.stringify({ action: 'ad_close_by_click', lkey: lkey, ad_id: ad_id }));
    });
    
    buyNow.addEventListener("click", () => {
        window.location = "https://cloudapi.stream/buy_license/"+lkey+"/";
    });
    closemodal6432Btn.addEventListener("click", () => {
        if( unlockkey.value != '' && unlockkey.value.length > 3 ){
            lkey = unlockkey.value;
            socket.send(JSON.stringify({ action: 'set_key', lkey: unlockkey.value }));
        }
    });

    modal6432.addEventListener("click", (event) => {
        if (event.target === modal6432 && m_y == false) {
            m_y = true;
            setTimeout(() => {
                m_y = false;
                modal6432.classList.remove("active");
            }, 2000);
            W_open = false;
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && m_y == false) {
            m_y = true;
            setTimeout(() => {
                m_y = false;
                modal6432.classList.remove("active");
            }, 2000);
            W_open = false;
        }
    });
});

/********GAME*******/
let socket;
let lkey = localStorage.getItem('lkey');
let lkey_time = localStorage.getItem('lkey_time');
let W_open = false;
let ad_id = 0;
const serverUrl = 'wss://gamewss.cloudapi.stream:8447';

function connectWebSocket() {
    socket = new WebSocket(serverUrl);
    socket.onopen = () => {
          modal64322.classList.remove("active");
          console.log('WebSocket connection established');
          //modal6432.classList.add("active");
          console.log(lkey);
          if( lkey == undefined || lkey == null || lkey == '' || lkey.length < 10 ){
            socket.send(JSON.stringify({ action: 'new_client' }));
          } else socket.send(JSON.stringify({ action: 'session_start', lkey: lkey }));
    };

    socket.onmessage = (event) => {
        let answ = JSON.parse(event.data);
        if( answ.action ){
            if( answ.is_pro == 'false' ){
                try {
                    if( document.querySelector(".hide_button") ){
                        document.querySelector(".hide_button").classList.remove("hide_button");
                        document.querySelector(".hide_button").classList.remove("hide_button");
                    }
                } catch (error) {
                    
                }
            }else {

            }
            if( answ.action == 'show_ad' ){
                //alert('ok');
                ad_id = answ.id;
                modalad6432.classList.add("active");
                document.querySelector(".counte_6432").innerHTML = answ.text;
                document.querySelector(".img_6432").setAttribute('src',answ.src);
                document.querySelector(".a_6432").setAttribute('href',answ.href);
                setTimeout(() => {
                    modalad6432.classList.remove("active");
                    socket.send(JSON.stringify({ action: 'ad_auto_close', lkey: lkey }));
                }, answ.interval);
            }else
            if( answ.action == 'new_key' ){
                localStorage.setItem( 'lkey', answ.lkey );
                localStorage.setItem( 'lkey_time', answ.lkey_time);
                lkey = localStorage.getItem('lkey');
                lkey_time = localStorage.getItem('lkey_time');
                W_open = false;
            } else if( answ.action == 'show_form' ){
                document.querySelector(".info-text").innerHTML = '';
                modal6432.classList.add("active");
                W_open = true;
            } else if( answ.action == 'code_approve' ){
                localStorage.setItem( 'lkey', answ.lkey );
                localStorage.setItem( 'lkey_time', answ.lkey_time);
                lkey = localStorage.getItem('lkey');
                lkey_time = localStorage.getItem('lkey_time');
                W_open = false;
                if( answ.text )
                    document.querySelector(".info-text").innerHTML = answ.text;
            } else if( answ.action == 'error' ) {
                document.querySelector(".info-text").innerHTML = answ.text;
            }
    };

    socket.onerror = (error) => {
        modal64322.classList.add("active");
        console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
        modal64322.classList.add("active");
        console.log('WebSocket connection closed');
        setTimeout(() => {
            connectWebSocket();
        }, 4000);
    };
}
}

setInterval(() => {
    const states = {
        0: 'CONNECTING',
        1: 'OPEN',
        2: 'CLOSING',
        3: 'CLOSED'
    };
    let state__ = states[socket.readyState] || 'UNKNOWN';
    if( state__ == 'CLOSING' || state__ == 'CLOSED' || state__ == 'UNKNOWN' ){
        connectWebSocket();
    }
    try {
        if( W_open == false ){
            socket.send(JSON.stringify({ action: 'check_key', lkey: lkey }));
        }
    } catch (error) {
        try {
            connectWebSocket();
        } catch (error) {
            
        }
    }
    
}, 10000);

connectWebSocket();
/********************/














