const { updateJson } = require("./utils/jsonSyncing.js");
const { Recyclable } = require("./models/Recyclable.js");
const { User } = require("./models/User.js");
const passport = require("passport");

module.exports = function (app) {
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.post("/signup", (req, res) => {
    if (req.body.password == req.body.cpass) {
      User.register(
        new User({
          username: req.body.username,
          avatar: "",
          isAdmin: false,
        }),
        req.body.password,
        (err, user) => {
          if (err) {
            console.log(err);
            res.redirect("/signup");
          } else {
            passport.authenticate("local", { failureRedirect: "/signup" })(
              req,
              res,
              async () => {
                updateJson();
                res.redirect("/login");
              }
            );
          }
        }
      );
    } else {
      res.redirect("/signup");
    }
  });

  app.post("/login", (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    req.login(user, (err) => {
      if (err) {
        console.log(err);
        res.redirect("/login");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/");
        });
      }
    });
  });

  app.get("/add-item", (req, res) => {
    if (req.isAuthenticated()) {
      try {
        res.render("add-item", { user: req.user });
      } catch (error) {
        console.log(error);
      }
    } else {
      res.redirect("/login");
    }
  });

  app.post("/add-item", async (req, res) => {
    try {
      const newRecyclable = new Recyclable({
        title: req.body.title ?? "",
        info: req.body.info ?? "",
        isRecyclable: req.body.recyclable ? true : false,
        manufacturer: req.body.manufacturer ?? "",
        isOfficial: false,
        uid: req.user._id ?? "",
      });
      await newRecyclable.save();
      updateJson();
      res.redirect("/");
    } catch (e) {
      res.json({ message: "Error creating recyclable" });
    }
  });

  app.get("/profile", async (req, res) => {
    if (req.isAuthenticated()) {
      try {
        const posts = await Recyclable.find({ uid: req.user._id });
        res.render("profile", { user: req.user, posts: posts });
      } catch (error) {
        console.log(error);
      }
    } else {
      res.redirect("/login");
    }
  });

  app.get("/", (req, res) => {
    const results = [];
    res.render("index", { results: results, searched: false, user: req.user });
  });

  app.post("/view-details", async (req, res) => {
    try {
      const item = await Recyclable.findById(req.body._id);
      const author = await User.findById(item.uid);
      res.render("itempage", {
        item: item,
        user: req.user,
        author: author ? author.username : "No Author",
      });
    } catch (e) {
      res.json({ message: "Error Finding Desired Item" });
    }
  });

  app.post("/edit-item", async (req, res) => {
    try {
      const item = await Recyclable.findById(req.body._id);
      res.render("edit-item", {
        item: item,
        user: req.user,
      });
    } catch (e) {
      res.json({ message: "Error Finding Desired Item" });
    }
  });

  app.post("/edit-submit", async (req, res) => {
    try {
      const item = await Recyclable.findById(req.body._id);
      item.title = req.body.title ?? "";
      item.info = req.body.info ?? "";
      item.isRecyclable = req.body.recyclable ? true : false;
      item.manufacturer = req.body.manufacturer ?? "";
      await item.save();
      updateJson();
      res.redirect("/");
    } catch (e) {
      console.log(e);
      res.json({ message: "Error Editing Item" });
    }
  });

  app.get("/logout", function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

  app.post("/search", async (req, res) => {
    try {
      const results = await Recyclable.find({
        $or: [
          { title: { $regex: req.body.keyword, $options: "i" } },
          { info: { $regex: req.body.keyword, $options: "i" } },
          { manufacturer: { $regex: req.body.keyword, $options: "i" } },
        ],
      });
      res.render("index", { results: results, searched: true, user: req.user });
    } catch (e) {
      res.json({ message: "Error searching" });
    }
  });
};
