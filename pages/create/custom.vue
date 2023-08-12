<template>
    <div>
        <div class="bg-[url(/hql-bg.png)] p-[128px] gap-[128px] flex bg-cover w-screen h-screen text-white grid-fill overflow-hidden">
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
                        <button
                            @click="createInstFunc"
                            class="bg-brand-blue-1/75 rounded-[10px] border-2 border-white/10 px-[16px] py-[8px] h-fit w-fit hover:bg-brand-blue-1 hover:-translate-y-1 active:bg-brand-blue-1/50 active:translate-y-2 duration-200 cursor-pointer backdrop-blur-lg"
                        >
                            Create
                        </button>
                        <NuxtLink to="/"><SmallButton text="Cancel" color="dark" /></NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-[48px] w-full h-full overflow-y-auto">
                    <CreateInstTabs selected="custom" />
                    <div class="bg-[#0f0f0f]/60 z-[1] border-2 border-white/10 w-full h-full flex flex-col gap-[32px] overflow-y-auto backdrop-blur-xl rounded-[10px] p-[64px]">
                        <h1 class="text-[28px] font-medium">Settings</h1>
                        <div class="flex flex-col gap-[32px]">
                            <div class="flex place-content-between align-middle place-items-center">
                                <p class="text-[20px]">Minecraft version</p>
                                <div class="flex flex-col gap-[16px]">
                                    <Listbox v-model="selVersion">
                                        <div class="relative mt-1 z-40">
                                            <ListboxButton
                                                class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
                                            >
                                                <span class="block truncate">{{ selVersion.name }}</span>
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
                                                <ListboxOptions class="absolute bg-[#0f0f0f] mt-1 w-full h-36 overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base">
                                                    <ListboxOption v-slot="{ active, selected }" v-for="version in version" :key="version.name" :value="version" as="template">
                                                        <li :class="[active ? 'bg-white/10 text-brand-blue-1' : 'text-white', 'relative cursor-default select-none py-2 px-4']">
                                                            <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ version.name }}</span>
                                                        </li>
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </div>
                                    </Listbox>
                                    <div class="flex gap-[8px]">
                                        <input id="snapshot" type="checkbox" class="form-checkbox rounded-[5px] border-2 border-white/10 bg-[#0f0f0f]/40 text-brand-blue-1" />
                                        <label for="snapshot" class="text-[13px]">Include snapshots</label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex place-content-between align-middle place-items-center">
                                <p class="text-[20px]">Mod loader</p>
                                <Listbox v-model="selLoader">
                                    <div class="relative mt-1 z-30">
                                        <ListboxButton
                                            class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
                                        >
                                            <span class="block truncate">{{ selLoader.name }}</span>
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
                                            <ListboxOptions class="absolute bg-[#0f0f0f] mt-1 w-full h-36 overflow-auto rounded-[10px] border-2 border-white/10 py-1 text-base">
                                                <ListboxOption v-slot="{ active, selected }" v-for="loader in loader" :key="loader.name" :value="loader" as="template">
                                                    <li :class="[active ? 'bg-white/10 text-brand-blue-1' : 'text-white', 'relative cursor-default select-none py-2 px-4']">
                                                        <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ loader.name }}</span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox>
                            </div>
                            <div class="flex place-content-between align-middle place-items-center">
                                <p class="text-[20px]">Mod loader version</p>
                                <Listbox v-model="selLoaderV">
                                    <div class="relative mt-1 z-20">
                                        <ListboxButton
                                            class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
                                        >
                                            <span class="block truncate">{{ selLoaderV.name }}</span>
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
                                                <ListboxOption v-slot="{ active, selected }" v-for="loaderV in loaderV" :key="loaderV.name" :value="loaderV" as="template">
                                                    <li :class="[active ? 'bg-white/10 text-brand-blue-1' : 'text-white', 'relative cursor-default select-none py-2 px-4']">
                                                        <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ loaderV.name }}</span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox>
                            </div>
                            <div class="flex place-content-between align-middle place-items-center">
                                <p class="text-[20px]">Preset</p>
                                <Listbox v-model="selPreset">
                                    <div class="relative mt-1 z-10">
                                        <ListboxButton
                                            class="relative w-40 rounded-[10px] bg-[#0f0f0f]/40 backdrop-blur-[50px] border-2 border-white/10 text-white py-2 pl-3 pr-10 text-left"
                                        >
                                            <span class="block truncate">{{ selPreset.name }}</span>
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
                                                <ListboxOption v-slot="{ active, selected }" v-for="preset in preset" :key="preset.name" :value="preset" as="template">
                                                    <li :class="[active ? 'bg-white/10 text-brand-blue-1' : 'text-white', 'relative cursor-default select-none py-2 px-4']">
                                                        <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ preset.name }}</span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox>
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

const version = [
    { id: 1, name: '1.20.1', unavailable: false },
    { id: 2, name: '1.20', unavailable: false },
    { id: 3, name: '1.19.4', unavailable: false },
    { id: 4, name: '1.19.3', unavailable: false },
    { id: 5, name: '1.19.2', unavailable: false },
    { id: 6, name: '1.19.1', unavailable: false },
    { id: 7, name: '1.19', unavailable: false }
]
const loader = [
    { id: 1, name: 'Vanilla', unavailable: false },
    { id: 2, name: 'Fabric', unavailable: false },
    { id: 3, name: 'Quilt', unavailable: false },
    { id: 4, name: 'Forge', unavailable: false },
    { id: 5, name: 'Liteloader', unavailable: false }
]
const loaderV = [{ id: 1, name: 'None', unavailable: true }]
const preset = [
    { id: 1, name: 'Default', unavailable: false },
    { id: 2, name: 'Sodium', unavailable: false },
    { id: 3, name: 'Optifine', unavailable: false }
]
const group = [{ id: 1, name: 'Main Instances', unavailable: false }]
const selVersion = ref(version[0])
const selLoader = ref(loader[0])
const selPreset = ref(preset[0])
const selGroup = ref(group[0])
const selLoaderV = ref(loaderV[0])

function createInstFunc() {
    let v = selVersion._rawValue.name
    useElectron().createInstance(v)
}
</script>
