<template>
	<button
		:class="[
			{
				'bg-brand-blue-1/75 rounded-[10px] border-2 border-white/10 px-[32px] py-[16px] h-fit w-fit hover:bg-brand-blue-1 hover:-translate-y-1 active:bg-brand-blue-1/50 active:translate-y-2 duration-200 cursor-pointer':
					primary,
			},
			{
				'bg-brand-blue-1/25 text-white/50 rounded-[10px] border-2 border-white/10 px-[32px] py-[16px] h-fit w-fit cursor-not-allowed':
					blueDisabled,
			},
			{
				'bg-[#0f0f0f]/75 rounded-[10px] border-2 border-white/10 px-[32px] py-[16px] h-fit w-fit hover:bg-[#0f0f0f] hover:-translate-y-1 active:bg-[#0f0f0f]/50 active:translate-y-2 duration-200 cursor-pointer':
					dark,
			},
			{
				'bg-[#0f0f0f]/25 text-white/50 rounded-[10px] border-2 border-white/10 px-[32px] py-[16px] h-fit w-fit cursor-not-allowed':
					darkDisabled,
			},
			{
				'bg-hq-red/75 rounded-[10px] border-2 border-white/10 px-[32px] py-[16px] h-fit w-fit hover:bg-hq-red hover:-translate-y-1 active:bg-hq-red/50 active:translate-y-2 duration-200 cursor-pointer':
					red,
			},
			{
				'bg-hq-red/25 text-white/50 rounded-[10px] border-2 border-white/10 px-[32px] py-[16px] h-fit w-fit cursor-not-allowed':
					redDisabled,
			},
		]"
		:is="to ? 'nuxt-link' : href ? 'a' : 'button'"
		:to="to"
		:href="href"
		@click="$emit('click')"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: "primary",
		},
		text: {
			type: String,
			default: "Button",
		},
		icon: {
			type: String,
			default: null,
		},
		to: {
			type: String,
			default: null,
		},
		href: {
			type: String,
			default: null,
		},
	},

	computed: {
		primary() {
			return this.color === "primary";
		},
		dark() {
			return this.color === "dark";
		},
		red() {
			return this.color === "red";
		},
		blueDisabled() {
			return this.color === "blueDisabled";
		},
		darkDisabled() {
			return this.color === "darkDisabled";
		},
		redDisabled() {
			return this.color === "redDisabled";
		},
	},
};
</script>
