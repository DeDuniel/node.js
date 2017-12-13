const logger = function(options) {
    if (!options){
        throw new Error('Keine Optionen für Logger :(');
    }
    
    if (!options.level){
        throw new Error('Kein Optionen-Level für Logger :(');
    }

    if(!options.time){
        throw new Error('Kein Optionen-Time für Logger :(');
    }

    return function(req, res, next) {
        var datum = options.time.toLocaleString();
        console.log(`[${datum}] (${options.level}) ${req.method} ${req.path}`);
        next();
    };
};

module.exports = logger;