<template>
	<div class="flex gap-[64px] h-fit w-fit flex-col">
		<NuxtLink to="/createInstance/vanilla"
			><div
				class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
			>
				<nuxt-icon
					name="cube"
					:class="[
						{
							'text-[26px] text-brand-blue-1': vanilla,
						},
						{
							'text-[26px] text-hq-green': modded,
						},
						{
							'text-[26px] text-hq-green': modrinth,
						},
						{
							'text-[26px] text-hq-green': curseforge,
						},
					]"
				/>
				<p
					:class="[
						{
							'text-[20px] text-brand-blue-1': vanilla,
						},
						{
							'text-[20px] text-white': modded,
						},
						{
							'text-[20px] text-white': modrinth,
						},
						{
							'text-[20px] text-white': curseforge,
						},
					]"
				>
					Vanilla
				</p>
			</div></NuxtLink
		>
		<NuxtLink to="/createInstance/modded"
			><div
				class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
			>
				<nuxt-icon
					name="star"
					:class="[
						{
							'text-[26px] text-hq-yellow': vanilla,
						},
						{
							'text-[26px] text-brand-blue-1': modded,
						},
						{
							'text-[26px] text-hq-yellow': modrinth,
						},
						{
							'text-[26px] text-hq-yellow': curseforge,
						},
					]"
				/>
				<p
					:class="[
						{
							'text-[20px] text-white': vanilla,
						},
						{
							'text-[20px] text-brand-blue-1': modded,
						},
						{
							'text-[20px] text-white': modrinth,
						},
						{
							'text-[20px] text-white': curseforge,
						},
					]"
				>
					Modded
				</p>
			</div></NuxtLink
		>
		<NuxtLink to="/createInstance/modrinth"
			><div
				class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
			>
				<nuxt-icon
					name="modrinth"
					:class="[
						{
							'text-[26px] text-[#1BD96A]': vanilla,
						},
						{
							'text-[26px] text-[#1BD96A]': modded,
						},
						{
							'text-[26px] text-brand-blue-1': modrinth,
						},
						{
							'text-[26px] text-[#1BD96A]': curseforge,
						},
					]"
				/>
				<p
					:class="[
						{
							'text-[20px] text-white': vanilla,
						},
						{
							'text-[20px] text-white': modded,
						},
						{
							'text-[20px] text-brand-blue-1': modrinth,
						},
						{
							'text-[20px] text-white': curseforge,
						},
					]"
				>
					Modrinth
				</p>
			</div></NuxtLink
		>
		<NuxtLink to="/createInstance/curseforge"
			><div
				class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
			>
				<nuxt-icon
					name="curseforge"
					:class="[
						{
							'text-[26px] text-[#F16436]': vanilla,
						},
						{
							'text-[26px] text-[#F16436]': modded,
						},
						{
							'text-[26px] text-[#F16436]': modrinth,
						},
						{
							'text-[26px] text-brand-blue-1': curseforge,
						},
					]"
				/>
				<p
					:class="[
						{
							'text-[20px] text-white': vanilla,
						},
						{
							'text-[20px] text-white': modded,
						},
						{
							'text-[20px] text-white': modrinth,
						},
						{
							'text-[20px] text-brand-blue-1': curseforge,
						},
					]"
				>
					Curseforge
				</p>
			</div></NuxtLink
		>
	</div>
</template>

<script>
export default {
	props: {
		selected: {
			type: String,
			default: "vanilla",
		},
	},

	computed: {
		vanilla() {
			return this.selected === "vanilla";
		},
		modded() {
			return this.selected === "modded";
		},
		modrinth() {
			return this.selected === "modrinth";
		},
		curseforge() {
			return this.selected === "curseforge";
		},
	},
};
</script>
