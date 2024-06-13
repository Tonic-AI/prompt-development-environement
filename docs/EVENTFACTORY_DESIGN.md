# Event Factory Design 🏭✨

## Event Factory Overview 📊

The Event Factory is a centralized system designed to manage IPC events within the Prompt Development Environment (PDE). It ensures a standardized approach to event handling between the main process and the renderer process.

## Event Object Structure 📦

Each Event object encapsulates the necessary information to send and receive data through IPC channels. The Event object includes the event name, payload, and an optional reply event name.

## Factory Constructor 🛠️

The EventFactory constructor accepts optional send and reply lambda functions. These functions define custom behavior for sending and receiving IPC events.

## Event Naming Convention 🏷️

Event names are stored in a JavaScript Enum-like structure, ensuring consistency across the main and renderer processes. A `-Reply` suffix is appended to the event name for reply events.

## Event Handling Process 🔄

1. **Sending Events**:
   - Events are dispatched from either the main or renderer process using the EventFactory.
   - The send function is invoked with the event name and payload.

2. **Receiving Events**:
   - The corresponding reply event is set up to listen for a response.
   - The reply function processes the incoming data and updates the state as necessary.

## Event Storage 🗃️

A shared Enum-like structure stores the event names, accessible by both the main and renderer processes. This structure prevents discrepancies in event naming.

# EventFactory.js Design Plan

## Purpose
The `EventFactory.js` class serves as a centralized manager for creating and dispatching events within the PDE. It abstracts the details of event creation and handling, providing a simple interface for other parts of the application to communicate with.

## Methods

- **createEvent(eventName, payload)**: Creates a new event with the given name and payload.
- **dispatchEvent(event)**: Dispatches an event to the appropriate handler.
- **onEvent(eventName, handler)**: Registers a handler for a specific event.
- **offEvent(eventName, handler)**: Deregisters a handler for a specific event.

## Event Handling

- Events are objects with a `type` property corresponding to the event name and a `payload` property containing any data associated with the event.
- The factory keeps an internal registry of event handlers, which are functions that get called when an event of a specific type is dispatched.

## Usage

The `EventFactory.js` class will be used by both the main process and the renderer process to ensure consistent event handling across the application. It will be particularly useful for managing the IPC events that facilitate communication between the two processes.

## Integration

- The class will be integrated with the existing IPC mechanisms in Electron.
- It will utilize the Enum-like structure for event names to maintain consistency.

## Testing

- Unit tests will be written to test the creation, dispatching, and handling of events.
- Integration tests will ensure that events are correctly communicated between the main and renderer processes.


## Conclusion 🔚

The Event Factory design aims to streamline the communication flow within the PDE, providing a robust and maintainable approach to IPC event handling.
