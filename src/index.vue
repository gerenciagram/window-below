<template>
	<div class="window-below p-3 border" :style="rootCSS">
		<div class="window-below-close" @click.prevent="$emit('update:display', false)">
			<i class="fas fa-times"></i>
		</div>
		<div class="window-below-container" :style="containerCSS">
			<div class="window-below-inner">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
	import Marengo from 'marengo'
	import config from './config'
	export default Marengo({
		config,
		props: {
			height: {
				default: '',
				type: String
			},
			width: {
				default: '75%',
				type: String
			},
			display: {
				default: false,
				type: Boolean
			},
			range: {
				default: () => ['15px', '105px'],
				type: Array
			},
			opened: {
				default: () => {},
				type: Function
			},
			closed: {
				default: () => {},
				type: Function
			}
		},
		computed: {
			containerCSS() {
				return `
					height: ${this.height != '' ? this.height : 'auto'}
				`
			},
			rootCSS() {
				return `
					margin-top: ${ this.display ? this.range[0] : this.range[1] };
					width: ${this.width};
				`
			}
		},
		methods: {
			toggle(el = this.$el) {
				el.classList.toggle('is-visible')
			}
		},
		watch: {
			display(value) {
				this.toggle()
				if (this.display) this.opened()
				else this.closed()
			}
		},
		mounted() {
			this.$el.previousElementSibling.onclick = e => e.stopPropagation()
			this.$el.onclick = e => e.stopPropagation()
			this.$el.ownerDocument.onclick = (e) => {
				this.$emit('update:display', false)
			}
		}
	})
</script>

<style lang="scss" scoped>
	.window-below {
		opacity: 0;
		pointer-events: none;
		transition: 0.12s all linear;
		z-index: 999;
		background: white;
		box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.13);
		position: absolute;
		border-radius: 4px;
		&.is-visible {
			pointer-events: all;
			opacity: 1;
		}
	}
	.window-below-close {
    width: 19px;
    height: 19px;
    background: #e32323;
    line-height: 19px;
    color: white;
    text-align: center;
    font-size: 11px;
    right: -1px;
    top: -1px;
    position: absolute;
    cursor: pointer;
    border-radius: 0 4px 0 0;
    > i {
    	pointer-events: none
    }
  }
</style>