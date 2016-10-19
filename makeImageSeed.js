var id = 40; // int
var post_id = 12 // int
var title = 'New Potato and Asparagus Salad'; // string
var url = ["https://res.cloudinary.com/dmuipy77o/image/upload/v1476906279/sweet_potato_tacos_1_gsvduf.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476906279/sweet_potato_tacos_2_f9f53m.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476906279/sweet_potato_tacos_3_g7oa9f.jpg","https://res.cloudinary.com/dmuipy77o/image/upload/v1476906279/sweet_potato_tacos_4_gtwssv.jpg"]; // array of strings for each image URL

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
