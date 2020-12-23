class CustomResponse {
  constructor(code, message, data, status) {
    this.code = code || 500;
    this.status = status || "ERROR";
    this.message = message || "Something weren't wrong";
    this.data = data || {};
  }
};

class ErrorCustomResponse extends CustomResponse {
  constructor(code, message, data) {
    super(code, message, data, null)
  }
};

class SuccessCustomResponse extends CustomResponse {
  constructor(code, message, data) {
    super(code, message, data, "SUCCESS")
  }
};

export {
  ErrorCustomResponse,
  SuccessCustomResponse
}
