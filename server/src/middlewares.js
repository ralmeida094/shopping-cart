const createError = require("http-errors");

function notFound(req, res, next) {
  next(createError(404));
}

function errorHandler(error, req, res, next) {
  const { name, message, stack } = error;

  res.status(res.statusCode || 500);
  res.json({
    name: process.env.NODE_ENV === "development" ? name : undefined,
    message,
    stack: process.env.NODE_ENV === "development" ? stack : undefined,
  });
}

module.exports = {
  errorHandler,
  notFound,
};
