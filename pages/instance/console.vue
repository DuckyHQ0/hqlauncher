<template>
    <div class="bg-[url(/hql-bg.png)] p-[110px] gap-[48px] flex flex-col bg-cover w-screen h-screen text-white overflow-hidden">
        <div class="flex gap-[96px] h-full w-full overflow-clip">
            <InstSettingsNav selected="console" />
            <div class="flex flex-col gap-[48px] w-full h-full overflow-y-auto">
                <div class="bg-[#0f0f0f]/60 border-2 border-white/10 w-full h-full flex flex-col gap-[32px] overflow-y-auto backdrop-blur-xl rounded-[10px] p-[48px]">
                    <p class="text-[13px] font-console">
                        SOME CONSOLE TEXT <br>
                        some console text <br>
                        Some Console Text
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
