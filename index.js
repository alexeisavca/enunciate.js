var polymorph = require('polymorph.js');
function head(arr){
    return arr.slice(0, 1);
}

function tail(arr){
    return arr.slice(1);
}

var enunciate = polymorph(
    function(f){
        var params = f.toString().match(/\((.*?)\)/)[1].split(/,\s*/);
        return enunciate(tail(params), f);
    },

    function(args, f){
        return args.length ? function(arg){
            var chain = {};
            chain[head(args)] = enunciate(tail(args), f.bind(null, arg));
            return chain;
        } : f;
    }
);

module.exports = enunciate;