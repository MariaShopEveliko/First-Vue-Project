//You can use regulat js when you don't need anything related to Vue data
function getRandomVal(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            ourHealth: 100,
            currentRound: 0,
            winner: null,
            battleLog: []
        };
    },
    computed:{
        monsterHealthStyle(){
            if (this.monsterHealth < 0){
                return { width: '0%' };
            } else{
                return {width: this.monsterHealth +'%'};
            }
        },
        ourHealthStyle(){
            if (this.ourHealth < 0){
                return { width: '0%' };
            } else{
                return {width: this.ourHealth +'%'};
            }
        },
        useSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch:{
        ourHealth(value){
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0){
                this.winner = "monster";
            }
        },
        monsterHealth(value){ 
            if (value <= 0 && this.ourHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0){
                this.winner = "Player";
            }
        }
    },
    methods:{
        startGame(){
            this.monsterHealth = 100;
            this.ourHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.battleLog = [];
        },
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomVal(5,12); //random attack between 5 and 12
            this.monsterHealth -= attackValue;
            this.addLogMsg("player", "attack", attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomVal(8,15);
            this.addLogMsg("monster", "attack", attackValue);
            this.ourHealth -=attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomVal(10,25);
            this.addLogMsg("player", "speacial attack", attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomVal(8,20);
            this.addLogMsg("player", "heal", healValue);
            if (this.ourHealth + healValue > 100){
                this.ourHealth = 100;
            } else{
                this.ourHealth +=healValue;
            }
            this.attackPlayer();
        },
        surrender(){
            this.winner = "monster";
        },
        addLogMsg(who, what, value){
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});
app.mount("#game");