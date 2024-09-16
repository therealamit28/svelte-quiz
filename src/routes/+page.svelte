<script>
  import { goto } from '$app/navigation';
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const sections = [
    { name: 'Computer Science', slug: 'computer-science', icon: '💻', color: 'bg-blue-500' },
    { name: 'Svelte', slug: 'svelte', icon: '🎭', color: 'bg-orange-500' },
    { name: 'JavaScript', slug: 'javascript', icon: '🟨', color: 'bg-yellow-500' },
    { name: 'SvelteKit', slug: 'sveltekit', icon: '🚀', color: 'bg-red-500' },
    { name: 'Current Affairs', slug: 'current-affairs', icon: '📰', color: 'bg-green-500' },
    { name: 'Reasoning', slug: 'reasoning', icon: '🧠', color: 'bg-purple-500' },
    { name: 'History', slug: 'history', icon: '🏛️', color: 'bg-indigo-500' }
  ];

  function startQuiz(section) {
    goto(`/quiz?section=${section}`);
  }

  let hoveredSection = null;
</script>

<main class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-5xl font-extrabold mb-8 text-center text-gray-800">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Quiz Master
      </span>
    </h1>
    <p class="text-xl text-center text-gray-600 mb-12">
      Challenge yourself with our diverse range of quizzes!
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each sections as section, index}
        <button
          on:click={() => startQuiz(section.slug)}
          on:mouseenter={() => hoveredSection = section}
          on:mouseleave={() => hoveredSection = null}
          class="bg-white hover:bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative overflow-hidden"
          in:fly="{{ y: 50, duration: 300, delay: index * 100 }}"
        >
          <div class="p-6 flex flex-col items-center">
            <div class={`text-4xl mb-4 w-16 h-16 flex items-center justify-center rounded-full ${section.color} text-white`}>
              {section.icon}
            </div>
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">{section.name}</h2>
            <p class="text-gray-600 text-center">Test your {section.name} knowledge</p>
          </div>
          {#if hoveredSection === section}
            <div 
              class="absolute inset-0 bg-blue-100 opacity-20" 
              in:scale="{{ duration: 200, start: 0.95, opacity: 0.5, easing: quintOut }}"
            ></div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</main>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
  }
</style>