<script>
    import { createEventDispatcher } from 'svelte';
  
    export let questions;
    export let answers;
  
    const dispatch = createEventDispatcher();
  
    $: score = questions.reduce((acc, q, i) => acc + (q.correctAnswer === answers[i] ? 1 : 0), 0);
  
    function newGame() {
      dispatch('newGame');
    }
  </script>
  
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Quiz Results</h2>
    <p class="text-xl mb-4">Your score: {score} / {questions.length}</p>
  
    <div class="space-y-4 mb-8">
      {#each questions as question, index}
        <div class={answers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}>
          <p class="font-bold">Question {index + 1}: {question.text}</p>
          <p>Your answer: {answers[index]}</p>
          <p>Correct answer: {question.correctAnswer}</p>
        </div>
      {/each}
    </div>
  
    <button
      on:click={newGame}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Start New Game
    </button>
  </div>