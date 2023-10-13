const User = require("../models/user");

const getUserData = async (res, req) => {
  const handle = req.params.handle;
  try {
    const user = await User.findOne({ handle: handle });
    console.log(user);
    
    const userData = {
      name: user.handle,
      avater: user.avater,
      bio: user.bio,
      links: user.links,
    };
    return res.json({ message: "found", userData, status: "success" });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", error: error.message });
  }
};

module.exports = { getUserData };
