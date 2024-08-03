## Script Header

Every script written for the Scripting Engine must include a header section at the beginning of the file. The header follows a specific format, as shown below:
```
// ==SE_module==
// name: script_name
// displayName: Script Name
// description: Script description
// version: 1.0
// author: Author
// ==/SE_module==
```
The following fields are required: `name`, `version`, `author`<br>
Additionally, there are also optional fields available which are: `displayName`, `description`, `minSnapchatVersion`, `minSEVersion`, `permissions`

### Field Description

`name`: Descriptive name for the script. Must be composed of lowercase letters and underscores only.<br>
`displayName`: Display name of the script. <br>
`author`: Name of the script's creator.<br>
`version`: Version number of the script (e.g. 1.0.0).<br>
`description`: Brief explanation of the script's functionality.<br>
`minSnapchatVersion`: Minimum required Snapchat version code (e.g. 13.1.0.43).<br>
`minSEVersion`: Minimum required SE Extended version code (e.g. 1.0.0).<br>
`permissions`: Grant permissions to the script (e.g. unsafe-classloader)<br>
`executionSides`: Set a custom execution side (e.g. core, manager)

### Scripting API

**Introduction:** This header provides a comprehensive overview of the Scripting API, offering detailed explanations of its core interfaces, functions, and concepts. This API empowers developers to create custom scripts that extend and enhance the functionality of the SE Extended platform.

**Core Concepts:**
- **Interfaces:** Blueprints that define a contract for the behavior of an object. They specify the methods and properties that an object must implement.
- **Classes:** Concrete implementations of interfaces, providing the actual logic for the defined methods and properties.
- **Methods:** Functions associated with an interface or class, performing specific actions.
- **Properties:** Attributes of an interface or class, representing data or settings.
- **Arguments:** Values passed to methods to influence their behavior.
- **Return Values:** Outputs from methods that provide results or indicate success/failure.
- **Callbacks:** Functions passed as arguments to be invoked asynchronously within methods.


**Interfaces:**
- **Class<T>:** Defines a generic interface for classes that have a `getName()` method returning a string of type T.
- **Methods:**
   - `getName(): string` - Returns the name of the class as a string.

**JavaType:** Represents a Java type and provides methods for creating instances of that type.
 - **Methods:**
    - `newInstance(...args: any[]): any` (deprecated): Creates a new instance of the Java type with the provided arguments.
    - `__new__(...args: any[]): any` (alternative): Creates a new instance of the Java type with the provided arguments.

**SEWrapper:** Offers common functionalities for objects returned by APIs.
 - **Methods:**
    - `instanceNonNull(): any`: Ensures the object is not null, throwing an error if it is.
    - `isPresent(): boolean`: Checks if the object is present (not null).
    - `toString(): string`: Returns a string representation of the object.
    - `getEnumValue(fieldName: string, defaultValue: any): any`: Retrieves an enum value from the object by field name, providing a default value if not found.
    - `setEnumValue(fieldName: string, value: any /* java.lang.Enum */): void`: Sets an enum value on the object by field name.

**JSConsole:** Provides methods for logging messages to the console.
 - **Methods:**
    - `log(...data: any): void`: Logs general messages.
    - `warn(...data: any): void`: Logs warnings.
    - `error(...data: any): void`: Logs errors.
    - `debug(...data: any): void`: Logs debugging information.
    - `info(...data: any): void`: Logs informational messages.
    - `trace(...data: any): void`: Logs detailed stack traces.
    - `verbose(...data: any): void`: Logs verbose output.

**module:** Contains information about the current script module and provides hooks for lifecycle events.
- **Properties:**
   - `info`: An object containing module metadata (`name`, `displayName`, `version`, `description`, `author`, `minSnapchatVersion`, `minSEVersion`, `grantedPermissions`).
   - `exports`: An optional object for exporting module-specific functions or variables.
   - `onSnapEnhanceLoad`: A callback function triggered when the SE Extended environment is loaded.
   - `onSnapApplicationLoad`: A callback function triggered when the Snapchat application is loaded.
   - `onSnapMainActivityCreate`: A callback function triggered when the Snapchat main activity is created.
   - `onUnload`: A callback function triggered when the module is unloaded.

**Other Core Interfaces and Functions:**
 - `currentSide`: A global constant indicating whether the script is running on the core or manager side.
 - `logInfo(message: any)`: Logs an informational message.
 - `logError(message: any, throwable?: any)`: Logs an error message with an optional throwable object.
 - `shortToast(...messages: string[])`: Displays a short toast message with the given text.
 - `longToast(...messages: string[])`: Displays a long toast message with the given text.
 - `type(className: string, useModClassLoader?: boolean): JavaType | undefined`: Retrieves a Java type by its class name.
 - `findClass(className: string, useModClassLoader?: boolean): Class<any> | undefined`: Finds a class by its class name.
 - `setField(instance: any, fieldName: string, value: any | undefined): void`: Sets the value of a field on an instance.
 - `getField(instance: any, fieldName: string): any | undefined`: Gets the value of a field on an instance.
 - `sleep(durationMs: number)`: Pauses script execution for the specified duration in milliseconds.

**Additional Modules:**
 - `hooker`: Provides functions for hooking into methods and constructors of classes.
 - `config`: Offers methods for managing configuration settings.
 - `interface-manager`: Enables the creation of custom user interfaces.
 - `ipc`: Facilitates inter-process communication.
 - `java-interfaces`: Provides utilities for working with Java interfaces.
 - `messaging`: Offers functions for interacting with Snapchat messages.
 - `networking`: Provides methods for making network requests and managing websockets.
 - `events`: Allows subscribing to and handling various events.
 - `protobuf`: Provides tools for working with Protocol Buffers.

**Conclusion:**
This document serves as a foundational reference for developing scripts using the Scripting API. By understanding the core concepts and available interfaces, Users can create powerful and innovative solutions to enhance the Snapchat experience.<br/>
You can view the full file [here](https://github.com/SE-Extended/Scripts/blob/main/index.d.ts)