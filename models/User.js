let User = function(data) {
  this.data = data
  this.errors = []
}

User.prototype.validate = function() {
  if (this.data.username == "") {this.errors.push("You must provide a username.")}
  if (this.data.email == "") {this.errors.push("You must provide a valid email address.")}
  if (this.data.password == "") {this.errors.push("You must provide a password.")}
}

User.prototype.register = function() {
  this.validate()
}

module.exports = User