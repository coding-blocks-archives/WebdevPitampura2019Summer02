const promisify = function fn() {
    return function () {
        return new Promise((resolve, reject) => {
            fn(...arguments, (err, result) => {
                if(err) 
                return reject(err)
            })
        })
    }
}

function download