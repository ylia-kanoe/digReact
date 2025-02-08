
export function responseMapper(data) {
    return Object.entries(data).reduce((curr, [key, value], idx) => {
        curr = [...curr, { name: key, ...value }]
        return curr
    }, [])
}
