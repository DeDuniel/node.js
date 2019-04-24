class chore {
    constructor(){
       this.title = "";
       this.description = "";
       this.creator = "";
       this.created = "";
       this.deadline = "";
       this.done = false;
    }

    getInfo(){
        return (this.done? "(X) " : "") + "'" + this.title + "' von " + this.creator;
    } 
}