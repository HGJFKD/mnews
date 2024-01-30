interface Object {
    object: { [key: string]: any }
}

const extractFirstKeyValues = (objects: Object['object'][]): string[] => {

    const values: string[] = [];
    objects.forEach(obj => {
        const keys = Object.keys(obj);
        if (keys.length > 0) {
            const firstKey = keys[0];
            const value = obj[firstKey];
            if (typeof value === 'string' || typeof value === 'number') {
                values.push(value.toString());
            }
        }
    });

    return values;
}

const extractFullName = (
    objects: Object['object'][],
    middleName?: boolean
): string[] => {
    return objects.map(obj => {
        const object = Object.values(obj)
        if (middleName) return `${object[1]} ${object[2]} ${object[3]}`
        return `${object[1]} ${object[2]}`
    })
}

interface mergeKeyAndValueArg {
    keysArray: Object['object'][],
    valuesArray: Object['object'][],
    valuesArray2?: any[]
}

const mergeKeyAndValue = ({ keysArray, valuesArray, valuesArray2 }: mergeKeyAndValueArg)
    : Object['object'] => {
    const mergedObject: Object['object'] = {};
    keysArray.forEach((key, index) => {
        mergedObject[key.name] = valuesArray[key.name] || valuesArray2![index]
    })
    return mergedObject
}

const objectHelpers = {
    extractFirstKeyValues,
    extractFullName,
    mergeKeyAndValue
}
export default objectHelpers