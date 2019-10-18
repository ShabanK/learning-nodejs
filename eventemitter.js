const eventEmitter = require("events");
const ee = new eventEmitter();
class person extends eventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
}
let dude = new person("dude");
dude.once("myEvent", yo => {
  console.log(`the dude abides in ${yo}`);
});
dude.emit("myEvent", "haha");
dude.emit("myEvent", "haha");
dude.emit("myEvent", "haha");
