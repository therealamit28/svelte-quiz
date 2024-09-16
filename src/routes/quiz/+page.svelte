<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import QuizSection from '$lib/components/QuizSection.svelte';
    import Results from '$lib/components/Results.svelte';
    import { getQuestions } from '$lib/utils.js';
  
    let questions = [];
    let currentQuestion = 0;
    let answers = [];
    let showResults = false;
    let loading = true;
  
    onMount(async () => {
      const section = $page.url.searchParams.get('section');
      try {
        questions = await getQuestions(section);
      } catch (error) {
        console.error('Error loading questions:', error);
      } finally {
        loading = false;
      }
    });
  
    function handleAnswer(event) {
      const answer = event.detail;
      answers[currentQuestion] = answer;
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
      } else {
        showResults = true;
      }
    }
  
    function newGame() {
      currentQuestion = 0;
      answers = [];
      showResults = false;
    }
  </script>
  
  <main class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
        {$page.url.searchParams.get('section')} Quiz
      </h1>
      
      {#if loading}
        <div class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p class="mt-4 text-xl text-gray-600">Loading questions...</p>
        </div>
      {:else if questions.length === 0}
        <p class="text-center text-xl text-gray-600 bg-white rounded-lg shadow-md p-8">
          No questions available for this section.
        </p>
      {:else if showResults}
        <Results {questions} {answers} on:newGame={newGame} />
      {:else}
        <QuizSection
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          on:answer={handleAnswer}
        />
      {/if}
    </div>
  </main>