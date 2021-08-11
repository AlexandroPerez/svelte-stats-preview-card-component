<script lang="ts">
  import Card from "./components/Card.svelte";
  import type { CardType } from "./types/card";
  export let name: string;

  const card: CardType = {
    imageSrc: {
      mobile: "./assets/image-header-mobile.jpg",
      desktop: "./assets/image-header-desktop.jpg",
    },
    title: "Get **insights** that help your **business grow**.",
    desc:
      "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.",
    stats: [
      ["10k+", "companies"],
      ["314", "templates"],
      ["12M+", "queries"],
    ],
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<Card {card} />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
