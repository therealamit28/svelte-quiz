export const Sveltekit = [
    {
      text: "What is SvelteKit?",
      options: ["A JavaScript framework", "A build tool", "An application framework for Svelte", "A styling library"],
      correctAnswer: "An application framework for Svelte"
    },
    {
      text: "Which of these is not a SvelteKit routing file?",
      options: ["+page.svelte", "+layout.svelte", "+error.svelte", "+route.svelte"],
      correctAnswer: "+route.svelte"
    },
    {
      text: "What is the purpose of the `+layout.svelte` file in SvelteKit?",
      options: ["To define page-specific content", "To handle server-side logic", "To define a layout that wraps multiple pages", "To handle client-side routing"],
      correctAnswer: "To define a layout that wraps multiple pages"
    },
    {
      text: "How do you define a dynamic route in SvelteKit?",
      options: ["Using square brackets []", "Using parentheses ()", "Using angle brackets <>", "Using curly braces {}"],
      correctAnswer: "Using square brackets []"
    },
    {
      text: "What is the purpose of the `+page.server.js` file in SvelteKit?",
      options: ["To define client-side logic", "To handle server-side logic and data loading", "To define the page layout", "To handle routing"],
      correctAnswer: "To handle server-side logic and data loading"
    },
    {
      text: "Which function is used for server-side data loading in SvelteKit?",
      options: ["load()", "fetch()", "getData()", "serverLoad()"],
      correctAnswer: "load()"
    },
    {
      text: "What is the purpose of the `$app` module in SvelteKit?",
      options: ["To provide utility functions", "To handle state management", "To provide environment-specific variables and functions", "To handle server-side rendering"],
      correctAnswer: "To provide environment-specific variables and functions"
    },
    {
      text: "How do you access page params in a SvelteKit route?",
      options: ["Using $page.params", "Using $params", "Using $route.params", "Using $url.params"],
      correctAnswer: "Using $page.params"
    },
    {
      text: "What is the purpose of the `handle` hook in SvelteKit?",
      options: ["To handle client-side navigation", "To intercept and modify server responses", "To handle state management", "To define page transitions"],
      correctAnswer: "To intercept and modify server responses"
    },
    {
      text: "Which of these is not a valid SvelteKit adapter?",
      options: ["adapter-node", "adapter-static", "adapter-vercel", "adapter-express"],
      correctAnswer: "adapter-express"
    },
    {
      text: "What is the purpose of the `+error.svelte` file in SvelteKit?",
      options: ["To handle 404 errors", "To handle all types of errors", "To log errors", "To prevent errors"],
      correctAnswer: "To handle all types of errors"
    },
    {
      text: "How do you define a catch-all route in SvelteKit?",
      options: ["Using [...catchall]", "Using (*)", "Using /:catchall", "Using {catchall}"],
      correctAnswer: "Using [...catchall]"
    },
    {
      text: "What is the purpose of the `prerender` option in SvelteKit?",
      options: ["To enable server-side rendering", "To generate static HTML at build time", "To optimize client-side rendering", "To enable code splitting"],
      correctAnswer: "To generate static HTML at build time"
    },
    {
      text: "Which hook is used for modifying the response headers in SvelteKit?",
      options: ["handle", "transform", "configure", "headers"],
      correctAnswer: "handle"
    },
    {
      text: "What is the purpose of the `$env` module in SvelteKit?",
      options: ["To access environment variables", "To set environment variables", "To manage application state", "To handle API requests"],
      correctAnswer: "To access environment variables"
    },
    {
      text: "How do you define a layout that only applies to a specific route and its children in SvelteKit?",
      options: ["Using +layout.svelte in the route directory", "Using (layout).svelte", "Using _layout.svelte", "Using layout.svelte"],
      correctAnswer: "Using +layout.svelte in the route directory"
    },
    {
      text: "What is the purpose of the `invalidate()` function in SvelteKit?",
      options: ["To remove invalid data", "To trigger a re-run of load functions", "To handle form validation", "To clear the cache"],
      correctAnswer: "To trigger a re-run of load functions"
    },
    {
      text: "Which of these is not a valid SvelteKit project structure?",
      options: ["src/routes", "src/lib", "static", "src/components"],
      correctAnswer: "src/components"
    },
    {
      text: "What is the purpose of the `+server.js` file in SvelteKit?",
      options: ["To define server-side routes", "To handle API endpoints", "To configure the server", "To define middleware"],
      correctAnswer: "To handle API endpoints"
    },
    {
      text: "How do you access the current URL in a SvelteKit component?",
      options: ["Using $page.url", "Using $url", "Using $route", "Using $location"],
      correctAnswer: "Using $page.url"
    },
    {
      text: "What is the purpose of the `enhance` action in SvelteKit forms?",
      options: ["To add CSS enhancements", "To validate form data", "To progressively enhance forms with JavaScript", "To encrypt form data"],
      correctAnswer: "To progressively enhance forms with JavaScript"
    },
    {
      text: "Which function is used for redirecting in SvelteKit server-side load functions?",
      options: ["redirect()", "goto()", "navigate()", "forward()"],
      correctAnswer: "redirect()"
    },
    {
      text: "What is the purpose of the `$app/stores` module in SvelteKit?",
      options: ["To provide global stores", "To handle local storage", "To manage session storage", "To handle state management"],
      correctAnswer: "To provide global stores"
    },
    {
      text: "How do you define a group layout in SvelteKit?",
      options: ["Using (group)/+layout.svelte", "Using group/+layout.svelte", "Using _group/+layout.svelte", "Using {group}/+layout.svelte"],
      correctAnswer: "Using (group)/+layout.svelte"
    },
    {
      text: "What is the purpose of the `vite.config.js` file in a SvelteKit project?",
      options: ["To configure routing", "To configure the build process", "To define environment variables", "To configure the server"],
      correctAnswer: "To configure the build process"
    },
    {
      text: "Which of these is not a valid SvelteKit loading function?",
      options: ["load", "loadPage", "loadLayout", "loadError"],
      correctAnswer: "loadPage"
    },
    {
      text: "What is the purpose of the `$lib` alias in SvelteKit?",
      options: ["To access library functions", "To import external libraries", "To access the src/lib directory", "To define global variables"],
      correctAnswer: "To access the src/lib directory"
    },
    {
      text: "How do you handle form submissions in SvelteKit?",
      options: ["Using the action attribute", "Using the on:submit event", "Both A and B", "Neither A nor B"],
      correctAnswer: "Both A and B"
    },
    {
      text: "What is the purpose of the `hooks.server.js` file in SvelteKit?",
      options: ["To define client-side hooks", "To define server-side hooks", "To handle API routes", "To configure the server"],
      correctAnswer: "To define server-side hooks"
    },
    {
      text: "Which of these is not a valid SvelteKit page option?",
      options: ["ssr", "csr", "hydrate", "render"],
      correctAnswer: "render"
    },
    {
      text: "What is the purpose of the `$app/navigation` module in SvelteKit?",
      options: ["To handle server-side navigation", "To provide navigation-related functions and stores", "To define navigation menus", "To handle routing"],
      correctAnswer: "To provide navigation-related functions and stores"
    },
    {
      text: "How do you access query parameters in a SvelteKit route?",
      options: ["Using $page.query", "Using $page.url.searchParams", "Using $route.query", "Using $params.query"],
      correctAnswer: "Using $page.url.searchParams"
    },
    {
      text: "What is the purpose of the `sequence()` function in SvelteKit hooks?",
      options: ["To define the order of middleware execution", "To create a sequence of actions", "To handle asynchronous operations", "To define routing sequences"],
      correctAnswer: "To define the order of middleware execution"
    },
    {
      text: "Which of these is not a valid SvelteKit form action?",
      options: ["default", "update", "delete", "submit"],
      correctAnswer: "submit"
    },
    {
      text: "What is the purpose of the `+layout.js` file in SvelteKit?",
      options: ["To define the page layout", "To handle layout-specific logic and data loading", "To define global styles", "To handle routing"],
      correctAnswer: "To handle layout-specific logic and data loading"
    },
    {
      text: "How do you define a reset handler for a form in SvelteKit?",
      options: ["Using on:reset", "Using reset()", "Using handleReset()", "SvelteKit doesn't have a specific reset handler"],
      correctAnswer: "Using on:reset"
    },
    {
      text: "What is the purpose of the `trailingSlash` configuration option in SvelteKit?",
      options: ["To add slashes to file names", "To remove trailing slashes from URLs", "To configure how trailing slashes in URLs are handled", "To add slashes to component names"],
      correctAnswer: "To configure how trailing slashes in URLs are handled"
    },
    {
      text: "Which of these is not a valid SvelteKit prerendering strategy?",
      options: ["auto", "always", "never", "sometimes"],
      correctAnswer: "sometimes"
    },
    {
      text: "What is the purpose of the `$app/paths` module in SvelteKit?",
      options: ["To handle file paths", "To provide path-related constants", "To manage routing paths", "To handle URL paths"],
      correctAnswer: "To provide path-related constants"
    },
    {
      text: "How do you set up API routes in SvelteKit?",
      options: ["Using +api.js files", "Using +server.js files", "Using api.config.js", "Using server.config.js"],
      correctAnswer: "Using +server.js files"
    },
    {
      text: "What is the purpose of the `building` hook in SvelteKit?",
      options: ["To handle the build process", "To modify files during the build", "To configure the build settings", "To optimize the build output"],
      correctAnswer: "To modify files during the build"
    },
    {
      text: "Which of these is not a valid SvelteKit configuration option?",
      options: ["kit.paths.base", "kit.prerender.default", "kit.csr", "kit.ssr"],
      correctAnswer: "kit.csr"
    },
    {
      text: "What is the purpose of the `+page.ts` file in SvelteKit?",
      options: ["To define TypeScript types for the page", "To handle page-specific TypeScript logic", "Both A and B", "Neither A nor B"],
      correctAnswer: "To handle page-specific TypeScript logic"
    },
    {
      text: "How do you handle cookie-based sessions in SvelteKit?",
      options: ["Using the cookies API", "Using the session store", "Using localStorage", "SvelteKit doesn't support cookie-based sessions"],
      correctAnswer: "Using the cookies API"
    },
    {
      text: "What is the purpose of the `$app/environment` module in SvelteKit?",
      options: ["To access environment variables", "To check the current environment", "To set environment-specific configurations", "To provide environment-related constants"],
      correctAnswer: "To provide environment-related constants"
    },
    {
      text: "Which of these is not a valid SvelteKit error code?",
      options: ["404", "500", "403", "503"],
      correctAnswer: "503"
    },
    {
      text: "What is the purpose of the `export const prerender = true` statement in a SvelteKit route?",
      options: ["To enable server-side rendering", "To generate a static version of the page at build time", "To disable client-side rendering", "To enable code splitting"],
      correctAnswer: "To generate a static version of the page at build time"
    },
    {
      text: "How do you access route parameters in a SvelteKit load function?",
      options: ["Using params.param_name", "Using $page.params", "Using route.params", "Using $params"],
      correctAnswer: "Using params.param_name"
    }
  ];