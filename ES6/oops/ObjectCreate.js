const student = {
    first_name: 'Mary',
    last_name: 'Green',
    display_full_name: function() {
        return `${this.first_name} ${this.last_name}`;
    }
};

const student1 = Object.create(student);
student1.last_name = "Smith";
console.log(student1.display_full_name());