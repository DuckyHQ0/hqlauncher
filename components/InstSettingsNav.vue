<template>
    <div class="flex gap-[64px] h-fit w-fit flex-col">
        <NuxtLink to="/"
            ><div class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                <nuxt-icon name="chevron-left" class="text-[26px] text-white" />
                <p class="text-[20px] text-white"> Back </p>
            </div></NuxtLink
        >
        <div class="h-[2px] w-full bg-white/10"></div>
        <NuxtLink to="/create/vanilla"
            ><div class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                <nuxt-icon
                    name="console"
                    :class="[
                        {
                            'text-[26px] text-brand-blue-1': console
                        },
                        {
                            'text-[26px] text-white': info
                        },
                        {
                            'text-[26px] text-white': mods
                        },
                        {
                            'text-[26px] text-white': packs
                        },
                        {
                            'text-[26px] text-white': java
                        }
                    ]"
                />
                <p
                    :class="[
                        {
                            'text-[20px] text-brand-blue-1': console
                        },
                        {
                            'text-[20px] text-white': info
                        },
                        {
                            'text-[20px] text-white': mods
                        },
                        {
                            'text-[20px] text-white': packs
                        },
                        {
                            'text-[20px] text-white': java
                        }
                    ]"
                >
                    Console
                </p>
            </div></NuxtLink
        >
        <NuxtLink to="/create/modded"
            ><div class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                <nuxt-icon
                    name="info"
                    :class="[
                        {
                            'text-[26px] text-white': console
                        },
                        {
                            'text-[26px] text-brand-blue-1': info
                        },
                        {
                            'text-[26px] text-white': mods
                        },
                        {
                            'text-[26px] text-white': packs
                        },
                        {
                            'text-[26px] text-white': java
                        }
                    ]"
                />
                <p
                    :class="[
                        {
                            'text-[20px] text-white': console
                        },
                        {
                            'text-[20px] text-brand-blue-1': info
                        },
                        {
                            'text-[20px] text-white': mods
                        },
                        {
                            'text-[20px] text-white': packs
                        },
                        {
                            'text-[20px] text-white': java
                        }
                    ]"
                >
                    Information
                </p>
            </div></NuxtLink
        >
        <NuxtLink to="/create/modrinth"
            ><div class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                <nuxt-icon
                    name="star"
                    :class="[
                        {
                            'text-[26px] text-white': console
                        },
                        {
                            'text-[26px] text-white': info
                        },
                        {
                            'text-[26px] text-brand-blue-1': mods
                        },
                        {
                            'text-[26px] text-white': packs
                        },
                        {
                            'text-[26px] text-white': java
                        }
                    ]"
                />
                <p
                    :class="[
                        {
                            'text-[20px] text-white': console
                        },
                        {
                            'text-[20px] text-white': info
                        },
                        {
                            'text-[20px] text-brand-blue-1': mods
                        },
                        {
                            'text-[20px] text-white': packs
                        },
                        {
                            'text-[20px] text-white': java
                        }
                    ]"
                >
                    Mods
                </p>
            </div></NuxtLink
        >
        <NuxtLink to="/create/curseforge"
            ><div class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                <nuxt-icon
                    name="box"
                    :class="[
                        {
                            'text-[26px] text-white': console
                        },
                        {
                            'text-[26px] text-white': info
                        },
                        {
                            'text-[26px] text-white': mods
                        },
                        {
                            'text-[26px] text-brand-blue-1': packs
                        },
                        {
                            'text-[26px] text-white': java
                        }
                    ]"
                />
                <p
                    :class="[
                        {
                            'text-[20px] text-white': console
                        },
                        {
                            'text-[20px] text-white': info
                        },
                        {
                            'text-[20px] text-white': mods
                        },
                        {
                            'text-[20px] text-brand-blue-1': packs
                        },
                        {
                            'text-[20px] text-white': java
                        }
                    ]"
                >
                    Packs
                </p>
            </div></NuxtLink
        >
		<NuxtLink to="/create/curseforge"
            ><div class="flex gap-[16px] align-middle place-items-center cursor-pointer hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                <nuxt-icon
                    name="java"
                    :class="[
                        {
                            'text-[26px] text-white': console
                        },
                        {
                            'text-[26px] text-white': info
                        },
                        {
                            'text-[26px] text-white': mods
                        },
                        {
                            'text-[26px] text-white': packs
                        },
                        {
                            'text-[26px] text-brand-blue-1': java
                        }
                    ]"
                />
                <p
                    :class="[
                        {
                            'text-[20px] text-white': console
                        },
                        {
                            'text-[20px] text-white': info
                        },
                        {
                            'text-[20px] text-white': mods
                        },
                        {
                            'text-[20px] text-white': packs
                        },
                        {
                            'text-[20px] text-brand-blue-1': java
                        }
                    ]"
                >
                    Java
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
            default: 'console'
        }
    },

    computed: {
        console() {
            return this.selected === 'console'
        },
        info() {
            return this.selected === 'info'
        },
        mods() {
            return this.selected === 'mods'
        },
        packs() {
            return this.selected === 'packs'
        },
        java() {
            return this.selected === 'java'
        }
    }
}
</script>
