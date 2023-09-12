let dialogues = [
  "Mere paas maa hai. (Deewaar)",
  "Kitne aadmi the? (Sholay)",
  "Don ko pakadna mushkil hi nahin, namumkin hai. (Don)",
  "Kabhi kabhi kuch jeetne ke liye kuch haarna bhi padta hai, aur haar kar jeetne wale ko baazigar kehte hain. (Baazigar)",
  "Aaj ek hasi aur baant lo, aaj ek dua aur maang lo, aaj ek ansoo aur pee lo, aaj ek zindagi aur jee lo, aaj ek sapna aur dekh lo, aaj... kya pata, kal ho na ho. (Kal Ho Naa Ho)",
  "Rahul, naam toh suna hoga. (Dil To Pagal Hai)",
  "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hai, Senorita. (Dilwale Dulhania Le Jayenge)",
  "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? (Deewaar)",
  "Yeh dhai kilo ka haath jab kisi pe padta hai na, to aadmi uthta nahi... uth jata hai. (Damini)",
  "Life mein kuch bhi ho sakta hai, kabhi-kabhi kyun kiya ka koi jawab nahin hota... agar koi aapse yeh pooche ki aap sachmuch mein kya chahte hain, to uska jawab sirf ek aadmi deta hai... Kehte hain, aap kya sochte hain. (Don 2)",
  "Aaj mere paas bangla hai, gaadi hai, bank balance hai, kya hai tumhare paas? (Namak Halaal)",
  "Pushpa, I hate tears. (Amar Prem)",
  "Aapke paas Bang Bang hai, maine ek ghante mein Bang Bang kiya. (Bang Bang!)",
  "Tumhara naam kya hai, Basanti? (Sholay)",
  "Babuji ne kaha gaon chhod do, sab ne kaha Paro ko chhod do, Paro ne kaha sharab chhod do, aaj tumne keh diya haweli chhod do... ek din aayega jab woh kahenge, duniya hi chhod do. (Devdas)",
  "Aaj mere paas building hai, property hai, bank balance hai, bangla hai, gaadi hai, kya hai tumhare paas? (Deewaar)",
  "Ek chutki sindoor ki keemat tum kya jaano Ramesh Babu. (Om Shanti Om)",
  "Tension lene ka nahin, sirf dene ka. (Chennai Express)",
  "Yeh haath humko dede Thakur! (Sholay)",
  "Koi dhanda chota nahi hota, aur dhande se bada koi dharm nahi hota. (Company)",
  "Tum ek machhli ke aankh ke baraabar ho, nakko, nakko. (Mughal-E-Azam)",
  "Hum ek baar jeete hain, ek baar marte hain, shaadi bhi ek baar hoti hai, aur pyar... ek hi baar hota hai. (Kuch Kuch Hota Hai)",
  "Aapke paas Bang Bang hai, maine ek ghante mein Bang Bang kiya. (Bang Bang!)",
  "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? (Deewaar)",
  "Bhagwan ke bharose na baithiye, kya pata bhagwan hamare bharose baitha ho. (OMG - Oh My God!)",
  "Haar kar jeetne wale ko baazigar kehte hain. (Baazigar)",
  "Don ko pakadna mushkil hi nahin, namumkin hai. (Don)",
  "Yeh kya ho raha hai? (Kabhi Khushi Kabhie Gham)",
  "Aaj ek hasi aur baant lo, aaj ek dua aur maang lo, aaj ek ansoo aur pee lo, aaj ek zindagi aur jee lo, aaj ek sapna aur dekh lo, aaj... kya pata, kal ho na ho. (Kal Ho Naa Ho)",
  "Kabhi kabhi kuch jeetne ke liye kuch haarna bhi padta hai, aur haar kar jeetne wale ko baazigar kehte hain. (Baazigar)",
  "Rahul, naam toh suna hoga. (Dil To Pagal Hai)",
  "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hai, Senorita. (Dilwale Dulhania Le Jayenge)",
  "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? (Deewaar)",
  "Yeh dhai kilo ka haath jab kisi pe padta hai na, to aadmi uthta nahi... uth jata hai. (Damini)",
  "Life mein kuch bhi ho sakta hai, kabhi-kabhi kyun kiya ka koi jawab nahin hota... agar koi aapse yeh pooche ki aap sachmuch mein kya chahte hain, to uska jawab sirf ek aadmi deta hai... Kehte hain, aap kya sochte hain. (Don 2)",
  "Aaj mere paas bangla hai, gaadi hai, bank balance hai, kya hai tumhare paas? (Namak Halaal)",
  "Pushpa, I hate tears. (Amar Prem)",
  "Aapke paas Bang Bang hai, maine ek ghante mein Bang Bang kiya. (Bang Bang!)",
  "Tumhara naam kya hai, Basanti? (Sholay)",
  "Babuji ne kaha gaon chhod do, sab ne kaha Paro ko chhod do, Paro ne kaha sharab chhod do, aaj tumne keh diya haweli chhod do... ek din aayega jab woh kahenge, duniya hi chhod do. (Devdas)",
  "Aaj mere paas building hai, property hai, bank balance hai, bangla hai, gaadi hai, kya hai tumhare paas? (Deewaar)",
  "Ek chutki sindoor ki keemat tum kya jaano Ramesh Babu. (Om Shanti Om)",
  "Tension lene ka nahin, sirf dene ka. (Chennai Express)",
  "Yeh haath humko dede Thakur! (Sholay)",
  "Koi dhanda chota nahi hota, aur dhande se bada koi dharm nahi hota. (Company)",
  "Tum ek machhli ke aankh ke baraabar ho, nakko, nakko. (Mughal-E-Azam)",
  "Hum ek baar jeete hain, ek baar marte hain, shaadi bhi ek baar hoti hai, aur pyar... ek hi baar hota hai. (Kuch Kuch Hota Hai)",
  "Aapke paas Bang Bang hai, maine ek ghante mein Bang Bang kiya. (Bang Bang!)",
  "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? (Deewaar)",
  "Bhagwan ke bharose na baithiye, kya pata bhagwan hamare bharose baitha ho. (OMG - Oh My God!)",
];
let quote_div = document.getElementsByClassName("quote_div")[0];
let quote_input = document.getElementsByClassName("quote_input")[0];
let timer_div = document.getElementsByClassName("timer")[0];
let quote_printer = () => {
  let index = Math.floor(Math.random() * dialogues.length);
  let choosen_quote = dialogues[index];
  choosen_quote = Array.from(choosen_quote);
  choosen_quote.forEach((letter) => {
    let letter_span = document.createElement("span");
    letter_span.innerHTML = letter;
    quote_div.appendChild(letter_span);
  });
};
quote_printer();
quote_input.addEventListener("input", () => {
  let array_of_quote_span = quote_div.querySelectorAll("span");
  let array_of_input = Array.from(quote_input.value);
  let correct = true;
  array_of_quote_span.forEach((letter_span, index) => {
    let quote_letter = letter_span.innerHTML;
    let input_letter = array_of_input[index];
    if (quote_letter == input_letter) {
      letter_span.classList.add("correct");
      letter_span.classList.remove("incorrect");
    } else if (input_letter == null) {
      letter_span.classList.remove("correct");
      letter_span.classList.remove("incorrect");
      correct = false;
    } else {
      letter_span.classList.add("incorrect");
      letter_span.classList.remove("correct");
      correct = false;
    }
  });
  if (correct == true) {
    quote_div.innerHTML = "";
    quote_input.value = "";
    quote_printer();
    time_seter();
  }
});
let time;
let time_seter = () => {
  timer_div.innerHTML = 0;
  time = new Date();
  setInterval(() => {
    timer_div.innerHTML = get_time();
  }, 1000);
};
let get_time = () => {
  counted_time = Math.floor((new Date() - time) / 1000);
  return counted_time;
};
time_seter();
