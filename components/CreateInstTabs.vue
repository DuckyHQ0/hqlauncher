<template>
    <div class="w-full h-fit flex gap-[32px]">
        <nuxt-link
            to="/create/custom"
            :class="[
                {
                    'bg-[#0f0f0f]/60 border-2 w-full text-brand-blue-1 border-white/10 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        custom
                },
                {
                    'bg-[#0f0f0f]/60 border-2 w-full border-white/5 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        modrinth
                },
                {
                    'bg-[#0f0f0f]/60 border-2 w-full border-white/5 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        curseforge
                }
            ]"
        >
            <nuxt-icon name="wrench" class="max-[1350px]:hidden" />
            <p class="text-20px">Custom</p>
        </nuxt-link>
        <nuxt-link
            to="/create/modrinth"
            :class="[
                {
                    'bg-[#0f0f0f]/60 border-2 w-full border-white/5 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        custom
                },
                {
                    'bg-[#0f0f0f]/60 border-2 w-full text-brand-blue-1 border-white/10 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        modrinth
                },
                {
                    'bg-[#0f0f0f]/60 border-2 w-full border-white/5 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        curseforge
                }
            ]"
        >
            <nuxt-icon
                name="modrinth"
                :class="[
                    {
                        'text-[#1BD96A] max-[1350px]:hidden': custom
                    },
                    {
                        'text-brand-blue-1 max-[1350px]:hidden': modrinth
                    },
                    {
                        'text-[#1BD96A] max-[1350px]:hidden': curseforge
                    }
                ]"
            />
            <p class="text-20px">Modrinth</p>
        </nuxt-link>
        <nuxt-link
            to="/create/curseforge"
            :class="[
                {
                    'bg-[#0f0f0f]/60 border-2 w-full border-white/5 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        custom
                },
                {
                    'bg-[#0f0f0f]/60 border-2 w-full border-white/5 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        modrinth
                },
                {
                    'bg-[#0f0f0f]/60 border-2 w-full text-brand-blue-1 border-white/10 backdrop-blur-[50px] rounded-[10px] p-[16px] flex gap-[16px] align-middle place-content-center place-items-center':
                        curseforge
                }
            ]"
        >
            <nuxt-icon
                name="curseforge"
                :class="[
                    {
                        'text-[#F16436] max-[1350px]:hidden': custom
                    },
                    {
                        'text-[#F16436] max-[1350px]:hidden': modrinth
                    },
                    {
                        'text-brand-blue-1 max-[1350px]:hidden': curseforge
                    }
                ]"
            />
            <p class="text-20px">Curseforge</p>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        selected: {
            type: String,
            default: 'custom'
        }
    },

    computed: {
        custom() {
            return this.selected === 'custom'
        },
        modrinth() {
            return this.selected === 'modrinth'
        },
        curseforge() {
            return this.selected === 'curseforge'
        }
    }
}
</script>
