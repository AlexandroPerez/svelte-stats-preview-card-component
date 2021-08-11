<script type="ts">
  import type { CardType } from "../types/card";
  import Title from "./Title.svelte";

  export let card: CardType;
  let { imageSrc, title, desc, stats } = card;

  const mediaQuery = window.matchMedia("(min-width: 880px)");
  let image = mediaQuery.matches ? imageSrc.desktop : imageSrc.mobile;
</script>

<div class="card">
  <div class="image">
    <img src={image} alt="" />
  </div>
  <div class="description">
    <Title {title} />
    <p>{desc}</p>
    <ul>
      {#each stats as [quantity, description], idx (idx)}
        <li>
          <span>{quantity}</span>
          <span>{description}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .card {
    margin: 2em 1.5em;
    width: calc(100% - 3em);
    box-sizing: border-box;
    padding: 0;
    border-radius: 1em;
    color: white;
    max-width: 430px;
  }
  .card .image {
    width: 100%;
    border-radius: 1em 1em 0 0;
    background-color: #6120a1;
  }
  .card .image img {
    display: block;
    width: 100%;
    border-radius: 1em 1em 0 0;
    filter: opacity(45%);
  }
  .card .description {
    text-align: center;
    background-color: #1c1938;
    border-radius: 0 0 1em 1em;
    padding: 1em 2em;
  }
  .card .description p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.7em;
  }
  .card .description ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .card .description ul li {
    display: block;
    margin: 1.5em;
  }
  @media screen and (min-width: 880px) {
    .card .description ul li {
      text-align: left;
      display: inline-block;
      margin: 1em 0.5em;
    }
  }
  .card .description ul li span {
    display: block;
  }
  .card .description ul li span:first-child {
    font-size: 1.4em;
    font-weight: 700;
    color: white;
    margin-bottom: 0.2em;
  }
  .card .description ul li span:nth-child(2) {
    font-size: 0.75em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    font-family: "Lexend Deca", sans-serif;
  }
  @media screen and (min-width: 480px) {
    .card {
      margin: 1em auto;
    }
  }
  @media screen and (min-width: 880px) {
    .card {
      display: flex;
      flex-direction: row-reverse;
      min-width: calc(880px - 2em);
    }
    .card .image {
      border-radius: 0 1em 1em 0;
    }
    .card .image img {
      width: calc(440px - 1em);
      min-height: 100%;
      border-radius: 0 1em 1em 0;
    }
    .card .description {
      padding: 3em;
      box-sizing: border-box;
      border-radius: 1em 0 0 1em;
      min-width: calc(440px - 1em);
      text-align: left;
    }
  }
</style>
