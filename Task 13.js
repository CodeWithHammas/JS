// Question No 13
let obj = {
    name: "Hammas",
    age: 17,
    write: function name() {
        console.log(this.name + "is writing")
    },
};
obj.name = "Hammas Shah"
obj["age"] = 17
obj.write()

