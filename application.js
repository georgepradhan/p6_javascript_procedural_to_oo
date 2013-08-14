// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });


function Die() {
    this.value = 0; // starting value
  }

  Die.prototype.roll = function() {
    this.value = Math.floor((Math.random()*6)+1);
  };

  Die.prototype.render = function () {
    return '<div class="die">'+this.value+'</div>';
  };

  function DiceHolder(){
    this.dice = []
  }

  DiceHolder.prototype.add_dice=function(){

    this.dice.push(new Die())
  }


$(document).ready(function(){

 var  my_dice= new DiceHolder();
  
$('#roller button.add').on('click', function() {
 my_dice.add_dice();
  $(".dice").append(die.render());
});

  

});
