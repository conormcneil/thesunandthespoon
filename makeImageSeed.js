var id = 48; // int
var post_id = 14 // int
var title = 'Farmer\'s Market Orzo Salad'; // string
var url = ["https://res.cloudinary.com/dmuipy77o/image/upload/v1476907601/FARMERS_MARKET_ORZO_SALAD1_ay8uob.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907599/FARMERS_MARKET_ORZO_SALAD2_iq4jpf.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907699/FARMERS_MARKET_ORZO_SALAD3_fzo6c8.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907580/FARMERS_MARKET_ORZO_SALAD4_kua8ei.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907601/FARMERS_MARKET_ORZO_SALAD5_go8azu.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907570/FARMERS_MARKET_ORZO_SALAD6_zahl6y.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907601/FARMERS_MARKET_ORZO_SALAD7_nfvuvo.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476907598/FARMERS_MARKET_ORZO_SALAD8_ogwzie.jpg"]; // array of strings for each image URL

function makeSeed(id,post_id,title,url) {
  var output = '';
  var base_title = title;
  for (var i = 0; i < url.length; i++) {
    var image_id_local = i + 1;
    var new_id = id + i;
    var title = `${base_title} ${image_id_local}`
    output += `,knex('images').insert({id:${new_id},post_id:${post_id},title:"${title}",url:"${url[i]}"})`
  }
  return output;
}

console.log(makeSeed(id,post_id,title,url));
