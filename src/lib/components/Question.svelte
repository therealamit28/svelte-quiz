<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let question;

  const dispatch = createEventDispatcher();

  function handleAnswer(answer) {
    dispatch('answer', answer);
  }
</script>

<div in:fade="{{ duration: 300 }}">
  <h2 class="text-2xl font-bold mb-6 text-gray-800">{question.text}</h2>
  <div class="space-y-4">
    {#each question.options as option}
      <button
        on:click={() => handleAnswer(option)}
        class="w-full text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:-translate-y-1 hover:shadow-md"
      >
        <span class="text-lg text-gray-700">{option}</span>
      </button>
    {/each}
  </div>
</div>