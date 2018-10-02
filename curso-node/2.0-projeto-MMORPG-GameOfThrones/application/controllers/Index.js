module.exports =  function() {return Index;}



var Index = /** @Class Controller */ ( function() {
    //console.log('controler Autenticar');

    // construct
    function Index() {

    }

    // index
    Index.prototype.index = function( req, res) {

    	res.render('index', { validacao:{}, dadosForm:{}, msg:{}, item:{} });
    };


   
    return Index;
}());
