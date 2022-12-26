function userBilder(name, age) {
    let user = {age, name};
    return {
        setAge(newAge) {
            user.name = newAge;
        },
        getAge(){
            return user.age;
        },
        userInfo: function (){
            return {...user};
        }
}
}