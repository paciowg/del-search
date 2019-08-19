<template>
  <div>
    <header class="bg-blue-700 text-white text-xl p-3">
      <h1>DEL FHIR Search</h1>
    </header>
    <div class="max-w-5xl mx-auto">
      <router-view />
    </div>
  </div>
</template>

<style lang="css" src="@fortawesome/fontawesome-free/css/all.css"></style>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

section,
form {
  @apply m-4;
}

form label:not(:last-child),
form input:not(:last-child),
form button:not(:last-child) {
  @apply mr-2;
}

input.input {
  @apply border border-gray-400 px-1 py-1 rounded;
}

input.buttton,
button.button {
  @apply text-white bg-blue-700 px-4 py-1 rounded;
}

input.button:disabled,
button.button:disabled {
  @apply cursor-not-allowed;
}

a {
  @apply text-blue-800;
}

a:hover {
  @apply underline;
}

table {
  @apply w-full;
}

table,
td,
th {
  @apply border border-gray-400 border-collapse align-top;
}

td,
th {
  @apply py-1 px-2 text-left;
}

th {
  @apply bg-gray-300 whitespace-no-wrap;
}
</style>
