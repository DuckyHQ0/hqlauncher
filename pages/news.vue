<template>
    <div>
        <div class="bg-[url(/hql-bg.png)] p-[110px] gap-[110px] grid grid-cols-2 bg-cover w-screen h-screen text-white grid-fill overflow-hidden">
            <SideNav selected="news" />
            <div class="bg-[#0f0f0f]/60 border-2 border-white/10 w-full h-full flex flex-col gap-[32px] overflow-y-auto backdrop-blur-xl rounded-[10px] p-[64px]">
                <TabGroup>
                    <TabList class="flex rounded-[10px] gap-[32px] transition-all duration-200 w-full h-fit">
                        <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
                            <button
                                :class="['w-full bg-[#0f0f0f]/60 border-2 border-white/10 rounded-[10px] py-[16px] text-[20px]', selected ? 'text-brand-blue-1' : 'border-white/5']"
                            >
                                {{ category }}
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="h-full">
                        <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="['rounded-[10px] w-full h-full mb-[64px]']">
                            <ul class="h-full grid grid-cols-3 grid-rows-auto max-[1450px]:grid-cols-2 gap-[32px]">
                                <a
                                    v-for="post in posts"
                                    :key="post.id"
                                    :style="{
                                        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.75)),url(${post.img})`
                                    }"
                                    class="relative hover:scale-[1.025] active:scale-95 duration-200 rounded-[10px] bg-cover bg-no-repeat h-72 bg-clip-padding border-2 border-white/10 p-[32px] flex flex-col align-bottom place-content-end"
                                >
                                    <h1 class="text-[28px] font-medium text-white">
                                        {{ post.title }}
                                    </h1>
                                    <h3 class="text-[20px] text-white/75">
                                        {{ post.date }}
                                    </h3>
                                </a>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
    HQLauncher: [
        {
            id: 1,
            title: 'News',
            date: 'Jun 15',
            img: '/instances/1.png'
        },
        {
            id: 2,
            title: 'More news',
            date: 'Jun 16',
            img: '/instances/3.png'
        },
        {
            id: 3,
            title: 'More news',
            date: 'Jun 16',
            img: '/instances/2.png'
        },
        {
            id: 4,
            title: 'More news',
            date: 'Jun 16',
            img: '/instances/1.png'
        },
        {
            id: 5,
            title: 'More news',
            date: 'Jun 16',
            img: '/instances/3.png'
        },
        {
            id: 6,
            title: 'More news',
            date: 'Jun 16',
            img: '/instances/2.png'
        },
        {
            id: 7,
            title: 'More news',
            date: 'Jun 16',
            img: '/instances/1.png'
        }
    ],
    Minecraft: [
        {
            id: 1,
            title: 'H is the best',
            date: 'Jan 7',
            img: '/instances/2.png'
        },
        {
            id: 2,
            title: 'Download hqlauncher',
            date: 'Mar 19',
            img: '/instances/3.png'
        }
    ]
})
</script>
