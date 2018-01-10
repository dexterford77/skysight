skysight.service("ProductService", [function(){

  var _products = {
    "1": {
      id: 1,
      name: "Plano Lens",
      image: "http://fillmurray.com/301/400",
      genericPrice: 75,
      rayBanPrice: 188
    },
    "2": {
      id: 2,
      name: "Bifocal FT28",
      image: "http://fillmurray.com/302/400",
      genericPrice: 125,
      rayBanPrice: 238
    },
    "3": {
      id: 3,
      name: "Bifocal FT35",
      image: "http://fillmurray.com/303/400",
      genericPrice: 139,
      rayBanPrice: 252
    },
    "4": {
      id: 4,
      name: "Bifocal FT45",
      image: "http://fillmurray.com/304/400",
      genericPrice: 167,
      rayBanPrice: 280
    },
    "5": {
      id: 5,
      name: "Trifocal 7x28",
      image: "http://fillmurray.com/305/400",
      genericPrice: 143,
      rayBanPrice: 256
    },
    "6": {
      id: 6,
      name: "Trifocal 8x35",
      image: "http://fillmurray.com/306/400",
      genericPrice: 143,
      rayBanPrice: 256
    },
    "7": {
      id: 7,
      name: "Trifocal 10x35",
      image: "http://fillmurray.com/307/400",
      genericPrice: 218,
      rayBanPrice: 331
    },
    "8": {
      id: 8,
      name: "Trifocal 12x35",
      image: "http://fillmurray.com/308/400",
      genericPrice: 220,
      rayBanPrice: 333
    },
    "9": {
      id: 9,
      name: "Trifocal 14x35",
      image: "http://fillmurray.com/309/400",
      genericPrice: 224,
      rayBanPrice: 337
    }
  };

  var _murrayHelper = function(i){
    if (i < 10){
      return "0" + i
    } else {
      return i
    }
  };

  this.find = function(id){
    return _products[id]
  }

  this.all = function(){
    return _products
  }

}]);