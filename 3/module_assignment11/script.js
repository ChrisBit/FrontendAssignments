var json = {
  video: [
    {
      id: 12312412312,
      name: "Ecuaciones Diferenciales",
      url: "/video/math/edo/12312412312",
      author: {
        data: [
          {
            name_author: "Alejandro Morales",
            url: "/author/alejandro-morales",
            type: "master",
          },
        ],
      },
    },
  ],
};

(function () {
  for (var object of json.video) {
    console.log("ID: " + object.id);
    console.log("Name: " + object.name);
    console.log("URL: " + object.url);

    for (var dataObject of object.author.data) {
      console.log("Author data:");
      console.log("Author name: " + dataObject.name_author);
      console.log("url: " + dataObject.url);
      console.log("type: " + dataObject.type);
    }
  }
})();
