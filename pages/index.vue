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
              <h2><strong></strong></h2>
              <h4 class="quiz__category">Preferences</h4>
              <button class="quiz__selection" @click="addVata()"></button>
              <button class="quiz__selection" @click="addPitta()"></button>
              <button class="quiz__selection" @click="addKapha()"></button>
          </div>
      </div>
      <!-- PREFERENCES  -->
      
      <button class="quiz__back" @click="previousStep()" v-if="doshaHistory.length">Go back</button>
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
