![Cover Image](/public/github/cover.png)

# HQLauncher

![Static Badge](https://img.shields.io/badge/version-0.1_alpha-blue)
[![Discord](https://img.shields.io/discord/1043037046631043163?label=discord&color=%235865f2)](https://discord.gg/MeQwqsCHUE)
![GitHub Repo stars](https://img.shields.io/github/stars/DuckyHQ0/HQLauncher)
![GitHub contributors](https://img.shields.io/github/contributors/DuckyHQ0/HQLauncher)
![GitHub License](https://img.shields.io/github/license/DuckyHQ0/HQLauncher)
![GitHub repo size](https://img.shields.io/github/repo-size/DuckyHQ0/HQLauncher)

## 📗 About

HQLauncher is a Minecraft launcher that aims to include many useful features such as:

- Instance management
- Creation of vanilla, and modded instances
- Download mod-packs & mods straight from the launcher
- Easy to use and secure account manager, with easy skin management
- Mod, shader-pack and resource-pack management inside instances
- Mod downloading straight from the launcher inside instances
- Automatic updating for the launcher, mod-packs, and mods
- And more!

![](/public/github/screenshot.png)

## 🏃‍♂️ How to Run

- Make sure you have all the [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites), and [Node.js](https://nodejs.org/en) installed.
- Download the source code from this repository.
- In the project directory, run:

```bash
npm install

npm run tauri dev
```

## 📋 Keep in Mind

This project is unstable, and in a very early version. Most of the features aren't implemented yet.

Please report any bugs inside the issues tab under this repository, or inside my [Discord](https://discord.gg/MeQwqsCHUE).

I am also open to suggestions for this project under the discussions tab, or inside my [Discord](https://discord.gg/MeQwqsCHUE).

## ⬆️ Contributing

Feel free to contribute to the development of this project. Any help is appreciated.

## 🏛️ License

All code and media in this repository is licensed under the [GNU General Public License v3.0](/LICENSE.txt).

## 🐛 Known Issues

`DRM_IOCTL_NVIDIA_GEM_ALLOC_NVKMS_MEMORY failed` and blank window when running `npm tun tauri dev` on Linux systems

- This could be an issue with Nvidia drivers and webkit2gtk
- Fix by running `WEBKIT_DISABLE_DMABUF_RENDERER=1 npm run tauri dev` or `WEBKIT_DISABLE_COMPOSITING_MODE=1 npm run tauri dev` instead of the normal dev command

## 🎨 Brand

Brand assets are avalible [here](https://github.com/DuckyHQ0/HQLauncher/tree/main/public/brand).

This project can be named by `HQLauncher` or `HQL`.

Do not claim HQL to be yours.

Do not alter the logo or use it for your own projects.
