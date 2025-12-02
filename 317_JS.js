// Wait until ALL HTML elements are created (the DOM is ready)
// This prevents errors if JavaScript tries to select elements before they exist.
document.addEventListener("DOMContentLoaded", () => {
/* TRUE PARALLAX — Moves background at scroll speed */
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;

        document.querySelector(".parallax-bg")
          .style.transform = `translateY(${scrolled/3}px)`;

        document.querySelector(".timeline-container")
          .style.transform = `translateY(${-scrolled/2}px)`;

        document.querySelector(".world-map-container")
          .style.transform = `translateY(${-scrolled/4}px)`;
        
    });

});




document.addEventListener("DOMContentLoaded", function() {
    // Store all content for each timeline event
  const sectionsText = {
    "1906": `The South African province at the time passed a series of 
              discriminatory laws in 1906, supported by the apartheid governments, 
              "Asiatic Registration Act" and later on, the "Asiatic Land Tenure" and
              "Indian Registration Act". These laws restricted Asians' movements, 
              and confined them to specific spaces. 
              The photo above captures a young Gandhi (1893) being forcibly removed
              from a "white-only" carriage despite having a valid ticket;
              This shows how tension between Whites and Asians ramped up. 
              These events triggered Gandhi and 
              sparked a pivotal moment of action displayed by Gandhi's 
              willingness to stay in South Africa and dedicate
              his time to fighting racial inequality through non-violent protests.`,
  
    "1919": `This period was crucial for Mahatma Gandhi
              as he quickly rose to national leadership in
              the Indian National Congress; He proposed mass
              non-violent campaigns for Swaraj (self rule).
              The Rowlatt Act, allowed for the imprisonment of
              people without a trial, this directly targeted
              Indian's, and so Gandhi, now the head of the Indian National Congress,
              launched the first nationwide nonviolent movement to protest; 
              Following his Satyagraha ideology. This included boycotting British
              goods and promoted self-reliance (i.e. the above photo).`,
  
    "1942": `This time period marks a hard time in Gandhi's leadership career.
              Gandhi lead the Quit India Movement: An act of mass disobedience
              campaign launched in August of 1942 with hopes to end British rule.
              The movement had many outcomes; Gandhi's inspirational "Do or Die" speech 
              came from the failed attempt Britain had to gain Indian support for the war
              , but many tragedies like the arrests of himself and 
              Congress leaders along with the death of his wife. Many groups opposed this act 
              due to already being invested in the war efforts; Most of the support was from 
              Americans and supporters of Gandhi.`,
  
    "1947": `In 1947, Gandhi focused on extinguishing the nationwide
              violence and riots that followed the partitioning of India, instead of
              celebrating the liberation of India. He worked with Muslim leaders, namely Shaheed Suhrawardy
              to restore peace between the religious groups (Hindus and Muslims). 
              This time proved detrimental to Gandhi's mental health as he expressed 
              a desire to die rather than seeing the bloodshed that overtook the nations.`,
  
      "1948": `Gandhi was assassinated on January 30, 1948 by Nathuram Godse
                on his way to prayer in Delhi; He shot him three times point-blank.
                Nathuram believed Gandhi was too invested in Muslims and Pakistan and felt
                betrayed. His death prompted violence in India and global mournings. A national
                day of remembrance was established in India, and global leaders expressed 
                their horror and sadness by remembering him as a symbol of peace.  `
    };
    const sectionsImg = {
      "1906": "https://images.hindustantimes.com/Images/popup/2014/9/2809brimg_1.jpg",
      "1919": "https://cdn.britannica.com/72/200572-050-448D5045/Mahatma-Gandhi-1930.jpg?w=740&h=416&c=crop",
      "1942": "https://static.toiimg.com/thumb/msid-59987915,width-1280,height-720,resizemode-4/59987915.jpg",
      "1947": "https://npr.brightspotcdn.com/dims4/default/cbc5470/2147483647/strip/true/crop/3147x2342+0+0/resize/880x655!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2015%2F06%2F09%2Fap133750321373_custom-806494c66f82c2ada98c5e737f767a360e4e7049.jpg",
      "1948": "https://fl-i.thgim.com/public/incoming/icken3/article65721521.ece/alternates/FREE_1200/30_YT_gandhi.jpg"
    };
    const sectionsTitle = {
      "1906": "Birth Of Satyagraha",
      "1919": "Rowlatt Satyagraha",
      "1942": "Quit India Movement",
      "1947": "Success",
      "1948": "Fall"
    }

    const countriesGandhiImpact = {
      "USA": `Gandhi's influence can be seen in nearly every major nonviolent movement of the 20th century: 
      Martin Luther King Jr. & the U.S. Civil Rights Movement; King heavily adopted
      Gandhian strategies of marches, sit-ins, boycotts, and nonviolent discpline. 
      Gandhi gave MLK the blueprint for nonviolent reistance and even stated that "Christ gave him the message, but Gandhi gave him the method.
      Gandhi reassured King that nonviolence was not passive, but rather a moral force
      for social change against corrupt institutions. He was enlightened to see how nonviolent civil 
      disobediance could cripple oppressive regimes without bloodshed.
      this laid down the foundation of many of Kings future campaigns.
      
      Years after Gandhi's death King traveled to India to take note from Gandhi's follwoers;
      The knowledge he gained from the trip lead him to come out and say it was "one of the most meaningful experiences of my life."
      Gandhi also inspired King to include his religion into his campaigns, and that
      is when King created his own twist on Gandhi's "Satyagraha".
      
      By looking at Gandhi's work, King connected the struggle African Americans had 
      with civil rights in the 60's. And because of MLK, many other activits came forth like
      Malcom X, Ralph Abernathy, Cesar Chavez--who fought for farmers rights; Ultimately they all benefited from Gandhi.`,
      
      "Africa": `Gandhi left a major impact on South Africa, during his time there
      and years after he left. In the time he spent in South Africa he was pushed
      to develop and test his philosophy of nonviolent resistance (Satyagraha). This
      strategy later influenced South Africa's own freedom struggle, and many others.
      
      Gandhi arrived in South Africa in his youth as a lawyer and first handedly experienced 
      racial discrimination. These were his roots, and where he created/practiced Satyagraha
      ("truth force" or "soul force")--a tactic of resisting social injustice without the need
      of violence. 
      
      Gandhi's methods became a model for activists like Albert Luthuli, 
      Desmond Tutu, The African Natinal Congress (ANC), and a more famous name: Nelson Mandela,
      who described Gandhi's peaceful campaigns as a "shining example" and that they 
      "paved the way for anti-apartheid".
      The methods Gandhi displayed served crucially to the anti-apartheid campaigns like
      The 1952 Defiance Campaign, Bus boycotts, and many of the passive resistance campagins. 
      
      Gandhi is even a recognized figure in South Africa with statues of him located in Durban, Pietermaritzburg, and Johannesburg`,
      
      "Asia": `Of course people know about his contributions in India and neighboring countries, but what's
      lesser known is his impact on the Philippines that was relatively recent. 
      The People Power Revolution (1986) was a nonviolent uprising that
      overthrew the dictatorship of ferdidnand Marcos. Although it happened roughly
      2-decades after Gandhi's death, it was heavily inspired by him.
      
      The organizers mirrored Gandhi's tactics by emphasizing peaceful protests, moral courage,
      and mass civil disobedience; All centered around Satyagraha. They displayed
      marches, human barricades, strikes, boycotts of businesses that supported Marco's regime,
      and refusal to accept unjust laws. This movement heavily pushed moral force 
      as something stronger than violence and nonviolence as the only moral path to freedom.  `,
      
      "Europe": `Similar to the Philippines, during the 1980s many Eastern European democracy movements
      like the Solidarity in Poland and the Velvet Revolution in Czechoslovakia drew inspiration from Gandhi's philosophy
      of nonviolent civil resistance. Gandhi never visited Eastern Europe but his methods
      impacted the globe so substantially that it became a model for the oppressed societies who would
      challenge unjust government systems; Doing so nonviolently.
      
      The Solidarity trade union in Poland used Gandhian-style tactics such as:
      Mass strikes that shut down shipyards and factories; not following the governments cruel orders;
      peaceful protests and sit-ins; and nonviolent confrontation. Polish activists
      studied the successes of Gandhi and King, and abstracted that nonviolence 
      was a necessity to their success.
      
      In Czechoslovakia (1989) the Velvet Revolution was deemed peaceful, hence "velvet",
      due to showcasing Gandhi's principles of collective noncooperation, mass strikes,
      and mass moral confrontation--instead of violent confrontation.`
    }
    const countriesGandhiImpactName = {
      "USA": "United States",
      "Africa": "South Africa",
      "Asia": "Philippines",
      "Europe": "Eastern Europe"
    }

    const countriesGandhiImpactImages = {
      "USA": "https://th.bing.com/th/id/OIP.FtPWpqY51tD7kJL882NbIAHaEc?w=266&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
      "Africa": "https://th.bing.com/th/id/OIP.OoB0D-Hh2nP64JzKOg39aAHaE4?w=255&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
      "Asia": "https://th.bing.com/th/id/OIP.yHSFPtuZyxOsN7uu3V6CuQHaFh?w=254&h=189&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
      "Europe": "https://th.bing.com/th/id/OIP.EAlc1y0ELkNT1CY7XEyvqwHaE8?w=274&h=182&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3"
    }



  
    // Select elements
    const popupButtons = document.querySelectorAll(".openPopupButton");
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopupButton = document.getElementById("closePopupButton");

    const popupText = document.getElementById("popupText");
    const popupTitle = document.getElementById("popupTitle");

    // Open popup with specific content
    popupButtons.forEach(button => {
      button.addEventListener("click", function() {
        const sectionId = this.dataset.target;
    
        popupText.innerHTML = sectionsText[sectionId];
        popupTitle.innerHTML = sectionsTitle[sectionId];
        popupImg.src = sectionsImg[sectionId]
        popupOverlay.style.display = "flex";
      });
    });

    // COUNTRY POPUP BUTTONS
const popupButtonsCountries = document.querySelectorAll(".openPopupButtonCountries");

// COUNTRY POPUP ELEMENTS
const popupOverlayCountries = document.getElementById("popupOverlay-countries");
const popupTextCountries = document.getElementById("popupText-countries");
const popupTitleCountries = document.getElementById("popupTitle-countries");
const popupImgCountries = document.getElementById("popupImg-countries");
const closePopupCountries = document.getElementById("closePopupButton-countries");

// OPEN COUNTRY POPUP
popupButtonsCountries.forEach(button => {
  button.addEventListener("click", function () {
    const sectionId = this.dataset.target;

    popupTextCountries.innerHTML = countriesGandhiImpact[sectionId];
    popupTitleCountries.innerHTML = countriesGandhiImpactName[sectionId];
    popupImgCountries.src = countriesGandhiImpactImages[sectionId];



    popupOverlayCountries.style.display = "flex";
  });
});

// CLOSE POPUP
closePopupCountries.addEventListener("click", function() {
  popupOverlayCountries.style.display = "none";
});






  
    // Close popup
    const closePopup = function(event) {
      if (event.target === popupOverlay || event.target === closePopupButton) {
        popupOverlay.style.display = "none";
      }
    };
  
    closePopupButton.addEventListener("click", closePopup);
    popupOverlay.addEventListener("click", closePopup);


  // Load the external file from this path
  fetch("continent_layout.svg/world.html")
  // When the file is fetched, this function runs
  .then(function (res) {
    // Convert the response into plain text (world.html (svg) as text)
    return res.text();
  })
  // Once converted, this function runs with the text data
  .then(function (data) {
    // Insert the loaded world.html/SVG into the page element with its ID
    document.getElementById("world-map-layout").innerHTML = data;
  });
  
  
});
  




