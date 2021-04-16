import {makeAutoObservable} from 'mobx';

class state {
    lastName:string = ''
    firstName:string = ''
    stile:boolean = false

    constructor(){
        makeAutoObservable(this)
    }

    LastName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        this.lastName = event.target.value;
    }

    FirstName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        this.firstName = event.target.value;
    }

     onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.stile = !this.stile;
      }

      changeStile = ()=> {
            this.stile = !this.stile;
            this.firstName = '';
            this.lastName = '';
      }
}

export default new state()