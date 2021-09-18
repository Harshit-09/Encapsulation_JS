class Intern {
  constructor() {
    var name;
    var id;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
}
var intrn = new Intern();
intrn.setName("Harshit");
intrn.setId(315229);
document.writeln(intrn.getName() + " " + intrn.getId());
