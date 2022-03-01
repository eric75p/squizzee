<!-- ---------------- script ---------------- -->
<script>
// ---------------------------------------- export
export let label = "Bouton"
export let buttonId
export let action;
export let color;
export let disabled;

// ---------------------------------------- clickButton()
function clickButton() {
    action(buttonId)
}
</script>


<!-- ---------------- markup ---------------- -->
<div on:click={clickButton}
    class={`alert shadow-lg ${color} mb-3 hover:bg-blue-700 ${disabled}`}>
    <div>
      <span>{label}</span>
    </div>
  </div>

<!-- ---------------- style ---------------- -->
<style>

</style>
