<template>
    <div
        :class="[
            {
                'instance-card-base w-[229px] h-[275px] group': small
            },
            {
                'instance-card-base w-[350px] h-[275px] group': medium
            },
            {
                'instance-card-base w-[420px] h-[275px] group': large
            },
            {
                'instance-card-base w-[525px] h-[275px] group': xl
            }
        ]"
    >
        <div class="opacity-0 flex group-hover:opacity-100 duration-200 transition-all bg-[#0f0f0f]/60 backdrop-blur-lg w-full h-fit p-[16px] rounded-[8px] gap-[32px]">
            <button v-tooltip="'Play'" class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit">
                <nuxt-icon name="play" />
            </button>
            <NuxtLink to="/instance/console" v-tooltip="'Instance Settings'" class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit">
                <nuxt-icon name="settings" />
            </NuxtLink>
            <button v-tooltip="'Edit Card'" class="hover:scale-105 hover:text-brand-blue-1 active:scale-90 duration-200 w-fit h-fit">
                <nuxt-icon name="edit" />
            </button>
        </div>
        <h2
            :class="[
                {
                    'text-[32px] font-medium leading-10 px-[16px] pb-[16px] cursor-default': small
                },
                {
                    'text-[32px] font-medium leading-10 px-[16px] pb-[16px] cursor-default': medium
                },
                {
                    'text-[32px] font-medium leading-10 px-[16px] pb-[16px] cursor-default': large
                },
                {
                    'text-[32px] font-medium leading-10 px-[16px] pb-[16px] cursor-default': xl
                }
            ]"
            >Instance</h2
        >
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'medium'
        }
    },

    computed: {
        small() {
            return this.size === 'small'
        },
        medium() {
            return this.size === 'medium'
        },
        large() {
            return this.size === 'large'
        },
        xl() {
            return this.size === 'xl'
        }
    }
}
</script>
