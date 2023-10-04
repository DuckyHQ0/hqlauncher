<template>
	<div>
		<div
			class="bg-[url(/hql-bg.png)] p-[110px] gap-[110px] grid grid-cols-2 bg-cover w-screen h-screen text-white grid-fill overflow-hidden"
		>
			<SideNav selected="accounts" />
			<div class="flex flex-col w-full overflow-y-auto gap-[64px]">
				<div
					class="bg-[#0f0f0f]/60 border-2 border-white/10 flex gap-[32px] h-fit backdrop-blur-xl rounded-[10px] px-[64px] py-[8px]"
				>
					<a
						href="#"
						class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
					>
						<nuxt-icon name="add" class="text-[20px]" />
						<p class="text-white/75 text-[15px]">Add Microsoft Account</p>
					</a>
					<a
						href="#"
						class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
					>
						<nuxt-icon name="person" class="text-[20px]" />
						<p class="text-white/75 text-[15px]">Set Skina</p>
					</a>
					<a
						href="#"
						class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
					>
						<nuxt-icon name="delete" class="text-[20px]" />
						<p class="text-white/75 text-[15px]">Remove Account</p>
					</a>
				</div>
				<div
					class="bg-[#0f0f0f]/60 border-2 border-white/10 w-full h-full flex flex-col gap-[32px] overflow-y-auto backdrop-blur-xl rounded-[10px] p-[64px]"
				>
					<div class="flex flex-row gap-[32px]" id="headinfo">
						<p class="text-[13px] text-white/75">Icon</p>
						<p class="text-[13px] text-white/75 ml-9">Username</p>
						<p class="text-[13px] text-white/75 ml-[8rem]">Account</p>
						<p class="text-[13px] text-white/75 ml-[10rem]">State</p>
					</div>
					<div class="flex flex-col gap-[32px]">
						<div
							class="flex flex-row gap-[32px] align-middle place-items-center"
							id="account1"
						>
							<nuxt-img
								class="w-[50px] rounded-[10px]"
								src="/account/dukkcc.png"
							/>
							<p class="text-[20px] text-white ml-2">dukkcc</p>
							<p class="text-[20px] text-white ml-32">DUKKCC</p>
							<p class="text-[20px] text-white ml-32">Ready</p>
						</div>
						<div
							class="flex flex-row gap-[32px] align-middle place-items-center"
							id="account1"
						>
							<nuxt-img
								class="w-[50px] rounded-[10px]"
								src="/account/dukkcc.png"
							/>
							<p class="text-[20px] text-white ml-2">dukkcc</p>
							<p class="text-[20px] text-white ml-32">DUKKCC</p>
							<p class="text-[20px] text-white ml-32">Ready</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
