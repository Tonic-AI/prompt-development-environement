// src/main/EventNames.js
// src/main/EventNames.js
module.exports = {
    // Window and UI events
    WINDOW_OPEN: 'window-open', // Event when a window is opened
    WINDOW_CLOSE: 'window-close', // Event when a window is closed
    WINDOW_FOCUS: 'window-focus', // Event when a window gains focus
    WINDOW_BLUR: 'window-blur', // Event when a window loses focus
    WINDOW_LOADING_SHOWN: 'window-loading-shown', // Event when the loading screen is shown
    WINDOW_LOADING_LOGIN: 'window-loading-login', // Event during login loading
    WINDOW_LOADING_LOGIN_FAILED: 'window-loading-login-failed', // Event when login loading fails
    WINDOW_CONSOLE_READY: 'window-console-ready', // Event when the console is ready
    WINDOW_CONSOLE_SHOWN: 'window-console-shown', // Event when the console is shown
    WINDOW_CONSOLE_SHOW_HIDE: 'window-console-show-hide', // Event to toggle console visibility
    WINDOW_CONSOLE_BROWSER_REQUEST: 'window-console-browser-request', // Event for browser requests in the console
    WINDOW_CONSOLE_BROWSER_LOAD: 'window-console-browser-load', // Event when the browser loads in the console
    WINDOW_ACTIVATOR_CLOSE: 'window-activator-close', // Event when the window activator is closed

    // Application lifecycle events
    APP_INIT: 'app-init', // Event when the app initializes
    APP_READY: 'app-ready', // Event when the app is ready
    APP_QUIT: 'app-quit', // Event when the app quits
    APP_PULSE: 'app-pulse', // Regular app pulse event for health checks

    // Editing events
    EDIT_COPY: 'edit-copy', // Event to copy text
    EDIT_PASTE: 'edit-paste', // Event to paste text
    EDIT_CUT: 'edit-cut', // Event to cut text
    EDIT_SELECT_ALL: 'edit-select-all', // Event to select all text
    EDIT_SELECT_NONE: 'edit-select-none', // Event to deselect all text
    EDIT_FIND: 'edit-find', // Event to find text

    // Update and synchronization events
    UPDATE_AVAILABLE: 'update-available', // Event when an update is available
    UPDATE_DOWNLOADED: 'update-downloaded', // Event when an update is downloaded
    SYNC_START: 'sync-start', // Event when synchronization starts
    SYNC_COMPLETE: 'sync-complete', // Event when synchronization is complete

    // AI model management events
    MODEL_LOAD: 'model-load', // Event when a model is loaded
    MODEL_UNLOAD: 'model-unload', // Event when a model is unloaded
    MODEL_UPDATE: 'model-update', // Event when a model is updated
    MODEL_READY: 'model-ready', // Event when a model is ready

    // Conversational workflow events
    WORKFLOW_START: 'workflow-start', // Event when a workflow starts
    WORKFLOW_PAUSE: 'workflow-pause', // Event when a workflow is paused
    WORKFLOW_RESUME: 'workflow-resume', // Event when a workflow is resumed
    WORKFLOW_END: 'workflow-end', // Event when a workflow ends

    // Data handling events
    DATA_IMPORT: 'data-import', // Event for data import
    DATA_EXPORT: 'data-export', // Event for data export
    DATA_CLEANUP: 'data-cleanup', // Event for data cleanup
    DATASTORE_LOAD: 'datastore-load', // Event when a datastore is loaded
    DATASTORE_LOADED: 'datastore-loaded', // Event when a datastore has finished loading

    // Error handling events
    ERROR_OCCURRED: 'error-occurred', // Event when an error occurs
    ERROR_RESOLVED: 'error-resolved', // Event when an error is resolved

    // User interaction events
    USER_LOGIN: 'user-login', // Event when a user logs in
    USER_LOGOUT: 'user-logout', // Event when a user logs out
    USER_INPUT: 'user-input', // Event for user input
    USER_ACTION: 'user-action', // Event for user actions

    // Custom plugin events
    PLUGIN_INSTALL: 'plugin-install', // Event for plugin installation
    PLUGIN_REMOVE: 'plugin-remove', // Event for plugin removal
    PLUGIN_UPDATE: 'plugin-update', // Event for plugin update

    // Custom package events
    PACKAGE_INSTALL: 'package-install', // Event for package installation
    PACKAGE_REMOVE: 'package-remove', // Event for package removal
    PACKAGE_UPDATE: 'package-update', // Event for package update

    // Project management events
    PROJECT_NEW: 'project-new', // Event for creating a new project
    PROJECT_LOAD: 'project-load', // Event for loading a project
    PROJECT_DELETE: 'project-delete', // Event for deleting a project
    PROJECT_SAVE: 'project-save', // Event for saving a project
    PROJECT_PUBLISH: 'project-publish', // Event for publishing a project
    PROJECT_UNPUBLISH: 'project-unpublish', // Event for unpublishing a project

    // Team and member management events
    TEAM_CLIENT: 'team-client', // Event for team client actions
    TEAM_CONTROLLER: 'team-controller', // Event for team controller actions
    MEMBER_CLIENT: 'member-client', // Event for member client actions
    MEMBER_CONTROLLER: 'member-controller', // Event for member controller actions

    // Database events
    DATABASE_CLIENT: 'database-client', // Event for database client actions
    DATABASE_READY: 'database-ready', // Event when the database is ready
    DATABASE_CREATE_VOLUME: 'database-create-volume', // Event for creating a database volume
    DATABASE_DELETE_VOLUME: 'database-delete-volume', // Event for deleting a database volume

    // Network socket communication events
    SOCKET_CONNECTED: 'socket-connected', // Event when a socket is connected
    SOCKET_CONNECT_FAILED: 'socket-connect-failed', // Event when a socket connection fails
    SOCKET_CLIENT: 'socket-client', // Event for socket client messages
    SOCKET_CHANNEL: 'socket-channel', // Event for socket channel messages
    SOCKET_JOIN_CHANNEL: 'socket-join-channel', // Event for joining a socket channel
    SOCKET_LEAVE_CHANNEL: 'socket-leave-channel', // Event for leaving a socket channel

    // Activation and loading events
    APPACTIVATOR_SAVE_ACTIVATION: 'appactivator-save-activation', // Event for saving an activation
    APPACTIVATOR_ACTIVATION_SAVED: 'appactivator-activation-saved', // Event when an activation is saved
    APPLOADER_LOAD: 'apploader-load', // Event when the app loader loads

    // Shortcut events
    SHORTCUTS_CREATED: 'shortcuts-created', // Event when shortcuts are created
    SHORTCUTS_RECEIVED: 'shortcuts-received', // Event when shortcuts are received
    SHORTCUTS_WINDOW_CONSOLE_SIDEBAR_SHOW: 'shortcuts-window-console-sidebar-show', // Event to show the console sidebar via shortcut

    // Entity and job lifecycle events
    ENTITY_CREATE: 'entity-create', // Event when an entity is created
    ENTITY_INIT: 'entity-init', // Event when an entity initializes
    ENTITY_AWAKE: 'entity-awake', // Event when an entity awakes
    ENTITY_START: 'entity-start', // Event when an entity starts
    ENTITY_UPDATE: 'entity-update', // Event for entity updates
    ENTITY_FIXED_UPDATE: 'entity-fixed-update', // Event for fixed entity updates
    ENTITY_LATE_UPDATE: 'entity-late-update', // Event for late entity updates
    ENTITY_DESTROY: 'entity-destroy', // Event when an entity is destroyed
    ENTITY_ENABLE: 'entity-enable', // Event when an entity is enabled
    ENTITY_DISABLE: 'entity-disable', // Event when an entity is disabled

    // Basic API events for systems
    SYSTEM_INIT: 'system-init', // Event when a system initializes
    SYSTEM_AWAKE: 'system-awake', // Event when a system awakes
    SYSTEM_START: 'system-start', // Event when a system starts
    SYSTEM_STOP: 'system-stop', // Event when a system stops
    SYSTEM_PAUSE: 'system-pause', // Event when a system pauses
    SYSTEM_RESUME: 'system-resume', // Event when a system resumes
    SYSTEM_UPDATE: 'system-update', // Event for system updates
    SYSTEM_FIXED_UPDATE: 'system-fixed-update', // Event for fixed system updates
    SYSTEM_LATE_UPDATE: 'system-late-update', // Event for late system updates
    SYSTEM_JOB_SCHEDULED: 'system-job-scheduled', // Event when a system job is scheduled
    SYSTEM_JOB_COMPLETED: 'system-job-completed', // Event when a system job is completed
    SYSTEM_JOB_CANCEL: 'system-job-cancel', // Event when a system job is canceled
    SYSTEM_ENTITY_ADD: 'system-entity-add', // Event when an entity is added to a system
    SYSTEM_ENTITY_DESTROY: 'system-entity-destroy', // Event when an entity is destroyed in a system
    SYSTEM_COMPONENT_ADD: 'system-component-add', // Event when a component is added to a sysstem
    SYSTEM_COMPONENT_DESTROY: 'system-component-destroy', // Event when a component is destroyed in a system

    // Data handling events
    DATA_LOAD: 'data-load', // Triggered when data is loaded
    DATA_SAVE: 'data-save', // Triggered when data is saved
    DATA_QUERY: 'data-query', // Triggered when a data query is performed
    DATA_UPDATE: 'data-update', // Triggered when data is updated
    DATA_DELETE: 'data-delete', // Triggered when data is deleted

    // User interaction events
    INPUT_EVENT: 'input-event', // Triggered when user input is received
    USER_ACTION: 'user-action', // Triggered when a user action occurs
    USER_LOGIN: 'user-login', // Triggered when a user logs in
    USER_LOGOUT: 'user-logout', // Triggered when a user logs out
    USER_NOTIFICATION: 'user-notification', // Triggered when a user notification is sent
};
