function Stopwatch(){
    console.log("Stopwatch")
    let isrunning = false;
    let startTime;
    let watchduration;
    Object.defineProperty(this, "watchduration", {get: function(){
        if (isrunning){ watchduration = (new Date() - startTime)/1000}
        
        return watchduration}})

    this.start = function(){
        console.log("Starting the watch")
        if(!isrunning){
            isrunning = true;
            startTime = new Date()
            
        }
        else{throw Error("Watch has already started.");}
        
    }

    this.stop = function(){
        if(!isrunning){
            throw Error("Watch has already been stopped");
        }
        else{isrunning = false;
            watch = undefined;}
    }

    this.reset = function() {
        if(isrunning){
            console.log("Resetting")
            startTime = new Date();
        }
        else{this.start()};
    }
}

//The attribute in defineProperty is an object.