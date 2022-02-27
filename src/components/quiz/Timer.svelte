<!-- ****************** script **************** -->
<script>
	// --------------------------------------- stores
	import { AppStore } from '../../stores/AppStore';
</script>

<!-- ****************** markup **************** -->
<span class="countdown font-mono text-2xl">
	<span style={`--value:${$AppStore.countdown};`} />
</span>
