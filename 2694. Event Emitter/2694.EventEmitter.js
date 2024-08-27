class EventEmitter {
  constructor() {
    this.events = new Map(); // Initialize the map to store event names and their associated callback functions
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []); // If the event does not exist, initialize it with an empty array
    }
    const listeners = this.events.get(eventName); // Get the array of callbacks associated with the event
    listeners.push(callback); // Add the new callback to the array

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback); // Find the index of the callback to unsubscribe
        if (index !== -1) {
          listeners.splice(index, 1); // Remove the callback from the array if found
        }
      },
    };
  }

  emit(eventName, args = []) {
    const listeners = this.events.get(eventName) || []; // Get the array of callbacks for the event, or an empty array if none exist
    return listeners.map((callback) => callback(...args)); // Call each callback with the provided arguments and return an array of their results
  }
}
