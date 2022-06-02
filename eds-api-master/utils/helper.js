const transformQueryParams = (query) => {
    if(!query){
        return []
    }else{
        let search = []
        let obj = query.split(',')
        obj.forEach((item) => {
            let res = item.split(":")
            if(res[1] != 'undefined'){
                search.push({
                    name: res[0],
                    value: res[1]
                })
            }
        })

        return search;
    }
}

module.exports = {
    transformQueryParams,
}

