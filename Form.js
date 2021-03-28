class Form {
  constructor() {
    this.imput = createImput("Name")
    this.button = createButton("play")
    this.greeting = createElement('h2')
  }
hide(){ this.greeting.hide(); 
  this.button.hide();
  this.imput.hide();
}

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    this.input = createInput("Name");
    this.button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();
      player.name = this.imput.value();
      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + player.name )
      greeting.position(130, 160)
    });

  }
}
