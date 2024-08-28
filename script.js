import { setupSearchBar } from './search-module.js';
import { setupItemClick } from './selection-module.js';

document.addEventListener('DOMContentLoaded', function() {
    setupSearchBar('search-bar', 'monster-list');
    setupItemClick('monster-list', 'selected-monster-list');
});
