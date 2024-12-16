function myMiddleware(req, res, next) {
  console.log("I'm Custom middleware");
  next();
}

module.exports = myMiddleware;
