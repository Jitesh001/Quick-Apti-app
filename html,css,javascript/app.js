var count = 0

var lis = [];
var index = 0;
function populate() {
    index++;
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = "<b>" + quiz.getQuestionIndex().text + "</b>";

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        lis.push(" "+ index +". " + quiz.getQuestionIndex().answer + " ");
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var score = (quiz.score * 100 /quiz.questions.length).toFixed(2);
    var quizEnded = "<h1>Result</h1>";
    quizEnded += '<br><br>' + "<h2 id='score'> Total Questions : " + quiz.questions.length + "<br><br>"+
    "Correct Answers : "+ quiz.score +  "<br><br>" + "Your Percentage : " + score + "<br><h3 id = 'lis'>"+
    "Answers : <br>" +lis+"</h3>";
    var element = document.getElementById("quiz");
    element.innerHTML = quizEnded ;

};

var n = prompt('Enter a topic(quant, verbal or logic)');

//put your quanti questions
var quanti = [
    new Question("What was the day on 15th august 1947 ?", ["Friday", 'Saturday', 'Thursday', "Friday"], "Friday"),
    new Question("Today is Monday. After 61 days, it will be :", ["Tuesday", "Thursday", "Monday", "Saturday"], "Saturday"),
    new Question("If 20% of a = b, then b% of 20 is the same as :", ["4% of a","6% of a", "10% of a", "8% of a"],"4% of a"),
    new Question("If each side of a square is increased by 25%, find the percentage change in its area?", ["60.30", '50.43', "49.75", "56.25"], "56.25"),
    new Question("A bag contains 6 white and 4 black balls .2 balls are drawn at random. Find the probability that they are of same colour.",['4/15', "7/15", '6/15', '8/15'], "7/15"),
    new Question("IA student multiplied a number by 3/5 instead of 5/3, What is the percentage error in the calculation ?", ["54 %","74 %","64 %","44 %"],"64 %"),
    new Question("Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:", ["2:5", "3:5","4:5","6:5"],"4:5"),
    new Question("If selling price is doubled, the profit triples. Find the profit percent ?", ["100%" ,"200%", "300%", "400%"],"100%"),
    new Question("Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?", ["25200", "12500", "52500", "24200"],"25200"),
    new Question("Insert the missing number. 26, 63, 124, 215, 342, (....)", ["391", "421", "511","481"],"511"),
    new Question("If each edge of a cube is increased by 50%, find the percentage increase in Its surface area", ["125%", "150%", "130%", "140"],"125%"),
    new Question("Three number are in the ratio of 3 : 4 : 5 and their L.C.M. is 2400. Their H.C.F. is:", ["70","80", "40", "120"],"40"),
    new Question("Two cards are drawn at random from a pack of 52 cards.what is the probability that either both are black or both are queen?", ["52/221","53/221", "55/221", "54/221"],"55/221"),
    new Question("if the price of a book is first decreased by 25% and then increased by 20%, then the net change in the price will be : ", ["10", "20", "30", "40"],"10"),
    new Question("A shopkeeper cheats to the extent of 10% while buying and selling, by using false weights. His total gain is.", ["20%","21%", "22%", "23%"],"21%"),
    new Question("What is the average of first five multiples of 12?", ["36", "40","28", "34"],"36"),
    new Question("Average of five numbers is 20. If each number is multiplied by 2, what will be the new average?", ["30","40","50","60"],"40"),
    new Question("10 typists can type 600 pages in 8 hours.Find the average number of pages typed by each typist in an hour.", ["7","7.5","8","8.5"],"7.5"),
    new Question("There are 140 tickets (numbered 1 to 140) in a bowl. Find the probability of choosing a ticket which bears multiple of either 3 or 7.", ["3/5","5/7","3/7","4/3"],"3/7"),
    new Question("The circumference of a circle having radius equal to 35 cm is equal to the perimeter of a rectangle. If the area of rectangle is 2400 cm2, find the length of rectangle.", ["60","70","80","90"],"80"),
    new Question("The market price of an item is 20% more than its cost price. If after selling the item, the profit percent obtained is 10%, find the discount given.", ["6","8","10","7"],"10"),
    new Question("How many litres of water must be added to 120 litre mixture that contains milk and water in the 7:5 such that the resulting mixture has 50% water in it?", ["10","20","30","40"],"20"),
    new Question("The ratio of land and water on earth is 1: 2. In the northern hemisphere, the ratio is 2: 3. What is the ratio in the southern hemisphere?", ["2:11","3:11","4:11","5:11"],"4:11")];


var verbal = [
            new Question("To make clean breast of", ["To gain prominence","To praise oneself","To confess without of reserve","To destroy before it blooms"],'To confess without of reserve'),
            new Question("Select synonym: CORPULENT", ["Lean", "Emaciated","Gaunt", "Obese"],"Obese"),
            new Question("Complete the sentence: Even if it rains I shall come means .....", ["we could detect that he was very happy","he could succeed in doing it easily", "people came to know that he was annoyed", "he succeeded in camouflaging his emotions"],"people came to know that he was annoyed"),
            new Question("The miser gazed ...... at the pile of gold coins in front of him.", ["avidly","admiringly","thoughtfully","earnestly"],"avidly"),            
            new Question("Select Correct Spelling: ", ["Sepulchral","Sepilchrle", "Sepalchrul","Sepalchrl"],'Sepulchral'),
            new Question("Extreme old age when a man behaves like a fool", ["Imbecility","Senility","Dotage","Superannuation"],'Dotage'),
            new Question("The study of ancient societies", ["Anthropology", "Archaeology","History","Ethnology"],'Archaeology'),
            new Question("Select synonym: EMBEZZLE", ["Misappropriate","Balance","Remunerate","Clear"],"Misappropriate"),
            new Question("Select antonym: COMMISSIONED", ["Started", "Closed", "Finished","Terminated"],"Terminated"),
            new Question("DIVA:OPERA", ["producer:theatre", "director:drama", "conductor:bus", "thespian:play"],'thespian:play'),
            new Question("Select Correct Spelling: ", ["Ommineous", "Omineous", "Ominous", "Omenous"],'Ominous'),
            new Question("Catching the earlier train will give us the ...... to do some shopping", ["possibility","chance","luck","occasion"],"chance"),
            new Question("Change the speech: I told him that he was not working hard", ['I said to him, "You are not working hard."', 'I told to him, "You are not working hard."', 'I said, "You are not working hard."', 'I said to him, "He is not working hard."'],'I said to him, "You are not working hard."'),
            new Question("Select synonym: AUGUST", ["Common","Ridiculous","Dignified","Petty"],'Dignified'),
            new Question("Select antonym: RELINQUISH", ["Abdicate", "Renounce", "Possess", "Deny"],"Possess"),
            new Question("Complete the sentence: His appearance is unsmiling but ......" ["his heart is full of compassion for others", "people are afraid of him", "he is full of jealousy towards his colleagues", "he looks very serious on most occasions"],'his heart is full of compassion for others'),
            new Question("To keeps one's temper", ["To become hungry","To be in good mood","To preserve ones energy","To be aloof from"],'To be in good mood'),
            new Question("THRUST:SPEAR", ["mangle:iron", "scabbard:sword", "bow:arrow", "fence:epee"],'fence:epee'),
            new Question("Select antonym: QUIESCENT", ["Dormant", "Active", "Weak", "Unconcerned"],'Active'),
            new Question("The ruling party will have to put its own house ...... order", ["in","on","to", "into"],'in'),
            new Question("A person who insists on something", ["Disciplinarian","Stickler","Instantaneous", "Boaster"],'Stickler'),
            new Question("Select Correct Spelling: ", ["Foreign", "Foreine", "Foren", "Foring"],'"Foreign"')];

var logical = [
            new Question("Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?", ['10', "16", "13", "15"], "15"),
            new Question("RQP, ONM, LKJ, _____, FED", ["IHG", "CAB", "JKL", "GHI"], "IHG"),
            new Question("Pointing to Manju, Raju said, 'The son of her only brother is the brother of my wife'. How is Manju related to Raju?", ["Mother's sister","Grandmother", "Mother-in-law", "Sister of father-in-law"], "Sister of father-in-law"),
            new Question("Which word is the odd man out?", ["trivial", "unimportant","important", "insignificant"], "unimportant"),
            new Question("If '-' stands for 'x',  'x' stands for '+',  '+'stands for '÷' and '÷' stands for '-',then what is the value of 9÷18x15+3-6x12 ?", ['24', "33", "42", '52'], "33"),
            new Question("Paw : Cat :: Hoof : ?", ["Lamb", "Horse", "Elephant", "Tiger"], "Horse"),
            new Question("Select Essential part : harvest", ["autumn", "stockpile", "tractor", "crop"], "crop"),
            new Question("If4@5=189 and 10@8=1512,then 6@9=", ["1148", "945", "932", "976"], "945"),
            new Question("In a certain code language, if the value of 28 + 14 = 50 and 36 + 43 = 63, then what is the value of 44 + 52 =?", ["53", '52', '56', '58'], "56"),
            new Question("If DELHI is coded as 73541 and CALCUTTA as 82589662, how can CALICUT be coded?", ["5279431", "5978213", "8251896", "8230161"], "8251896"),
            new Question(" Look at this series: 2, 1, (1/2), (1/4), … What number should come next?", ["1/3", '1/8', "1/5","1/16"], "1/8"),
            new Question("A watch shows 4.30. If the minute hand points to east, in what direction will the hour hand point?", ["North-West", "North-East", "South", "North"], "North"),
            new Question("A is the husband of B. E is the daughter of C. A is the father of C. How is B related to E?", ["Mother", "Grandmother", "Aunt", "Cousin"], "Grandmother"),
            new Question("Select Essential part : desert", ["oasis", "cactus", "arid", "flat"], "arid"),
            new Question("If A means '-',B means '÷',C means '+',and D means 'x',then 15B3C24A12D2 =?", ["34","20", "5", "15"], "5"),
            new Question("Statements: The old order changed yielding place to new Conclusion : I.Change is the law of nature. II.Discard old ideas because they are old.", ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows"], "Only conclusion I follows"),
            new Question("Pick the odd man out?", ["equitable", "just","fair", "biased"], "biased"),
            new Question("What is the angle between the two hands of a clock when the time shown by the clock is 5.30 p.m. ?", ["0", "5", "3", "15"], "15"),
            new Question("Insomnia is to Lead as Minamata is to……", ["Mercury", "Tobacco", "Alcholol", "Chromium"], "Mercury"),
            new Question("Safe : Secure :: Protect :", ["Conserve", "Lock", "Guard", "Sure"], "Guard"),
            new Question("If today is Thursday , after 730 days which will be the day of the week ?", ["Monday", "Thursday", "Saturday", "Tuesday"], "Saturday"),
            new Question("Raju who is facing east, turns 1000 in the anti-clock-wise direction and then 1450 in the clock-wise direction. Which direction is he facing now?", ["North-West", "North", "South-East", "South"], "South-East"),
            ];
// shuffle questions
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
};

// // create quiz.
if (n == 'quant'){
    document.getElementById("title").innerHTML = "Quantitative Test";
    var m = prompt("Enter number of questions(max 20)");
    shuffle(quanti);
    var quiz = new Quiz(quanti.slice(0,m));

    // display quiz
    populate();
}

else if (n == 'verbal'){
    shuffle(verbal);
    document.getElementById("title").innerHTML = "Verbal Ability Test";
    var m = prompt("Enter number of questions(max 20)");
    var quiz = new Quiz(verbal.slice(0,m));

    // display quiz
    populate();
}
else if (n == 'logic'){
    document.getElementById("title").innerHTML = "Logical Reasoning Test";
    shuffle(logical);
    var m = prompt("Enter number of questions(max 20)");
    var quiz = new Quiz(logical.slice(0,m));

    // display quiz
    populate();
}

