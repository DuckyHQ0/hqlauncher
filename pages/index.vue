<template>
	<div>
		<div
			class="bg-[url(/hql-bg.png)] p-[128px] gap-[128px] grid grid-cols-2 bg-cover w-screen h-screen text-white grid-fill overflow-hidden"
		>
			<SideNav selected="instances" />
			<div class="flex flex-col w-full overflow-y-auto gap-[64px]">
				<div
					class="bg-[#0f0f0f]/60 border-2 border-white/10 flex gap-[32px] h-fit backdrop-blur-xl rounded-[10px] px-[64px] py-[8px]"
				>
					<NuxtLink
						to="/createInstance/vanilla"
						class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
					>
						<nuxt-icon name="add" class="text-[20px]" />
						<p class="text-white/75 text-[15px]">Create Instance</p>
					</NuxtLink>
					<button
						@click="openModal"
						class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
					>
						<nuxt-icon name="add" class="text-[20px]" />
						<p class="text-white/75 text-[15px]">Create Group</p>
					</button>
				</div>
				<div
					class="bg-[#0f0f0f]/60 border-2 border-white/10 w-full h-full flex flex-col gap-[64px] max-[1500px]:h-fit overflow-y-auto backdrop-blur-xl rounded-[10px] p-[64px]"
				>
					<div class="flex flex-col gap-[32px]" id="Main">
						<h4 class="text-[25px]">Main Instances</h4>
						<div id="Instances" class="flex flex-wrap gap-[32px]">
							<div
								class="bg-cover hover:scale-[1.025] duration-200 bg-no-repeat bg-clip-padding rounded-[10px] border-2 border-white/10 w-[300px] h-[200px] flex flex-col place-content-between bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/instances/1.png')] group"
							>
								<div
									class="opacity-0 grid group-hover:opacity-100 duration-200 transition-all bg-[#0f0f0f]/60 backdrop-blur-lg w-full h-fit p-[16px] rounded-[8px] gap-[8px] grid-rows-1 grid-cols-5"
								>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="play" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="settings" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="edit" />
									</button>
								</div>
								<h2
									class="text-[40px] font-medium leading-10 px-[16px] pb-[16px] cursor-default"
								>
									Alive Mods
								</h2>
							</div>
							<div
								class="bg-cover hover:scale-[1.025] duration-200 bg-no-repeat bg-clip-padding rounded-[10px] border-2 border-white/10 w-[300px] h-[200px] flex flex-col place-content-between bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/instances/2.png')] group"
							>
								<div
									class="opacity-0 grid group-hover:opacity-100 duration-200 transition-all bg-[#0f0f0f]/60 backdrop-blur-lg w-full h-fit p-[16px] rounded-[8px] gap-[8px] grid-rows-1 grid-cols-5"
								>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="play" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="settings" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="edit" />
									</button>
								</div>
								<h2
									class="text-[40px] font-medium leading-10 px-[16px] pb-[16px] cursor-default"
								>
									Better MC
								</h2>
							</div>
							<div
								class="bg-cover hover:scale-[1.025] duration-200 bg-no-repeat bg-clip-padding rounded-[10px] border-2 border-white/10 w-[300px] h-[200px] flex flex-col place-content-between bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/instances/3.png')] group"
							>
								<div
									class="opacity-0 grid group-hover:opacity-100 duration-200 transition-all bg-[#0f0f0f]/60 backdrop-blur-lg w-full h-fit p-[16px] rounded-[8px] gap-[8px] grid-rows-1 grid-cols-5"
								>
									<button
										@click="playInst"
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="play" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="settings" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="edit" />
									</button>
								</div>
								<h2
									class="text-[40px] font-medium leading-10 px-[16px] pb-[16px] cursor-default"
								>
									Vanilla 1.20.1
								</h2>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-[32px]" id="Other">
						<h4 class="text-[25px]">Other Instances</h4>
						<div id="Instances" class="flex flex-wrap gap-[32px]">
							<div
								class="bg-cover hover:scale-[1.025] duration-200 bg-no-repeat bg-clip-padding rounded-[10px] border-2 border-white/10 w-[300px] h-[200px] flex flex-col place-content-between bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/instances/3.png')] group"
							>
								<div
									class="opacity-0 grid group-hover:opacity-100 duration-200 transition-all bg-[#0f0f0f]/60 backdrop-blur-lg w-full h-fit p-[16px] rounded-[8px] gap-[8px] grid-rows-1 grid-cols-5"
								>
									<button
										@click="dez"
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="play" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="settings" />
									</button>
									<button
										class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit"
									>
										<nuxt-icon name="edit" />
									</button>
								</div>
								<h2
									class="text-[40px] font-medium leading-10 px-[16px] pb-[16px] cursor-default"
								>
									Snapshot
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div
					class="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25"
				></div>
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-[32px] text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-full max-w-md transform overflow-hidden rounded-[10px] bg-[#0f0f0f]/60 backdrop-blur-[50px] border-2 border-white/10 p-[32px] text-left align-middle transition-all flex flex-col gap-[16px]"
						>
							<DialogTitle
								as="h3"
								class="text-[28px] font-medium leading-6 text-white"
							>
								Create Group
							</DialogTitle>
							<div class="mt-2">
								<p class="text-[20px] font-light text-white">
									Enter a name below.
								</p>
							</div>

							<div class="mt-2 flex gap-[16px] text-white">
								<input
									type="text"
									class="bg-[#0f0f0f]/60 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
									placeholder="Enter a group name..."
								/>
								<button
									@click="openModal"
									class="bg-brand-blue-1/75 rounded-[10px] border-2 border-white/10 px-[16px] py-[8px] h-fit w-fit hover:bg-brand-blue-1 hover:-translate-y-1 active:bg-brand-blue-1/50 active:translate-y-2 duration-200 cursor-pointer"
								>
									Create
								</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { Auth } from "msmc";
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}
function openModal() {
	isOpen.value = true;
}

function dez() {
	console.log("dez");
}

async function playInst() {
	const authManager = new Auth("select_account");
	const xboxManager = await authManager.launch("nwjs");
	const token = await xboxManager.getMinecraft();
	const i777 = Instance.get("testInstance");
	i777.launch(token.gmll());
}
</script>
