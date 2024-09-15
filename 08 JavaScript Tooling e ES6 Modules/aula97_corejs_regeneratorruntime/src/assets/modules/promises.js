function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Pomise');
            resolve();

        }, 5000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou');
}