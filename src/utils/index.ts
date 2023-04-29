export const formatSearch = (search: string, initValue?: any) => {

  const search_ = search.slice(search.indexOf('?'))

  return search_.slice(1).split('&').reduce((pre, curr) => {

    if (curr.split('=')[1]) pre[curr.split('=')[0]] = curr.split('=')[1].length > 15 || decodeURI(curr.split('=')[1]) === '' || isNaN(Number(decodeURI(curr.split('=')[1]))) ? decodeURI(curr.split('=')[1]) : Number(decodeURI(curr.split('=')[1]))

    return pre

  }, initValue ?? { current: 1, pageSize: 10 })
}

export const objectToString = (object: object) => JSON.stringify(object)

export const objectIsQqual = (object: object, target: object) => objectToString(object) === objectToString(target)