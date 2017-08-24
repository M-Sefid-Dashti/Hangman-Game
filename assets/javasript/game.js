
      // Array of words.
      var words = ["console", "primitive", "Horse", "Airoplane"];
    //  var words = ["con", "primitive", "Horse", "Airoplane"];
      var doc = document ;
      var keyed ;
      var choosen ;   // DBG
      var answer = [];
      var nonMatch = [] ;
      var matchCnt = 0 ;
      var found = false ;
      var endGame = false ;
      var i = 0 ;
      var timesPlayed = 0 ;

      var choosen = words[Math.floor(Math.random() * words.length)] ;
      // create an answer array that is an array filled with underscores the size of the chosen word
      for(var i = 0; i < choosen.length; i++)
      {
          answer.push("_");
      }

      console.log(choosen) ;  // DBG

      window.onload = init ;

      function init()
      {
          choosen= words[Math.floor(Math.random() * words.length)];
          clearResults() ;
          var len = choosen.length ;

          document.onkeyup = function(event)
      	  {
              displayResults(nonMatch) ;

              processKeyIn(event) ;
              timesPlayed++ ;

                  if (timesPlayed == (len + 2) || found)
                  {
                    endResults(found) ;
                    timesPlayed = 0 ;
                  }
                  if (timesPlayed == 0)
                  {
                    //new word choosen
                    answer = ' ' ;
                    clearResults() ;
                  }
      	  };
      }

      function processKeyIn(event)
      {
         var len = choosen.length ;
         var prmt ;
         var keyIn ;
         var found = false ;

             // prepare to write user response key to 'prompt' span
             var prmt = doc.getElementById('prompt') ;
             var keyIn = event.key ;
             prmt.firstChild.textContent = keyIn ;

             if (choosen.includes(keyIn))
             {
                for (var i = 0; i < len && !found; i++)
                {
                   if (choosen[i].match(keyIn))
                   {
                     // we found a match, so change this char in the answers array
                     answer[i] = keyIn;
                     matchCnt++ ;
                     displayResults(answer) ;   //   needed ???
                     if (matchCnt == len)
                     {
                       found = true ;
                       endResults(found) ;
                       choosen= words[Math.floor(Math.random() * words.length)];
                       //clearResults(found) ;   move to ???
                       answer = ' ' ;
                     }
                     else
                     {
                        nonMatch.push(keyIn) ;  // to diplay in result
                     }
                   }

                }
             }
      }


      function statusDisplay()
      {
          var userText = document.getElementById("result-text2");
          //userText.firstChild.textContent = answer.join(' ') ;
          userText.firstChild.textContent = '    ' ;
          if (found == false)
          {
              userText.firstChild.textContent = 'You lost!' ;
          }
          else
          {
                userText.firstChild.textContent = 'You won!' ;
          }
      }

      function displayResults()
      {
          var userText = document.getElementById("user-text") ;
          userText.firstChild.textContent = answer.join(' ') ;
      }

      function clearResults()
      {
          var userText = document.getElementById("user-text");
          //userText.firstChild.textContent = answer.join(' ') ;
          userText.firstChild.textContent = '    ' ;
      }

      function endResults(found)
      {
          var userText = document.getElementById("result-text");
          //userText.firstChild.textContent = answer.join(' ') ;
          userText.firstChild.textContent = '    ' ;
          if (found == false)
          {
              userText.firstChild.textContent = 'You lost!' ;
          }
          else
          {
                userText.firstChild.textContent = 'You won!' ;
          }
      }
