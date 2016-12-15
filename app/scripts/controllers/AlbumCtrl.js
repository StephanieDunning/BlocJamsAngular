(function() {
    function AlbumCtrl() {
        this.albumData = "Picaso";
    }
 
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();