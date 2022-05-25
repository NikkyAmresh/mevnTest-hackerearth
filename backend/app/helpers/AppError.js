class AppError extends Error {
  constructor(code, message, payload) {
    super(message);
    this.code = code;
    this.message = message;
    this.payload = payload;
  }
}

const handledError = (err, response) => {
  if (err instanceof AppError) {
    if (err.payload) {
      response.status(err.code).json(err.payload);
      return;
    } else {
      response.status(err.code).json({ message: err.message });
      return;
    }
  } else {
    console.log(err);
    response.status(500).json({ message: "Something went wrong" });
    return;
  }
};

module.exports = { AppError, handledError };
