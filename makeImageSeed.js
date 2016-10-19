var id = 37; // int
var post_id = 11 // int
var title = 'New Potato and Asparagus Salad'; // string
var url = ["https://res.cloudinary.com/dmuipy77o/image/upload/v1476905056/new_potato_and_asparagus_salad_1_erhwew.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476905055/new_potato_and_asparagus_salad_2_nrsbhz.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476905055/new_potato_and_asparagus_salad_3_xo8n4c.jpg"]; // array of strings for each image URL

function makeSeed(id,post_id,title,url) {
  var output = '';
  var base_title = title;
  for (var i = 0; i < url.length; i++) {
    var image_id_local = i + 1;
    var new_id = id + i;
    var title = `${base_title} ${image_id_local}`
    output += `,knex('images').insert({id:${new_id},post_id:${post_id},title:'${title}',url:'${url[i]}'})`
  }
  return output;
}

console.log(makeSeed(id,post_id,title,url));


// knex('images').insert({
//   id: 36,
//   post_id: 10,
//   title: "Linguine with Zucchini and Quelite-Pecan Pesto 2",
//   url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1476901805/linguine_with_zucchini_and_quelite-pecan_pesto_2_yc7jfi.jpg"
// })
