export const arraysHaveSameItems = (arr1: any, arr2: any) => {       
    const tempArr = [...arr2];

    for (let i = 0; i < arr1.length; i++) {
        const index = tempArr.indexOf(arr1[i]);
        if (index === -1) {
            return false;
        } else {
            tempArr.splice(index, 1);
        }
    }

    return true;
}
