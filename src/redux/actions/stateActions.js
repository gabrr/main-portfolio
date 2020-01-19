const inserting = (item) => {
    return {
        type: "INSERT",
        item
    }
}

// can be added more actions bellow the one above, and exported on the object bellow

export { inserting }