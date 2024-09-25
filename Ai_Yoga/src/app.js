const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const routes = require('./routes/main');
const Detail = require("./models/Detail");

app.use('/static', express.static("public"));
app.use('', routes);


// (template engine)
app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");





// db connection
mongoose.connect("mongodb://127.0.0.1/Ai_Yoga")
 .then(() => {
    console.log("DB connected");
    /*Detail.create({
      brandName: "Ai Yoga",
      brandIconUrl: "/static/images/navbar_pic.png",
      links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "History",
          url: "/history",
        },
        {
            label: "About Us",
            url: "/about-us",
        },
        {
            label: "Contact Us",
            url: "/contact-us",
        },
        {
            label: "Yoga Gallery",
            url: "/gallery",
        }
      ],
    });*/
  })

  
 .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});