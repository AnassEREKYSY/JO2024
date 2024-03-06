const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../../models");
const nodemailer = require("nodemailer");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    const user = await db.user.findOne({ where: { email: email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    const token = jwt.sign({ ...user.dataValues }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60,
    });

    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: false,
    });

    return res.status(200).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie("jwt", "logout", {
      expires: new Date(Date.now() + 2 * 1000),
      secure: false,
      httpOnly: true,
    });

    return res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.forgot_password = async (req, res) => {
  try {
    const user = await db.user.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "L'utilisateur n'existe pas",
      });
    }

    const pin_code = Math.floor(100000 + Math.random() * 900000);
    user.pin_code = pin_code;
    await user.save({ validate: false });

    var transport = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: "omarouafi12@gmail.com",
        pass: "fGqIa4WD6k1RxLbj",
      },
    });

    const mailOptions = {
      from: "omarouafi12@gmail.com",
      to: user.email,
      subject: "Mot de passe oublié",
      text: `Votre code pin est ${pin_code}`,
    };

    const sent = await transport.sendMail(mailOptions);
    if (!sent) {
      return res.status(400).json({
        status: "fail",
        message: "Failed to send pin code",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Code pin sent to your email",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.reset_password = async (req, res) => {
  try {
    const user = await db.user.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "L'utilisateur n'existe pas",
      });
    }

    if (user.pin_code !== req.body.pin_code) {
      return res.status(400).json({
        status: "fail",
        message: "Code pin invalide",
      });
    }

    user.password = await hashPassword(req.body.password);
    user.pin_code = null;
    await user.save({ validate: false });

    return res.status(200).json({
      status: "success",
      message: "Mot de passe réinitialisé avec succès",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message, 
    });
  }
};

exports.get_profile = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      data: {
        user: req.user,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.add_user = async (req, res) => {
  try {
    const user = await db.user.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 12),
      role: "admin",
    });

    return res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.edit_me = async (req, res) => {
  try {
    const user = await db.user.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    await user.update(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update_password = async (req, res) => {
  try {
    const user = await db.user.findByPk(req.user.id);
    if (
      !user ||
      !(await bcrypt.compare(req.body.current_password, user.password))
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid current password",
      });
    }

    user.password = await hashPassword(req.body.new_password);
    await user.save({ validate: false });

    return res.status(200).json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
