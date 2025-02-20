class Change{
    constructor(base){
      this.base = base
    }

    async getChange(base){
        try{
            let response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${this.base}`)
            let data = await response.json();
            return data
        } catch(error){
            console.log(error);
        }
    }
}