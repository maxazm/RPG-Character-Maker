var app = new Vue({
    el:"#app",
    data(){
        return {
            Name : "Unknown",
            Class : "hero",
            Gender : "male",
            Traits : "Everyman",
            Strength : 10,
            Agility : 10,
            Resilience : 10,
            Wisdom : 10,
            Luck : 10,
            imgUrl : "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
            traits0 : "Lucky devil"
        };
    },
    computed : {
        switchImg: function(){
            return `https://recursionist.io/img/dashboard/lessons/quickstart/${this.Gender}-${this.Class}.png`
        }
    },
    methods: {
        switchGender(event){
            this.Gender = event.target.value;
        },
        switchClass(event){
            this.Class = event.target.value;
        },
        switchTraits(event){
            this.traits0 = (event.target.value == "male")? "Lucky devil" : "Tomboy";
        },
        initializeAbility(){
            this.Strength = 10;
            this.Agility = 10;
            this.Resilience = 10;
            this.Luck = 10;
            this.Wisdom = 10;
        },
        abilityBoost(event){
            
            this.initializeAbility();

            if(event.target.value == "Bat out of hell"){
                this.Agility = Math.floor(this.Agility * 1.4);
            } 
            else if(event.target.value == "Brave" && this.Class == "hero"){
                this.Strength = Math.floor(this.Strength *  1.1);
                this.Agility = Math.floor(this.Agility * 1.1);
                this.Luck = Math.floor(this.Luck * 1.2);
            } 
            else if(event.target.value == "Lucky devil"){
                
                this.Luck = Math.floor(this.Luck *  1.5);
            }
            else if(event.target.value == "Tomboy"){
                this.Strength = Math.floor(this.Strength *  1.1);
                this.Agility = Math.floor(this.Agility * 1.1);
            }
        },
        traitsChange(event){
            this.Traits = event.target.value;
        }
    }
})
