const main = () => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const EVENTDATE = new Date("July 30, 2023, 17:00:00");

  const countDown = new Date(EVENTDATE).getTime();
  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
};
main();

const first = {
  title: "Antara Mahale",
  description: `Having graduated with a law degree from the prestigious Benaras Hindu University, Antara has honed her expertise in the intricacies of cyber law. Embracing her deep-rooted belief in the power of technology as a force for good, she passionately advocates for its ethical utilization to foster progress and societal growth. Moreover, her impact extends beyond just the legal realm. Antara's intellectual curiosity and multi-dimensional interests are evident in her extensive body of work. Her insightful articles explore a diverse range of topics, from dissecting complex legal challenges to delving into the frontiers of space technologies. This breadth of knowledge showcases her holistic approach to understanding the intricate intersections between law, technology, and society.

  Antara Jha's journey stands as a testament to the potential of individuals to drive meaningful change through their ideas and expertise. Her unwavering dedication to advancing the responsible use of technology and addressing pressing global issues sets a high standard for others to follow. In a world where AI's role continues to expand, voices like Antara's provide invaluable guidance and inspiration, steering us towards a future where technology and humanity coexist harmoniously for the betterment of all.
  `,
  about: "Pioneering Ethics: Forging AI's Moral Compass",
  img: "images/Speaker/Antara.png",
};
const second = {
  title: "Nithya Subramanian",
  description: `Ideas are powerful but are meaningless without a story to contextualise them. In a world where we are constantly bombarded with information, it is increasingly important to not only communicate effectively, but also creatively. Text is only one method of communicating ideas . By incorporating graphics and figures into our communication, complex ideas can be conveyed in a way that is accessible, authentic, engaging and impactful. Multisensory experiences often make educational journeys fun to navigate and intake of information easier.

    In this talk, Nithya Subramanian delves into the need to deconstruct imagery and how one can do so. A data designer and illustrator who runs the independent design studio PoppadomCo, she is an expert on telling witty and thoughtful stories that use images, words and numbers. She also teaches visual storytelling at National Institute of Design and Ashoka University, and her work has featured in The Hindu, Mint Lounge, and Scroll. In this talk, she delves into the need to deconstruct imagery and how one can do so. Her insights into the power of images and the process of creating them are valuable for anyone interested in the fields of data science, art, or communication.
   `,
  about: "Reading the images the way we read words",
  img: "images/Speaker/Nithya.jpg",
};
const third = {
  title: "Devika Narayanan",
  description: `Migration is a global phenomenon in today’s world. People migrate in search of more lucrative professional opportunities, hoping to eke out a better existence for themselves. However, when migration is forced, via natural or civil disasters, it can lead to the uprooting of a sense of self and belonging. This may force us to reckon with several important questions - What does ‘home’ mean to us? Is it merely the place to which we share linguistic and cultural ties or the place where we build connections with people and put down our roots? 
    Our speaker, Devika Narayanan answers such questions and more as she delves into the story of Nostos Homes’ efforts in effective rehabilitation. Having left its mark as far away as Malawi in South Africa, this UK based non-profit operates on the principle of a life-sized Lego set. This means that all the parts of the home are manufactured separately and are simply assembled on site, at 1/3rd the cost of a brick-and-mortar home. Narayanan, an IIT Kharagpur alum, associate at BCG and Chief of Staff at Nostos, provides insights into the powerful stories of people rebuilding their lives with vigour, sheds light on how age is no barrier to changing the world and tells us why the best time to do anything is now.
    `,
  about: "Why You Shouldn’t Wait to Change the World",
  img: "images/Speaker/Devi.jpg",
};
const fourth = {
  title: "Amit Shah",
  description: `Why is it that so many people think they can't draw? Where did this thought come from? Well, our <next> speaker -Amit Shah, aka Sketchy Sultaan- is here to bust this myth – quite literally - in a very engaging way. He’ll show how the simple act of drawing cartoons and doodles can transform us.
    Sketchy Sultaan, a self-taught visual artist who started drawing in 2012, believes "AnyBody Can Draw".Creativity, expression and fun are the elements he brings to his cartoon and doodle art. He has created hundreds of cartoons and illustrations that reflect his personality, style and humor. Join us as he shares how he uses his art as a tool for communication, learning and happiness. Don't miss this chance to unleash your inner artist!
    `,
  about: "Anybody Can Draw",
  img: "images/Speaker/AmitShah.jpeg",
};
const fifth = {
  title: "KT Ravindran",
  description: `K T Ravindran is an Urban Designer who is Member Governing Council INTACH, Trustee of the Madhavan Nair Foundation and was Member of the Advisory Board for the United Nations Capital Master Plan, New York. He was also Dean SPA Delhi, Dean and Senior Academic Advisor, RICS School of Built Environment. He was formerly Vice Chairman of the Environmental Impact Assessment Committee, Government of India. 

    He was the Founding President of the Institute of Urban Designers India, and the Mentor for the Smart City Mission on Public Open spaces. He has travelled extensively across the world and his current practice includes design of green-field cities, cultural buildings, memorials, adaptive reuse and Urban Conservation. His works and research are published in journals and books internationally. He has consistently pursued sustainable Architecture and Urban Design, championing the cause in multiple international forums and academia, and has dedicated his expertise into weaving heritage into the fabric of modern urban life to create inclusive and enriched urban spaces.
    `,
  about: "The Order Chaos Conundrum",
  img: "images/Speaker/KT.jpg",
};
const data = [first, second, third, fourth, fifth];

var i = 0;

function leftClick() {
  i -= 2;
  if (i < 0) i = data.length + i;

  var j = i - 1;
  if (j == -1) j = data.length - 1;

  document.getElementById("S2Name").innerHTML = data[j].title;
  document.getElementById("S2Desc").innerHTML = data[j].description;
  document.getElementById("S2Title").innerHTML = data[j].about;
  document.getElementById("S2Src").src = data[j].img;

  document.getElementById("S1Name").innerHTML = data[i].title;
  document.getElementById("S1Desc").innerHTML = data[i].description;
  document.getElementById("S1Title").innerHTML = data[i].about;
  document.getElementById("S1Src").src = data[i].img;
}

function rightClick() {
  i += 2;
  if (i > data.length - 1) i = i % data.length;
  var j = i + 1;
  if (i == data.length) {
    j = 0;
  }

  document.getElementById("S2Name").innerHTML = data[j].title;
  document.getElementById("S2Desc").innerHTML = data[j].description;
  document.getElementById("S2Title").innerHTML = data[j].about;
  document.getElementById("S2Src").src = data[j].img;

  document.getElementById("S1Name").innerHTML = data[i].title;
  document.getElementById("S1Desc").innerHTML = data[i].description;
  document.getElementById("S1Title").innerHTML = data[i].about;
  document.getElementById("S1Src").src = data[i].img;
}
