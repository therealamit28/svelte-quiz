
export const svelte = [
  {
    text: "What is Svelte?",
    options: ["A JavaScript framework", "A compiler", "A CSS preprocessor", "A testing library"],
    correctAnswer: "A compiler"
  },
  {
    text: "How does Svelte differ from React and Vue?",
    options: ["It uses virtual DOM", "It's compiled at build time", "It requires a separate state management library", "It only works with TypeScript"],
    correctAnswer: "It's compiled at build time"
  },
  {
    text: "What is the file extension for Svelte components?",
    options: [".svelte", ".sv", ".svt", ".svel"],
    correctAnswer: ".svelte"
  },
  {
    text: "How do you declare a reactive statement in Svelte?",
    options: ["reactive {}", "watch()", "$: statement", "computed: {}"],
    correctAnswer: "$: statement"
  },
  {
    text: "Which of these is NOT a Svelte lifecycle function?",
    options: ["onMount", "onDestroy", "beforeUpdate", "onCreated"],
    correctAnswer: "onCreated"
  },
  {
    text: "How do you create a custom event in Svelte?",
    options: ["createEvent()", "dispatchEvent()", "createCustomEvent()", "createEventDispatcher()"],
    correctAnswer: "createEventDispatcher()"
  },
  {
    text: "What is the purpose of the 'export' keyword in Svelte?",
    options: ["To make a variable public", "To declare a prop", "To export a function", "To create a module"],
    correctAnswer: "To declare a prop"
  },
  {
    text: "How do you conditionally apply a class in Svelte?",
    options: ["class:name={condition}", "class={condition ? 'name' : ''}", "class-if={condition}", "classname={condition}"],
    correctAnswer: "class:name={condition}"
  },
  {
    text: "What does the '#' symbol represent in Svelte templates?",
    options: ["A comment", "The start of a block", "An ID selector", "A reactive statement"],
    correctAnswer: "The start of a block"
  },
  {
    text: "How do you handle promises in Svelte templates?",
    options: ["{#await}", "{#promise}", "{#async}", "{#then}"],
    correctAnswer: "{#await}"
  },
  {
    text: "What is the purpose of the 'svelte:component' element?",
    options: ["To create a new component", "To dynamically render a component", "To import a component", "To extend a component"],
    correctAnswer: "To dynamically render a component"
  },
  {
    text: "How can you add transitions to elements in Svelte?",
    options: ["Using the transition directive", "With CSS animations", "Using the animate function", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    text: "What is the store contract in Svelte?",
    options: ["A way to manage global state", "A method to store data in local storage", "A contract for creating custom stores", "A system for caching data"],
    correctAnswer: "A contract for creating custom stores"
  },
  {
    text: "Which of the following is a built-in store in Svelte?",
    options: ["writable", "readonly", "observable", "computed"],
    correctAnswer: "writable"
  },
  {
    text: "How do you subscribe to a store in Svelte?",
    options: ["store.subscribe()", "store.watch()", "store.observe()", "store.listen()"],
    correctAnswer: "store.subscribe()"
  },
  {
    text: "Which directive is used for animations in Svelte?",
    options: ["transition", "animate", "motion", "move"],
    correctAnswer: "transition"
  },
  {
    text: "How do you bind a value to an input field in Svelte?",
    options: ["bind:value", "bind:input", "on:input", "bind:model"],
    correctAnswer: "bind:value"
  },
  {
    text: "How do you bind a value to a DOM element's property in Svelte?",
    options: ["bind:prop", "bind:value", "on:change", "bind:model"],
    correctAnswer: "bind:value"
  },
  {
    text: "Which of the following is NOT a valid Svelte directive?",
    options: ["on:", "bind:", "animate:", "ref:"],
    correctAnswer: "ref:"
  },
  {
    text: "Which of the following is used to apply key-based animation to an element in Svelte?",
    options: ["transition:fly", "transition:fade", "animate:flip", "keyed:animate"],
    correctAnswer: "animate:flip"
  },
  {
    text: "How do you pass props from a parent to a child component in Svelte?",
    options: ["Using 'export' in the child component", "Using props like in React", "Using 'context' API", "Using 'bind:'"],
    correctAnswer: "Using 'export' in the child component"
  },
  {
    text: "What is the purpose of the 'slot' element in Svelte?",
    options: ["To create named areas for content", "To declare props", "To create animations", "To conditionally render content"],
    correctAnswer: "To create named areas for content"
  },
  {
    text: "How do you conditionally render content in Svelte?",
    options: ["{#if} ... {/if}", "{#show} ... {/show}", "{#display} ... {/display}", "{#render} ... {/render}"],
    correctAnswer: "{#if} ... {/if}"
  },
  {
    text: "How can you attach inline styles to a Svelte element?",
    options: ["style={}", "bind:style", "style:bind", "style="],
    correctAnswer: "style="
  },
  {
    text: "Which of the following lifecycle functions runs after the component is first rendered to the DOM?",
    options: ["onMount", "beforeUpdate", "afterUpdate", "onDestroy"],
    correctAnswer: "onMount"
  },
  {
    text: "How do you loop over a list of items in a Svelte template?",
    options: ["{#each}", "{#for}", "{#loop}", "{#map}"],
    correctAnswer: "{#each}"
  },
  {
    text: "Which Svelte lifecycle method is used to clean up resources before a component is destroyed?",
    options: ["onDestroy", "beforeDestroy", "cleanup", "beforeUpdate"],
    correctAnswer: "onDestroy"
  },
  {
    text: "How do you import a Svelte component into another component?",
    options: ["import Component from './Component.svelte'", "import { Component } from './Component.svelte'", "include Component from './Component.svelte'", "require('./Component.svelte')"],
    correctAnswer: "import Component from './Component.svelte'"
  },
  {
    text: "How do you reference a DOM element in Svelte?",
    options: ["bind:this", "ref:this", "on:element", "use:this"],
    correctAnswer: "bind:this"
  },
  {
    text: "Which directive allows you to animate elements as they enter or leave the DOM?",
    options: ["transition", "animate", "flip", "move"],
    correctAnswer: "transition"
  },
  {
    text: "How do you write a reactive variable in Svelte?",
    options: ["$: variable", "reactive: variable", "$react: variable", "$variable: reactive"],
    correctAnswer: "$: variable"
  },
  {
    text: "Which directive would you use to bind an input element to a reactive variable?",
    options: ["bind:value", "input:bind", "bind:var", "reactive:input"],
    correctAnswer: "bind:value"
  },
  {
    text: "What is the shorthand syntax for creating a writable store in Svelte?",
    options: ["writable()", "reactive()", "store()", "state()"],
    correctAnswer: "writable()"
  },
  {
    text: "Which method is used to update a writable store's value in Svelte?",
    options: ["set()", "update()", "write()", "modify()"],
    correctAnswer: "set()"
  },
  {
    text: "How do you initialize a writable store with a default value?",
    options: ["writable(defaultValue)", "store(defaultValue)", "initStore(defaultValue)", "writableState(defaultValue)"],
    correctAnswer: "writable(defaultValue)"
  },
  {
    text: "Which of the following is NOT a Svelte transition function?",
    options: ["fade", "fly", "grow", "scale"],
    correctAnswer: "grow"
  },
  {
    text: "How do you add CSS styles scoped to a specific Svelte component?",
    options: ["Include styles in <style> tag in the Svelte file", "Use external CSS file", "Inline CSS", "Use scoped CSS attribute"],
    correctAnswer: "Include styles in <style> tag in the Svelte file"
  },
  {
    text: "How do you update a reactive variable inside a Svelte component?",
    options: ["By assigning a new value to the variable", "Using set()",

 "Using update()", "Using mutate()"],
    correctAnswer: "By assigning a new value to the variable"
  },
  {
    text: "Which keyword is used to create a writable store?",
    options: ["writable", "store", "reactive", "bind"],
    correctAnswer: "writable"
  },
  {
    text: "How do you unsubscribe from a store in Svelte?",
    options: ["By calling the unsubscribe function", "By using unbind()", "By calling stop()", "By using clear()"],
    correctAnswer: "By calling the unsubscribe function"
  }
];
