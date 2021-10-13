class Ground {

    constructor(x,y,width,height)
    {
       this.x=x
       this.y=y
       this.width=width
       this.height=height
      var ground_options={isStatic:true}
       this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,ground_options)
       
       World.add(myworld, this.body)

    }
  display()
  {
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
  }
}