function main() {
  'use strict';

  function random_int (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var topic = 'PPResume';
  var title = document.getElementsByTagName('h1')[0].textContent;
  var is_ppresume_topic = (title.toUpperCase().indexOf(topic.toUpperCase()) == -1 ? false : true);

  if (! is_ppresume_topic) {
    console.log("This is not a " + topic + " topic, you've made a wrong choice, my master...");
    return;
  }

  var words = ['Learn from yesterday, live for today, hope for tomorrow.',
               'I hear and I forget, I see and I remember. I do and I understand.',
               'Life is not a problem to be solved, but a reality to be experienced.',
               'Breakdowns can create breakthroughs. Things fall apart so things can fall together.',
               'Chose a job you love, and you will never have to work a day in your life.',
               'Life always offers you a second chance. It is called tomorrow.',
               'I love my job only when I am on vacation.',
               'I am on a seafood diet. I see food, and I eat it.',
               'A balanced diet means a cupcake in each hand.',
               'If you are hotter than me, then that means I am cooler than you.',
               'All my life I thought air was free, until I bought a bag of chips.',
               'I am sorry that I am not updating my Facebook status, my cat ate my mouse.',
               'My room is like the Bermuda triangle, stuff goes in and is never seen again.',
               'It is just life. Just live it.',
               'If you do not make mistakes, you are not working on hard enough problems. And that is a big mistake.',
               'The bad news is time flies. The good news is you are the pilot.',
               '1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d.',
               'Why are they called apartments if they are all stuck together?',
              'Do not think of yourself as an ugly person, think of yourself as a beautiful monkey. It always gets laughs!',
              'When nothing goes right, Go left.'];

  var has_captcha = document.getElementById('captcha_image');
  if (has_captcha) {
    console.log("This page has captcha image, I can't post for you, master, sorry...");
    return;
  }
  var textarea = document.querySelector('textarea[id=last]');
  if (! textarea) {
    console.log("You've just posted a comment already, I'll close the window and exit...");
    setTimeout(function () { window.close(); }, 3000);
    return;
  }

  textarea.innerHTML = words[random_int(0, words.length)];

  var submit_button = document.querySelector('input[name=submit_btn]');
  submit_button.click();
  setTimeout(window.close(),3000);
};

function second(){ 
    return Math.floor(Math.random() * 60);
};

var ms= second() * 1000;

setTimeout(main, ms);
