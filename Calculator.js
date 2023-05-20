window.onload=()=>{

    

    var prevOp = document.querySelector(".prevOp")

    var currentOp = document.querySelector(".currentOp")

    var numbers = document.querySelectorAll("[data-num]")

    var equal = document.querySelector("[data-equal]")

    var allOp = document.querySelectorAll("[data-op]")

    var allClear= document.querySelector("[data-clear]")

    class Cal{

        constructor(prev,current){

          this.prev = prev;

        this.current = current;

        this.defaultState()

          

            

        }

        allClear(){

            this.currentValue = ""

            this.previousValue = ""

            this.defaultState()

            

        }

        defaultState(){

            this.currentValue = "";

            this.previousValue = "";

            this.op= undefined ;

        }

        

        operation(ops){

  if(this.currentValue === "") return ;  if(this.previousValue !=="")  {

    this.solve()

    

    }

 

this.previousValue = this.currentValue +` ${ops}`;

this.operation = ops;

this.currentValue = "";

        }

        

        display(number){

        if(number === "." && this.currentValue.includes(".")){

            return

        }

        

  this.currentValue   = this.currentValue.toString() + number.toString()

            

        }

        

        update(){

 this.current.innerText = this.currentValue 

  this.prev.innerText = this.previousValue 

        }

        

        solve(){

    let computation;

  let pre = parseFloat(this.previousValue)

  let cur = parseFloat(this.currentValue)

  if(isNaN(pre) || isNaN(cur)) return ;

        switch (this.operation){

           case "+" :

        computation = pre + cur 

           break ;

           case  "-":

        computation = pre - cur 

            break ;

            case "×":

        computation = pre * cur 

             break;

             case "÷":

        computation = pre / cur

             break ;

             

           default : return ;

            

        }

        this.currentValue = computation ;

        this.previousValue = ""

        this.operation = undefined 

            

        }

            

        

    }

var calculator = new Cal(prevOp ,currentOp );

numbers.forEach((btn)=>{

    btn.addEventListener("click",()=>{

  calculator.display(btn.innerText)

  calculator.update()

   

   

})

})

equal.addEventListener("click",(btn)=>{

  calculator.solve()

  calculator.update()

  

    

})

allOp.forEach((btn)=>{

    btn.addEventListener("click",()=>{

  calculator.operation(btn.innerText)

  calculator.update()

 

   

})})

allClear.addEventListener("click",()=>{

    calculator.allClear()

    calculator.update()

})

    

    

    

    

    

    

}
