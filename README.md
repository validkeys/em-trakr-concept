traker-hooks: (optional) these are hooks that are called after the main event. This is where things like mixpanel.people.increment and other library specific things can be done

traker-processors: (optional) this is where a user can (on a per-provider basis), sanitize the payload 

traker-providers: Should only need to implement the "emit" event. Extract all other shared things to a custom class

traker instance initializer: Registers all of the hooks, injects the service into routes, controllers, components

# TODO:

1. Abstract Shared Logic
2. Create ability for additional default data (on a per-provider basis?)
3. Add ability to block events for a provider (ex. Mixpanel may not want to track page view events)
4. Add in device specific info as an option that can be turned on in the config
5. Abstract to addon
6. Add tests
7. Poof!