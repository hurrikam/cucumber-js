"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var _slave = _interopRequireDefault(require("./slave"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function run() {
  const slave = new _slave.default({
    sendMessage: m => process.send(m),
    cwd: process.cwd(),
    exit: () => process.exit()
  });
  process.on('message', m => slave.receiveMessage(m));
}