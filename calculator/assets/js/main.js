function Calculator() {
    this.display = document.querySelector('.display'),

    this.start = () =>{
      this.clickBtn()
      this.enter()
    };
    this.btnForDisplay = (valor) =>{
      this.display.value += valor;
      this.display.focus();
    };
    this.showAccount = () =>{
      let storeValues = this.display.value

      try{
        storeValues = eval(storeValues)
        this.display.value = String(storeValues);

        if(!storeValues){
          alert("conta inválida")
          return;
        }
      }catch(e){
        alert("conta inválida")
        return;
      }
    };

    this.enter = () =>{
      this.display.addEventListener('keyup', e =>{
        if(e.keyCode === 13){
          this.showAccount();
        }
      });
    };
    this.clearDisplay = () => this.display.value = ''

    this.delValue = () => this.display.value = this.display.value.slice(0,-1)

    this.clickBtn = () =>{
      document.addEventListener('click', e => {
        const el = e.target
        if(el.classList.contains('btn-num')){
          this.btnForDisplay(el.innerText)
        }
        if(el.classList.contains('btn-clear')){
          this.clearDisplay()
        }
        if(el.classList.contains('btn-del')){
          this.delValue()
        }
        if(el.classList.contains('btn-eq')){
          this.showAccount()
        }
      });
    };
  }

const calculator = new Calculator();
calculator.start()
