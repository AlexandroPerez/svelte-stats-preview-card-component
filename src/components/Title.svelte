<script lang="ts">
  export let title: string;
  /**
   * regexp to check if there are any words that match markdown bold pattern
   * tab, linefeed, carriage return, and single "*" characters are ignored.
   */
  const regexp = /\*{2}([^\t\n\r*]*)\*{2}/g;

  const splitStr = title.split(regexp);
</script>

<h2>
  {#each splitStr as str, i}
    {#if i % 2 === 0}
      {str}
    {:else}
      <span>{str}</span>
    {/if}
  {/each}
</h2>

<style>
  h2 span {
    color: #a560d5;
  }
  @media screen and (min-width: 880px) {
    h2 {
      font-size: 1.8em;
      margin: 0;
    }
  }
</style>
