<template>
	<div class="marengo-draft">
		<button @click="display = !display">Click to show</button>
		<window-below :display.sync="display" height="250px">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</window-below>
	</div>
</template>
<script>
	import WindowBelow from 'demo-component'
	export default {
		components: {
			WindowBelow
		},
		data() {
			return {
				display: false
			}
		}
	}
</script>
<style>
	.marengo-draft {
		padding: 15px;
		overflow: hidden;
	}
</style>