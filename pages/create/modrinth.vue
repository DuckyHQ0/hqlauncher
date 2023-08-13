<template>
    <div>
        <div class="bg-[url(/hql-bg.png)] p-[110px] gap-[110px] flex bg-cover w-screen h-screen text-white grid-fill overflow-hidden">
            <SideNav selected="instances" />
            <div class="flex gap-[48px] h-full w-full overflow-clip">
                <div
                    class="bg-[#0f0f0f]/60 border-2 border-white/10 w-[50%] h-full flex flex-col place-content-between overflow-y-auto backdrop-blur-xl rounded-[10px] p-[48px] py-[64px]"
                >
                    <div class="flex flex-col gap-[24px] h-[80%]">
                        <div class="flex flex-col gap-[16px]">
                            <p class="text-[13px] text-white/75">Instance Name</p>
                            <input
                                type="text"
                                class="bg-[#0f0f0f]/40 w-full border-2 border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
                                placeholder="Instance 1"
                                name="folder"
                            />
                        </div>
                        <div class="flex flex-col gap-[16px]">
                            <p class="text-[13px] text-white/75">Instance Group</p>
                            <Listbox v-model="selGroup">
                                <div class="relative mt-1 z-10">
                                    <ListboxButton
                                        class="relative w-full rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
                                    >
                                        <span class="block truncate">{{ selGroup.name }}</span>
                                        <span class="pointer-events-none absolute inset-y-0 right-0 flex place-items-center align-middle items-center pr-2">
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
                                        <ListboxOptions class="absolute bg-[#0f0f0f] mt-1 w-full overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base">
                                            <ListboxOption v-slot="{ active, selected }" v-for="group in group" :key="group.name" :value="group" as="template">
                                                <li :class="[active ? 'bg-white/10 text-brand-blue-1' : 'text-white', 'relative cursor-default select-none py-2 px-4']">
                                                    <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ group.name }}</span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>
                        <div class="flex flex-col gap-[16px] h-full">
                            <p class="text-[13px] text-white/75">Cover Image</p>
                            <div class="bg-[url(/instances/3.png)] bg-cover w-full rounded-[10px] p-[16px] h-full bg-no-repeat bg-clip-padding border-2 border-white/10 group">
                                <SmallButton class="opacity-0 group-hover:opacity-100" text="Browse" color="dark" />
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-[16px] h-fit">
                        <SmallButton text="Create" />
                        <NuxtLink to="/"><SmallButton text="Cancel" color="dark" /></NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-[48px] w-full h-full overflow-y-auto">
                    <CreateInstTabs selected="modrinth" />
                    <div class="bg-[#0f0f0f]/60 z-[1] border-2 border-white/10 w-full h-full flex flex-col gap-[32px] overflow-y-auto backdrop-blur-xl rounded-[10px] p-[64px]">
                        <h1 class="text-[28px] font-medium">Modrinth Modpacks</h1>
                        <div class="flex flex-col gap-[32px]">
                            <div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
                                <nuxt-img src="/modrinth/1.png" />
                                <div class="flex flex-col gap-[8px]">
                                    <p class="text-[20px]">Fabulously Optimized</p>
                                    <p class="text-[13px] text-white/75"> Fabric - 1.20.1 - 297k Downloads </p>
                                </div>
                            </div>
                            <div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
                                <nuxt-img src="/modrinth/2.png" />
                                <div class="flex flex-col gap-[8px]">
                                    <p class="text-[20px]">Simply Optimized</p>
                                    <p class="text-[13px] text-white/75"> Fabric - 1.20.1 - 244k Downloads </p>
                                </div>
                            </div>
                            <div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
                                <nuxt-img src="/modrinth/3.png" />
                                <div class="flex flex-col gap-[8px]">
                                    <p class="text-[20px]">Sodium Plus</p>
                                    <p class="text-[13px] text-white/75"> Fabric - Quilt - 1.20.1 - 69k Downloads </p>
                                </div>
                            </div>
                            <div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
                                <nuxt-img src="/modrinth/4.png" />
                                <div class="flex flex-col gap-[8px]">
                                    <p class="text-[20px]">Adrenaline</p>
                                    <p class="text-[13px] text-white/75"> Fabric - Quilt - 1.20.1 - 34k Downloads </p>
                                </div>
                            </div>
                            <div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
                                <nuxt-img src="/modrinth/5.png" />
                                <div class="flex flex-col gap-[8px]">
                                    <p class="text-[20px]">Addictive</p>
                                    <p class="text-[13px] text-white/75"> Fabric - Quilt - 1.20.1 - 33k Downloads </p>
                                </div>
                            </div>
                            <div class="flex gap-[16px] align-middle place-items-center hover:text-brand-blue-1 duration-150">
                                <nuxt-img src="/modrinth/6.png" />
                                <div class="flex flex-col gap-[8px]">
                                    <p class="text-[20px]">Sugar Optimization</p>
                                    <p class="text-[13px] text-white/75"> Fabric - Quilt - 1.20.1 - 11k Downloads </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

// listbox

const group = [{ id: 1, name: 'Main Instances', unavailable: false }]
const selGroup = ref(group[0])

</script>
