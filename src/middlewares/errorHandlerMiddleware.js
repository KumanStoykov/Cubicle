function errorHandler(error, req, res, next) {
    if(error) {
        res.redirect('404');
    }
}


module.exports = errorHandler;