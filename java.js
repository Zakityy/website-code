function checker() {
    var result = confirm('Are you sure?');
    if (result == false) {
        event.preventDefault();
    }
}

console.log('hello if you are seeing this');

