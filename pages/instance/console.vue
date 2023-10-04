<template>
    <div class="bg-[url(/hql-bg.png)] p-[110px] gap-[48px] flex flex-col bg-cover w-screen h-screen text-white overflow-hidden">
        <div class="flex gap-[96px] h-full w-full overflow-clip">
            <InstSettingsNav selected="console" />
            <div class="flex flex-col gap-[48px] w-full h-full overflow-y-auto">
                <div class="bg-[#0f0f0f]/60 border-2 border-white/10 flex place-content-between h-fit backdrop-blur-xl rounded-[10px] px-[64px] py-[8px]">
                    <div class="flex gap-[32px]"
                        ><button class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                            <nuxt-icon name="delete" class="text-[20px]" />
                            <p class="text-white/75 text-[15px]">Clear</p>
                        </button>
                        <button class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                            <nuxt-icon name="copy" class="text-[20px]" />
                            <p class="text-white/75 text-[15px]">Copy</p>
                        </button>
                        <button class="flex gap-[8px] place-items-center hover:scale-[.95] transition-all duration-150 active:scale-[.87]">
                            <nuxt-icon name="upload" class="text-[20px]" />
                            <p class="text-white/75 text-[15px]">Upload to Pastebin</p>
                        </button>
                    </div>
                    <div class="flex gap-[8px] align-middle place-items-center">
                        <input class="form-checkbox rounded-[5px] border-2 border-white/10 bg-[#0f0f0f]/60 text-brand-blue-1" type="checkbox" name="word-wrap" id="word-wrap" />
                        <label for="word-wrap">Word Wrap</label>
                    </div>
                </div>
                <div class="bg-[#0f0f0f]/60 border-2 border-white/10 w-full h-full flex flex-col gap-[32px] overflow-y-auto backdrop-blur-xl rounded-[10px] p-[48px]">
                    <p class="text-[13px] font-console">
                        SOME CONSOLE TEXT <br />
                        some console text <br />
                        Some Console Text
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
