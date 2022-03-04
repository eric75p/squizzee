<!-- ***************** script ***************** -->
<script lang="ts">
	// -------------------------------------- export
	export let value;

	// -------------------------------------- var
	$: roundValue = Math.round(value);
</script>

<!-- ***************** markup ***************** -->
<span class="badge mr-5">{roundValue} %</span>
