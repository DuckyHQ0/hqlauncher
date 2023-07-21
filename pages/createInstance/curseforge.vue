<template>
	<div class="bg-black text-white p-[128px] w-screen h-screen">
		<div class="flex gap-[128px] max-[1400px]:gap-[64px] h-full w-full">
			<CreateInstNav selected="curseforge" />
			<div class="flex gap-[64px] h-full w-full flex-col">
				<div class="flex gap-[64px] h-full w-full">
					<div
						class="bg-[#0f0f0f]/60 overflow-y-scroll flex gap-[32px] flex-col w-full h-full rounded-[10px] border-2 border-white/10 p-[64px]"
					>
						<h1 class="text-[28px] font-medium">Create an Instance</h1>
						<div class="flex flex-col gap-[32px]">
							<div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
								<nuxt-img src="/modrinth/1.png" class="max-[1400px]:hidden" />
								<div class="flex flex-col gap-[8px]">
									<p class="text-[20px]">Fabulously Optimized</p>
									<p class="text-[13px] text-white/75">
										Fabric - 1.20.1 - 297k Downloads
									</p>
								</div>
							</div>
							<div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
								<nuxt-img src="/modrinth/2.png" class="max-[1400px]:hidden" />
								<div class="flex flex-col gap-[8px]">
									<p class="text-[20px]">Simply Optimized</p>
									<p class="text-[13px] text-white/75">
										Fabric - 1.20.1 - 244k Downloads
									</p>
								</div>
							</div>
							<div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
								<nuxt-img src="/modrinth/3.png" class="max-[1400px]:hidden" />
								<div class="flex flex-col gap-[8px]">
									<p class="text-[20px]">Sodium Plus</p>
									<p class="text-[13px] text-white/75">
										Fabric - Quilt - 1.20.1 - 69k Downloads
									</p>
								</div>
							</div>
							<div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
								<nuxt-img src="/modrinth/4.png" class="max-[1400px]:hidden" />
								<div class="flex flex-col gap-[8px]">
									<p class="text-[20px]">Adrenaline</p>
									<p class="text-[13px] text-white/75">
										Fabric - Quilt - 1.20.1 - 34k Downloads
									</p>
								</div>
							</div>
							<div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
								<nuxt-img src="/modrinth/5.png" class="max-[1400px]:hidden" />
								<div class="flex flex-col gap-[8px]">
									<p class="text-[20px]">Addictive</p>
									<p class="text-[13px] text-white/75">
										Fabric - Quilt - 1.20.1 - 33k Downloads
									</p>
								</div>
							</div>
							<div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
								<nuxt-img src="/modrinth/6.png" class="max-[1400px]:hidden" />
								<div class="flex flex-col gap-[8px]">
									<p class="text-[20px]">Sugar Optimization</p>
									<p class="text-[13px] text-white/75">
										Fabric - Quilt - 1.20.1 - 11k Downloads
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="bg-[#0f0f0f]/60 overflow-y-scroll flex gap-[32px] flex-col w-full h-full rounded-[10px] border-2 border-white/10 p-[64px]"
					>
						<div class="flex flex-col gap-[32px]">
							<p class="text-[20px]">Description</p>
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
