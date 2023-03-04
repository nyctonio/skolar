let user = 1;

const printUser = async () => {
    await setTimeout(() => {
        user = 2;
    }, 1000);
    console.log('in the async', user);
}
printUser();
console.log(user);  // runned before the async function