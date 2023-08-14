<template>
	<div class="flex flex-col place-content-between w-[50px] h-full">
		<nuxt-link class="w-[50px] h-[50px]" href="/">
			<nuxt-img
				src="/logo.png"
				class="w-full h-[50px]"
				alt="HQLauncher Logo"
				v-tooltip="'HQLauncher 0.1'"
			/>
		</nuxt-link>
		<div class="flex flex-col gap-[32px] align-middle place-items-center">
			<NuxtLink
				to="/"
				class="hover:scale-95 transition-all duration-200 active:scale-90"
				v-tooltip="'Instances'"
			>
				<nuxt-icon
					name="instances-list"
					:class="[
						{
							'text-[25px] selected': instances,
						},
						{
							'text-[25px]': settings,
						},
						{
							'text-[25px]': accounts,
						},
						{
							'text-[25px]': news,
						},
					]"
				/>
			</NuxtLink>
			<NuxtLink
				to="/accounts"
				class="hover:scale-95 transition-all duration-200 active:scale-90"
				v-tooltip="'Accounts'"
			>
				<nuxt-icon
					name="accounts"
					:class="[
						{
							'text-[25px]': instances,
						},
						{
							'text-[25px]': settings,
						},
						{
							'text-[25px] selected': accounts,
						},
						{
							'text-[25px]': news,
						},
					]"
				/>
			</NuxtLink>
			<NuxtLink
				to="/settings"
				class="hover:scale-95 transition-all duration-200 active:scale-90"
				v-tooltip="'Settings'"
			>
				<nuxt-icon
					name="settings"
					:class="[
						{
							'text-[25px]': instances,
						},
						{
							'text-[25px] selected': settings,
						},
						{
							'text-[25px]': accounts,
						},
						{
							'text-[25px]': news,
						},
					]"
				/>
			</NuxtLink>
			<NuxtLink
				to="/news"
				class="hover:scale-95 transition-all duration-200 active:scale-90"
				v-tooltip="'News'"
			>
				<nuxt-icon
					name="news"
					:class="[
						{
							'text-[25px]': instances,
						},
						{
							'text-[25px]': settings,
						},
						{
							'text-[25px]': accounts,
						},
						{
							'text-[25px] selected': news,
						},
					]"
				/>
			</NuxtLink>
			<NuxtLink
				to="/"
				class="hover:scale-95 transition-all duration-200 active:scale-90"
				v-tooltip="'Help'"
			>
				<nuxt-icon name="help" class="text-[25px]" />
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		selected: {
			type: String,
			default: "instances",
		},
	},

	computed: {
		instances() {
			return this.selected === "instances";
		},
		settings() {
			return this.selected === "settings";
		},
		accounts() {
			return this.selected === "accounts";
		},
		news() {
			return this.selected === "news";
		},
	},
};
</script>
