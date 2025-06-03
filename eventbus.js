
/*
 * NOTE:
 * event bus is a map where the key is the event name
 * and the value is a list of listeners
 *
 * we can add and remove events from the bus
 * we can also add and remove a listener from a specific event
 */

const bus = new Map()

function addEvent(name) {
    if (bus.has(name)) {
        console.log(`${name} is already in the event bus`)
        return
    }

    bus.set(name, [])
}

function removeEvent(name) {
    if (!bus.has(name)) {
        console.log(`${name} is not an event`)
        return
    }

    bus.delete(name)
}

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
