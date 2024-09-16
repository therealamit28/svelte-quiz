<script>
    import { createEventDispatcher } from 'svelte';
    import Question from './Question.svelte';
  
    export let question;
    export let questionNumber;
    export let totalQuestions;
  
    const dispatch = createEventDispatcher();
  
    function handleAnswer(event) {
      dispatch('answer', event.detail);
    }
  </script>
  
  <div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <div class="mb-6">
      <p class="text-lg font-semibold text-gray-600 mb-2">Question {questionNumber} of {totalQuestions}</p>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out" style="width: {(questionNumber / totalQuestions) * 100}%"></div>
      </div>
    </div>
  
    <Question
      {question}
      on:answer={handleAnswer}
    />
  </div>