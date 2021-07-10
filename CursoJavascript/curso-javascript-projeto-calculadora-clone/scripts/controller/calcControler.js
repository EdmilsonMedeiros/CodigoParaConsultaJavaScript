class CalcController{
    constructor(){
        this._locale            = "pt-BR";
        this._displayCalcEl     = document.querySelector("#display");
        this._dateEl            = document.querySelector("#data");
        this._timeEl            = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize(){
        //let interval = 
        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
        /*
        setTimeout(() => {
            clearInterval(interval);
        }, 10000); */

    }

    initButtonEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index) => {

            btn.addEventListener('click', e=>{

                console.log(btn.className.baseVal.replace("btn-", ""));
            })
        });
        
        /*
        .addEventListener('click', e=>{
            console.log(e);
        });
        */
       
    }

    setDisplayDateTime(){
        
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day:"2-digit", month:"long", year:"numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    get currentDate(){
        return new Date();
    }
    set dataAtual(value){
        this._currentDate = value;
    }  
}