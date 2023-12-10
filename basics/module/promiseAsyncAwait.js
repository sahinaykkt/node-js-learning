const tvStreams = [
    { first: 'News' },
    { second: 'Ads' },
    { third: 'Films' }
];

const showPosts = () => {
    tvStreams.forEach((stream) => console.log(stream));
}

const addNewStream = (value, stream) => {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve('A new stream added.')
            tvStreams.push(stream)
        } else {
            reject('There is a problem on the new stream.')
        }
    })
}

(async () => {
    try {
        const response = await addNewStream(false, { fourth: 'Series' })
        console.log(response);
        showPosts();
    } catch (error) {
        console.log(error);
        showPosts();
    }
})();
