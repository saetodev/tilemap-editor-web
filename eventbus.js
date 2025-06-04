
/*
 * NOTE:
 * event bus is a map where the key is the event name
 * and the value is a list of listeners
 *
 * we can add and remove events from the bus
 * we can also add and remove a listener from a specific event
 *
 * TODO:
 * this is currently blocks the program every time we push an event
 */

const bus = new Map()

/**
 * Adds an event type to the bus
 * @param {string} name
 */
function addEvent(name) {
    if (bus.has(name)) {
        console.log(`${name} is already in the event bus`)
        return
    }

    bus.set(name, [])
}

/**
 * Removes an event type from the bus
 * @param {string} name
 */
function removeEvent(name) {
    if (!bus.has(name)) {
        console.log(`${name} is not an event`)
        return
    }

    bus.delete(name)
}

/**
 * Calls all of the listeners of an event type on the bus
 * @param {string} name
 * @param {...any} args
 */
function pushEvent(name, ...args) {
    if (!bus.has(name)) {
        console.log(`${name} is not an event`)
        return
    }

    for (listener of bus.get(name)) {
        listener(...args)
    }
}

/**
 * Adds a listener to an event type on the bus
 * @param {string} name
 * @param {function} func
 */
function addListener(name, func) {
    if (!bus.has(name)) {
        console.log(`${name} is not an event`)
        return
    }

    const listeners = bus.get(name)
    
    if (listeners.indexOf(func) !== -1) {
        console.log(`${func.name} already registered to ${name}`)
        return
    }

    listeners.push(func)
}

/**
 * Removes a listener from an event type on the bus
 * @param {string} name
 * @param {function} func
 */
function removeListener(name, func) {
    if (!bus.has(name)) {
        console.log(`${name} is not an event`)
        return
    }

    const listeners = bus.get(name)
    const index     = listeners.indexOf(func)

    if (index === -1) {
        console.log(`${func.name} not registered to ${name}`)
        return
    }

    listeners.splice(index, 1)
}
