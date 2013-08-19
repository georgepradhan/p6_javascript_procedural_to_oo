// setting up a namespace for future functions. 
function Die() {
  this.value = 0; 
};

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
};

Die.prototype.render = function () {
  return '<div class="die">'+this.value+'</div>';
};

function DiceHolder() {
  this.dice = [];
};

DiceHolder.prototype.add_dice = function(){
  this.dice.push(new Die());
};

DiceHolder.prototype.roll_dice = function(){
  for (i=0; i < this.dice.length; i++) {
    this.dice[i].roll();
  };
};



$(document).ready(function() {
  var my_diceholder = new DiceHolder();
  var my_dice = my_diceholder.dice;

  $('#roller button.add').on('click', function() {
    my_diceholder.add_dice();
    $('.dice').append(my_dice[my_dice.length - 1].render());
  });

  $('#roller button.roll').on('click', function() {
    my_diceholder.roll_dice();
    $('.die').each(function(k, die) {
      $(die).text(my_dice[k].value);
    });
  });
});


