require("dotenv").config();
require("express-async-errors");
//express
const cors = require("cors");
const express = require("express");
const app = express();

// CORS configuration
app.use(cors({
  origin: function(origin, callback) {
    // Allow any origin that matches your IP address with any port
    if (!origin || origin.startsWith('http://192.168.1.58:') || origin === 'http://localhost:3000' || origin === 'https://aver-nextjs-tau.vercel.app') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


// rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

//database
const connectDB = require("./config/connectDB");
const setupAdminUser = require("./config/setupAdmin");

//routers
const authRouter = require("./routers/auth");
const blogRouter = require("./routers/blog");
const serviceRouter = require("./routers/service");
const hizmetRouter = require("./routers/hizmet");
const headerRouter = require("./routers/header");
const footerRouter = require("./routers/footer");
const heroRouter = require("./routers/hero");
const featuresRouter = require("./routers/features");
const ctaRouter = require("./routers/cta");
const faqRouter = require("./routers/faq");
const otherRouter = require("./routers/other");
const generalRouter = require("./routers/general");
const contactFormRouter = require("./routers/contactForm");
const pageRouter = require("./routers/page");

//midlleware
const notFoundMiddleware = require("./middleware/not-found");
const erorHandlerMiddleware = require("./middleware/eror-handler");

//app
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET_KEY));

app.use(express.urlencoded({ extended: true }));

// API routes - using consistent prefix
app.use("/v1/auth", authRouter);
app.use("/v1/blogs", blogRouter);
app.use("/v1/services", serviceRouter);
app.use("/v1/hizmetler", hizmetRouter);
app.use("/v1/header", headerRouter);
app.use("/v1/footer", footerRouter);
app.use("/v1/hero", heroRouter);
app.use("/v1/features", featuresRouter);
app.use("/v1/cta", ctaRouter);
app.use("/v1/faq", faqRouter);
app.use("/v1/other", otherRouter);
app.use("/v1/general", generalRouter);
app.use("/v1/contact-form", contactFormRouter);
app.use("/v1/page", pageRouter);

app.use(notFoundMiddleware);
app.use(erorHandlerMiddleware);

const port = process.env.PORT || 3040;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // Setup admin user on first start (if doesn't exist)
    await setupAdminUser();
    
    app.listen(
      port,
      console.log(
        `MongoDb Connection Successful, App started on port ${port} : ${process.env.NODE_ENV}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
