<template>
	<div>
		<div
			class="bg-[url(/hql-bg.png)] p-[128px] gap-[128px] grid grid-cols-2 bg-cover w-screen h-screen text-white grid-fill overflow-hidden"
		>
			<SideNav selected="settings" />
			<div class="flex flex-col w-full overflow-y-hidden h-full gap-[64px]">
				<div
					class="bg-[#0f0f0f]/60 border-2 border-white/10 flex gap-[32px] h-fit backdrop-blur-xl rounded-[10px] px-[64px] py-[8px]"
				>
					<a
						href="#"
						class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
					>
						<nuxt-icon name="add" class="text-[20px]" />
						<p class="text-white/75 text-[15px]">Add Java Directory</p>
					</a>
				</div>
				<div
					class="bg-[#0f0f0f]/60 border-2 border-white/10 w-full h-fit overflow-y-auto max-[1500px]:h-fit backdrop-blur-xl rounded-[10px] p-[64px]"
				>
					<div class="flex flex-col gap-[64px] h-fit" id="Settings">
						<h4 class="text-[40px] font-medium">Launcher Settings</h4>
						<div class="flex flex-col gap-[32px]">
							<div
								class="flex place-content-between align-middle place-items-center"
							>
								<p class="text-[20px]">Show console when game starts</p>
								<Switch
									v-model="enabled1"
									class="relative inline-flex h-6 w-11 items-center rounded-full bg-[#0f0f0f]/40 border-2 border-white/10"
								>
									<span
										:class="
											enabled1
												? 'translate-x-[1.35rem] bg-[#0DB7FF]'
												: 'translate-x-[0.15rem] bg-white/10'
										"
										class="inline-block h-4 w-4 transform rounded-full transition"
									>
									</span>
								</Switch>
							</div>
							<div
								class="flex place-content-between align-middle place-items-center"
								m
							>
								<p class="text-[20px]">Hide launcher when game starts</p>
								<Switch
									v-model="enabled2"
									class="relative inline-flex h-6 w-11 items-center rounded-full bg-[#0f0f0f]/40 border-2 border-white/10"
								>
									<span
										:class="
											enabled2
												? 'translate-x-[1.35rem] bg-[#0DB7FF]'
												: 'translate-x-[0.15rem] bg-white/10'
										"
										class="inline-block h-4 w-4 transform rounded-full transition"
									>
									</span>
								</Switch>
							</div>
							<div
								class="flex place-content-between align-middle place-items-center"
							>
								<p class="text-[20px]">Launcher release channel</p>
								<Listbox v-model="selLauncher">
									<div class="relative mt-1 z-50">
										<ListboxButton
											class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
										>
											<span class="block truncate">{{ selLauncher.name }}</span>
											<span
												class="pointer-events-none absolute inset-y-0 right-0 flex place-items-center align-middle items-center pr-2"
											>
												<nuxt-icon name="chevron" class="text-white/10" />
											</span>
										</ListboxButton>

										<transition
											enter-active-class="transition duration-100 ease-out"
											enter-from-class="transform scale-95 opacity-0"
											enter-to-class="transform scale-100 opacity-100"
											leave-active-class="transition duration-75 ease-out"
											leave-from-class="transform scale-100 opacity-100"
											leave-to-class="transform scale-95 opacity-0"
										>
											<ListboxOptions
												class="absolute bg-[#0f0f0f] mt-1 w-full overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base"
											>
												<ListboxOption
													v-slot="{ active, selected }"
													v-for="option1 in launcher"
													:key="option1.name"
													:value="option1"
													as="template"
												>
													<li
														:class="[
															active
																? 'bg-white/10 text-brand-blue-1'
																: 'text-white',
															'relative cursor-default select-none py-2 px-4',
														]"
													>
														<span
															:class="[
																selected ? 'font-medium' : 'font-normal',
																'block truncate',
															]"
															>{{ option1.name }}</span
														>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
							</div>
							<div
								class="flex place-content-between align-middle place-items-center"
							>
								<p class="text-[20px]">Modrinth release channel</p>
								<Listbox v-model="selModrinth">
									<div class="relative mt-1 z-40">
										<ListboxButton
											class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
										>
											<span class="block truncate">{{ selModrinth.name }}</span>
											<span
												class="pointer-events-none absolute inset-y-0 right-0 flex place-items-center align-middle items-center pr-2"
											>
												<nuxt-icon name="chevron" class="text-white/10" />
											</span>
										</ListboxButton>

										<transition
											enter-active-class="transition duration-100 ease-out"
											enter-from-class="transform scale-95 opacity-0"
											enter-to-class="transform scale-100 opacity-100"
											leave-active-class="transition duration-75 ease-out"
											leave-from-class="transform scale-100 opacity-100"
											leave-to-class="transform scale-95 opacity-0"
										>
											<ListboxOptions
												class="absolute bg-[#0f0f0f] mt-1 w-full overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base"
											>
												<ListboxOption
													v-slot="{ active, selected }"
													v-for="option2 in modrinth"
													:key="option2.name"
													:value="option2"
													as="template"
												>
													<li
														:class="[
															active
																? 'bg-white/10 text-brand-blue-1'
																: 'text-white',
															'relative cursor-default select-none py-2 px-4',
														]"
													>
														<span
															:class="[
																selected ? 'font-medium' : 'font-normal',
																'block truncate',
															]"
															>{{ option2.name }}</span
														>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
							</div>
							<div
								class="flex place-content-between align-middle place-items-center"
							>
								<p class="text-[20px]">Curseforge release channel</p>
								<Listbox v-model="selCurse">
									<div class="relative mt-1 z-30">
										<ListboxButton
											class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
										>
											<span class="block truncate">{{ selCurse.name }}</span>
											<span
												class="pointer-events-none absolute inset-y-0 right-0 flex place-items-center align-middle items-center pr-2"
											>
												<nuxt-icon name="chevron" class="text-white/10" />
											</span>
										</ListboxButton>

										<transition
											enter-active-class="transition duration-100 ease-out"
											enter-from-class="transform scale-95 opacity-0"
											enter-to-class="transform scale-100 opacity-100"
											leave-active-class="transition duration-75 ease-out"
											leave-from-class="transform scale-100 opacity-100"
											leave-to-class="transform scale-95 opacity-0"
										>
											<ListboxOptions
												class="absolute bg-[#0f0f0f] mt-1 w-full overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base"
											>
												<ListboxOption
													v-slot="{ active, selected }"
													v-for="option3 in curse"
													:key="option3.name"
													:value="option3"
													as="template"
												>
													<li
														:class="[
															active
																? 'bg-white/10 text-brand-blue-1'
																: 'text-white',
															'relative cursor-default select-none py-2 px-4',
														]"
													>
														<span
															:class="[
																selected ? 'font-medium' : 'font-normal',
																'block truncate',
															]"
															>{{ option3.name }}</span
														>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
							</div>
							<div
								class="flex place-content-between align-middle place-items-center"
							>
								<p class="text-[20px]">Enable Discord status when playing</p>
								<Switch
									v-model="enabled3"
									class="relative inline-flex h-6 w-11 items-center rounded-full bg-[#0f0f0f]/40 border-2 border-white/10"
								>
									<span
										:class="
											enabled3
												? 'translate-x-[1.35rem] bg-[#0DB7FF]'
												: 'translate-x-[0.15rem] bg-white/10'
										"
										class="inline-block h-4 w-4 transform rounded-full transition"
									>
									</span>
								</Switch>
							</div>
							<div
								class="flex place-content-between align-middle place-items-center"
							>
								<p class="text-[20px]">Instances folder</p>
								<div class="flex flex-row gap-[16px]">
									<input
										type="text"
										class="bg-[#0f0f0f]/40 border-2 border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
										placeholder="Default (in program path)"
										name="folder"
									/>
									<button
										class="py-2 px-3 bg-[#0f0f0f]/40 border-2 border-white/10 rounded-[10px] hover:scale-[.95] transition-all duration-150 active:scale-[.87]"
									>
										Browse
									</button>
								</div>
							</div>
						</div>

						<hr class="border border-white/10" />

						<h4 class="text-[40px] font-medium">Java Settings</h4>
						<div class="grid grid-cols-2 max-[1325px]:grid-cols-1 gap-[32px]">
							<div class="flex flex-col gap-[32px] h-fit">
								<div class="flex flex-col gap-[32px] h-fit">
									<h4 class="text-[40px]">Java Installation</h4>
									<Listbox v-model="selJavaInst">
										<div class="relative mt-1 z-50">
											<ListboxButton
												class="relative w-full rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
											>
												<span class="block truncate">{{
													selJavaInst.name
												}}</span>
												<span
													class="pointer-events-none absolute inset-y-0 right-0 flex place-items-center align-middle items-center pr-2"
												>
													<nuxt-icon name="chevron" class="text-white/10" />
												</span>
											</ListboxButton>

											<transition
												enter-active-class="transition duration-100 ease-out"
												enter-from-class="transform scale-95 opacity-0"
												enter-to-class="transform scale-100 opacity-100"
												leave-active-class="transition duration-75 ease-out"
												leave-from-class="transform scale-100 opacity-100"
												leave-to-class="transform scale-95 opacity-0"
											>
												<ListboxOptions
													class="absolute bg-[#0f0f0f] mt-1 w-full overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base"
												>
													<ListboxOption
														v-slot="{ active, selected }"
														v-for="option4 in javaInst"
														:key="option4.name"
														:value="option4"
														as="template"
													>
														<li
															:class="[
																active
																	? 'bg-white/10 text-brand-blue-1'
																	: 'text-white',
																'relative cursor-default select-none py-2 px-4',
															]"
														>
															<span
																:class="[
																	selected ? 'font-medium' : 'font-normal',
																	'block truncate',
																]"
																>{{ option4.name }}</span
															>
														</li>
													</ListboxOption>
												</ListboxOptions>
											</transition>
										</div>
									</Listbox>
								</div>
								<div class="flex flex-col gap-[32px] h-fit">
									<h4 class="text-[40px]">Java Arguments</h4>
									<textarea
										class="bg-[#0f0f0f]/40 border-2 w-full h-64 border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
									></textarea>
								</div>
							</div>
							<div class="flex flex-col gap-[32px] h-fit">
								<div class="flex flex-col gap-[32px] h-fit">
									<h4 class="text-[40px]">Memory Allocations</h4>
									<div
										class="flex flex-rows gap-[32px] place-items-center align-middle"
									>
										<p class="text-[20px]">Minimum:</p>
										<input
											type="number"
											class="bg-[#0f0f0f]/40 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
											placeholder="Default: 0 MB"
										/>
									</div>
									<div
										class="flex flex-rows gap-[32px] place-items-center align-middle"
									>
										<p class="text-[20px]">Maximum:</p>
										<input
											type="number"
											class="bg-[#0f0f0f]/40 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
											placeholder="Default: 4096 MB"
										/>
									</div>
								</div>
								<div class="flex flex-col gap-[32px] h-fit">
									<h4 class="text-[40px]">Miscellaneous</h4>
									<div class="flex flex-col gap-[32px]">
										<h4 class="text-[20px]">Window Dimensions</h4>
										<div
											class="flex flex-rows gap-[32px] align-middle place-items-center"
										>
											<p class="text-[20px] text-white">X:</p>
											<input
												type="number"
												class="bg-[#0f0f0f]/40 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
												placeholder="Default: 854"
											/>
											<p class="text-[20px] text-white">Y:</p>
											<input
												type="number"
												class="bg-[#0f0f0f]/40 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
												placeholder="Default: 480"
											/>
										</div>
										<h4 class="text-[20px]">Default Starting Server</h4>
										<div
											class="flex flex-rows gap-[32px] align-middle place-items-center"
										>
											<input
												type="text"
												class="bg-[#0f0f0f]/40 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
												placeholder="None..."
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<hr class="border border-white/10" />

						<h4 class="text-[40px] font-medium">Information</h4>
						<div class="flex flex-col w-full gap-[32px]">
							<nuxt-img src="/text.png" class="w-[33rem]" />
							<div class="flex gap-[32px]">
								<p class="text-[20px]">
									HQLauncher <br />
									Beta 0.1
								</p>
								<p class="text-[20px]">
									Up to date <br />
									Automatically updating
								</p>
								<div class="grid grid-rows-2 grid-cols-2">
									<a
										href="#"
										class="text-[20px] underline hover:text-brand-blue-1"
									>
										Team
									</a>
									<a
										href="#"
										class="text-[20px] underline hover:text-brand-blue-1"
									>
										Privacy
									</a>
									<a
										href="https://github.com/dukcc/HQLauncher#assets"
										class="text-[20px] underline hover:text-brand-blue-1"
									>
										Attribution
									</a>
								</div>
							</div>
							<button
								@click="openModal"
								class="bg-hq-red/75 w-fit h-fit text-[20px] font-medium px-[32px] py-[16px] rounded-[10px] duration-200 hover:bg-hq-red hover:-translate-y-1 active:bg-hq-red/50 active:translate-y-2"
							>
								Clear All Data
							</button>
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
								Are you sure about this?
							</DialogTitle>
							<div class="mt-2">
								<p class="text-[20px] font-light text-white">
									All of your account data, instances, and settings will be
									deleted.
								</p>
								<div class="flex gap-[8px] align-middle place-items-center">
									<p class="text-[20px] font-light text-white">Type</p>
									<p
										class="text-[15px] text-white bg-[#0f0f0f]/40 border border-white/10 rounded-[10px] p-1 px-2"
									>
										clear my data
									</p>
									<p class="text-[20px] font-light text-white">
										below to confirm.
									</p>
								</div>
							</div>

							<div class="mt-2 flex gap-[16px] text-white">
								<input
									type="text"
									class="bg-[#0f0f0f]/40 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
									placeholder="clear my data"
								/>
								<SmallButton text="Clear" color="redDisabled" />
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
	Switch,
} from "@headlessui/vue";
// toggle switches

const enabled1 = ref(true);
const enabled2 = ref(false);
const enabled3 = ref(true);

// modal

const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}
function openModal() {
	isOpen.value = true;
}

// listbox

const launcher = [
	{ id: 1, name: "Release", unavailable: false },
	{ id: 2, name: "Beta", unavailable: false },
	{ id: 3, name: "Alpha", unavailable: false },
];
const modrinth = [
	{ id: 1, name: "Release", unavailable: false },
	{ id: 2, name: "Beta", unavailable: false },
	{ id: 3, name: "Alpha", unavailable: false },
];
const curse = [
	{ id: 1, name: "Release", unavailable: false },
	{ id: 2, name: "Beta", unavailable: false },
	{ id: 3, name: "Alpha", unavailable: false },
];
const selLauncher = ref(launcher[1]);
const selModrinth = ref(modrinth[0]);
const selCurse = ref(curse[0]);

const javaInst = [
	{ id: 1, name: "Java 17 (/Program Files/Java/jdk-17/)", unavailable: false },
	{ id: 2, name: "Java 8 (/Program Files/Java/jre-1.8/)", unavailable: false },
];
const selJavaInst = ref(javaInst[0]);
</script>
