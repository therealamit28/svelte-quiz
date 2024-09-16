import { currentAffairs } from './data/currentAffairs.js';
import { reasoning } from './data/reasoning.js';
import { history } from './data/history.js';
import { computerScience } from './data/computerScience.js';
import { Sveltekit } from './data/Sveltekit.js';
import{svelte} from './data/svelte.js';
import{javascript} from './data/javascript.js';

export async function getQuestions(section) {
  let questions;
  switch (section) {
    case 'current-affairs':
      questions = currentAffairs;
      break;
    case 'reasoning':
      questions = reasoning;
      break;
      case 'svelte':
        questions = svelte;
      break;
      case 'javascript':
        questions = javascript;
      break;
    case 'history':
      questions = history;
      break;
      case'sveltekit':
      questions = Sveltekit;
      break;
    case 'computer-science':
      questions = computerScience;
      break;
    default:
      throw new Error('Invalid section');
  }
  
  return questions.sort(() => 0.5 - Math.random()).slice(0, 40);
}