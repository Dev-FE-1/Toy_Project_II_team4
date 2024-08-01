class ResponseDTO {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static success(status = 200, message = 'ok', data) {
    return new ResponseDTO(status, message, data);
  }

  static fail(status = 500, message = 'fail', data) {
    return new ResponseDTO(status, message, data);
  }
}

module.exports = ResponseDTO;
