<template>
  <div class="uk-container uk-container-small">

      <!-- PHYSICAL APPEARANCE -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 1">
              <h2><strong>How would you describe your body?</strong></h2>
              <h4 class="quiz__category">Physical Appearance</h4>
              <button class="quiz__selection" @click="addVata()">I would say that I am slim or petite or tall</button>
              <button class="quiz__selection" @click="addPitta()">I would say that I am medium size, with a muscular body with curves </button>
              <button class="quiz__selection" @click="addKapha()">I would say that I am a larger build and maybe overweight </button>
          </div>

          <div class="quiz__question" v-if="currentStep === 2">
              <h2><strong>Ability to lose or gain weight?</strong></h2>
              <h4 class="quiz__category">Physical Appearance</h4>
              <button class="quiz__selection" @click="addVata()">I find it difficult to gain weight</button>
              <button class="quiz__selection" @click="addPitta()">I tend to stay the same </button>
              <button class="quiz__selection" @click="addKapha()">I find it really hard to lose weight it requires all my effort</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 3">
              <h2><strong>What is your skin like?</strong></h2>
              <h4 class="quiz__category">Physical Appearance</h4>
              <button class="quiz__selection" @click="addVata()">It’s quite dry can be rough, dark circles under eyes, tan easily</button>
              <button class="quiz__selection" @click="addPitta()">It’s quite fair, red, prone to freckles, prone to sunburn (my friends call me lobby!)</button>
              <button class="quiz__selection" @click="addKapha()">It’s clear, combination skin, without excess wrinkles</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 4">
              <h2><strong>What is your hair like?</strong></h2>
              <h4 class="quiz__category">Physical Appearance</h4>
              <button class="quiz__selection" @click="addVata()">Curly, dry or coarse, dark (i.e. hard to handle)</button>
              <button class="quiz__selection" @click="addPitta()">Fine, early grey, blonde, red</button>
              <button class="quiz__selection" @click="addKapha()">Thick, wavy, oily, dark or light (i.e. wild)</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 5">
              <h2><strong>Teeth?</strong></h2>
              <h4 class="quiz__category">Physical Appearance</h4>
              <button class="quiz__selection" @click="addVata()">Very large or very small</button>
              <button class="quiz__selection" @click="addPitta()">Moderate size</button>
              <button class="quiz__selection" @click="addKapha()">Small to moderate</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 6">
              <h2><strong>Eyes?</strong></h2>
              <h4 class="quiz__category">Physical Appearance</h4>
              <button class="quiz__selection" @click="addVata()">My eyes are small, brown</button>
              <button class="quiz__selection" @click="addPitta()">My eyes are green, hazel or blue, and sharp</button>
              <button class="quiz__selection" @click="addKapha()">My eyes are large, brown or blue with long lashes </button>
          </div>
      </div>
      <!-- PHYSICAL APPEARANCE -->

      <!-- MENTAL PROFILE -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 7">
              <h2><strong>Would you say your mind is?</strong></h2>
              <h4 class="quiz__category">Mental Profile</h4>
              <button class="quiz__selection" @click="addVata()">Quick and restless, jumping all over the show</button>
              <button class="quiz__selection" @click="addPitta()">Intellectual and driven, “I have a goal”</button>
              <button class="quiz__selection" @click="addKapha()">Calm, steady and stable “chill AF”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 8">
              <h2><strong>What is your memory like? Sorry, what did you say (bad joke) </strong></h2>
              <h4 class="quiz__category">Mental Profile</h4>
              <button class="quiz__selection" @click="addVata()">Short-term difficulty retaining information</button>
              <button class="quiz__selection" @click="addPitta()">Good general memory, quite focused</button>
              <button class="quiz__selection" @click="addKapha()">“I take my sweet time in learning but have a memory like an elephant”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 9">
              <h2><strong>Thoughts?</strong></h2>
              <h4 class="quiz__category">Mental Profile</h4>
              <button class="quiz__selection" @click="addVata()">onstantly changing, (no idea what I want)</button>
              <button class="quiz__selection" @click="addPitta()">“I know what I want and the eye is on the prize”</button>
              <button class="quiz__selection" @click="addKapha()">Slow and steady wins the race</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 10">
              <h2><strong>Emotional temperament?</strong></h2>
              <h4 class="quiz__category">Mental Profile</h4>
              <button class="quiz__selection" @click="addVata()">Insecure, unpredictable, (a little bit all over the show)</button>
              <button class="quiz__selection" @click="addPitta()">Can be a little intense, quite goal focused, “hell I go after what I want”</button>
              <button class="quiz__selection" @click="addKapha()">Calm, can be a bit needy or greedy, attach myself</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 11">
              <h2><strong>Sleep?</strong></h2>
              <h4 class="quiz__category">Mental Profile</h4>
              <button class="quiz__selection" @click="addVata()">Interrupted, light</button>
              <button class="quiz__selection" @click="addPitta()">Sound, medium</button>
              <button class="quiz__selection" @click="addKapha()">Sound, heavy, long, “ you are not waking me for shiz”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 12">
              <h2><strong>Speech?</strong></h2>
              <h4 class="quiz__category">Mental Profile</h4>
              <button class="quiz__selection" @click="addVata()">Fast maybe a little bit garbled</button>
              <button class="quiz__selection" @click="addPitta()">Fast, sharp, clear, (I should have been a politician)</button>
              <button class="quiz__selection" @click="addKapha()"> Slow, clear, friendly, (should have done voice-over ads)</button>
          </div>
      </div>
      <!-- MENTAL PROFILE -->

      <!-- PREFERENCES  -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 13">
              <h2><strong>How do you eat?</strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()">Quick, “no one is getting my food ever!”</button>
              <button class="quiz__selection" @click="addPitta()">Medium, easy does it</button>
              <button class="quiz__selection" @click="addKapha()">Slow, “my friends are definitely on dessert whilst I am still chomping at my main course”</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 14">
              <h2><strong>When do you eat?</strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()">Irregularly</button>
              <button class="quiz__selection" @click="addPitta()">“Excuse me, please don’t talk to me I am hungry”</button>
              <button class="quiz__selection" @click="addKapha()">Can easily miss meals</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 15">
              <h2><strong>What kind of weather do you like?</strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()">Not a fan of winter </button>
              <button class="quiz__selection" @click="addPitta()">Not a fan of the summer and the heat</button>
              <button class="quiz__selection" @click="addKapha()">Not a fan of the rain and damp weather</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 16">
              <h2><strong>How do you react to stress?</strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()">Quickly get myself all fired up</button>
              <button class="quiz__selection" @click="addPitta()">I take it in my stride</button>
              <button class="quiz__selection" @click="addKapha()">I don’t tend to react, too chilled</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 17">
              <h2><strong>Money? </strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()">Saving? It slips through my fingers</button>
              <button class="quiz__selection" @click="addPitta()">Saves big, spends big</button>
              <button class="quiz__selection" @click="addKapha()">Saves regularly, I’m in the money</button>
          </div>

          <div class="quiz__question" v-if="currentStep === 18">
              <h2><strong>Friendships?</strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()">I have lots of friends, busy busy makes friends quickly</button>
              <button class="quiz__selection" @click="addPitta()">Can be quite lonely and only few friends</button>
              <button class="quiz__selection" @click="addKapha()">Have long-lasting friendships with people I’ve known for a long time</button>
          </div>
      </div>
      <!-- PREFERENCES  -->

      <!-- GO TO RESULTS -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 20">
              <h2><strong>View results</strong></h2>
              <h4 class="quiz__category">TEXT HERE</h4>
              <p>Some text here...</p>
              <button @click="calculateResults">Go to results</button>
          </div>
      </div>
      <!-- GO TORESULTS -->

      <!-- RESULTS -->
      <div class="quiz__wrap">
          <div class="quiz__question" v-if="currentStep === 20">
              <h2><strong>VATA</strong></h2>
              <h4 class="quiz__category">Vata Dosha (Wind energy)</h4>
              <p>Vata comes from the elements of space and air and it is known as the energy of movement that governs all the biological activities of the body. It is also called the ‘king of doshas’ since it governs the body’s greater life force.</p>
              <p>People born with Vata dosha are usually active, creative and are gifted with the natural ability to express and communicate. They are also quick learners, have a lively and fun personality, and are full of joy and enthusiasm when in balance. But when their Vata goes out of balance, they start showing tendencies to act on impulse, mood swings and respond to stress with fear, anxiety and worry.</p>
          </div>
      </div>
      <!-- RESULTS -->
      
      <button class="quiz__back" @click="previousStep()" v-if="doshaHistory.length">Go back</button>
      <button @click="skipToResults()">Skip to results</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            vata: 0,
            pitta: 0,
            kapha: 0,
            lastDosha: '',
            doshaHistory: [],
            currentStep: 1
        }
    },
    methods: {
        addVata() {
            this.vata = this.vata + 1
            this.doshaHistory.push('vata')

            this.nextStep()
        },
        addPitta() {
            this.pitta = this.pitta + 1
            this.doshaHistory.push('pitta')

            this.nextStep()
        },
        addKapha() {
            this.kapha = this.kapha + 1
            this.doshaHistory.push('kapha')

            this.nextStep()
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
        skipToResults() {
            this.currentStep = 20
        },
        calculateResults() {
            let vataResults = this.doshaHistory.toString().match(/vata/g).length
            let pittaResults = this.doshaHistory.toString().match(/pitta/g).length
            let kaphaResults = this.doshaHistory.toString().match(/kapha/g).length

            let ayurvedaResults = {
                'vata': vataResults,
                'pitta': pittaResults,
                'kapha': kaphaResults,
            }

            let ayurvedaResults2 = Object.keys(ayurvedaResults).reduce((a, b) => ayurvedaResults[a] > ayurvedaResults[b] ? a : b);

            console.log(`${ayurvedaResults}`);
            console.log(`${ayurvedaResults2}`);
            
        }
    },
}
</script>

<style>
.quiz__question {
    margin-top: 100px;
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
    margin-bottom: 15px;
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
    margin: 0 0 50px;
    text-transform: uppercase;
}
</style>
