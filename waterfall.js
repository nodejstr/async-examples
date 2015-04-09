async.waterfall([
    function(callback) {
        callback(null, 'bir', 'iki');
    },
    function(arg1, arg2, callback) {
      // arg1 suan 'bir' ve arg2 suan 'iki'
        callback(null, 'uc');
    },
    function(arg1, callback) {
        // arg1  suan 'uc'
        callback(null, 'done');
    }
], function (err, result) {
    // ve sonuc 'done'  
});
