<template>
  <div>
    <header class="bg-blue-700 text-white text-xl p-3">
      <h1>DEL FHIR Search</h1>
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="css" src="@fortawesome/fontawesome-free/css/all.css"></style>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
}

section,
form {
  @apply m-4;
}

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

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
