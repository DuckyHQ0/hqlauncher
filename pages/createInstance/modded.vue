<template>
	<div class="bg-black text-white p-[128px] w-screen h-screen">
		<div class="flex gap-[128px] max-[1400px]:gap-[64px] h-full w-full">
			<CreateInstNav selected="modded" />
			<div class="flex gap-[64px] h-full w-full flex-col">
				<div
					class="bg-[#0f0f0f]/60 overflow-y-scroll flex gap-[32px] flex-col w-full h-fit rounded-[10px] border-2 border-white/10 p-[64px]"
				>
					<h1 class="text-[28px] font-medium">Create an Instance</h1>
					<div class="flex gap-[300px] max-[1575px]:gap-[190px]">
						<div class="flex flex-col gap-[32px]">
							<p class="text-[13px] text-white/75">Releases</p>
							<p class="text-[20px]">1.20.1</p>
							<p class="text-[20px]">1.20</p>
							<p class="text-[20px]">1.19.4</p>
							<p class="text-[20px]">1.19.3</p>
							<p class="text-[20px]">1.19.2</p>
							<p class="text-[20px]">1.19.1</p>
							<p class="text-[20px]">1.19</p>
							<p class="text-[20px]">1.18.2</p>
							<p class="text-[20px]">1.18.1</p>
							<p class="text-[20px]">1.18</p>
							<p class="text-[20px]">1.17.1</p>
						</div>
						<div class="flex flex-col gap-[32px]">
							<p class="text-[13px] text-white/75">Mod Loader</p>
							<p class="text-[20px]">Fabric</p>
							<p class="text-[20px]">Quilt</p>
							<p class="text-[20px]">Forge</p>
						</div>
						<div class="flex flex-col gap-[32px]">
							<p class="text-[13px] text-white/75">Mod Loader Version</p>
							<p class="text-[20px]">Select a mod loader first.</p>
						</div>
					</div>
				</div>
				<div class="flex gap-[32px] h-fit">
					<SmallButton text="Create" />
					<NuxtLink to="/"><SmallButton text="Cancel" color="dark" /></NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
