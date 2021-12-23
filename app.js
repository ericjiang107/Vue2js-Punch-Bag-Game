var instance1 = new Vue({
    el: '#vue-app',
    data: {
        // we need health as an object
        health: 100,
        // we want gameEnd to be true once health reaches 0
        gameEnd: false,
    },
    methods: {
        // we need a punch method
        punch: function(){
            // we want to reduce the health of the bag
            this.health -= 10;
            if(this.health <= 0){
                // changing the gameEnd to true once health has reached 0
                this.gameEnd = true;
            }
        },
        reset: function() {
            // we want to reset the health back to 100 upon clicking
            this.health = 100;
            // reset the gameEnd to false upon being clicked
            this.gameEnd = false;
        }
    },
    computed: {

    }
});