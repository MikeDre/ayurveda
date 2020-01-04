<template>
  <div class="uk-container uk-container-small uk-text-center">
      <div class="logo">
        <img src="//static1.squarespace.com/static/58caa7e9d1758e9193afa4c4/t/58caa8358419c287d4b90659/1567614336841/?format=1500w" alt="Kitchen &amp; Soul" width="250" class="uk-margin-medium-top">
      </div>
      <!-- PHYSICAL APPEARANCE -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 1">
              <h4 class="quiz__category">Okay let’s start with your physical appearance</h4>
              <h2><strong>How would you describe your body?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">I would say that I am slim or petite or tall</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">I would say that I am medium size, with a muscular body with curves </button>
              <button class="quiz__selection" @click="addKapha(currentStep)">I would say that I am a larger build and maybe overweight </button>
          </div>

          <div class="quiz__question" v-if="currentStep === 2">
              <h4 class="quiz__category">Okay let’s start with your physical appearance</h4>
              <h2><strong>Ability to lose or gain weight?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">I find it difficult to gain weight</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">I tend to stay the same </button>
              <button class="quiz__selection" @click="addKapha(currentStep)">I find it really hard to lose weight it requires all my effort</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 3">
              <h4 class="quiz__category">Okay let’s start with your physical appearance</h4>
              <h2><strong>What is your skin like?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">It’s quite dry can be rough, dark circles under eyes, tan easily</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">It’s quite fair, red, prone to freckles, prone to sunburn (my friends call me lobby!)</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">It’s clear, combination skin, without excess wrinkles</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 4">
              <h4 class="quiz__category">Okay let’s start with your physical appearance</h4>
              <h2><strong>What is your hair like?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Curly, dry or coarse, dark (i.e. hard to handle)</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Fine, early grey, blonde, red</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Thick, wavy, oily, dark or light (i.e. wild)</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 5">
              <h4 class="quiz__category">Okay let’s start with your physical appearance</h4>
              <h2><strong>Teeth?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Very large or very small</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Moderate size</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Small to moderate</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 6">
              <h4 class="quiz__category">Okay let’s start with your physical appearance</h4>
              <h2><strong>Eyes?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">My eyes are small, brown</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">My eyes are green, hazel or blue, and sharp</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">My eyes are large, brown or blue with long lashes </button>
          </div>
      </div>
      <!-- PHYSICAL APPEARANCE -->

      <!-- MENTAL PROFILE -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 7">
              <h4 class="quiz__category">Now let’s look at your mental profile</h4>
              <h2><strong>Would you say your mind is?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Quick and restless, jumping all over the show</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Intellectual and driven, “I have a goal”</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Calm, steady and stable “chill AF”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 8">
              <h4 class="quiz__category">Now let’s look at your mental profile</h4>
              <h2><strong>What is your memory like? Sorry, what did you say (bad joke) </strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Short-term difficulty retaining information</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Good general memory, quite focused</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">“I take my sweet time in learning but have a memory like an elephant”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 9">
              <h4 class="quiz__category">Now let’s look at your mental profile</h4>
              <h2><strong>Thoughts?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">onstantly changing, (no idea what I want)</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">“I know what I want and the eye is on the prize”</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Slow and steady wins the race</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 10">
              <h4 class="quiz__category">Now let’s look at your mental profile</h4>
              <h2><strong>Emotional temperament?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Insecure, unpredictable, (a little bit all over the show)</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Can be a little intense, quite goal focused, “hell I go after what I want”</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Calm, can be a bit needy or greedy, attach myself</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 11">
              <h4 class="quiz__category">Now let’s look at your mental profile</h4>
              <h2><strong>Sleep?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Interrupted, light</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Sound, medium</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Sound, heavy, long, “ you are not waking me for shiz”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 12">
              <h4 class="quiz__category">Now let’s look at your mental profile</h4>
              <h2><strong>Speech?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Fast maybe a little bit garbled</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Fast, sharp, clear, (I should have been a politician)</button>
              <button class="quiz__selection" @click="addKapha(currentStep)"> Slow, clear, friendly, (should have done voice-over ads)</button>
          </div>
      </div>
      <!-- MENTAL PROFILE -->

      <!-- PREFERENCES  -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 13">
              <h4 class="quiz__category">Now what about the way you behave and your preferences</h4>
              <h2><strong>How do you eat?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Quick, “no one is getting my food ever!”</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Medium, easy does it</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Slow, “my friends are definitely on dessert whilst I am still chomping at my main course”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 14">
              <h4 class="quiz__category">Now what about the way you behave and your preferences</h4>
              <h2><strong>When do you eat?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Irregularly</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">“Excuse me, please don’t talk to me I am hungry”</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Can easily miss meals</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 15">
              <h4 class="quiz__category">Now what about the way you behave and your preferences</h4>
              <h2><strong>What kind of weather do you like?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Not a fan of winter </button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Not a fan of the summer and the heat</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Not a fan of the rain and damp weather</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 16">
              <h4 class="quiz__category">Now what about the way you behave and your preferences</h4>
              <h2><strong>How do you react to stress?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Quickly get myself all fired up</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">I take it in my stride</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">I don’t tend to react, too chilled</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 17">
              <h4 class="quiz__category">Now what about the way you behave and your preferences</h4>
              <h2><strong>Money? </strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">Saving? It slips through my fingers</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Saves big, spends big</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Saves regularly, I’m in the money</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 18">
              <h4 class="quiz__category">Now what about the way you behave and your preferences</h4>
              <h2><strong>Friendships?</strong></h2>
              <button class="quiz__selection" @click="addVata(currentStep)">I have lots of friends, busy busy makes friends quickly</button>
              <button class="quiz__selection" @click="addPitta(currentStep)">Can be quite lonely and only few friends</button>
              <button class="quiz__selection" @click="addKapha(currentStep)">Have long-lasting friendships with people I’ve known for a long time</button>
          </div>
      </div>
      <!-- PREFERENCES  -->

      <!-- GO TO RESULTS -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 19">
              <h2><strong>View results</strong></h2>
              <div class="uk-margin-large">
                <form :action="formURL" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate quiz__form" novalidate>
                    <div class="uk-margin-medium-bottom">
                        <p><strong>Got you interested?</strong><br>Why not subscribe for a FREE info sheet on recommended diet suggestions for your unique Dosha type. You will also have the opportunity to register for my FREE ‘2 Days of Awesome’ digestive reset</p>
                    </div>
                    <div class="uk-margin">
                        <label class="quiz__form-label" for="name">Name *</label>
                        <input id="name" name="NAME" v-model="subscriberName" class="uk-input uk-form-width-large uk-form-large uk-margin-small-bottom" type="text" placeholder="Enter name here">

                        <label class="quiz__form-label" for="name">E-mail *</label>
                        <input required id="email" name="EMAIL" v-model="subscriberEmail" class="uk-input uk-form-width-large uk-form-large" type="email" placeholder="Enter email here">
                        
                        <input required id="dosha" hidden name="DOSHA" v-model="finalResult" v-on:input="enableSubmit()" class="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Dosha result">

                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_81b0366064ebef409489ac748_09b33a6107" tabindex="-1" value=""></div>
                    </div>
                    <div class="uk-margin">
                        <button type="submit" class="uk-button uk-button-green">Submit &amp; view results</button>
                        <a :href="resultsPage" class="quiz__skip-email" :disabled="formFilled">No thanks, take me straight to my results</a>
                    </div>
                </form>
              </div>
              <hr>
          </div>
      </div>
      <!-- GO TO RESULTS -->

      <!-- RESULTS -->
      <div class="quiz__wrap">
          <div class="quiz__answer" v-if="currentStep === 20">

              <div v-if="finalResult === 'vata'">
                  <img src="~/assets/vata.jpg" class="quiz__img">
                  <h2><strong>You are: VATA</strong></h2>
                  <h4 class="quiz__category--dosha">Vata Dosha (Wind energy)</h4>
                  <p>Vata comes from the elements of space and air and it is known as the energy of movement that governs all the biological activities of the body. It is also called the ‘king of doshas’ since it governs the body’s greater life force.</p>
                  <p>People born with Vata dosha are usually active, creative and are gifted with the natural ability to express and communicate. They are also quick learners, have a lively and fun personality, and are full of joy and enthusiasm when in balance. But when their Vata goes out of balance, they start showing tendencies to act on impulse, mood swings and respond to stress with fear, anxiety and worry.</p>

                  <hr>
                  <h4 class="quiz__category--dosha">Vata Body Type</h4>
                  <p>People of Vata body type are generally shorter or taller than average and are naturally slim without being overly muscly. </p>
                  <p>Their hair is usually curly or naturally wavy. They feel the cold especially in their hands and feet, nails can be rough and brittle. They might have a disturbed sleep pattern and so sleep less than other two body types.</p>
                  <p>Vatas love sweet foods and love their drinks hot.</p>

                  <hr>
                  <h4 class="quiz__category--dosha">The Vata Mind</h4>
                  <p>Psychologically, The Vata tribe have a good short term memory and have a quick mental understanding and so are able to grasp things quickly and easily. Though they might understand things quickly, but also have the tendency to forget with equal speed. They are not known for their will power and possess little tolerance, confidence and boldness. Vatas can be nervous, fearful and easily get anxious.</p>
              </div>

              <div v-if="finalResult === 'pitta'">
                  <img src="~/assets/pitta.jpg" class="quiz__img">
                  <h2><strong>You are: PITTA</strong></h2>
                  <h4 class="quiz__category--dosha">Pitta Dosha (Fire energy)</h4>
                  <p>Psychologically, The Vata tribe have a good short term memory and have a quick mental understanding and so are able to grasp things quickly and easily. Though they might understand things quickly, but also have the tendency to forget with equal speed. They are not known for their will power and possess little tolerance, confidence and boldness. Vatas can be nervous, fearful and easily get anxious.</p>

                  <hr>
                  <h4 class="quiz__category--dosha">Pitta Body Type</h4>
                  <p>Pittas are usually of medium height and have a delicate and slender body frame. Their muscle development is moderate and usually have a fair or reddish kind of complexion. They are blessed with a soft skin and hair is usually silky but more on the thinner side and may go grey early. The colour of their eyes usually range from green, grey or copper brown.</p>
                  <p>Pittas have a strong metabolism and good digestion which results in them having a healthy appetite. They have a natural craving for both sweet and bitter foods.</p>

                  <hr>
                  <h4 class="quiz__category--dosha">The Pitta Mind</h4>
                  <p>The Pitta tribe are sharp mind with excellent concentration powers. They tend to quickly comprehend situations and react with agility. They are considered to be good speakers and generally possess good management and leadership skills. They are usually competitive by nature and enjoy challenges. </p>
              </div>

              <div v-if="finalResult === 'kapha'">
                  <img src="~/assets/kapha.jpg" class="quiz__img">
                  <h2><strong>You are: KAPHA</strong></h2>
                  <h4 class="quiz__category--dosha">Kapha Dosha (Water energy)</h4>
                  <p>Kapha Dosha is the energy of building and lubrication that provides the body with physical form, structure and smooth functioning of all its parts. The main location of kapha in the body are chest, throat, lungs, head, fatty tissues, connective tissues, ligaments and tendons. It aids in lubricating the joints, store energy and give bulk to the tissues.</p>
                  <p>Kapha people are usually loving in nature, easy going, relaxed and slow paced. They are compassionate and non-judgmental people and have a graceful appearance. They do not get upset easily but can be known to be possessive and or loyal and so hold on to things and people for a long period of time. They are usually good with money, have savings and/or are wealthy.</p>
                  
                  <hr>
                  <h4 class="quiz__category--dosha">Kapha Body Type</h4>
                  <p>Kapha people have well developed bodies, they gain weight easily and find it difficult to lose. They usually have fair complexion and have good skin elasticity. Their hair is usually thick, dark and of wavy kind and eyes are large and dark brown or blue.</p>
                  <p>They have a regular appetite but due to slow digestion they tend to eat less but more often.</p>
                  
                  <hr>
                  <h4 class="quiz__category--dosha">The Kapha Mind</h4>
                  <p>Kaphas are chilled and do not get irritated easily. They are of forgiving and peaceful nature and believe in maintaining harmony in their surroundings. However, they do exhibit traits of greed, attachment, envy and possessiveness. They like to learn and at a slow and steady pace, but once they understand their knowledge will stay with them. </p>
              </div>

          </div>
      </div>
      <!-- RESULTS -->
      
      <button 
        class="uk-button uk-button-secondary"
        @click="previousStep()" 
        v-if="currentStep > 1 && currentStep !== 20"
      >
        Go back
      </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            subscriberName: null,
            subscriberEmail: null,
            vata: 0,
            pitta: 0,
            kapha: 0,
            lastDosha: '',
            doshaHistory: ['vata', 'kapha', 'pitta'],
            currentStep: 1,
            finalResult: null,
            formFilled: false,
            formURL: 'https://kitchenandsoul.us14.list-manage.com/subscribe/post?u=42919a14925c3194f0333a715&amp;id=3d203b7c6a',
            resultsPage: ''
        }
    },
    methods: {
        addVata(currentStep) {
            this.vata = this.vata + 1
            this.doshaHistory.push('vata')

            if (currentStep >= 18) {
                this.calculateResults()
            }

            this.nextStep()
        },
        addPitta(currentStep) {
            this.pitta = this.pitta + 1
            this.doshaHistory.push('pitta')

            if (currentStep >= 18) {
                this.calculateResults()
            }

            this.nextStep()
        },
        addKapha(currentStep) {
            this.kapha = this.kapha + 1
            this.doshaHistory.push('kapha')

            if (currentStep >= 18) {
                this.calculateResults()
            }

            this.nextStep()
        },
        setResultsPage() {
            if (this.finalResult === 'vata') {
                this.resultsPage = 'https://www.kitchenandsoul.uk/ayurveda-results/vata'
            } else if (this.finalResult === 'pitta') {
                this.resultsPage = 'https://www.kitchenandsoul.uk/ayurveda-results/pitta'
            } else if (this.finalResult === 'kapha') {
                this.resultsPage = 'https://www.kitchenandsoul.uk/ayurveda-results/kapha'
            }
        },
        nextStep() {
            this.currentStep = this.currentStep + 1
            this.lastDosha = this.doshaHistory.slice(-1).pop()
        },
        previousStep() {
            this.currentStep = this.currentStep - 1
            this.doshaHistory.pop()
            this.lastDosha = this.doshaHistory.slice(-1).pop()

            if ( this.lastDosha === 'vata' ) {
                this.vata = this.vata - 1
            } else if ( this.lastDosha === 'pitta' ) {
                this.pitta = this.pitta - 1
            } if ( this.lastDosha === 'kapha' ) {
                this.kapha = this.kapha - 1
            }
        },
        goToEmail() {
            this.currentStep = 19
            this.calculateResults()
        },
        enableSubmit() {
            this.formFilled = true
        },
        goToResults() {
            this.currentStep = 20
            this.calculateResults()
        },
        calculateResults() {
            let vataResults = (this.doshaHistory.toString().match(/vata/g).length)
            let pittaResults = this.doshaHistory.toString().match(/pitta/g).length
            let kaphaResults = this.doshaHistory.toString().match(/kapha/g).length

            let ayurvedaResults = {
                'vata': vataResults,
                'pitta': pittaResults,
                'kapha': kaphaResults,
            }

            let ayurvedaTopResult = Object.keys(ayurvedaResults).reduce((a, b) => ayurvedaResults[a] > ayurvedaResults[b] ? a : b);
            this.finalResult = ayurvedaTopResult
            this.setResultsPage()
        },
    },
}
</script>

<style>
.quiz__question {
    margin-top: 100px;
}

.quiz__question h2 {
    margin-top: 15px;
    margin-bottom: 50px;
}

.quiz__answer {
    margin-top: 100px;
    margin-bottom: 100px;
    font-size: 20px;
}

.quiz__selection {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    border: 2px solid #ddd;
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.quiz__selection:hover {
    border: 2px solid #aaa;
    cursor: pointer;
}

.quiz__back {
    display: block;
    min-width: 300px;
    margin: 0 auto 15px;
    border: 2px solid #ddd;
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.quiz__back:hover {
    border: 2px solid #aaa;
    cursor: pointer;
}

.quiz__category {
    color: #888;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
}

.quiz__category--dosha {
    color: #888;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 20px;
    text-transform: uppercase;
}

.quiz__skip-email {
    display: block;
    font-size: 12px;
    padding-top: 20px;
    color: #555;
}

form.quiz__form{
    background: #f7f7f7;
    padding: 50px;
    border: 1px solid #ddd;
    border-radius: 10px;
}

label.quiz__form-label {
    text-align: left;
    display: block;
    max-width: 500px;
    margin: 15px auto 10px;
    font-weight: 700;
}

.quiz__img {
    display: block;
    margin: 0 auto;
    border-radius: 100px;
    max-width: 140px;
}

.uk-button-green {
    color: #fff;
    background-color: #22c10e;
}
</style>
